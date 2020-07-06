<?php


namespace App\Statistics;


use App\Models\RestaurantVisit;

abstract class StatisticContainer
{
    protected $query;

    public function __construct()
    {
        $this->baseQuery();
    }

    /**
     * Setzt die Query zurück.
     */
    public function resetQuery()
    {
        $this->baseQuery();
    }

    /**
     * Speichert den Startpunkt der $query in $this->query.
     */
    abstract protected function baseQuery();

    /**
     * Verarbeitet die Query in die aufbereiteten Daten für die Statistik.
     */
    abstract public function get();
}
