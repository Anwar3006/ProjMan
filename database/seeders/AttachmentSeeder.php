<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttachmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //get file path
        $path = database_path("../public/seedData/attachment.json");

        //read json file
        $jsonData = file_get_contents($path);

        //decode from json to php array
        $data = json_decode($jsonData, true);

        //loop through the array and insert into database
        foreach ($data as $attachment) {
            DB::table('attachments')->insert([
                "file_url" => $attachment['fileURL'],
                "file_name" => $attachment['fileName'],
                "task_id" => $attachment['taskId'],
                "uploaded_by" => $attachment['uploadedById'],
                "created_at" => fake()->dateTimeBetween('-6 days', '+6 days'),
            ]);
        }
    }
}
