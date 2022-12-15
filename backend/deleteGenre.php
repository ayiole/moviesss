<?php

    require_once("connect.php");

    $genre_id = $_GET['genre_id'];
        
    $alo = mysqli_query($connect, "SET FOREIGN_KEY_CHECKS = 0;");

    $movies = mysqli_query($connect, "DELETE FROM `genre` WHERE genre_id = $genre_id;");


?>