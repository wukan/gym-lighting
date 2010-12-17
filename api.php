<?php
  function callApi($url, $params = array()) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Connection: Keep-Alive')); 
    curl_setopt($ch, CURLOPT_HTTPHEADER, array( 'Expect:' ) );
    curl_setopt($ch, CURLOPT_URL, API_ROOT . $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
  }
?>
