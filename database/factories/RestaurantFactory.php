<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Address;
use App\Models\Restaurant;
use Faker\Generator as Faker;

$factory->define(Restaurant::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'address_id' => factory(Address::class),
    ];
});
