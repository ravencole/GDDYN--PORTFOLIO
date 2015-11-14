<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CadAds extends Model
{
    protected $url;
    protected $name;

    protected $fillable = [
        'name', 'url'
    ];
}
