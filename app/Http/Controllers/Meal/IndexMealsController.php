<?php
namespace App\Http\Controllers\Meal;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

final class IndexMealsController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Meals/Index');
    }
}
