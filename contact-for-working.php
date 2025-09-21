
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST) && !empty($_POST)){
  $firstname = strip_tags(trim($_POST['first_name']));
  $lastname =  strip_tags(trim($_POST['last_name']));
  $company_name = strip_tags(trim($_POST['company_name']));
  $phone = strip_tags(trim($_POST['phone_no']));
  $email = strip_tags(trim($_POST['email']));
  $message = strip_tags(trim($_POST['desc']));

  $mail = new PHPMailer();

  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'geminixport@gmail.com';                 // SMTP username
  $mail->Password = 'joeufvqiuphjvrit';                           // SMTP password
  $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
  $mail->Port       = 587; 

  $mail->From = 'info@geminiExport.com';
  $mail->FromName = 'Gemini Export';
  $mail->addAddress('gemini@geminiexports.in', 'Gemini Export');     // Add a recipient
   $mail->addCC('shahmihir1902@gmail.com');
  $mail->isHTML(true);                                  // Set email format to HTML

  $mail->Subject = 'Gemini exports website - contact';
  $mail->Body    = "<b>Name: $firstname $lastname <br> Company Name : $company_name <br>  Email: $email <br> Phone: $phone </b><br><br> Your Message: $message";
  // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  if($mail->send()) {
      $msg = "Email sent successfully";
  }else {
    $msg = "Email sent unsuccessfull Mail Error:$mail->ErrorInfo";
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>:: GEMINI EXPORTS ::</title>
<meta content="" name="description">
<meta content="" name="keywords">

<!-- Favicons -->
<link href="assets/img/favicon.png" rel="icon">
<link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

<!-- Vendor CSS Files -->
<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

<!-- Template Main CSS File -->
<link href="assets/css/style.css" rel="stylesheet">

<!-- Font Awesome 5 -->
<link href="assets/vendor/fontawesome/css/fontawesome-all.min.css" rel="stylesheet">
<!-- Fables Icons -->
<link href="assets/css/fables-icons.css" rel="stylesheet">
</head>

<body>

<section class="section section-bg">
  <div class="container" data-aos="fade-up">
    <h2>Business Enquiries</h2>
    <?php
      if(isset($msg)){
        echo $msg;
      }
    ?>
    <br/>
    <div class="row overflow-hidden">
      <div class="col-12 wow slideInLeft" data-wow-duration="1.5s">
        <form class="" action="" method="post" id="frmUpload">
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control p-3 rounded-0" name="first_name"  placeholder="First Name">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control p-3 rounded-0" name="last_name" placeholder="Last Name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="text" class="form-control p-3 rounded-0" name="company_name" placeholder="Company Name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input type="email" class="form-control p-3 rounded-0" name="email" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
              <input type="text" class="form-control p-3 rounded-0" name="phone_no" placeholder="Phone Number">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <textarea class="form-control p-3 rounded-0" name="desc" placeholder="Reason for getting in touch" rows="4"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 text-center">
              <button type="submit" class="btn-get-started animate__animated animate__fadeInUp scrollto">Submit Enquiry</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



<!-- Vendor JS Files --> 
<!--<script src="assets/vendor/jquery/jquery.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
<script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script> 
<script src="assets/vendor/php-email-form/validate.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

<script>
  $(document).ready(function(){
    $('#frmUpload').validate({
			errorPlacement: function(error, element) {
				error.insertAfter(element);
			},
			errorClass: "text-danger",
			rules: {
        first_name : "required",
        last_name : "required",
        company_name : "required",
        email : {
					required: true,
      				email: true
				},
        phone_no :{
					required: true,
      		number: true,
					maxlength : 10,
					minlength : 10,
				},
        desc : "required",
			},
			submitHandler: function(form) {
				$(form)[0].submit();
			}
		});
  });  
</script>

<!-- Template Main JS File --> 
</body>
</html>