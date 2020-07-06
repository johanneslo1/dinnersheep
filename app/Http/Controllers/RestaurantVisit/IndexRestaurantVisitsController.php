<?php


namespace App\Http\Controllers\RestaurantVisit;


use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Models\RestaurantVisit;
use App\Presenters\RestaurantPresenter;
use App\Presenters\RestaurantVisitPresenter;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class IndexRestaurantVisitsController extends Controller
{
    public function __invoke(Request $request)
    {

//        with(['meals' => function($query){
//            $query->sum('price');
//        }])

        return Inertia::render('RestaurantVisits/Index', [
            'restaurantVisitsPagination' => RestaurantVisitPresenter::collection(
                RestaurantVisit::sortable()->filter($request->all())->paginate()
            )->except('meals')
        ]);
    }
}
