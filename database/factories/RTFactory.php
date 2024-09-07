<?php

namespace Database\Factories;

use App\Models\RW;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RT>
 */
class RTFactory extends Factory
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
            // $table->integer('number');
            // $table->foreignUuid('rw_id')->references('id')->on('r_w_s')->onDelete('cascade');

            'number' => $this->faker->numberBetween(1, 4),
            'rw_id' => RW::inRandomOrder()->first()->id

        ];
    }
}
