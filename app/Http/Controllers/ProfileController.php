<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\Staff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $content = Content::get()->first();
        $staff = Staff::all();
        return Inertia::render('Profile.page', [
            'content' => $content,
            'staff' => $staff
        ]);
    }
}
