<?php


namespace App\Http\Controllers\RestaurantVisit;


use App\Http\Controllers\Controller;
use App\Http\Requests\RestaurantVisitStoreRequest;
use App\Models\Restaurant;
use App\Models\RestaurantVisit;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

final class StoreRestaurantVisitController extends Controller
{
    public function __invoke(RestaurantVisitStoreRequest $request)
    {
        $visit = RestaurantVisit::create([
            'restaurant_id' => $request->restaurant_id,
            'user_id' => auth()->id(),
            'visit_date' => Carbon::parse($request->visit_date)
        ]);

        if($meals = $request->meals) {
            collect($meals)->each(function ($meal) use ($visit) {

                if(!isset($meal['id']))
                    return;

                DB::table('restaurant_visit_meal')->insert([
                    'restaurant_visit_id' => $visit->id,
                    'meal_id' => $meal['id']
                ]);
            });
        }

        return redirect(route('restaurants.show', $request->restaurant_id))->with('success', 'Der Besuch wurde gespeichert.');

    }
}
