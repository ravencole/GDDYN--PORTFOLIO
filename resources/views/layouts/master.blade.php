<!DOCTYPE html>
<html>
<head>
    <title>GDDYNYTDTLLS.COM</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="/css/app.css">
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
    <script type="text/javascript" src="/js/vendor.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
    @yield('scripts')
</body>
</html>