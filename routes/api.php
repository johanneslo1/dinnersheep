<?php

use App\Http\Controllers\Restaurant\SearchRestaurantsApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware([]) // TODO: Aktuell nicht gesichert
    ->group(function () {

        Route::prefix('search')
            ->group(function () {

                Route::get('restaurants/{search}', SearchRestaurantsApiController::class);

            });


    });
