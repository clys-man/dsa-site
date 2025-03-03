<?php

declare(strict_types=1);

use App\Http\Controllers\Web\Concept\ConceptController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->prefix('concepts')->name('concepts.')->group(function (): void {
    Route::get('/', [ConceptController::class, 'index'])->name('index');
    Route::get('/{id}', [ConceptController::class, 'show'])->name('show');
});
