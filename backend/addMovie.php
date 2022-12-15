<?php

    require_once("connect.php");

    $body = json_decode(file_get_contents('php://input'), true);

    
    $path1 = 'image_url_poster/' . time() . $_FILES['upfile']['name'];

    move_uploaded_file($_FILES['upfile']['tmp_name'], $path);

    $path2 = 'image_url_side/' . time() . $_FILES['upfile2']['name'];

    move_uploaded_file($_FILES['upfile2']['tmp_name'], $path2);

    $genres = $body['genres'];
    $name = $body['name'];
    $year = $body['year'];
    $producer = $body['producer'];
    $duration = $body['duration'];
    $description = $body['description'];
    $image_url_poster = $body['image_url_poster'];
    $image_url_side = $body['image_url_side'];

    header("Content-Type: application/json");

    $movies = mysqli_query($connect, "INSERT INTO `movie`(`movie_id`, `name`, `year`, `producer`, `duration`, `description`, `image_url_poster`, `image_url_side`)
     VALUES (NULL,'$name','$year','$producer','$duration','$description','$path1','$path2')");
    

    $lastMovieId = $connect->insert_id;

    for ($i=0; $i < count($genres); $i++) {

        $addMovieToGenre = mysqli_query($connect, "INSERT INTO `genre_movie`(`id`, `movie_id`, `genre_id`)
        VALUES (NULL,'$lastMovieId','$genres[$i]')");
    }


?>