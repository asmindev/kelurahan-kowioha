<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\AdministrationController;
use App\Http\Controllers\CitizenController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OrgController;
use App\Http\Controllers\PlaceController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/struktur-organisasi', OrgController::class)->name('org');

Route::get('/berita', [NewsController::class, 'index'])->name('news');
Route::get('/berita/{news:slug}', [NewsController::class, 'show'])->name('news.show');

Route::get('/aktivitas', [ActivityController::class, 'index'])->name('activity');

// places
Route::get('/lokasi', [PlaceController::class, 'index'])->name('places');

// Profile
Route::get('/profil-kelurahan', ProfileController::class)->name('profile');

// pelayanan
Route::get('/pelayanan', AdministrationController::class)->name('surat');
Route::get('/penduduk', CitizenController::class)->name('citizen');
