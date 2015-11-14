<?php

namespace App\Http\Controllers;

use App;
use Request;
use Carbon\Carbon;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class AlleyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return App\Image::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('alley-upload');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $photo = Request::file('image');
        $notes = Request::input('notes');
        $image = new App\Image();
        $image->make( $photo, $notes );
        $image->name = $image->getName();
        $image->latitude = $image->getLatitude();
        $image->longitude = $image->getLongitude();
        $image->date = $image->getDate();
        $image->time = $image->getTime();
        $image->notes = $notes;
        $image->created_at = Carbon::now();
        $image->updated_at = Carbon::now();
        $image->save();

        return redirect()->action('AlleyController@create');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // api endpoint
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // api endpoint
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // api endpoint
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
