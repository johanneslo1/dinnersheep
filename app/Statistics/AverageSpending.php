<?php


namespace App\Statistics;

use App\Models\Restaurant;
use App\Models\RestaurantVisit;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;

/**
 * Class AverageSpending
 *
 * Durchschnittliche Ausgaben pro Besuch.
 *
 * @package App\Statistics
 */
class AverageSpending extends StatisticContainer
{

    protected function baseQuery(): self
    {
        $this->query = RestaurantVisit::query();

        return $this;
    }

    public function get()
    {
        // Berechnungen könnten auch in die Datenban ausgelagert werden.
        // Da jedoch die Performance in dieser größe nicht sonderlich ins Gewicht fällt, wird hier der einfache weg genutzt.
        return $this->query->get()->map(function ($visit) {
            return $visit->total();
        })->avg();

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
