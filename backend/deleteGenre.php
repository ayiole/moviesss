<?php

    require_once("connect.php");

    $genre_id = $_GET['genre_id'];

    $movies = mysqli_query($connect, "DELETE FROM `genre` WHERE genre_id = $genre_id;");

    $genresOfMovie = mysqli_query($connect, "select * from genre;");

    $genresOfMovie = mysqli_fetch_all($genresOfMovie);

    header("Content-Type: application/json");
    echo json_encode($genresOfMovie);


?>