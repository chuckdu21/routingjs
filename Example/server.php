<?php

require 'Routing.php';

$routing = new Routing();

$routing->MapRoute("add", "Addition");
$routing->MapRoute("sub", "Substraction");
$routing->MapRoute("div", "Division");
$routing->Init();

function Addition()
{
    echo intval($_GET["a"]) + intval($_GET["b"]);
}


function Substraction()
{
    echo intval($_POST["a"]) - intval($_POST["b"]);
}

function Division()
{
    echo intval($_GET["a"]) / intval($_GET["b"]);
}

?>