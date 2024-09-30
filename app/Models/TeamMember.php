<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;

    //Relationship with Team
    public function team()
    {
        return $this->belongsTo(Team::class);
    }

    //Relationship with User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
