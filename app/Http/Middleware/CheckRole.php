<?php

namespace App\Http\Controllers\Middleware;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Closure;

class CheckRole extends Controller
{
    public function handle($request, Closure $next, ...$roles) {
        if (in_array($request->user(), $roles)) {
            return $next($request);
        }
        return 
    }
}
