<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CadAdsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $images = scandir("images/cadads");
        rsort($images);
        $offset = count($images) - 2;
        array_splice($images, $offset);
        shuffle($images);
        echo json_encode($images);

        // $images = [];
        // $re = "/src=\"[\\s]+(http:\\/\\/s3\\.amazonaws.com\\/contemporaryartgroup\\/images\\/thumb[^\"]+)/";
        // for ($i=0; $i < 10; $i++) { 
        //     $source = file_get_contents('http://contemporaryartdaily.com');
        //     preg_match_all($re, $source, $matches);
        //     foreach ($matches[1] as $key => $value) {
        //         if (!in_array($value, $images)) {
        //             array_push($images, $value);
        //         }
        //     }
        // }

        // foreach ($images as $key => $value) {
        //     $re2 = "/(?<=thumb_).+?jpe?g/i";
        //     if (preg_match($re2, $value, $name)) {
        //         echo $name[0]."<br />";
        //         $image_url = $value;
        //         $image_file = "images/cadads/$name[0]";

        //         $fp = fopen ($image_file, 'x+');              // open file handle

        //         $ch = curl_init($image_url);
        //        // curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // enable if you want
        //         curl_setopt($ch, CURLOPT_FILE, $fp);          // output to file
        //         curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        //         curl_setopt($ch, CURLOPT_TIMEOUT, 1000);      // some large value to allow curl to run for a long time
        //         curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
        //         // curl_setopt($ch, CURLOPT_VERBOSE, true);   // Enable this line to see debug prints
        //         curl_exec($ch);

        //         curl_close($ch);                              // closing curl handle
        //         fclose($fp);    
        //     }
        // }
        

    }
}
