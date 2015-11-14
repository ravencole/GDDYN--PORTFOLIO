<!DOCTYPE html>
<html>
<head>
    <title>GDDYNYTDTLLS</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <scriptsrc="/js/require.js"></script>
</head>
<body>
    <div class="header">
      <div class="header__text"><a href="/">gddynytdtlls.com</a></div>
    </div>
    <div id="nav">
      <div id="nav-left-half">
        <a href="/"><div id="nav-home">home</div></a>
      </div>
      <div id="nav-right-half">
        <a href="/terminal"><div id="nav-terminal" style="font-size: 11px;">terminal</div></a>
        <a href="/about"><div id="nav-about">about</div></a>
        <a href="/map"><div id="nav-map">map</div></a>
        <a href="/gifs"><div id="nav-gifs">gifs</div></a>
      </div>
    </div>
    <div class="container">
        @yield('content')
    </div>
    <div id="terminal"></div>
    @if ( Config::get('app.debug') ) <!-- livereload remove before deploy -->
      <script type="text/javascript">
        document.write('<script src="//localhost:35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
      </script> 
    @endif
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/react.js"></script>
    <script type="text/javascript" src="/js/radium.js"></script>
    <script type="text/javascript" src="/js/all.js"></script>
    <script type="text/javascript" src="/js/gifs.js"></script>
    <script type="text/javascript" src="/js/about.js"></script>
    <script type="text/javascript" src="/js/terminal.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAtgZRui3QKo3tEUnhZ5P3KjoRxqMmut70&callback=initMap">
    </script>
</body>
</html>