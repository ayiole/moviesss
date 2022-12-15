<?php

require_once("connect.php");


$path1 = 'image_url_poster/' . time() . $_FILES['upfile']['name'];

move_uploaded_file($_FILES['upfile']['tmp_name'], $path1);

$path2 = 'image_url_side/' . time() . $_FILES['upfile2']['name'];

move_uploaded_file($_FILES['upfile2']['tmp_name'], $path2);

$genres = explode(",", $_POST['genres']);
$name = $_POST['name'];
$year = $_POST['year'];
$producer = $_POST['producer'];
$duration = $_POST['duration'];
$description = $_POST['description'];

header("Content-Type: application/json");
echo json_encode($_POST);

$movies = mysqli_query($connect, "INSERT INTO `movie`(`movie_id`, `name`, `year`, `producer`, `duration`, `description`, `image_url_poster`, `image_url_side`)
     VALUES (NULL,'$name','$year','$producer','$duration','$description','$path1','$path2')");


$lastMovieId = $connect->insert_id;

for ($i = 0; $i < count($genres); $i++) {

  $addMovieToGenre = mysqli_query($connect, "INSERT INTO `genre_movie`(`id`, `movie_id`, `genre_id`)
        VALUES (NULL,'$lastMovieId','$genres[$i]')");
}
