<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;


class CheckAuthenticationController extends Controller
{
    public function testAuth(Request $request)
    { 
         if ($request->user('sanctum')) {
                return "auth";
          } else {
                return "guest";
          }
    }

    public function checkAdmin(Request $request)
    { 
         if ($request->user('sanctum')) {
                return $request->user()->is_admin;
          } 
    }

}
