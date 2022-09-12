<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Toy extends Model
{
    public function tasks()
    {
        return $this->belongsToMany(Task::class);
    }
}
