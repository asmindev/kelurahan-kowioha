<?php

namespace App\Http\Controllers;

use App\Models\Place;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaceController extends Controller
{
    //
    public function index()
    {
        $places = Place::all();
        return Inertia::render('Place.page', compact('places'));
    }
}
