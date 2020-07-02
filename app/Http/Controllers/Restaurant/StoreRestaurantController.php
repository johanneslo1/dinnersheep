<?php
namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Requests\RestaurantStoreRequest;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class
StoreRestaurantController extends Controller
{
    public function __invoke(RestaurantStoreRequest $request)
    {
        $restaurant = Restaurant::create([
            'name' => $request->name,
        ]);

        $restaurant->address()->create([
            'street' => $request->street,
            'street_number' => $request->street_number,
            'city' => $request->city,
            'postal_code' => $request->postal_code
        ]);

        return redirect(route('restaurants.index'))->with('success', 'Das Restaurant wurde erstellt.');
    }
}
