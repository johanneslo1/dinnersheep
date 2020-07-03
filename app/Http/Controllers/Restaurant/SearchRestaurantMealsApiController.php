<?php


namespace App\Http\Controllers\Restaurant;


use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Presenters\MealPresetner;
use App\Presenters\RestaurantPresenter;

final class SearchRestaurantMealsApiController extends Controller
{
    public function __invoke(Restaurant $restaurant, $search)
    {
        // TODO: Hier könnte eine Meilisearch Volltext Suche hin

        return MealPresetner::collection(
            $restaurant->meals()->where('name', 'like', '%' . $search . '%')->get()
        )->only('id', 'name', 'price_formated');
    }

}
