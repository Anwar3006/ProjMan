<?php

namespace Database\Seeders;

use App\Models\Team;
use App\Models\TeamMember;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TeamMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TeamMember::factory(20)->create([
            "user_id" => User::factory(),
            "team_id" => fake()->randomElement([1, 2, 3, 4, 5]),
            "role" => fake()->randomElement(['owner', 'manager', 'member']),
            "joined_at" => now(),
        ]);
    }
}
