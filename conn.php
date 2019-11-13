<?php
    $conn = new mysqli("localhost", "root", "", "restful_db");

    if($conn->connect_error){
        die("Koneksi Gagal");
    }
?>