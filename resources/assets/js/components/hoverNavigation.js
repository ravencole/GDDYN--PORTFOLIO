
var regExBold = /_bold/g,

    regExBoldTrue = /([\w]+)_(bold)(?=\.png)/,

    regExBoldFalse = /([\w]+)(?=\.png)/,

    button = $( '.nav-row' );


button.hover(

    function() {
        boldButton($( this ));
    },
    function() {
        boldButton($( this ));
    }
);


var boldButton = function( element ) {
    var newUrl,
        url = element.css("background-image");

    if (regExBold.test(url)) {

        newUrl = url.replace(regExBoldTrue, "$1");
        element.css("background-image", newUrl); 

    } 
    else {

        newUrl = url.replace(regExBoldFalse, "$1_bold");
        element.css("background-image", newUrl); 

    }
};