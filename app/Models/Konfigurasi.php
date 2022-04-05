<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Konfigurasi extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    const CREATED_AT = 'creation_date';
    const UPDATED_AT = 'updated_date';
}
