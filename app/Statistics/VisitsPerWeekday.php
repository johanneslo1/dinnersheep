<?php


namespace App\Statistics;


use App\Models\Restaurant;
use App\Models\RestaurantVisit;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;

class VisitsPerWeekday extends StatisticContainer
{

    protected function baseQuery(): self
    {
        $this->query = RestaurantVisit::query();

        return $this;
    }


    /**
     * @return mixed
     */
    public function get()
    {
        return $this->query->get()
            ->groupBy(function ($visit) {
                return Carbon::parse($visit->visit_date)->isoFormat('dd');
            })->map(function ($weekdayGroup, $key) {
                return [
                    'weekday' => $key,
                    'visits' => $weekdayGroup->count(),
                    'expenses' => rand(1, 50)
                ];
            })->values();

    }


    public function user(User $user): self
    {
        $this->query->byUser($user);

        return $this;
    }

    public function carbonPeriod(CarbonPeriod $carbonPeriod): self
    {
        $this->query->byVisitDateBetween($carbonPeriod);

        return $this;
    }

    public function restaurant(Restaurant $restaurant): self
    {
        $this->query->byRestaurant($restaurant);

        return $this;
    }

}
