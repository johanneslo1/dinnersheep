<?php

namespace App\Presenters;

use AdditionApps\FlexiblePresenter\FlexiblePresenter;
use App\Models\RestaurantVisit;
use App\Repositories\MealRepository;

class RestaurantPresenter extends FlexiblePresenter
{
    /**
     * @var MealRepository
     */
    private $mealRepository;

    public function __construct($data = null)
    {
        parent::__construct($data);

        $this->mealRepository = new MealRepository();
    }

    public function values(): array
    {
        return [
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'address' => function () {
                return AddressPresenter::make($this->resource->address);
            },
            'visits' => function () {
                return $this->resource->visits()->count();
            },
            'favorite_meal' => function () {
                return MealPresetner::make(
                    $this->mealRepository->getTopFavoriteMealOfRestaurantByUser($this->resource, auth()->user())
                );
            }
        ];
    }
}
