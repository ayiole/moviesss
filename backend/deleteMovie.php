<?php

    require_once("connect.php");

    $movie_id = $_GET['movie_id'];
        
    $alo = mysqli_query($connect, "SET FOREIGN_KEY_CHECKS = 0;");

    $movies = mysqli_query($connect, "DELETE FROM `movie` WHERE movie_id = $movie_id;");

    $movies = mysqli_query($connect, "select * from movie;");

    $movies = mysqli_fetch_all($movies);

    header("Content-Type: application/json");
    echo json_encode($movies);


?>