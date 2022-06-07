<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\CheckAuthenticationController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;

use App\Models\Merk;

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

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
// Route::post('register', 'App\Http\Controllers\RegisterController@register');

Route::post('logout', [LoginController::class, 'logout']);

Route::get('authenticated', [CheckAuthenticationController::class, 'testAuth']);
Route::get('is-admin', [CheckAuthenticationController::class, 'checkAdmin']);


Route::get('car/{id}', [CarController::class, 'getCar']);


Route::get('car', [Merk::class, 'carInformation']);


Route::get('favorite-id', [FavoriteController::class, 'id']);
Route::get('favorite', [FavoriteController::class, 'index']);
Route::post('favorite/store', [FavoriteController::class, 'store']);
Route::delete('favorite/destroy', [FavoriteController::class, 'destroy']);

Route::put('user', [UserController::class, 'update']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
