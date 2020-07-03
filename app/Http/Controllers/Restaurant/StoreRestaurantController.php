<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Requests\RestaurantStoreRequest;
use App\Models\Address;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class StoreRestaurantController extends Controller
{
    public function __invoke(RestaurantStoreRequest $request)
    {
        $address = Address::create([
            'street_address' => $request->street_address,
            'city' => $request->city,
            'postal_code' => $request->postal_code
        ]);

        Restaurant::create([
            'name' => $request->name,
            'address_id' => $address->id
        ]);


        return redirect(route('restaurants.index'))->with('success', 'Das Restaurant wurde erstellt.');
    }
}
