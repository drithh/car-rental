<?php

namespace App\Http\Controllers;

use App\Models\Booking_Armada;
use App\Models\Ulasan;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UlasanController extends Controller
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
        $armada_id = Booking_Armada::where('id', $request->booking_armada_id)->first()->armada_id;
        $ulasan = new Ulasan();
        $ulasan->booking_armada_id = $request->booking_armada_id;
        $ulasan->ulasan = $request->ulasan;
        $ulasan->nilai = $request->rating;
        $ulasan->armada_id = $armada_id;
        $ulasan->user_id = $request->user()->id;
        $ulasan->tanggal_ulasan = Carbon::now();
        $ulasan->save();

        // change booking armada 
        $booking_armada = Booking_Armada::find($request->booking_armada_id);
        $booking_armada->keterangan = 'Selesai';
        $booking_armada->save();
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
