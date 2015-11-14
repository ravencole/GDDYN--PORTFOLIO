/*
nav drops down at 30px from the top of the window,
and sides back up once the mouse is more than 100px from the top
*/

(function() {
    var open = false;
    $( document ).mousemove(function(e) {
        if (!open && e.pageY < 60) {
            $('#nav').slideDown(500).css('display', 'flex');
            open = true;
            return;
        }
        if (open && e.pageY > 100) {
            $('#nav').slideUp(500);
            open = false;
        }
    });
})();



