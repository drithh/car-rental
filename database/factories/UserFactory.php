<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            // 'password' => $this->faker->password(),
            'password' => '$2y$10$pR3GEI8tpJqintXfUDPbqOfGiyftGoekqTVHTCzYFeBgBq3shfRbm',
            'email' => $this->faker->unique()->safeEmail(),

            'nik' => $this->faker->nik(),
            'jenis_kelamin' => $this->faker->randomElement(['Laki-laki', 'Perempuan']),
            'tanggal_lahir' => $this->faker->date(),
            'alamat' => $this->faker->address(),
            'no_telp' => $this->faker->phoneNumber(),
            'no_wa' => $this->faker->phoneNumber(),
        ];
    }
}
