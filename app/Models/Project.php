<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Support\Facades\Cache;

class Project extends Model
{
    use HasFactory;

    // Project Relationship with Teams through the ProjectTeam table
    public function teams()
    {
        return $this->belongsToMany(Team::class, 'project_teams');
    }

    /**
     * Get the members of the project through ProjectTeam and TeamMember.
     */
    public function members()
    {
        return $this->hasManyThrough(
            User::class,       // Target model: User
            TeamMember::class, // Intermediate model: TeamMember
            'team_id',         // Foreign key on TeamMember linking to Team
            'id',         // Foreign key on TeamMember linking to User
            'id',              // Local key on Project to match with TeamMember
            'id'               // Local key on User
        );
    }


    // Get tasks assigned to users in teams associated with this project
    public function tasks()
    {
        return Task::whereHas('assignees', function ($query) {
            $query->whereHas('teams', function ($query) {
                $query->whereHas('projects', function ($query) {
                    $query->where('projects.id', $this->id);
                });
            });
        });
    }

    protected static function booted()
    {
        //Clearing cache if a project is created or update
        static::saved(function () {
            Cache::forget('latestProjects');
        });

        //Clear cache if a proejct is deleted
        static::deleted(function () {
            Cache::forget('latestProjects');
        });
    }
}
