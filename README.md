# Routing.js
A map routing in JS/PHP inspired by MapRoute in MVC C#


Script by Maxime Vh (FR)

Add-on for jQuery
    
I got inspired by the MapRouting in MVC C# and i was sick to create an php file for each method I called in JS. So with this script all your functions are in the same file and you just need to route each of your request in your JS to the PHP file where the functions are.

#### How it's work ?
In PHP side you need to initialize the routes, by a route name and the function called.
In JS side you call your PHP function by the route name you initialized in PHP.
    
#
### PHP methods
- Create map route
```
MapRoute(mapRouteName, functionName)
```
- Initialize all the routes
```Init()```

### JS methods
- Initialize the routing with the name of the PHP file where all the functions are located
```
$.routing.init(nameOfPHPFile)
```
- GET method
```
$.routing.get(RouteName, some_params)
```
- POST method
```
$.routing.post(RouteName, some_params)
```
- AJAX method
```
$.routing.ajax(requestType, RouteName, some_params)
```

*ALL THIS THREE METHODS RETURN a jqXHR OBJECT LIKE ALL jQuery HTTP REQUESTS RETURN SO YOU CAN HANDLE IT WITH A .done() FUNCTION FOR EXAMPLE.*







