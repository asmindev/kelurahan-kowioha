<?php

namespace App\Http\Controllers;

use App\Models\Citizen;
use App\Models\Family;
use App\Models\RT;
use App\Models\RW;
use Doctrine\DBAL\Query;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class CitizenController extends Controller
{
    // invoke
    public function __invoke(Request $request)
    {
        $rws = RW::with(['rt.citizens.family'])
            ->get()
            ->map(function ($rw) {
                return [
                    'rw' => $rw->number,
                    'total_rt' => $rw->rt->count(),
                    'total_citizens' => $rw->rt->flatMap->citizens->count(),
                    'total_family' => $rw->rt->flatMap->citizens->flatMap->family->count(),
                    'rt' => $rw->rt->map(function ($rt) {
                        return [
                            'rt' => $rt->number,
                            'total_citizens' => $rt->citizens->count(),
                            'total_family' => $rt->citizens->flatMap->family->count(),
                            'citizens' => $rt->citizens->map(function ($citizen) {
                                return [
                                    'total_men' => $citizen->family->where('gender', 'laki-laki')->count(),
                                    'total_women' => $citizen->family->where('gender', 'perempuan')->count(),
                                ];
                            }),
                        ];
                    }),
                ];
            });
        // sort by rw number
        $rws = $rws->sortBy('rw')->values()->all();
        return Inertia::render("Citizen.page", compact('rws'));
    }
}
