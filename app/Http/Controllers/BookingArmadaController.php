<?php

namespace App\Http\Controllers;

use App\Models\Booking_Armada;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BookingArmadaController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index($id)
  {
    $booking = DB::table('booking__armadas')
      ->select(DB::raw('booking__armadas.id as booking_armada_id'), 'booking__armadas.*', 'armadas.*')
      ->join('armadas', 'booking__armadas.armada_id', '=', 'armadas.id')
      ->where('booking__armadas.id', $id)
      ->get();
    return response()->json([
      'success' => true,
      'order' =>  $booking,
    ]);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    if (!$request->user()) {
      return response()->json([
        'success' => false,
        'message' => 'Kamu harus login untuk melakukan booking.'
      ], 401);
    }
    $string = Carbon::now()->timestamp . $request->user()->id;
    $bookingId = DB::table('bookings')->insertGetId([
      'user_id' => $request->user()->id,
      'tanggal_transaksi' => Carbon::now(),
      'booking_code' => Str::orderedUuid(),
      'no_tagihan' => $string
    ]);

    $car = DB::table('armadas')
      ->select(DB::raw("CONCAT(brand,' ',model) AS nama"), 'harga_sewa', 'tipe_transmisi', 'kapasitas', 'harga_sewa')
      ->join('merks', 'merks.id', '=', 'merk_id')
      ->where('armadas.id', $request->armada_id)->get();

    DB::table('booking__armadas')->insert([
      'booking_id' => $bookingId,
      'armada_id' => $request->armada_id,
      'harga' => $car[0]->harga_sewa,
      'tanggal_mulai' => $request->tanggal_mulai,
      'waktu_mulai' => $request->waktu_mulai,
      'tanggal_pengembalian' => $request->tanggal_selesai,
      'waktu_pengembalian' => $request->waktu_selesai,
      'tanggal_harus_kembali' => $request->tanggal_harus_kembali,
      'tempat_mulai' => $request->tempat_mulai,
      'tempat_pengembalian' => $request->tempat_pengembalian,
      'durasi' => $request->durasi,
      'keterangan' => 'Belum Bayar',
    ]);

    return response()->json([
      "message" => "Booking berhasil.",
      "success" => true
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    // update keterangan column
    $booking = Booking_Armada::find($id);

    $booking->keterangan = $request->keterangan;
    $booking->save();

    return response()->json([
      "message" => "Booking berhasil diupdate.",
      "success" => true
    ]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }

  public function getPendapatan()
  {
    $totalUser = DB::table('users')->count();
    $totalBooking = Booking_Armada::count();

    $pendapatan = DB::table('booking__armadas')
      ->select(DB::raw("SUM(harga) AS pendapatan"))
      ->where('Keterangan', '=', 'Selesai')
      ->get();
    return response()->json([
      "message" => "Ambil Data berhasil.",
      "success" => true,
      "totalUser" => $totalUser,
      "totalBooking" => $totalBooking,
      "pendapatan" => (int) ($pendapatan[0]->pendapatan / 1000)
    ]);
  }

  public function getPendapatanTahunSetiapBulan()
  {
    $tahun = Carbon::now()->year;

    $pendapatan = DB::table('booking__armadas')
      ->select(DB::raw("SUM(harga) AS pendapatan"), DB::raw("MONTH(tanggal_mulai) AS bulan"))
      ->where('Keterangan', '=', 'Selesai')
      ->whereYear('tanggal_mulai', '=', $tahun)
      ->groupBy('bulan')
      ->get();

    $lastYear = DB::table('booking__armadas')
      ->select(DB::raw("SUM(harga) AS pendapatan"), DB::raw("MONTH(tanggal_mulai) AS bulan"))
      ->where('Keterangan', '=', 'Selesai')
      ->whereYear('tanggal_mulai', '=', $tahun - 1)
      ->groupBy('bulan')
      ->get();

    $pendapatan = $lastYear->merge($pendapatan);

    $pendapatan = $pendapatan->slice($pendapatan->count() - 12, $pendapatan->count() - 1);



    $months = array(
      1 => 'Jan',
      2 => 'Feb',
      3 => 'Mar',
      4 => 'Apr',
      5 => 'Mei',
      6 => 'Jun',
      7 => 'Jul',
      8 => 'Agu',
      9 => 'Sep',
      10 => 'Okt',
      11 => 'Nov',
      12 => 'Des'
    );

    foreach ($pendapatan as $key => $value) {
      $pendapatan[$key]->bulan = $months[$value->bulan];
    }

    foreach ($pendapatan as $key => $value) {
      $pendapatan[$key]->pendapatan = (int) ($value->pendapatan / 1000);
    }

    return response()->json([
      "message" => "Ambil Data berhasil.",
      "success" => true,
      "pendapatan" => $pendapatan,
    ]);
  }

  public function getPendapatanByTipe()
  {
    $pendapatan = DB::table('booking__armadas')
      ->select(DB::raw("SUM(harga) AS pendapatan"), 'type')
      ->join('armadas', 'armadas.id', '=', 'armada_id')
      ->join('merks', 'merks.id', '=', 'merk_id')
      ->where('Keterangan', '=', 'Selesai')
      ->groupBy('type')
      ->get();

    foreach ($pendapatan as $key => $value) {
      $pendapatan[$key]->pendapatan = (int) ($value->pendapatan / 1000);
    }

    return response()->json([
      "message" => "Ambil Data berhasil.",
      "success" => true,
      "pendapatan" => $pendapatan,
    ]);
  }

  public function getPendapatanSebulanTerakhir()
  {
    $last30Days = Carbon::now()->subDays(30);

    $pendapatan = DB::table('booking__armadas')
      ->select(DB::raw("harga AS pendapatan"))
      ->where('Keterangan', '=', 'Selesai')
      ->where('tanggal_mulai', '>=', $last30Days)
      ->get();

    foreach ($pendapatan as $key => $value) {
      $pendapatan[$key]->pendapatan = (int) ($value->pendapatan / 1000);
    }


    return response()->json([
      "message" => "Ambil Data berhasil.",
      "success" => true,
      "pendapatan" => $pendapatan,
    ]);
  }

  public function getTransactionPage(Request $request)
  {
    // if (!$request->user()) {
    //     return response()->json([
    //         'success' => false,
    //         'message' => 'Kamu harus login untuk melakukan booking.'
    //     ], 401);
    // } else if (!$request->user()->isAdmin) {
    //     return response()->json([
    //         'success' => false,
    //         'message' => 'Kamu harus login sebagai admin untuk melakukan booking.'
    //     ], 401);
    // }
    $bookings = DB::table('bookings')
      ->select('booking__armadas.id', 'tanggal_transaksi', 'users.name', 'harga_sewa', 'keterangan', DB::raw("CONCAT(brand,' ',model) AS nama"))
      ->join('users', 'users.id', '=', 'bookings.user_id')
      ->join('booking__armadas', 'booking__armadas.booking_id', '=', 'bookings.id')
      ->join('armadas', 'armadas.id', '=', 'booking__armadas.armada_id')
      ->join('merks', 'merks.id', '=', 'armadas.merk_id')
      ->orderBy('booking__armadas.id', 'desc')
      ->paginate(15);

    return response()->json([
      "success" => true,
      "result" => $bookings
    ]);
  }
}
