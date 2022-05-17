<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Favorite extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function armada()
    {
        return $this->belongsTo(Armada::class);
    }


    public function id(Request $request)
    { 
        return $this->select('armada_id')->where('user_id', $request->user()->id)->get();
    }

    public function index(Request $request)
    { 
        return $this->select('armadas.id', DB::raw("CONCAT(brand,' ',model) AS nama"), 'type', 'tipe_transmisi', 'kapasitas', 'harga_sewa')->where('user_id', $request->user()->id)->join('armadas', 'armadas.id', '=', 'armada_id')->join('merks', 'merks.id', '=', 'merk_id')->get();
    }
}
