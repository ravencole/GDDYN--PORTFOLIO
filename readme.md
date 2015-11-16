GDDYNYTDTLLS.COM
----------------
is a portfolio site made by Raven Cole.

Welcome to the source code.

The humble beginnings of gddynytdtlls start with me learning to write html
and PHP in VIM on a RaspberryPi, because my 8 year old mac book pro finally
died and I needed to display a web page on a sculpture I was making. 
Shouts outs to w3m. Its been a long time since i dropped 400 lines of PHP into the
center of an HTML document, but the memory is warm and present.

The front-end for the site is *mostly* React <sup>1</sup>, and the backend is Laravel.
The React styling library Radium is also being used, and some Jquery
has been sprinkled in for the damn of it (or to make AJAX calls/handle keydowns
site wide, because the thing as a whole isn't using React, but the Terminal is and it's
on every page). 

The back-end is Laravel with future growth in mind (or maybe because I like PHP) <sup>2</sup>. Otherwise it would probably be a MEAN stack or something like it. A MYSQL database is doing a small amount of work for the maps page.

Right now the Terminal is being rewritten. I've know it was a mess since the 
beginning, but I'm glad I made a whole working prototype before going a head
with the rewrite. The new Terminal is going to rely on an MVC pattern <sup>3</sup>, which it does
now too, just in a gross messy way,  and be released as a React library. After that
I'll likely release a vanilla JS version with no dependencies. 

Right now the site is, presentation-wise, where it needs to be for now, but the 
code is still being refactored. 

<sup>1: 
    React is incredible. It took me a second to get used to all the markup in the JS and the
    inline styles, but it also only took me a second to forget how I made UI's without it. 
    Some kind of game changer that thing is.
    -----
    2:
    PHP was the first language I learned, and Laravel the first MCV. I've done some
    Rails and Django, but as much hate as it gets I do love writing PHP. and using Laravel.
    -----
    3: 
    Right now the Terminal is running with a controller in the main React file, and two
    models, one that holds the behavior of the command, and one that generates templates
    for whatever is happening. It feels like a good fundamental pattern, but right now
    there is *waaay* too much repeated code. Which for the moment is fine, because it revealed
    a lot about what I need from the API, but it's completely unsustainable. 
</sup>
