<?php
$todos = json_decode(file_get_contents('./todolist.json'), true);

if (isset($_POST['todoinput'])) {
    $todoName = $_POST['todoinput'];
    $todos[] = ["task" => $todoName, "done" => false];
}

file_put_contents('./todolist.json', json_encode($todos, JSON_PRETTY_PRINT));

header('Content-Type: application/json');

$json = file_get_contents('./todolist.json');
echo $json;
?>