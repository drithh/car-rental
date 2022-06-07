<?php

namespace App\Http\Controllers;

use App\Models\Merk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return DB::table('cars')
            ->select('armadas.id', DB::raw("CONCAT(brand,' ',model) AS nama"), 'type', 'tipe_transmisi', 'kapasitas', 'harga_sewa')
            ->orderBy('armadas.id', 'asc')
            ->join('armadas', 'cars.armada_id', '=', 'armadas.id')
            ->where('user_id', $request->user()->id)
            ->join('merks', 'merks.id', '=', 'merk_id')->get();
    }

    public function id(Request $request)
    {
        return DB::table('cars')->select('armada_id')->where('user_id', $request->user()->id)->get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = $request->user()->id;
        DB::insert('insert into cars (user_id, armada_id) values (?, ?)', [$user_id, $request->armada_id]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function show(Merk $car)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Merk $car)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        DB::delete('delete from cars where user_id = ? and armada_id = ?', [$request->user()->id, $request->armada_id]);
    }

    public function getCar($id)
    {
        $car = Merk::select('armadas.id', DB::raw("CONCAT(brand,' ',model) AS nama"), 'type', 'tipe_transmisi', 'kapasitas', 'harga_sewa')->join('armadas', 'merks.id', '=', 'merk_id')->where('armadas.id', $id)->get();
        return $car;
    }
}
