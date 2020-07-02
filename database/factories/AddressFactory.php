<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Address;
use Faker\Generator as Faker;

$factory->define(Address::class, function (Faker $faker) {
    return [
        'street' => $faker->streetName,
        'city' => $faker->city,
        'street_address' => $faker->streetAddress,
        'postal_code' => $faker->postcode,
        'lon' => $faker->longitude,
        'lat' => $faker->latitude,
    ];
});
