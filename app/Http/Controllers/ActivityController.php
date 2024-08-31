<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivityController extends Controller
{
    //
    public function index()
    {
        $activity = Activity::orderBy('created_at', 'desc')->get();
        return Inertia::render('Activity.page', compact('activity'));
    }

    public function show(Activity $activity)
    {
        return Inertia::render('Activity.show', compact('activity'));
    }
}
