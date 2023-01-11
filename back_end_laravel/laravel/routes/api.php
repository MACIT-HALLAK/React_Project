<?php

use App\Http\Controllers\Admin\usersController;
use App\Http\Controllers\Admin\derslerController;
use App\Http\Controllers\Admin\loginController;
use App\Http\Controllers\Admin\sorularController;
use App\Http\Controllers\Admin\dersGetirController;
use App\Http\Controllers\Admin\cartController;
use App\Http\Controllers\Admin\dersExampleController;
use App\Http\Controllers\Admin\puanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//kullanıcı eklemek için bir API olşturduk.
Route::post('/users', [usersController::class, 'user']);
//Login yapmak için bir API olşturduk.
Route::post('/users/{email}/{password}', [loginController::class, 'login']);
//Dersler eklemek için bir API olşturduk.
Route::post('/derslers', [derslerController::class, 'dersEkle']);
//Sorular eklemek için bir API olşturduk.
Route::post('/sorulars', [sorularController::class, 'soruEkle']);
//Dersleri getirmek için bir API olşturduk.
Route::get('/derslers', [dersGetirController::class, 'dersGetir']);
//Login yapmak için bir API olşturduk.
Route::get('/users', [usersController::class, 'userArama']);
//Login yapmış kullanıcının bilgilerini getiriyor.
Route::get('/derslers', [cartController::class, 'cartGetir']);
//Soruları getirmek için bir API olşturduk.
Route::get('/sorulars', [dersExampleController::class, 'sorularGetir']);
//Puanlama sistemi eklemek için bir API olşturduk.
Route::post('/puans', [puanController::class, 'puanlama']);
//Login yapan kullnıcı puanı getirmek için bir API olşturduk.
Route::get('/puans/{user_id}', [puanController::class, 'puanGetir']);
//kullancının puanı güncellemek için bir API oluşturduk.
Route::put('/puans/{user_id}/{puan}', [puanController::class, 'puanUpdate']);

