@extends('layouts.master')

@section('content')

<div class="maps--container">
    <div id="map"></div>
    <div id="imageBox" class="image--box"></div>
    <div id="infoBox" class="info--box">
        <div id="infoBoxArrow" class="info--arrow">
            <div class="info--arrow__left"></div>
            <div class="info--arrow__right"></div>
        </div>
        <div id="infoBoxInfo" class="info--box__info">
            <div class="info--box__details">
                <div>Date:</div>
                <div id="infoBoxDate"></div>
            </div>
            <div class="info--box__details">
                <div>Time:</div>
                <div id="infoBoxTime"></div>
            </div>
            <div class="info--box__details">
                <div>Latitude:</div>
                <div id="infoBoxLat"></div>
            </div>
            <div class="info--box__details">
                <div>Longitude:</div>
                <div id="infoBoxLon"></div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')

<script type="text/javascript" src="/js/newMap.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtgZRui3QKo3tEUnhZ5P3KjoRxqMmut70&callback=initMap"></script>


@endsection