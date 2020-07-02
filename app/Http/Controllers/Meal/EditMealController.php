<?php
namespace App\Http\Controllers\Meal;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use Inertia\Inertia;

final class EditMealController extends Controller
{
    public function __invoke(Meal $meal)
    {
        return Inertia::render('Meals/Edit');
    }
}
