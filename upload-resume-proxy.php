<?php
// CORS-enabled proxy for development testing
// This file forwards requests to the production PHP backend

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Forward the POST data and files to the production endpoint
    $url = 'https://geminiexports.in/upload-resume.php';

    // Initialize cURL
    $ch = curl_init();

    // Prepare POST data
    $postData = array();
    foreach ($_POST as $key => $value) {
        $postData[$key] = $value;
    }

    // Handle file uploads
    foreach ($_FILES as $key => $file) {
        if ($file['error'] == UPLOAD_ERR_OK) {
            $postData[$key] = new CURLFile($file['tmp_name'], $file['type'], $file['name']);
        }
    }

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    // Execute request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if (curl_error($ch)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to forward request: ' . curl_error($ch)]);
    } else {
        http_response_code($httpCode);
        echo $response;
    }

    curl_close($ch);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>