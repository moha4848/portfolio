<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

use App\Models\Visitor;
use App\Models\ProfileSetting;
use App\Http\Controllers\ProfileSettingController;

Route::get('/dashboard', function () {
    return view('dashboard', [
        'visitors' => Visitor::orderBy('created_at', 'desc')->get(),
        'visitsCount' => Visitor::count(),
        'settings' => ProfileSetting::pluck('value', 'key')
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/dashboard/settings', [ProfileSettingController::class, 'update'])->middleware(['auth'])->name('settings.update');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
