<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ulasan>
 */
class UlasanFactory extends Factory
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
            'id_armada' => mt_rand(1, 100),
            'id_pelanggan' => mt_rand(1, 50),
            'nilai' => mt_rand(1, 5),
            'ulasan' => $this->faker->text(),
            'tanggal_ulasan' => $this->faker->date(),
            //
        ];
    }
}
