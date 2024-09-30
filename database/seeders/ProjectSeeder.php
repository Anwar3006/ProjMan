<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //path to json file
        $path = database_path('../public/seedData/project.json');

        //read the json file
        $jsonData = file_get_contents($path);

        //decode from json to php array
        $data = json_decode($jsonData, true);

        //loop through the array and insert into database
        foreach ($data as $project) {
            DB::table('projects')->insert([
                "title" => $project['title'],
                "description" => $project['description'],
                "start_date" => fake()->dateTimeBetween('-6 days', '+6 days'),
                "deadline" => fake()->dateTimeBetween('now', '+1 year'),
            ]);
        }
    }
}
