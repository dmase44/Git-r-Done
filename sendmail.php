<?php
	if(isset($_POST['name']) && !empty($_POST['name'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phonenum = $_POST['phonenum'];
		$message = $_POST['message'];
		$finalMessage = "Name: ".$name.
		" || Email: ".$email.
		" || Phone Number: ".$phonenum.
		" || Message: ".$message;
//Insert your email here
		mail("dmase@iteka.com", 'Message received from website contact form.', $finalMessage);
		header("Location: index.html");
	}
?>
