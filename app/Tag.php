<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $tags;

    public function images()
    {
        return $this->belongsToMany('App\Image')->withTimeStamps();
    }

    public function parseTags() 
    {
        $this->tags = explode(',', $this->tags);

        for ($i=0; $i < count($this->tags) ; $i++) { 
            $this->tags[$i] = trim($this->tags[$i]);
        }

        return $this->tags;
    }
}
