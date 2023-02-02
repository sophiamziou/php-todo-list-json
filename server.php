<?php
$todos = json_decode(file_get_contents('./todolist.json'), true);

// $condition = $_POST['addTask'] ?? '';
// $condition = trim($condition);

if (isset($_POST['addTask'])) {
    $todoName = $_POST['addTask'];
    $todos[] = ["task" => $todoName, "done" => false];
}

if (isset($_POST['deleteTask'])) {
    unset($todos[$_POST['deleteTask']]);
}

file_put_contents('./todolist.json', json_encode($todos, JSON_PRETTY_PRINT));

header('Content-Type: application/json');

echo file_get_contents('./todolist.json');

?>