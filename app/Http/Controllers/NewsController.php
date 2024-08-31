<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    //
    public function index()
    {
        $news = News::orderBy('created_at', 'desc')->get();
        return Inertia::render('News.page', compact('news'));
    }

    public function show(News $news)
    {
        // get the 5 latest news
        $last = News::orderBy('created_at', 'desc')->limit(5)->get();
        return Inertia::render('News.show', [
            'news' => $news,
            'last' => $last
        ]);
    }
}
