<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
       'name', 'latitude', 'longitude', 'date', 'time', 'notes', 'token' 
    ];

    public $timestamps = false;

    protected $data;
    protected $image;
    protected $name;
    protected $latitude;
    protected $longitude;
    protected $date;
    protected $dateTime;
    protected $time;
    protected $notes;

    public function __construct() 
    {
    }

    public function make( $request, $notes = null )
    {
        $this->image = $request;
        $this->notes = $notes;
        $this->data = exif_read_data($this->image);
        Image::exifParse();
        $this->image->move(public_path().'/images/alley_images/', $this->name);
    }

    /**
     * Gets the value of name.
     *
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Gets the value of latitude.
     *
     * @return mixed
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Gets the value of longitude.
     *
     * @return mixed
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Gets the value of date.
     *
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Gets the value of dateTime.
     *
     * @return mixed
     */
    public function getDateTime()
    {
        return $this->dateTime;
    }

    /**
     * Gets the value of time.
     *
     * @return mixed
     */
    public function getTime()
    {
        return $this->time;
    }

    /**
     * Gets the value of notes.
     *
     * @return mixed
     */
    public function getNotes()
    {
        return $this->notes;
    }

    protected function exifParse() 
    {
        Image::computeDateTime();
        Image::computeName();
        Image::computeCoordinates(); 
    }

    protected function computeDateTime()
    {
        $dateTime = explode(' ', $this->data['DateTime']);
        $this->date = $dateTime[0];
        $this->time = $dateTime[1];
        $this->dateTime = $this->date."-".$this->time;
    }

    protected function computeName()
    {
        $name = str_replace([':','-'], '', $this->dateTime);
        $this->name = $name.".jpg";
    }

    protected function computeCoordinates()
    {
       $this->longitude = Image::computeGps($this->data["GPSLongitude"], $this->data['GPSLongitudeRef']);
       $this->latitude  = Image::computeGps($this->data["GPSLatitude"], $this->data['GPSLatitudeRef']);
    }

    private function computeGps($exifCoord, $hemi) 
    {

        $degrees = count($exifCoord) > 0 ? Image::computeGps2Num($exifCoord[0]) : 0;
        $minutes = count($exifCoord) > 1 ? Image::computeGps2Num($exifCoord[1]) : 0;
        $seconds = count($exifCoord) > 2 ? Image::computeGps2Num($exifCoord[2]) : 0;

        $flip = ($hemi == 'W' or $hemi == 'S') ? -1 : 1;

        return $flip * ($degrees + $minutes / 60 + $seconds / 3600);

    }

    private function computeGps2Num($coordPart) 
    {

        $parts = explode('/', $coordPart);

        if (count($parts) <= 0)
            return 0;

        if (count($parts) == 1)
            return $parts[0];

        return floatval($parts[0]) / floatval($parts[1]);
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag')->withTimeStamps();
    }

    
}






















