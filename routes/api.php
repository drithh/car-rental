<?php

use App\Http\Controllers\Api\ResetPasswordController as ApiResetPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\CheckAuthenticationController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\BookingArmadaController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\UlasanController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\XenditController;
use App\Models\Merk;
use App\Models\Ulasan;
use Illuminate\Auth\Notifications\ResetPassword;

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
Route::get('car/{id}', [CarController::class, 'getCar']);
Route::get('car/information/{id}', [CarController::class, 'getInformation']);
Route::post('car/edit/confirm', [CarController::class, 'update']);
Route::get('car/ulasan/{id}', [CarController::class, 'getUlasan']);




Route::get('favorite-id', [FavoriteController::class, 'id'])->middleware('auth:sanctum');
Route::get('favorite', [FavoriteController::class, 'index'])->middleware('auth:sanctum');
Route::post('favorite/store', [FavoriteController::class, 'store'])->middleware('auth:sanctum');
Route::delete('favorite/destroy', [FavoriteController::class, 'destroy'])->middleware('auth:sanctum');

Route::get('books', [BookingController::class, 'getAll'])->middleware('auth:sanctum');
Route::post('books/cancel', [BookingController::class, 'cancel'])->middleware('auth:sanctum');

Route::put('user', [UserController::class, 'update'])->middleware('auth:sanctum');
Route::post('booking', [BookingArmadaController::class, 'store'])->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});





Route::post('forgot-password', [ResetPasswordController::class, 'forgotPassword'])->name('password.reset');
Route::post('reset-password', [ResetPasswordController::class, 'reset']);


Route::get('email-verification', [VerificationController::class, 'verify'])->name('verification.verify');

Route::get('resend-email-verification', [VerificationController::class, 'resend'])->middleware('auth:sanctum');

Route::get('transactions', [BookingArmadaController::class, 'getTransactionPage'])->middleware('auth:sanctum');
Route::get('transactions/{id}', [BookingArmadaController::class, 'index'])->middleware('auth:sanctum');
Route::put('transactions/edit/{id}', [BookingArmadaController::class, 'update'])->middleware('auth:sanctum');

Route::get('dashboard/data', [BookingArmadaController::class, 'getPendapatan'])->middleware('auth:sanctum');;

Route::get('dashboard/data/tahunan', [BookingArmadaController::class, 'getPendapatanTahunSetiapBulan'])->middleware('auth:sanctum');
Route::get('dashboard/data/bulanan', [BookingArmadaController::class, 'getPendapatanSebulanTerakhir'])->middleware('auth:sanctum');

Route::get('dashboard/data/tipe', [BookingArmadaController::class, 'getPendapatanByTipe'])->middleware('auth:sanctum');
Route::get('dashboard/data/mobil', [CarController::class, 'getMostRent'])->middleware('auth:sanctum');


// Route::get('xendit/va/list', [XenditController::class, 'getListVa']);
Route::post('payment/create', [XenditController::class, 'createVA']);
Route::post('payment/check/{id}', [XenditController::class, 'checkVA']);
Route::post('payment/callback', [XenditController::class, 'callbackVA']);

Route::post('contact', [SupportController::class, 'store']);

Route::post('ulasan/store', [UlasanController::class, 'store']);
