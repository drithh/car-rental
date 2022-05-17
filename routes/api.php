<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\CheckAuthenticationController;
use Illuminate\Support\Facades\Auth;

use App\Models\Merk;
use App\Models\Favorite;

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




Route::get('car', [Merk::class, 'carInformation']);

Route::get('favorite-id', [Favorite::class, 'id']);
Route::get('favorite', [Favorite::class, 'index']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


