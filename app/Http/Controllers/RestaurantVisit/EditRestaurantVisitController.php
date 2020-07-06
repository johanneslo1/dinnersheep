<?php


namespace App\Http\Controllers\RestaurantVisit;


use App\Http\Controllers\Controller;
use App\Models\RestaurantVisit;
use App\Presenters\RestaurantVisitPresenter;
use Inertia\Inertia;

final class EditRestaurantVisitController extends Controller
{
    public function __invoke(RestaurantVisit $restaurantVisit)
    {
        return Inertia::render('RestaurantVisits/Edit', [
            'restaurantVisit' => RestaurantVisitPresenter::make($restaurantVisit)->except('costs')
        ]);
    }
}
