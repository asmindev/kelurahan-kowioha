<?php

namespace Database\Factories;

use App\Models\Citizen;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Family>
 */
class FamilyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            // $table->uuid('id')->primary();
            // $table->string('name');
            // $table->enum("status", ["kepala keluarga", 'suami', "istri", "anak", "saudara"]);
            // $table->enum("gender", ["laki-laki", "perempuan"]);
            // $table->date('birth_date')->nullable();
            // $table->string('nik')->unique()->nullable();
            // $table->foreignUuid('citizen_id')->references('id')->on('citizens')->onDelete('cascade');

            'name' => $this->faker->name(),
            'status' => $this->faker->randomElement(['kepala keluarga', 'suami', 'istri', 'anak', 'saudara']),
            'gender' => $this->faker->randomElement(['laki-laki', 'perempuan']),
            'birth_date' => $this->faker->date(),
            'nik' => $this->faker->numberBetween(1000000000000000, 9999999999999999),
            'citizen_id' => Citizen::inRandomOrder()->first()->id

        ];
    }
}
