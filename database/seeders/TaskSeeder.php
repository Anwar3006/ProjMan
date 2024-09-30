<?php

namespace Database\Seeders;

use App\Models\Task;
use App\Models\TaskAssignment;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //get path to json file
        $path = database_path("../public/seedData/task.json");

        //read file content
        $jsonData = file_get_contents($path);

        //decode from json to php array
        $data = json_decode($jsonData, true);

        //loop through data and insert into database
        foreach ($data as $task) {
            $task = Task::create([
                "name" => $task['title'],
                "description" => $task['description'],
                "status" => $task['status'],
                "priority" => $task['priority'],
                "tags" => $task['tags'],
                "start_date" => now(),
                "due_date" => $task['dueDate'],
                "project_id" => $task['projectId'],
                "reporter_id" => fake()->randomElement(User::all()->pluck('id')),
            ]);

            //get two random users and attach the newly created task to them
            $users = User::all()->random(2);
            $task->assignees()->attach($users);
        }
    }
}
