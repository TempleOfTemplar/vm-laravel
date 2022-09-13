<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Task extends Model
{
    public function toys()
    {
        return $this->belongsToMany(Toy::class, 'task_toy');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'task_category');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
}
