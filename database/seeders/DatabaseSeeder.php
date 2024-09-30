<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        //run seeder for Users
        $this->call([
            UserSeeder::class,
            TeamSeeder::class,
            ProjectSeeder::class,
            TeamMemberSeeder::class,
            TaskSeeder::class,
            CommentSeeder::class,
            AttachmentSeeder::class,
            ProjectTeamSeeder::class
        ]);
    }
}
