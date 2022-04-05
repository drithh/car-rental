<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking_Armada extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function armada()
    {
        return $this->belongsTo(Armada::class);
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function pembayaran()
    {
        return $this->hasOne(Pembayaran::class);
    }

}
