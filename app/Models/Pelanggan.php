<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelanggan extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $hidden = [
        'password',
    ];

    public function booking()
    {
        return $this->hasMany(Booking::class);
    }

    public function ulasan()
    {
        return $this->hasMany(Ulasan::class);
    }
}
