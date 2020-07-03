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
        ];
    }
}
