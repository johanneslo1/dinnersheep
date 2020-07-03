<?php

use App\Http\Controllers\Meal\SearchMealsApiController;
use App\Http\Controllers\Restaurant\SearchRestaurantMealsApiController;
use App\Http\Controllers\Restaurant\SearchRestaurantsApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware([]) // TODO: Aktuell nicht gesichert
    ->group(function () {

        Route::prefix('search')
            ->group(function () {

                Route::prefix('restaurants')
                    ->group(function () {
                        Route::get('{search}', SearchRestaurantsApiController::class);
                        Route::get('{restaurant}/meals/{search}', SearchRestaurantMealsApiController::class);

                    });

                Route::get('meals/{search}', SearchMealsApiController::class);

            });


    });
