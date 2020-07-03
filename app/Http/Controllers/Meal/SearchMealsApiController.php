<?php


namespace App\Http\Controllers\Meal;


use App\Models\Meal;
use App\Models\Restaurant;
use App\Presenters\MealPresetner;
use App\Presenters\RestaurantPresenter;
use Illuminate\Http\Request;

class SearchMealsApiController
{
    public function __invoke(Request $request, $search)
    {
        // TODO: Hier könnte eine Meilisearch Volltext Suche hin

        $builder = Meal::where('name', 'like', '%' . $search . '%');

        if($request->restaurant_id) {
            // Als GET-Paramter die restaurant_id

            $restaurant = Restaurant::findOrFail($request->restaurant_id);

            $builder = $builder->where('restaurant_id', $restaurant->id);
        }

        return MealPresetner::collection(
            $builder->get()
        )->only('id', 'name');
    }
}
