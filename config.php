<?php
    define('DB_NAME', 'user');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_HOST', 'localhost');

    $kon = mysqli_connect("localhost", "root", "", "user") or die(mysqli_error());
?>
