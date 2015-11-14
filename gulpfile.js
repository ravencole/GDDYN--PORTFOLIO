var elixir = require('laravel-elixir');
 
require('laravel-elixir-livereload');
 
elixir(function(mix) {
   mix.livereload();
});

elixir(function(mix) {
    mix.scripts([
          'jquery/dist/jquery.js',
          'react/dist/react-with-addons.js',
          'react-dom/dist/react-dom.js', 
          'radium/dist/radium.js'
        ],'public/js/vendor.js','node_modules/')
        .sass(['app.scss','map.scss', 'nav.scss', 'intro.scss', 'gifs.scss', 'about.scss', 'terminal.scss'])
        .babel([
          'Play.js', 
          'Speed.js',
          'Text.js',
          'Color.js',
          'NumberOfImages.js',
          'Submit.js',
          'ToggleSidebar.js',
          'GifsText.js',
          'Sidebar.js',
          'GifsViewer.js', 
          'Gifs.js'
        ], 'public/js/gifs.js','resources/assets/js/gifs/')
        .babel([
          'about.js'
        ], 'public/js/about.js', 'resources/assets/js/about/')
        .babel([
          'intro.js'
        ], 'public/js/intro.js', 'resources/assets/js/intro/')
        .babel([
          'TerminalButtons.js',
          'TerminalInput.js',
          'TerminalTemplateModel.js',
          'TerminalCommandModel.js',
          'Terminal.js'
        ], 'resources/assets/js/all/terminal.js', 'resources/assets/js/terminal/')
        .scripts(['date.js', 'time.js', 'map.js'],'public/js/map.js', 'resources/assets/js/map/')
        .scripts(['components/nav.js', 'all/terminal.js'], 'public/js/app.js', 'resources/assets/js/');     
});


