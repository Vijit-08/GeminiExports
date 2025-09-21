<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

if(isset($_POST) && !empty($_POST) && isset($_FILES['filename']) && !empty($_FILES['filename'])){
  $firstname = strip_tags(trim($_POST['first_name']));
  $lastname =  strip_tags(trim($_POST['last_name']));
  $need = strip_tags(trim($_POST['need']));
  $message = strip_tags(trim($_POST['desc']));
  $file_tmp  = $_FILES['filename']['tmp_name'];
  $file_name = $_FILES['filename']['name'];

  if($_FILES['filename']['size'] < 5000001){
    $mail = new PHPMailer();

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'geminixport@gmail.com';                 // SMTP username
    $mail->Password = 'joeufvqiuphjvrit';                         // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
    $mail->Port       = 587; 
  
    $mail->From = 'info@geminiExport.com';
    $mail->FromName = 'Gemini Export';
    $mail->addAddress('hrd@geminiexports.in.', 'Gemini Export');     // Add a recipient
    $mail->addCC('priorionline@gmail.com');
  
    // $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
    $mail->addAttachment($file_tmp,$file_name);         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML
  
    $mail->Subject = 'Gemini exports website - career';
    $mail->Body    = "<b>Name: $firstname $lastname <br>  post want to apply for: $need </b><br><br> Your Message: $message";
  
    if($mail->send()) {
        $msg = "Email sent successfully";
    }else {
      $msg = "Email sent unsuccessfull Mail Error:$mail->ErrorInfo";
    }
  }else{
    $msg = "File size is greater than 5mb";
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
  <link href="assets/vendor/venobox/venobox.css" rel="stylesheet">
  <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">


  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
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
          <li > <a href="who-we-are.html">WHO WE ARE</a> </li>
          <li><a href="products.html">PRODUCTS</a></li>
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
      </nav><!-- .nav-menu -->

      <!--<a href="#about" class="get-started-btn">Get Started</a>-->

    </div>
  </header><!-- End Header -->

 <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <h1 class="mb-5">JOB OPENINGS</h1>
        </div>
      </div>
    </div>
  </div>
</section>
    
    <section class="section about-page">
	<div class="container">
        <h2><center>Join Our Team</center></h2><br>
        <h5><center>Current Job Vacancies</center></h5>
        <br>
		<div class="accordion" id="faq">
                    <div class="card">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                            aria-expanded="true" aria-controls="faq1">INTERNATIONAL MARKETING CO-ORDINATOR</a>
                        </div>

                        <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                            <div class="card-body">
                                <div class="row">
                                <div class="col-lg-6 ">
                                  <strong>Roles and Responsibilities :</strong>
                                <ul>
                                <li>Study export data and create an analysis based on delegated country and products.</li>
                                    <li>Preparing quotation against requirement to customer.</li>
                                    <li>Coordinating with the manufacturers for price, availability and delivery schedule.</li>
                                    <li>Timely order follow ups with clients, manufacturer as well as with other concerned internal departments.</li>
                                    <li>Ensure entries are created in CRM.</li>
                                    <li>Preparing basic documents to share with clients.</li>
                                    <li>Complete tasks in time and stay organized.</li>
                                    <li>Preparation and maintain order of files for respective P.O.</li>
                                    <li>Resolve client queries.</li>
                                    <li>Should be able to manage single and combined orders.</li>
                                </ul>
                                    </div>
                                    <div class="col-lg-6 ">
                                    <strong>Desired Candidate Profile :</strong>
                                <ul>
                                <li>Only candidates with a Pharmaceutical background will be accepted for an initial interview.</li>
                                    <li>Academically proficient with a Diploma in Export Management, with an experience of minimum 3-4 years</li>
                                    <li>Excellent knowledge of APIs (Active Pharmaceutical Ingredients) </li>
                                    <li>Has to be fluent in English.</li>
                                    <li>A great communicator as well as team player </li>
                                    <li>An effective leader when necessary, motivator and facilitator with exceptional interpersonal skills and strong management skills, maximizing levels of productivity under tight delivery deadlines effectively resolving conflicts.</li>
                                    <li>Quick learning ability &amp; adapt with the changing policies</li>
                                    <li>Always being a curious learner.</li>
                                    <li>Strong negotiation skills.</li>
                                    <li>Understand importance of acknowledgement.</li>
                                </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                            aria-expanded="true" aria-controls="faq2">ACCOUNTS ASSISTANT</a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-lg-6 ">
                                  <strong>Roles and Responsibilities :</strong>
                                <ul>
                                <li>Accounting in Tally (with Good Speed)</li>
                                    <li>Banking Transaction, Payments etc</li>
                                    <li>Basic Knowledge of GST/TDS &amp; TCS (basic knowledge of PF/ESIC/PT etc)</li>
                                    <li>Knowledge of MS Office &amp; well versed with EXCEL SHEET</li>
                                    <li>Person should fluently speak in English (Overall Good communication Skill)</li>
                                    <li>Minimum Experience – 2 to 5 years  </li>
                                </ul>
                                    </div>
                                    <div class="col-lg-6 ">
                                    <strong>Desired Candidate Profile :</strong>
                                <ul>
                                <li>A graduate in commerce is mandatory.</li>
                                    <li>Well versed with Tally Prime (Good Speed ) – Accounting in Tally.</li>
                                    <li>Knowledge of MS office. Advance excel knowledge a must. </li>
                                    <li>Versatility in learning.</li>
                                </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="faqhead3">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                            aria-expanded="true" aria-controls="faq3">DATA ANALYST</a>
                        </div>

                        <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                            <div class="card-body">
                             <div class="row">
                                <div class="col-lg-6 ">
                                  <strong>Roles and Responsibilities :</strong>
                                <ul>
                                <li>The role would include extraction, cleaning, reporting, analysis and visualization of data.</li>
                                    <li>Create and manage MIS reports to be shared with different stakeholders in the organization.</li>
                                    <li>Provide support to the marketing team in conducting quantitative analysis of data in enabling business decisions.</li>
                                    <li>Being the custodian of the various primary and secondary market research data, provide regular inputs to the marketing team on the market trends and product performance.</li>
                                    <li>Support in strategic planning and brand plan exercises by conducting competitor analysis, portfolio analysis, pricing analysis, profitability analysis etc.</li>
                                    <li>Data validation and attention to detail is required as the individual will be accountable for quality of all the numbers delivered through dashboards or otherwise.</li>
                                    <li>Present the findings from the analyses to the stakeholders in an effective and structured fashion.</li>
                                    <li>Able to multi task and work across teams.</li>
                                    <li>Prioritization of tasks, organised work ethics, high work efficiency are expected.</li>
                                    <li>Generate qualitative / quantitative reports that communicate the key takeaways in an easy to understand manner.</li>
                                    <li>Being the custodian of the various primary and secondary market research data, provide regular inputs to the marketing team on the market trends and product performance.</li>
                                </ul>
                                    </div>
                                    <div class="col-lg-6 ">
                                    <strong>Desired Candidate Profile :</strong>
                                <ul>
                                <li>Experience working with complex data set and in creating insights.</li>
                                    <li>Experience in analyzing with Pharma market data would be preferred.</li>
                                    <li>Experience in marketing analytics.</li>
                                    <li>Prior experience of working on CRM applications.</li>
                                    <li>Proficient in excel include pivot table, look ups .and general analysis of data.</li>
                                    <li>Structured thought process and problem solving skills are a must have.</li>
                                    <li>Ability to take complete ownership and work with minimal guidance to add value in a dynamic environment.</li>
                                    <li>Highly motivated, learning oriented and quality focused individuals would be preferred.</li>
                                </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	</div>
</section>

<section class="section section-bg">
  <div class="container" data-aos="fade-up">
    <h2>Upload your CV</h2>
    <?php
      if(isset($msg)){
        echo $msg;
      }
    ?>
    <br/>
    <div class="row">
      <div class="col-12 wow slideInLeft" data-wow-duration="1.5s">
        <form class="" id="frmUpload"  action="" method="post" enctype="multipart/form-data">
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
                    <select id="form_need" name="need" class="form-control rounded-0" required="required" data-error="Please specify which post you want to apply for">
                        <option value="">Please specify which post you want to apply for :</option>
                        <option value="International Marketing Co-ordinator">International Marketing Co-ordinator</option>
                        <option value="Accounts Assistant">Accounts Assistant</option>
                        <option value="Data Analyst">Data Analyst</option>
                    </select>
            </div>
            <div class="form-group col-md-6">
               <div class="custom-file mb-3">
                  <input type="file" class="custom-file-input" id="customFile" name="filename">
                  <label class="custom-file-label" for="customFile">Upload your CV</label>
                </div>
              </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12">
              <textarea class="form-control p-3 rounded-0" name="desc" placeholder="Why do you want to work with Gemini Exports?" rows="4"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 text-center">
              <button type="submit" class="btn-get-started animate__animated animate__fadeInUp scrollto">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
            <img src="assets/img/gemini-logo-grey.png" width="154" height="118" alt=""/> </div>
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
                <strong>Email:</strong> <a href="mailto:hrd@geminiexports.in">hrd@geminiexports.in</a><br/></p>
              <div class="social-links mt-3">
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
          </div>
<br>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Gemini Exports</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
      </div>
        </div></div>
  </footer><!-- End Footer -->
    
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

<!-- Vendor JS Files --> 
<!--<script src="assets/vendor/jquery/jquery.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script> 
<script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script> 
<script src="assets/vendor/php-email-form/validate.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>
     <script src="assets/vendor/aos/aos.js"></script>

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
        need : "required",
        desc : "required",
        filename : "required",
			},
			submitHandler: function(form) {
				$(form)[0].submit();
			}
		});
  });  
</script>

<!-- Template Main JS File --> 
    <script>
// Add the following code if you want the name of the file appear on select
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
</script>
</body>
</html>

<!-- //Here are the ftp details :
Username :        geminiexports
Password :          ThCVbgpxTpN8
Ftp address : geminiexports.in
Use SFTP on port 22 -->