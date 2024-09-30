<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTeam extends Model
{
    use HasFactory;

    // Define the relationships

    // A project-team relationship belongs to a project
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // A project-team relationship belongs to a team
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
