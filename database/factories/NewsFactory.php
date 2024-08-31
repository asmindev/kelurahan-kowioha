<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
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
            'title' => $this->faker->sentence(3),
            'content' => $this->faker->paragraph(10),
            'image' => $this->faker->imageUrl(),
            'is_published' => $this->faker->boolean(),
            'author' => $this->faker->name(),
            'slug' => $this->faker->slug(),
        ];
    }
}
