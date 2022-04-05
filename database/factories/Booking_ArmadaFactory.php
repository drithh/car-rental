<?php

namespace Database\Factories;

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
        return [
            'id_booking' => mt_rand(1, 200),
            'id_armada' => mt_rand(1, 100),
            'harga' => mt_rand(1000000, 10000000),
            'tanggal_mulai' => $this->faker->date(),
            'tanggal_pengembalian' => $this->faker->date(),
            'tanggal_harus_kembali' => $this->faker->date(),
            'durasi' => mt_rand(1, 10),
            'keterangan' => $this->faker->text(),
        ];
    }
}
