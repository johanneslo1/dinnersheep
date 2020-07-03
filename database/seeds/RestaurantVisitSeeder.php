<?php

use Illuminate\Database\Seeder;

class RestaurantVisitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Restaurant::all()->each(function ($restaurant) {
            $i = 0;

            while ($i < 100) {
                $restaurant->visits()->create([
                    'user_id' => 1,
                    'restaurant_id' => $restaurant->id,
                    'visit_date' => now()->subDays(rand(1, 60))
                ]);
                $i++;
            }
        });
    }
}
