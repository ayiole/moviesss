<?php

    require_once("connect.php");


    $movies = mysqli_query($connect, "select m.movie_id, name, year, producer, duration, description, image_url_poster, image_url_side,
    (SELECT GROUP_CONCAT(genress.nn SEPARATOR ', ') AS order_summary FROM (select g.name as nn from genre g inner join genre_movie gm on g.genre_id = gm.genre_id where gm.movie_id = m.movie_id) as genress) as 'genres',
    CASE
        WHEN m.movie_id in (select f.movie_id from favorites f) THEN true
        ELSE false
    END
    from movie as m;");

    $movies = mysqli_fetch_all($movies);

    header("Content-Type: application/json");
    echo json_encode($movies);


?>