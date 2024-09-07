<?php

namespace App\Http\Controllers;

use App\Models\Administration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdministrationController extends Controller
{
    // invoke
    public function __invoke(Request $request)
    {
        // get with terms
        $administrations = Administration::with('terms')->get();

        return Inertia::render('Administration.page', [
            'data' => $administrations
        ]);
    }
}
