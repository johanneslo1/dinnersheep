<?php
namespace App\Http\Controllers\Meal;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use App\Models\Restaurant;
use App\Presenters\MealPresetner;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class IndexMealsController extends Controller
{
    public function __invoke(Request $request)
    {
        $pagination = $request->search
            ? Meal::where('name', 'like', '%' . $request->search . '%')->sortable()->paginate()
            : Meal::sortable()->paginate();

        return Inertia::render('Meals/Index', [
            'mealsPagination' => MealPresetner::collection($pagination)
        ]);
    }
}
