<?php
use fileuploader\server\FileUploader;
use phpformbuilder\Form;
use phpformbuilder\Validator\Validator;

define('ROOT', rtrim($_SERVER['DOCUMENT_ROOT'], DIRECTORY_SEPARATOR));

/* =============================================
    start session and include form class
============================================= */

session_start();
include_once ROOT . '/phpformbuilder/Form.php';

// include the fileuploader
include_once ROOT . '/phpformbuilder/plugins/fileuploader/server/class.fileuploader.php';

/* =============================================
    validation if posted
============================================= */

if ($_SERVER["REQUEST_METHOD"] == "POST" && Form::testToken('cv-submission-form') === true) {
    // create validator & auto-validate required fields
    $validator = Form::validate('cv-submission-form');

    // additional validation
    $validator->email()->validate('user-email');

    // check for errors
    if ($validator->hasErrors()) {
        $_SESSION['errors']['cv-submission-form'] = $validator->getAllErrors();
    } else {
        /* Send email with attached file(s) */

        $path = ROOT . '/file-uploads/';
        $attachments = array();
        if (isset($_POST['cv']) && !empty($_POST['cv'])) {
            $cv = FileUploader::getPostedFiles($_POST['cv']);
            foreach ($cv as $f) {
                $attachments[] = $path . $f['file'];
            }
            $attachments = implode(', ', $attachments);
        }

        $email_config = array(
            'sender_email'    => 'contact@phpformbuilder.pro',
            'sender_name'     => 'Php Form Builder',
            'recipient_email' => addslashes($_POST['user-email']),
            'subject'         => 'Php Form Builder - CV Submission Form',
            'attachments'    =>  $attachments,
            'filter_values'   => 'cv-submission-form, cv'
        );
        $sent_message = Form::sendMail($email_config);
        Form::clear('cv-submission-form');
    }
}

/* ==================================================
    The Form
================================================== */

$form = new Form('cv-submission-form', 'horizontal', 'novalidate', 'bs3');
// $form->setMode('development');
$form->setCols(3, 9);
$form->startFieldset('CV Submission');
$form->addHtml('<h3>Do you want to work with us? <small>Please fill in your details below</small>.</h3><p>&nbsp;</p>');
$form->addIcon('user-name', '<span class="glyphicon glyphicon-user"></span>', 'before');
$form->addInput('text', 'user-name', '', 'Name', 'required');
$form->addIcon('user-first-name', '<span class="glyphicon glyphicon-user"></span>', 'before');
$form->addInput('text', 'user-first-name', '', 'Firstname', 'required');
$form->addIcon('user-email', '<span class="glyphicon glyphicon-envelope"></span>', 'before');
$form->addInput('email', 'user-email', '', 'Email', 'required');
$form->addInput('text', 'position-applying-for', '', 'Position Applying For');
$form->addPlugin('tinymce', '#additional-information', 'contact-config');
$form->addTextarea('additional-information', '', 'Additional Information');

$form->addHelper('3 files max. Accepted File Types : .pdf, .doc[x], .xls[x], .txt', 'cv');

// reload the previously posted file if the form was posted with errors
$current_file = '';
if (isset($_POST['cv']) && !empty($_POST['cv']) && isset($_SESSION['errors']['cv-submission-form']) && !empty($_SESSION['errors']['cv-submission-form'])) {
    $posted_file = FileUploader::getPostedFiles($_POST['cv']);
    $current_file_path = ROOT . '/file-uploads/';
    $current_file_name = $posted_file[0]['file'];
    if (file_exists($current_file_path . $current_file_name)) {
        $current_file_size = filesize($current_file_path . $current_file_name);
        $current_file_type = mime_content_type($current_file_path . $current_file_name);
        $current_file = array(
            'name' => $current_file_name,
            'size' => $current_file_size,
            'type' => $current_file_type,
            'file' => '/file-uploads/' . $current_file_name, // url of the file
            'data' => array(
                'listProps' => array(
                'file' => $current_file_name
                )
            )
        );
    }
}

$fileUpload_config = array(
    'xml'           => 'drag-and-drop',
    'upload_dir'    => '../../../../../file-uploads/', // the directory to upload the files. relative to phpformbuilder/plugins/fileuploader/default/php/ajax_upload_file.php
    'limit'         => 3, // max. number of files
    'file_max_size' => 2, // each file's maximal size in MB {null, Number}
    'extensions'    => ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'txt'],
    'debug'         => true // log the result in the browser's console and shows an error text on the page if the uploader fails to parse the json result.
);
$form->addFileUpload('file', 'cv', '', 'Upload your CV <br>&amp; Other Testmonials <br>(e.g Certificates)', 'required', $fileUpload_config, $current_file);

$form->addBtn('submit', 'submit-btn', 1, 'Submit CV', 'class=btn btn-success ladda-button, data-style=zoom-in');
$form->endFieldset();

// jQuery validation
$form->addPlugin('formvalidation', '#cv-submission-form');
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
    <?php $form->printIncludes('css'); ?>
    
    <style>

#faq .card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
    height:auto;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: .25rem;
  margin-bottom: 30px;
  border: 0;
}
#faq .card .card-header {
  border: 0;
  -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
          box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
  border-radius: 2px;
  padding: 0;
}

#faq .card .card-header .btn-header-link {
  color: #fff;
  display: block;
  text-align: left;
  background: #1cafd8;
  color: #222;
  padding: 20px;
    font-weight:bold;
}

#faq .card .card-header .btn-header-link:after {
  content: "\f107";
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  float: right;
}

#faq .card .card-header .btn-header-link.collapsed {
  background: #1cafd8;
  color: #fff;
}

#faq .card .card-header .btn-header-link.collapsed:after {
  content: "\f106";
}

#faq .card .collapsing {
  background: #f6f9fd;
  line-height: 30px;
      text-align: left;
}

#faq .card .collapse {
  border: 0;
      text-align: left;
}

#faq .card .collapse.show {
  background: #f6f9fd;
  line-height: 30px;
  color: #222;
    text-align: left;
}
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
              <li><a href="careers.html">Job Openings</a></li>
              
              <li ><a href="contact.html">Contact information</a></li>
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
        <h2  data-aos="fade-up"><center>Join Our Team</center></h2><br>
        <h5   data-aos="fade-up"><center>Current Job Vacancies</center></h5>
        <br>
		<div class="accordion" id="faq"   data-aos="fade-up">
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

    
    <!--========Upload resume========-->
    <section id="resume" class="section-bg">
    <h1 class="text-center">Php Form Builder - CV Submission Form<br><small>with File upload and Rich Text Editor</small></h1>
    <div class="container">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <?php
            if (isset($sent_message)) {
                echo $sent_message;
            }
            $form->render();
            ?>
            </div>
        </div>
        <!-- jQuery -->
        <script src="//code.jquery.com/jquery.min.js"></script>
        <!-- Bootstrap JavaScript -->
        <script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <?php
            $form->printIncludes('js');
            $form->printJsCode();
        ?>
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

  <div id="preloader"></div>
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
  <script src="assets/vendor/counterup/counterup.min.js"></script>
  <script src="assets/vendor/venobox/venobox.min.js"></script>
  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>
 <script type="text/javascript">
$(document).ready(function(){
    $("#myCarousel").carousel();
})
</script>
  
    <script>
    (function() {
    'use strict';
    window.addEventListener('load', function() {
      var form = document.getElementById('needs-validation');
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    }, false);
  })();
    </script>
</body>

</html>