<?php


namespace App\Repositories;


use App\Models\Restaurant;
use App\Models\User;

class MealRepository
{
    public function getTopFavoriteMealOfRestaurantByUser(Restaurant $restaurant, User $user)
    {
        return $restaurant->meals()->first();
    }
}
