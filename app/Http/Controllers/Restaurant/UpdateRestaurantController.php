<?php

namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateRestaurantRequest;
use App\Models\Meal;
use App\Models\Restaurant;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class UpdateRestaurantController extends Controller
{
    public function __invoke(Restaurant $restaurant, UpdateRestaurantRequest $request)
    {
        $restaurant->update([
            'name' => $request->name
        ]);

        $restaurant->address->update($request->except('name'));

        return back()->with('success', 'Die Änderung wurde gespeichert.');
    }
}
