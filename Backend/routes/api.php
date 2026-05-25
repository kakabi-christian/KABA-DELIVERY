<?php

use App\Http\Controllers\api\AbonneController;
use App\Http\Controllers\api\FactureController;
use App\Http\Controllers\api\OperateurController;
use App\Http\Controllers\api\StatsController;
use App\Http\Controllers\ReclammationController; // <-- ajouté
use Illuminate\Support\Facades\Route;

// Routes pour l'authentification
Route::post('/auth/register', [OperateurController::class, 'register'])->name('auth.register');
Route::post('/auth/login', [OperateurController::class, 'login'])->name('auth.login');
Route::middleware('auth:sanctum')->post('/auth/logout', [OperateurController::class, 'logout'])->name('auth.logout');
Route::middleware('auth:sanctum')->post('/reclammations', [ReclammationController::class, 'store']);
Route::middleware('auth:sanctum')->put('/reclammations/update/{reclammations}', [ReclammationController::class, 'update']);

Route::middleware([
    'auth:sanctum',
])->prefix('admin')->group(function () {
    // Routes Abonnés
    Route::post('/abonne', [AbonneController::class, 'store']);
    Route::delete('/abonne/{abonne}', [AbonneController::class, 'destroy']);
    Route::put('/abonne/{abonne}', [AbonneController::class, 'update']);
    Route::get('/abonne', [AbonneController::class, 'index']); // liste tous les abonnés
    Route::get('/abonne/{abonne}', [AbonneController::class, 'show']); // afficher un abonné spécifique

    // Routes Factures
    Route::get('/facture/{facture}', [FactureController::class, 'show']); // afficher une facture existante
    Route::post('/facture/generer', [FactureController::class, 'genererFacture']); // créer une facture et calculer automatiquement le montant

    Route::get('/stats', [StatsController::class, 'getDashboardStats']); // créer une facture et calculer automatiquement le montant

});
