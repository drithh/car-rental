<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Merk extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function armada()
    {
        return $this->hasMany(Armada::class);
    }

    public function carInformation()
    {
        $car = Merk::select('armadas.id', DB::raw("CONCAT(brand,' ',model) AS nama"), 'type', 'tipe_transmisi', 'kapasitas', 'harga_sewa')->join('armadas', 'merks.id', '=', 'merk_id')->get();
        return $car;
    }
}
