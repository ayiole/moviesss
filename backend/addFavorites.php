<?php

    require_once("connect.php");

    $body = json_decode(file_get_contents('php://input'), true);

    $movie_id = $body['movie_id'];

    $addFavs = mysqli_query($connect, "INSERT INTO `favorites`(`fav_id`, `movie_id`)
     VALUES (NULL,'$movie_id')");

    $obj = [
        'isLiked' => true
    ];

    header("Content-Type: application/json");
    echo json_encode($obj);


?>