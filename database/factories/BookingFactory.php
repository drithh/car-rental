<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'id_pelanggan' => mt_rand(1, 50),
            'tanggal_transaksi' => $this->faker->date(),
            'booking_code' => $this->faker->uuid(),
            'no_tagihan' => $this->faker->regexify('[A-Z]{5}[0-4]{3}'),
        ];
    }
}
