<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Concept extends Model
{
    /** @use HasFactory<\Database\Factories\ConceptFactory> */
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'progress', 'steps', 'time', 'completed'
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($concept) {
            $concept->slug = Str::slug($concept->title);
        });
    }
}

