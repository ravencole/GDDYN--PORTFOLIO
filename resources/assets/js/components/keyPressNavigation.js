// $(document).on('keyup', function(key) {
//     switch (key.keyCode) {
//         // n - toggles Nav
//         case 78:
//             toggleNav();
//             break;
//         // a - toggles About
//         case 65:
//             toggleNavButton('about');
//             break;
//     }
// });


var navVisible = true;
var toggleNav = function() {
    var nav = $('#nav');
    if (navVisible) {
        nav.fadeOut(1200);
        navVisible = ! navVisible;
    } else {
        nav.fadeIn(1200);
        navVisible = ! navVisible;
    }
};


var navButtonState = {};

var toggleNavButton = function(button) {

    var element = $('.nav-row[value=' + button + ']');

    if (navButtonState.button == 'undefined' )
        navButtonState.button = true;

    if ( !navButtonState.button ) {

        element.fadeOut();
        navButtonState.button = !navButtonState.button;
        console.log(navButtonState.button);
    }
    else { 

        element.fadeIn();
        navButtonState.button = !navButtonState.button;
        console.log(navButtonState.button);
    }
}



