<?php


namespace App\Http\Controllers;


use App\Helpers\Period;
use App\Models\RestaurantVisit;
use App\Repositories\StatisticsRepository;
use App\Statistics\AverageSpending;
use App\Statistics\VisitsPerWeekday;
use Carbon\CarbonPeriod;
use Inertia\Inertia;

final class ShowHomeController extends Controller
{


    public function __invoke(VisitsPerWeekday $visitsPerWeekday, AverageSpending $averageSpending)
    {
        $user = auth()->user();

        $carbonPeriod = CarbonPeriod::create(now()->subMonth(), now());

        return Inertia::render('Home', [
            'visitsPerWeekday' => $visitsPerWeekday->user($user)
                ->carbonPeriod($carbonPeriod)
                ->get(),
            'monthlyAverageSpending' => $averageSpending->user($user)
                ->carbonPeriod($carbonPeriod)
                ->get(),
            'monthlyVisitsCount' => RestaurantVisit::byUser($user)
                ->byVisitDateBetween($carbonPeriod)
                ->count(),
        ]);
    }
}
