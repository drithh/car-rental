<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Booking_ArmadaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $kereranganElement = ['Belum Bayar', 'Sudah Bayar', 'Dibatalkan', 'Sedang Berjalan', 'Selesai'];
        return [
            'booking_id' => mt_rand(1, 200),
            'armada_id' => mt_rand(1, 100),
            'harga' => mt_rand(100, 2000) * 1000,
            'tanggal_mulai' => $this->faker->dateTimeBetween('-1 years', '-1 days'),
            'waktu_mulai' => $this->faker->time(),
            'tanggal_pengembalian' => $this->faker->dateTimeBetween('-1 years', '+4 days'),
            'waktu_pengembalian' => $this->faker->time(),
            'tanggal_harus_kembali' => $this->faker->dateTimeBetween('-1 years', '+7 days'),
            'tempat_mulai' => $this->faker->city,
            'tempat_pengembalian' => $this->faker->city,
            'durasi' => mt_rand(1, 10),
            'keterangan' => $this->faker->randomElement($kereranganElement),
        ];
    }
}
