<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ProfileSettingController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/track-visit', [VisitorController::class, 'track']);
Route::get('/profile', [ProfileSettingController::class, 'index']);
