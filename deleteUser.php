<?php
    include 'conn.php';
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Max-Age: 1000');
    header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

    $id = $_GET['id'];

    $sql = "DELETE FROM user WHERE id=$id";

    if($conn->query($sql) == TRUE){
        $result="Hapus Data Berhasil";
    }else{
        $result="Gagal Hapus Data" . $conn->error;
    }

    echo json_encode($result);

    $conn->close();
?>