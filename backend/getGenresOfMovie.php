<?php

    require_once("connect.php");

    $movie_id = $_GET["movie_id"]

    $genresOfMovie = mysqli_query($connect, "select name from genre where genre_id in (select genre_id from genre_movie where movie_id = $movie_id);");

    $genresOfMovie = mysqli_fetch_all($genresOfMovie);

    header("Content-Type: application/json");
    echo json_encode($genresOfMovie);


?>