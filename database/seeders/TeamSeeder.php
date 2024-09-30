<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //get path to json file
        $path = database_path("../public/seedData/team.json");

        //read file content
        $jsonData = file_get_contents($path);

        //decode from json to php array
        $data = json_decode($jsonData, true);

        //loop through data and insert into database
        foreach ($data as $team) {
            DB::table('teams')->insert([
                "name" => $team['teamName'],
                "owner_id" => $team['productOwnerUserId'],
                "manager_id" => $team['projectManagerUserId'],
                "created_at" => now()
            ]);
        }
    }
}
