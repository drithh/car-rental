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

    public function getInformation($id)
    {
        $car = Merk::select('brand', 'model', 'type', 'tanggal_pajak', 'no_polisi',  'kapasitas', 'bahan_bakar', 'tipe_transmisi', 'tahun_perolehan', 'harga_satuan', 'harga_sewa')->join('armadas', 'merks.id', '=', 'merk_id')->where('armadas.id', $id)->get();
        return $car;
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
    public function update(Request $request)
    {
        // validate request
        $this->validate($request, [
            'carInformation' => 'required',
        ]);


        // get merks id
        $merk_id = DB::table('armadas')->select('merk_id')->where('id', $request->id)->get()[0]->merk_id;

        DB::table('merks')->where('merks.id', $merk_id)->update(['merks.brand' => $request->carInformation['brand'], 'merks.model' => $request->carInformation['model'], 'merks.type' => $request->carInformation['type']]);


        DB::table('armadas')->where('armadas.id', $request->id)->update(['armadas.tanggal_pajak' => $request->carInformation['tanggal_pajak'], 'armadas.no_polisi' => $request->carInformation['no_polisi'], 'armadas.kapasitas' => $request->carInformation['kapasitas'], 'armadas.bahan_bakar' => $request->carInformation['bahan_bakar'], 'armadas.tipe_transmisi' => $request->carInformation['tipe_transmisi'], 'armadas.tahun_perolehan' => $request->carInformation['tahun_perolehan'], 'armadas.harga_satuan' => $request->carInformation['harga_satuan'], 'armadas.harga_sewa' => $request->carInformation['harga_sewa']]);

        return response()->json(['message' => 'Data berhasil diubah']);
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

    public function getUlasan($id)
    {
        $ulasan = DB::table('ulasans')
            ->select('ulasans.id', 'ulasans.ulasan', 'ulasans.nilai', 'ulasans.created_at', 'users.name')
            ->orderBy('ulasans.id', 'asc')
            ->join('users', 'users.id', '=', 'ulasans.user_id')
            ->where('armada_id', $id)
            ->get();
        return $ulasan;
    }
}
