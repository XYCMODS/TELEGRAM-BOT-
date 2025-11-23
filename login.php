<?php
include 'config.php';
$msg = "";
if($_POST){
 $users=json_decode(file_get_contents($users_file),true);
 foreach($users as $u){
  if($u['email']==$_POST['email'] && $u['password']==$_POST['password']){
   $msg="Login Successful!";
  }
 }
 if($msg=="") $msg="Invalid Credentials!";
}
include 'header.php';
?>
<h2>Login</h2>
<p><?php echo $msg; ?></p>
<form method="post">
<input type="email" name="email" placeholder="Email">
<input type="password" name="password" placeholder="Password">
<button type="submit">Login</button>
</form>
<?php include 'footer.php'; ?>