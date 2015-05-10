//dependencies configuration
requirejs.config({
    //Sets the base url for resolving our modules
    baseUrl: '../js',
    //Define some paths  or alias to third party modules
    paths: {
        //We can use JQuery as module just defining a path, given that it is implemented as a module using AMD spec
        'jquery': 'jquery-1.11.3.min'
    }
});

//Now we can use our test module with require.
require(['utils/test-module'], function(testModule){

    testModule.doTest();
});
