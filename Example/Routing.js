/*

    Script by Maxime Vh (FR)
    Add-on for jQuery
    
    I got inspired by the MapRouting in MVC C# and i was sick to create an php file for each method I called in JS. So with this script all your functions are in the same file and you just need to route each of your request in your JS to the PHP file where the functions are.
    

    How it's work ?
    In PHP side you need to initialize the routes, by a route name and the function called.
    In JS side you call your PHP function by the route name you initialized in PHP.
    
    
    JS                      Routing                     PHP
    
    routeName ------> routeName/functionName ------> functionName
    
    
    PHP methods:
    
    - Create a mape route 
        MapRoute(mapRouteName, functionName)
    
    - Initialize all the routes
        Init()
        
    
    JS methods:
    
    - Initialize the routing with the name of the PHP file where all the functions are located
        $.routing.init(nameOfPHPFile)
    
    - GET method
        $.routing.get(RouteName, some_params)
    
    - POST method
        $.routing.post(RouteName, some_params)
    
    - AJAX method
        $.routing.ajax(requestType, RouteName, some_params)
    
    ALL THIS THREE METHODS RETURN a jqXHR OBJECT LIKE ALL jQuery HTTP REQUESTS RETURN SO YOU CAN HANDLE IT WITH A .done() FUNCTION FOR EXAMPLE.
    
    
    
    Exemple:
    
    PHP file:
    
        // server.php
        
        
        require 'Routing.php';

        // create an instance of Routing
        $routing = new Routing();
        
        
        
        // create a new map route with the name of the route, and the function called
        $routing->MapRoute("get_function", "MethodGET");
        
        // initializing all the routes created
        $routing->Init();


        function MethodGET()
        {
            echo $_GET["param_name"];
        }


    JS file
        
        // initalize map routing with the PHP file where all the functions are located
        $.routing.init("server.php");

        // POST request with the function name created in PHP file, and some parameters needed in the function
        $.routing.get("get_function", {param_name:"param data"})
                        .done(function(response){
                            // handle response
                    });





*/
$.routing = ()=>{
    $.routing.url = null;
}


$.routing.init = (_url)=>{
    $.routing.url = _url;
}


$.routing.ajax = (type, name, params)=>{
    params.methodCalled = name;
    return $.ajax({
            type: type,
            url: $.routing.url,
            data:params
        });
}

$.routing.post = (name, params)=>{
    return $.routing.ajax("post", name, params);
}
$.routing.get = (name, params)=>{
    return $.routing.ajax("get", name, params);
}