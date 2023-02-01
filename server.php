<?php
$json = file_get_contents('./todolist.json');
$data = json_decode($json);
var_dump($data)
    ?>