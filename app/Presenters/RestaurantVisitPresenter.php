<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;
use Carbon\Carbon;

class RestaurantVisitPresenter extends FlexiblePresenter
{
    public function values(): array
    {
        return [
            'id' => $this->resource->id,
            'user' => function () {
                return UserPresenter::make($this->resource->user);
            },
            'restaurant' => function () {
                return RestaurantPresenter::make($this->resource->restaurant);
            },
            'date' => $this->resource->visit_date,
        ];
    }
}
