<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskAssignment extends Model
{
    use HasFactory;

    //Relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //Relationship with Task
    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
