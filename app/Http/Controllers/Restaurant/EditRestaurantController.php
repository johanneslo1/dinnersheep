<?php
namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use App\Models\Restaurant;
use App\Presenters\RestaurantPresenter;
use Inertia\Inertia;

final class EditRestaurantController extends Controller
{
    public function __invoke(Restaurant $restaurant)
    {
        return Inertia::render('Restaurants/Edit', [
            'restaurant' => RestaurantPresenter::make($restaurant)
        ]);
    }
}
