<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\Team;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectTeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 10; $i++) {
            DB::table('project_teams')->insert([
                [
                    'team_id' => fake()->randomElement(Team::all()->pluck('id')),
                    'project_id' => fake()->randomElement(Project::all()->pluck('id'))
                ],

            ]);
        }
    }
}
