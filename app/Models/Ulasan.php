<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ulasan extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function pelanggan()
    {
        return $this->belongsTo(Pelanggan::class);
    }

    public function armada()
    {
        return $this->belongsTo(Armada::class);
    }

    public function booking_armada()
    {
        return $this->belongsTo(Booking_Armada::class);
    }

}
