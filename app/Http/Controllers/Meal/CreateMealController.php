<?php
namespace App\Http\Controllers\Meal;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

final class CreateMealController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Meals/Create');
    }
}
