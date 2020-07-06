<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;

class MealPresetner extends FlexiblePresenter
{
    public function values(): array
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'shorthand' => $this->resource->shothand,
            'note' => $this->resource->note,
            'price' => $this->resource->price,
            'is_favorite' => function () {
                return $this->resource->users()
                    ->where('id', auth()->id())
                    ->first() !== null;
            },
            'price_formated' => number_format($this->resource->price, 2, ',', '.') . '€',
            'restaurant' => function () {
                return $this->resource->restaurant;
            }
        ];
    }
}
