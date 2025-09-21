
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
   $mail->addCC('priorionline@gmail.com');
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
<link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet">
<link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
<link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
<link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
<link href="assets/vendor/aos/aos.css" rel="stylesheet">

<!-- Template Main CSS File -->
<link href="assets/css/style.css" rel="stylesheet">

<!-- Font Awesome 5 -->
<link href="assets/vendor/fontawesome/css/fontawesome-all.min.css" rel="stylesheet">
<!-- Fables Icons -->
<link href="assets/css/fables-icons.css" rel="stylesheet">
</head>

<style>

</style>
</head>

<body>
<!-- ======= Header ======= -->
<header id="header" class="fixed-top">
  <div class="container d-flex align-items-center">
    <h1 class="logo mr-auto"><a href="index.html"><img src="assets/img/gemini-logo.png"  alt=""/></a></h1>
    <!-- Uncomment below if you prefer to use an image logo --> 
    <!-- <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
    
    <nav class="nav-menu d-none d-lg-block">
      <ul>
        <li ><a href="index.html">HOME</a></li>
        <li> <a href="who-we-are.html">WHO WE ARE</a> </li>
        <li ><a href="products.html">PRODUCTS</a></li>
        <li class="drop-down"><a href="#">OUR REACH</a>
          <ul>
            <li><a href="manufacturers.html">Manufacturers</a></li>
            <li><a href="worldwide-clients.html">Worldwide Clients</a></li>
            <li><a href="renowned-manufacturers.html">Renowned Manufacturers</a></li>
          </ul>
        </li>
        <li class="drop-down active"><a href="#">CONTACT US</a>
          <ul>
            <li><a href="upload-resume.php">Job Openings</a></li>
            <li ><a href="contact.php">Contact information</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <!-- .nav-menu --> 
    
    <!--<a href="#about" class="get-started-btn">Get Started</a>--> 
    
  </div>
</header>
<!-- End Header -->

<section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <h1 class="mb-5">CONTACT US</h1>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section products-pg">
  <div class="container">
    <h3>
      <center>
        Key Contact Section
      </center>
    </h3>
    <div class="row my-4 my-md-5 overflow-hidden">
      <div class="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0"  data-aos="fade-in"> <span class="fables-iconmap-icon fa-2x fables-second-background-color text-white rounded-circle d-inline-block p-4"></span>
        <h5 class="font-16 semi-font fables-second-text-color my-3">Address Information</h5>
        <p class="font-14 fables-forth-text-color"> Gemini Exports<br>
          Tower A-704, Marathon Futurex, <br>
          N.M.Joshi Marg, Mafatlal Mills Compound, <br>
          Lower Parel, Mumbai – 400013. </p>
      </div>
      <div class="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0" data-aos="fade-in"> <span class="fables-iconphone fa-2x fables-second-background-color text-white rounded-circle d-inline-block p-4"></span>
        <h5 class="font-16 semi-font fables-second-text-color my-3">Phone Number &amp; Email</h5>
        <p class="font-14 fables-forth-text-color">+ 91-22-49798100</p>
        <p class="font-14 fables-forth-text-color"><a href="mailto:gemini@geminiexports.in">gemini@geminiexports.in</a></p>
      </div>
      <div class="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0"  data-aos="fade-in"> <span class="fables-iconshare-icon fa-2x fables-second-background-color text-white rounded-circle d-inline-block p-4"></span>
        <h5 class="font-16 semi-font fables-second-text-color my-3">Stay In Touch</h5>
        <a href="#" target="_blank"><i class="fab fa-linkedin fa-2x fables-forth-text-color   fa-fw"></i></a> </div>
    </div>
  </div>
</section>
<section class="section section-bg">
  <div class="container">
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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.578303019887!2d72.82909521489988!3d18.99422228713487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef3836311c1%3A0x8cfa9225e0aa9bca!2sMarathon%20Futurex!5e0!3m2!1sen!2sin!4v1635874673684!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

<!-- ======= Footer ======= -->
<footer id="footer">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="footer-info"> <img src="assets/img/gemini-logo-grey.png" width="154" height="118" alt=""/> </div>
        </div>
        <div class="col-lg-4 col-md-6 footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="who-we-are.html">Who We Are</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="products.html">Products</a></li>
            <li><i class="bx bx-chevron-right"></i> <a href="manufacturers.html">Our Reach</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 footer-newsletter">
          <h3>CONTACT US</h3>
          <p>Tower A-704, Marathon Futurex,&nbsp;<br>
            N.M.Joshi Marg, Mafatlal Mills Compound,&nbsp;<br>
            Lower Parel, Mumbai – 400013 </p>
          <p> <strong>Phone:</strong> + 91-22-49798100<br>
            <strong>Email:</strong> <a href="mailto:gemini@geminiexports.in">gemini@geminiexports.in</a><br/>
          </p>
          <div class="social-links mt-3"> <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a> </div>
          <br>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="copyright"> &copy; Copyright <strong><span>Gemini Exports</span></strong>. All Rights Reserved </div>
      <div class="credits"> </div>
    </div>
  </div>
</footer>
<!-- End Footer -->
    
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a> 
    
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

    <script src="assets/vendor/aos/aos.js"></script> 
<!-- Template Main JS File --> 
 
</body>
</html>