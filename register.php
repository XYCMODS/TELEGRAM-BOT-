<?php
include 'config.php';
$msg = "";
if($_POST){
 $users=json_decode(file_get_contents($users_file),true);
 $users[]=["name"=>$_POST['name'],"email"=>$_POST['email'],"password"=>$_POST['password']];
 file_put_contents($users_file,json_encode($users));
 $msg="Registration Successful!";
}
include 'header.php';
?>
<h2>Register</h2>
<p><?php echo $msg; ?></p>
<form method="post">
<input type="text" name="name" placeholder="Full Name">
<input type="email" name="email" placeholder="Email">
<input type="password" name="password" placeholder="Password">
<button type="submit">Register</button>
</form>
<?php include 'footer.php'; ?>