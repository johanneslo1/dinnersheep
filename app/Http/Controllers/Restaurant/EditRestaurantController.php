<?php
namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use Inertia\Inertia;

final class EditRestaurantController extends Controller
{
    public function __invoke(Meal $meal)
    {
        return Inertia::render('Meals/Edit');
    }
}
