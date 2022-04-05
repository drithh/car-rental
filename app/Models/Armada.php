<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Armada extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function merk()
    {
        return $this->belongsTo(Merk::class);
    }
}
