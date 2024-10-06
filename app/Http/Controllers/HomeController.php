<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Content;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
        // get the 5 latest news
        $lastActivity = Activity::orderBy('created_at', 'desc')->limit(5)->get();
        $lastNews = News::orderBy('created_at', 'desc')->limit(5)->get();
        $content = Content::with('image_sliders')->get()->first();
        return Inertia::render('Home.page', [
            'lastActivity' => $lastActivity,
            'lastNews' => $lastNews,
            'content' => $content
        ]);
    }
}
