<?php

namespace App\ModelFilters;

use Carbon\Carbon;
use Carbon\Exceptions\InvalidFormatException;
use EloquentFilter\JsonModelFilter;
use EloquentFilter\ModelFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class RestaurantVisitFilter extends JsonModelFilter
{
    /**
     * Related Models that have ModelFilters as well as the method on the ModelFilter
     * As [relationMethod => [input_key1, input_key2]].
     *
     * @var array
     */
    public $relations = [];

    public $filterMapping = [
        'restaurant' => 'restaurant',
        'visit_date' => 'visit_date',
        'costs' => 'costs'
    ];

    public function restaurant($val)
    {
        $this->whereHas('restaurant', function (Builder $query) use ($val) {
            $query->where('name', 'like', '%' . $val . '%');
        });
    }

    public function visit_date($val)
    {
        try {
            $this->whereDate('visit_date', Carbon::parse($val));
        } catch (InvalidFormatException $e) {

        }
    }

    public function costs($val)
    {

//        $this->whereHas('meals', function (Builder $query) use ($val) {
//            $query->where(DB::raw('SUM(meals.price)'), '>=', $val);
//        });
    }
}
