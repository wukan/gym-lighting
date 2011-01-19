<?php
  define('BASE_URL', 'https://www.corisecs.com/GUI.php');
  define('USER', 'Dartmouth-westgym');
  define('PASS', 'lighting');

  function callApi($func, $params = array()) {
    $uri = BASE_URL . '?Function=' . $func;
    foreach ($params as $k => $v) {
      $uri .= ('&' . $k . '=' . $v);
    }
    $uri .= ('&User=' . USER);
    $uri .= ('&Pass=' . PASS);

    $contents = '';

    if (($handle = fopen($uri, 'rb')) === FALSE) {
      //die('cannot open the url '. $url);
      return $contents;
    } 

    while(!feof($handle)) {
      $contents .= fread($handle, 8192);
    }
    return $contents;
  }
?>
