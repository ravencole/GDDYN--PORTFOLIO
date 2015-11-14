@extends('layouts.master')
@section('content')
    <h1>YOU AN IMAGE MAKER DUDE WAITA MAKE</h1>
    {!! Form::open(array('route' => 'alley.store', 'files' => 'true')) !!}
    <div class="form-group">
        {!! Form::label('image', 'IMAGE:') !!}
        {!! Form::file('image') !!}
    </div>
    <!-- <div class="form-group">
        {!! Form::label('tags', 'Tags:') !!}
        {!! Form::text('tags', null, ['class' => 'form-control']) !!}
    </div> -->
    <div class="form-group">
        {!! Form::label('notes', 'notes:') !!}
        {!! Form::textarea('notes', null, ['class' => 'form-control']) !!}
    </div>
    <div class="form-group">
        {!! Form::submit('Create Post',['class' => 'btn btn-primary']) !!}
    </div>
    {!! Form::close() !!}
@endsection