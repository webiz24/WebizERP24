<?php

use Illuminate\Support\Facades\Route;

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

// Redirect root to dashboard
Route::get('/', function () {
    return redirect()->route('dashboard');
});

