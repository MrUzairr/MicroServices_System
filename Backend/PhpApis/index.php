<?php
// Define the Python API endpoint URL
$url = 'http://127.0.0.1:5000/app_py/getbooks';

// Make an HTTP GET request to the Python API endpoint
$response = file_get_contents($url);

// Check if the request was successful
if ($response !== false) {
    // Output the response data
    echo $response;
} else {
    // Handle the case where the request failed
    echo 'Error: Unable to fetch data from the Python API';
}
?>