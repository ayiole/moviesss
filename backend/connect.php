<?php
    $connect = mysqli_connect('localhost', 'root', '', 'movies');

    if (!$connect) {
        die('err database connect');
    }