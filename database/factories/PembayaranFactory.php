<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pembayaran>
 */
class PembayaranFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_booking_armada' => mt_rand(1, 300),
            'tanggal_bayar' => $this->faker->date(),
            'jumlah_bayar' => mt_rand(1000000, 10000000),
            'tipe_bayar' => $this->faker->randomElement(['Cash', 'Transfer']),
        ];
    }
}
