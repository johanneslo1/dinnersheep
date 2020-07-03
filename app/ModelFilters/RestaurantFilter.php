<?php

namespace App\ModelFilters;

use EloquentFilter\JsonModelFilter;
use EloquentFilter\ModelFilter;

class RestaurantFilter extends JsonModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];


    public $filterMapping = [
        'name' => 'name',
        'favorite_meal' => 'favorite_meal',
        'visits' => 'visits',
        'id' => 'id',
    ];


    public function id($val)
    {
        return $this->where('id', $val);
    }

    public function name($val)
    {
        return $this->where('name', 'like', '%'. $val . '%');
    }

    public function visits($val)
    {
        return $this->withCount('visits');
    }

    public function favorite_meal($val)
    {
        return $this;
    }
}
