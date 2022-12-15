<?php

    require_once("connect.php");


    $genres = mysqli_query($connect, "select * from genre;");

    $genres = mysqli_fetch_all($genres);

    header("Content-Type: application/json");
    echo json_encode($genres, JSON_NUMERIC_CHECK);


?>