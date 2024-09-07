<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Citizen>
 */
class CitizenFactory extends Factory
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
            // $table->string('kk')->unique();
            // $table->foreignUuid('rt_id')->references('id')->on('r_t_s')->onDelete('cascade');

            'kk' => $this->faker->unique()->word(),
            'rt_id' => \App\Models\Rt::inRandomOrder()->first()->id
        ];
    }
}
