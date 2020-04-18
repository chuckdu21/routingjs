<html>
    <head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
        <script type="text/javascript" src="Routing.js"></script>
        <script type="text/javascript">
        
            $("document").ready(function(){
                
                $.routing.init("server.php");


                $.routing.get("add", {a:2, b:3})
                        .done(function(data){
                            $("body").append("Addition: " + data + "<br>");
                    });
                
                $.routing.post("sub", {a:6, b:4})
                        .done(function(data){
                            $("body").append("Substraction :" + data + "<br>");
                    });
                

                $.routing.ajax("get", "div", {a:8, b:2})
                    .done(function(data){
                        $("body").append("Division :" + data + "<br>");
                });
                
                
            });
        </script>
    </head>
    <body>
    
    
    
    
    
    </body>
</html>