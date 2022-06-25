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
            'booking_armada_id' => mt_rand(1, 300),
            'tanggal_bayar' => $this->faker->date(),
            'jumlah_bayar' => mt_rand(1000000, 10000000),
            'external_id' => $this->faker->regexify('[a-z0-9]{13}'),
            'virtual_account' => $this->faker->regexify('[0-9]{15}'),
            'payment_channel' => $this->faker->randomElement(['BNI', 'BRI', 'BCA', 'Mandiri', 'BSI', 'CIMB']),
        ];
    }
}
