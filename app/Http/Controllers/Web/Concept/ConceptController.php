<?php

namespace App\Http\Controllers\Web\Concept;

use App\Http\Controllers\Controller;
use App\Models\Concept;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ConceptController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $concepts = Concept::query()->paginate();

        return Inertia::render('concept/index', [
            'concepts' => $concepts
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $concept = Concept::query()->where('slug', $id)->first();

        abort_if(!$concept, 404);

        return Inertia::render('concept/show', [
            'concept' => $concept
        ]);
    }
}
