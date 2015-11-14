var elixir = require('laravel-elixir');
 
require('laravel-elixir-livereload');
 
elixir(function(mix) {
   mix.livereload();
});


elixir(function(mix) {
    mix.scripts(['jquery/dist/jquery.min.js', 'jquery-color/jquery-color.min.js'], 'public/js/jquery.min.js', 'bower_components/');
});

elixir(function(mix) {
    mix.scripts(['react/dist/react-with-addons.js','react-dom/dist/react-dom.js', 'radium/dist/radium.js'],'public/js/react.js','node_modules/');
});

elixir(function(mix) {
    mix.scripts('requirejs/require.js','public/js/require.js','bower_components/');
});

elixir(function(mix) {
    mix.sass(['app.scss','map.scss', 'nav.scss', 'intro.scss', 'gifs.scss', 'about.scss', 'terminal.scss']);
});

elixir(function(mix) {
    mix.babel([

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
              

      ], 'public/js/terminal.js', 'resources/assets/js/terminal/');
});

elixir(function(mix) {
    mix.scriptsIn('resources/assets/js/components');
});


