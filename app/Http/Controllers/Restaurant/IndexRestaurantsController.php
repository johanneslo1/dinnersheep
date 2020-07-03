<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Presenters\RestaurantPresenter;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class IndexRestaurantsController extends Controller
{
    public function __invoke(Request $request)
    {
        $pagination = $request->search
            ? Restaurant::where('name', 'like', '%' . $request->search . '%')->sortable()->filter($request->all())->paginate()
            : Restaurant::sortable()->filter($request->all())->paginate();


        return Inertia::render('Restaurants/Index', [
            'restaurantsPagination' => RestaurantPresenter::collection($pagination)
        ]);
    }
}
