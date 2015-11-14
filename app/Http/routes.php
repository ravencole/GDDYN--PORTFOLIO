<?php

Route::get('/', function() {
    return view('home');
});
Route::get('gifs', 'GifsController@index');
Route::get('cadads', 'CadAdsController@index');
Route::get('about', 'AboutController@index');
Route::get('terminal', function() {
    return view('terminal');
});
Route::get('randommm', 'RandomMMController@index');
Route::get('map', function () {
    return view('map');
});
Route::resource('alley', 'AlleyController');
