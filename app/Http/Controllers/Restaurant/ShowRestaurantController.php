<?php


namespace App\Http\Controllers\Restaurant;


use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Models\RestaurantVisit;
use App\Presenters\RestaurantPresenter;
use App\Presenters\RestaurantVisitPresenter;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class ShowRestaurantController extends Controller
{
    public function __invoke(Restaurant $restaurant, Request $request)
    {
        return Inertia::render('Restaurants/Show', [
            'restaurant' => RestaurantPresenter::make($restaurant),
            'restaurantVisitsPagination' => RestaurantVisitPresenter::collection(
                RestaurantVisit::where('restaurant_id', $restaurant->id)
                    ->sortable()
                    ->filter($request->all())
                    ->paginate(10)
            )
        ]);
    }
}
