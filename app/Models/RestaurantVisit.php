<?php

namespace App\Models;

use Carbon\CarbonPeriod;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;

class RestaurantVisit extends Model
{
    use Sortable, Filterable;

    protected $guarded = [];

    /**
     * Das besuchte Restaurant.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class);
    }

    /**
     * Der Benutzer der das Restaurant besucht hat.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Die verzehrten Gerichte während des Restaurantbesuchs.
     */
    public function meals()
    {
        return $this->belongsToMany(Meal::class, 'meal_restaurant_visit');
    }

    /**
     * Gibt den totalen Preis des Besuchs zurück.
     */
    public function total()
    {
        return $this->meals()->sum('price');
    }


    public function scopebyUser(Builder $builder, User $user)
    {
        $builder->where('user_id', $user->id);
    }

    public function scopeByVisitDateBetween(Builder $builder, CarbonPeriod $carbonPeriod)
    {
        $builder->whereBetween('visit_date', [
            $carbonPeriod->getStartDate()->toDateTimeString(),
            $carbonPeriod->getEndDate()->toDateTimeString()
        ]);
    }

    public function scopeByRestaurant(Builder $builder, Restaurant $restaurant)
    {
        $builder->where('restaurant_id', $restaurant->id);

    }

}
