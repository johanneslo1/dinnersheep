<?php
namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Presenters\RestaurantPresenter;
use Inertia\Inertia;

final class IndexRestaurantsController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Restaurants/Index', [
            'restaurantsPagination' => RestaurantPresenter::collection(Restaurant::paginate())
        ]);
    }
}
