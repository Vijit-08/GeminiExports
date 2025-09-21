<html>
<head>
<title>Feedback form</title>
</head>
<body>
<table width="800" border="0" cellspacing="0" cellpadding="5">
  <tr>
    <td bgcolor="#00FF99">This can be regular html here.</td>
  </tr>
</table>

<?php

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$MESSAGE_BODY = "Name: ".$_POST["name"]."\n";
$MESSAGE_BODY .= "Email: ".$_POST["email"]."\n";
$MESSAGE_BODY .= "Message: ".stripslashes($_POST["message"])."\n";

if(empty($name)||empty($email))
{
	$msg =  "Please enter all details";
}

else
{
	$msg =  "Thanks for filling the feedback form";
	mail("info@priori.in","Feedback Form","Message: $MESSAGE_BODY","From: $email");
}
header("location:form-try1.html?error=$msg");
?>
</body>
</html>