<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

final class Concept extends Model
{
    /** @use HasFactory<\Database\Factories\ConceptFactory> */
    use HasFactory;

    protected $fillable = [
        'title', 'slug', 'description', 'progress', 'time', 'completed',
    ];

    protected static function boot(): void
    {
        parent::boot();

        self::creating(function ($concept): void {
            $concept->slug = Str::slug($concept->title);
        });
    }
}
