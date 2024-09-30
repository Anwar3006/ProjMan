<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    // Relationship with tasks through task_assignments pivot table
    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'task_assignments');
    }

    // Relationship with projects through project_team pivot table
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_team');
    }

    // Relationship with teams through team_members pivot table
    public function teams()
    {
        return $this->belongsToMany(Team::class, 'team_members');
    }

    // Relationship with attachments through Attachments table
    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    // Relationship with comments through comments table
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
