@extends('layouts.master')

@section('content')

<div id="main-container">
  <div id="image-box"></div>
  <div id="map-box"> 
    <div id="map"></div>
  </div>
</div>

@endsection

@section('scripts')

<script type="text/javascript" src="/js/map.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtgZRui3QKo3tEUnhZ5P3KjoRxqMmut70&callback=initMap"></script>


@endsection