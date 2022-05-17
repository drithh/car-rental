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
            'booking_armada_id' => mt_rand(1, 300),
            'armada_id' => mt_rand(1, 100),
            'user_id' => mt_rand(1, 20),
            'nilai' => mt_rand(1, 5),
            'ulasan' => $this->faker->text(),
            'tanggal_ulasan' => $this->faker->date(),
        ];
    }
}
