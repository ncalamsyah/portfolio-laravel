<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'project_name' => fake()->sentence(),
            'project_img' => fake()->image(),
            'project_desc' => fake()->paragraph(2, true),
            'project_client' => fake()->email()
        ];
    }
}
