<?php

use App\Http\Controllers\Account\ShowAccountSettingsController;
use App\Http\Controllers\Meal\CreateMealController;
use App\Http\Controllers\Meal\EditMealController;
use App\Http\Controllers\Meal\IndexMealsController;
use App\Http\Controllers\Meal\StoreMealController;
use App\Http\Controllers\Meal\UpdateMealController;
use App\Http\Controllers\Restaurant\CreateRestaurantController;
use App\Http\Controllers\Restaurant\EditRestaurantController;
use App\Http\Controllers\Restaurant\IndexRestaurantsController;
use App\Http\Controllers\Restaurant\ShowRestaurantController;
use App\Http\Controllers\Restaurant\StoreRestaurantController;
use App\Http\Controllers\Restaurant\UpdateRestaurantController;
use App\Http\Controllers\RestaurantVisit\CreateRestaurantVisitController;
use App\Http\Controllers\ShowHomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



Route::middleware(['throttle', 'auth'])
    ->group(function () {
        Route::get('', ShowHomeController::class);

        Route::prefix('meals')
            ->name('meals.')
            ->group(function () {
                Route::get('', IndexMealsController::class)->name('index');
                Route::get('create', CreateMealController::class);
                Route::get('{meal}/edit', EditMealController::class);
                Route::post('', StoreMealController::class);
                Route::patch('{meal}', UpdateMealController::class);

            });

        Route::prefix('restaurants')
            ->name('restaurants.')
            ->group(function () {
                Route::get('', IndexRestaurantsController::class)->name('index');
                Route::get('create', CreateRestaurantController::class);
                Route::get('{restaurant}', ShowRestaurantController::class);
                Route::get('{restaurant}/edit', EditRestaurantController::class);
                Route::post('', StoreRestaurantController::class);
                Route::patch('{restaurant}', UpdateRestaurantController::class);


            });


        Route::prefix('visits')
            ->name('visits.')
            ->group(function () {
                Route::get('', IndexRestaurantsController::class)->name('index');
                Route::get('create', CreateRestaurantVisitController::class);
                Route::get('{restaurantVisit}/edit', EditRestaurantController::class);
                Route::post('', StoreRestaurantController::class);
                Route::patch('{restaurantVisit}', UpdateRestaurantController::class);

            });


        Route::prefix('account')
            ->group(function () {
                Route::get('settings', ShowAccountSettingsController::class);
            });
    });



Route::namespace('App\Http\Controllers')->group(function () {
    Auth::routes();
});


