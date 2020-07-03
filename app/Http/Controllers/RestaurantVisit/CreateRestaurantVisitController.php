<?php


namespace App\Http\Controllers\RestaurantVisit;


use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class CreateRestaurantVisitController extends Controller
{
    public function __invoke(Request $request)
    {

        return Inertia::render('RestaurantVisits/Create', [
            'restaurant' => $request->restaurant ? Restaurant::findOrFail($request->restaurant) : null
        ]);
    }
}
