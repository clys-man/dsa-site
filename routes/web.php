<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('welcome'))->name('home');

Route::middleware(['auth', 'verified'])->group(function (): void {
    Route::get('dashboard', fn () => Inertia::render('dashboard'))->name('dashboard');
    Route::get('concepts', fn () => Inertia::render('concept/index'))->name('concepts');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
