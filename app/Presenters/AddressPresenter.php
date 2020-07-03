<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;

class AddressPresenter extends FlexiblePresenter
{
    public function values(): array
    {
        return $this->resource->toArray();
    }
}
