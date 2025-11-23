<?php
$users_file = "users.json";
if(!file_exists($users_file)){
 file_put_contents($users_file, json_encode([]));
}
?>