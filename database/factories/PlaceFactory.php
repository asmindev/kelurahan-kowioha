<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Place>
 */
class PlaceFactory extends Factory
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
            // $table->string('name');
            // $table->string('address');
            // $table->string('image');
            // $table->string('description');
            // $table->string('latitude');
            // $table->string('longitude');
            // $table->enum('type', ['wisata', 'sejarah']);

            'name' => $this->faker->sentence(),
            'address' => $this->faker->sentence(),
            'image' => $this->faker->imageUrl(),
            'description' => $this->faker->paragraph(),
            'latitude' => $this->faker->latitude(),
            'longitude' => $this->faker->longitude(),
            'type' => $this->faker->randomElement(['wisata', 'sejarah']),
        ];
    }
}
