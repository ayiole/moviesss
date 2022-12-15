<?php

    require_once("connect.php");

    $body = json_decode(file_get_contents('php://input'), true);

    $movie_id = $body['movie_id'];
    $genre_id = $body['genre_id'];

    $addMovieToGenre = mysqli_query($connect, "INSERT INTO `genre_movie`(`id`, `movie_id`, `genre_id`)
     VALUES (NULL,'$movie_id','$genre_id')");

    $addMovieToGenre = mysqli_fetch_all($addMovieToGenre);

    header("Content-Type: application/json");
    echo '{"done":"pituh"}';


?>