<?php


namespace App\Http\Controllers;


use App\Repositories\StatisticsRepository;
use Carbon\CarbonPeriod;
use Inertia\Inertia;

final class ShowHomeController extends Controller
{
    /**
     * @var StatisticsRepository
     */
    private $statisticsRepository;

    public function __construct(StatisticsRepository $statisticsRepository)
    {

        $this->statisticsRepository = $statisticsRepository;
    }


    public function __invoke()
    {
        return Inertia::render('Home', [
            'visitsPerWeekday' => $this->statisticsRepository->getVisitsPerWeekday(
                auth()->user(),
                CarbonPeriod::create(now()->subMonth(), now())
            )
        ]);
    }
}
