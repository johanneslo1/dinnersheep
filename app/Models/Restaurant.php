<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $guarded = [];


    public function address()
    {
        return $this->belongsTo(Address::class);
    }

    public function customers()
    {
        return $this->belongsToMany(User::class);
    }

}
