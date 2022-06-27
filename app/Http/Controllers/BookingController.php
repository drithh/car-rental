<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Booking_Armada;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookingController extends Controller
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

    public function getAll(Request $request)
    {
        $books = DB::table('booking__armadas')
            ->select(DB::raw('booking__armadas.id as booking_id'), 'bookings.tanggal_transaksi', 'bookings.booking_code', 'bookings.no_tagihan', 'armadas.id', 'merks.brand', 'merks.model', 'merks.type', 'armadas.tipe_transmisi', 'armadas.kapasitas', 'armadas.bahan_bakar', 'armadas.tahun_perolehan', 'armadas.harga_satuan', 'merks.image_link', 'armadas.harga_sewa', 'keterangan', 'booking__armadas.tanggal_mulai', 'booking__armadas.tanggal_pengembalian', 'booking__armadas.tempat_mulai', 'booking__armadas.tempat_pengembalian')

            ->join('bookings', 'bookings.id', '=', 'booking__armadas.booking_id')
            ->join('armadas', 'armadas.id', '=', 'booking__armadas.armada_id')
            ->join('merks', 'merks.id', '=', 'armadas.merk_id')
            ->where('bookings.user_id', $request->user()->id)
            ->orderBy('booking__armadas.id', 'desc')
            ->get();

        return $books;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
    public function cancel(Request $request)
    {
        // update booking armadas to cancel
        $booking = Booking_Armada::find($request->id);
        $booking->keterangan = 'Dibatalkan';
        $booking->save();
        return response()->json([
            "message" => "Booking berhasil Dibatalkan.",
            "success" => true
        ]);
    }
}
