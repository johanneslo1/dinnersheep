<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;

class RestaurantPresenter extends FlexiblePresenter
{
    public function values(): array
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'address' => function () {
                return AddressPresenter::make($this->resource->address);
            },
            'visits' => function () {
                return 1;
            },
            'favorite_meal' => function () {
                return ['name' => 'test'];
            }
        ];
    }
}
