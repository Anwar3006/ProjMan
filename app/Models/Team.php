<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    // Relationship with Users through TeamMembers pivot table
    public function members()
    {
        return $this->belongsToMany(User::class, 'team_members');
    }

    // Relationship with Project Owner (one-to-one)
    public function projectOwner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    // Relationship with Project Manager (one-to-one)
    public function projectManager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    // Relationship with Projects through ProjectTeam pivot table
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_teams', 'team_id', 'project_id');
    }
}
