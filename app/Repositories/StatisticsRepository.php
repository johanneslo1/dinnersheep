<?php


namespace App\Repositories;


use App\Models\RestaurantVisit;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;

class StatisticsRepository
{
    public function getVisitsPerWeekday(User $user, CarbonPeriod $carbonPeriod)
    {
        return RestaurantVisit::where('user_id', $user->id)
            ->whereBetween('visit_date', [
                $carbonPeriod->getStartDate()->toDateTimeString(),
                $carbonPeriod->getEndDate()->toDateTimeString()
            ])
            ->get()
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
}
