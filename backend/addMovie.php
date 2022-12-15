<?php

    require_once("connect.php");

    $body = json_decode(file_get_contents('php://input'), true);

    $genres = $body['genres'];
    $name = $body['name'];
    $year = $body['year'];
    $producer = $body['producer'];
    $duration = $body['duration'];
    $description = $body['description'];
    $image_url_poster = $body['image_url_poster'];
    $image_url_side = $body['image_url_side'];

    $movies = mysqli_query($connect, "INSERT INTO `movie`(`movie_id`, `name`, `year`, `producer`, `duration`, `description`, `image_url_poster`, `image_url_side`)
     VALUES (NULL,'$name','$year','$producer','$duration','$description','$image_url_poster',' $image_url_side')");

    $movies = mysqli_fetch_all($movies);

    for ($i=0; $i < count($genres); $i++) { 

    $addMovieToGenre = mysqli_query($connect, "INSERT INTO `genre_movie`(`id`, `movie_id`, `genre_id`)
     VALUES (NULL,'$movie_id','$genre_id')");

    $addMovieToGenre = mysqli_fetch_all($addMovieToGenre);

    header("Content-Type: application/json");
    echo '{"done":"pituh"}';
    }



    header("Content-Type: application/json");
    echo '{"done":"pituh"}';


?>