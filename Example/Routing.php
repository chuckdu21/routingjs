<?php

    class Routing
    {
        private $routes;
        
        public function __construct()
        {
            $this->routes = array();
        }
        
        public function MapRoute($name, $action)
        {
            array_push($this->routes, (object)["name"=>$name, "action"=>$action]);
        }
        
        public function Init()
        {
            $mc = null;
            if(isset($_GET["methodCalled"]))
                $mc = $_GET["methodCalled"];
            else if(isset($_POST["methodCalled"]))
                $mc = $_POST["methodCalled"];
            
            foreach($this->routes as $r)
            {
                if($r->name == $mc)
                {
                    call_user_func($r->action);
                }
            }
        }
    }
?>