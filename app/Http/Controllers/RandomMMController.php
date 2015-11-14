<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class RandomMMController extends Controller
{
    public function index()
    {
        $source = file_get_contents('http://www.azlyrics.com/m/modestmouse.html');
        $regExLinks = '/(?<=href=\"\\.\\.\\/)[^\"]+/';
        preg_match_all($regExLinks, $source, $matches);
        shuffle($matches[0]);
        $songSource = file_get_contents('http://www.azlyrics.com/'.$matches[0][0]);
        
        // preg_match_all("/(?<=-->)\\n?[^<]+<br>\\n?[^<]+/m", $songSource, $songMatches);
        // $find = array("\r\n", "<br>");
        // $replace = array('', ', ');
        // $lyric = str_replace($find, $replace, $songMatches[0]); 

        preg_match_all("/(?<=-->)\\n?[^<]+/m", $songSource, $songMatches);
        $lyric = str_replace("\\r\\n", '', $songMatches[0][12]); 
        
        return json_encode($lyric);
    }
}

