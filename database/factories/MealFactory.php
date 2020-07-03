<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Meal;
use App\Models\Restaurant;
use Faker\Generator as Faker;

$factory->define(Meal::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'shorthand' => $faker->numberBetween(1, 200),
        'price' => $faker->randomFloat(2, 0.5, 50),
        'restaurant_id' => $faker->numberBetween(1, 50), // TODO: Bessere Lösung benötigt
        'category_id' => 1,
        'note' => $faker->realText(200),
    ];
});
