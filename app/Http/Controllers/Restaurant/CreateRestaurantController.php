<?php
namespace App\Http\Controllers\Restaurant;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

final class CreateRestaurantController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Restaurants/Create');
    }
}
