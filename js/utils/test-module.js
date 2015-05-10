//First parameter is an array of dependencies (['jquery']).
// We've defined an alias/path to the jquery file so we can use it now as module.
define(['jquery'], function(jquery113){

    // We need to return the module implementation. It can be any JavaScript Object (function, constructor function, plain object etc.)
    return {
        doTest: function() {
            //Our logic is simple, just an alert with the jquery module version.
            alert("Jquery Version is" + jquery113.fn.jquery);
        }
    };
});
