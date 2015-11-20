@extends('layouts.master')

@section('content')

<div class="terminalHelp--container">
    <div>if you lost your terminal, you can press the letter 't' on your keyboard to bring it back.</div>
    <div>'t' toggles the terminal's closure, and 'm' its minimization.</div>
    <div>also, the up-arrow key will iterate through your previous commands,</div>
    <div>and the down arrow will clear the terminal input box.</div>
    <div>currently, the terminal is being re-writted as a React library,</div>
    <div>it's progress can be tracked <a href="https://github.com/ravencole/ReactTerminal">here</a>.</div>
</div>

@endsection