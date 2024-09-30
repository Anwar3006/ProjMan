<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //get path to json file
        $path = database_path('../public/seedData/comment.json');

        //read json file
        $jsonData = file_get_contents($path);

        //decode from json to php array
        $data = json_decode($jsonData, true);

        //loop through data and insert into database
        foreach ($data as $comment) {
            DB::table('comments')->insert([
                "text" => $comment['text'],
                "task_id" => $comment['taskId'],
                "user_id" => $comment['userId'],
                "created_at" => fake()->dateTimeBetween('-6 days', '+6 days'),
            ]);
        }
    }
}
