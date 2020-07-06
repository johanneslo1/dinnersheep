<?php


namespace App\Http\Controllers\RestaurantVisit;


use App\Http\Controllers\Controller;
use App\Models\RestaurantVisit;

final class DeleteRestaurantVisitController extends Controller
{
    public function __invoke(RestaurantVisit $restaurantVisit)
    {
        $restaurantVisit->delete();

        return redirect(route('visits.index'))->with('success', 'Das Restaurantbesuch wurde gelöscht.');
    }
}
