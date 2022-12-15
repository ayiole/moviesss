<?php

    require_once("connect.php");

    $body = json_decode(file_get_contents('php://input'), true);

    $movie_id = $body['movie_id'];

    $addFavs = mysqli_query($connect, "DELETE FROM `favorites` WHERE movie_id = $movie_id");

    $obj = [
        'isLiked' => false
    ];

    header("Content-Type: application/json");
    echo json_encode($obj);


?>