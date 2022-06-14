<?php

namespace App\Http\Controllers;

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
    public function index()
    {
        //
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
        //
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
}
