<?php

namespace App\Models;

use EloquentFilter\Filterable;
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
        return $this->belongsToMany(Meal::class);
    }
}
