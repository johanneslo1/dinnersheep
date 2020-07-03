<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;

class Restaurant extends Model
{
    use Sortable, Filterable;

    protected $guarded = [];

    public $sortable = [
        'id',
        'name',
        'created_at',
        'updated_at'
    ];

    public function address()
    {
        return $this->belongsTo(Address::class);
    }

//    public function customers()
//    {
//        return $this->belongsToMany(User::class);
//    }

    public function meals()
    {
        return $this->hasMany(Meal::class);
    }

}
