<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pelanggan;
use App\Models\Merk;
use App\Models\Armada;
use App\Models\Booking;
use App\Models\Booking_Armada;
use App\Models\Pembayaran;
use App\Models\Ulasan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Pelanggan::factory(50)->create();
        Merk::factory(20)->create();
        Armada::factory(100)->create();
        Booking::factory(200)->create();
        Booking_Armada::factory(300)->create();
        Pembayaran::factory(300)->create();
        Ulasan::factory(300)->create();
    }
}
