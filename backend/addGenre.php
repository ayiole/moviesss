<?php

    require_once("connect.php");

    $body = json_decode(file_get_contents('php://input'), true);

    $genre_name = $body['genre_name'];

    $addGenre = mysqli_query($connect, "INSERT INTO `genre`(`genre_id`, `name`)
     VALUES (NULL,'$genre_name')");

    $addGenre = mysqli_fetch_all($addGenre);

    header("Content-Type: application/json");
    echo json_encode($body);


?>