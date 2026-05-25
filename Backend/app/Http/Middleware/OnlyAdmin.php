<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class OnlyAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $user = $request->user();

        if (! $user || $user->role !== 'administrateur') {
            return response()->json([
                'message' => 'Accès refusé. Cette action nécessite des privilèges administrateur.',
            ], 403);
        }

        return $next($request);
    }
}
