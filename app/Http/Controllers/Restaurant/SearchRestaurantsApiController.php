<?php


namespace App\Http\Controllers\Restaurant;


use App\Http\Controllers\Controller;
use App\Models\Restaurant;
use App\Presenters\RestaurantPresenter;

final class SearchRestaurantsApiController extends Controller
{
    public function __invoke($search)
    {
        // TODO: Hier konnte eine Meilisearch Volltext Suche hin

        return RestaurantPresenter::collection(
            Restaurant::where('name', 'like', '%' . $search . '%')->get()
        )->only('id', 'name', 'address');
    }
}
