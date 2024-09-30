<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // Relationship to Users through TaskAssignment
    public function assignees()
    {
        return $this->belongsToMany(User::class, 'task_assignments');
    }

    // Realtionship to Users
    public function reporter()
    {
        return $this->belongsTo(User::class, 'reporter_id');
    }

    // Relationship to Comments
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    // Relationship to Comments
    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
}
