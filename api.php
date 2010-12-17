<?php
  define('BASE_URL', 'https://www.corisecs.com/GUI.php');
  define('USER', 'kurteego1');
  define('PASS', 'kurteego1');

  function callApi($func, $params = array()) {
    $uri = BASE_URL . '?Function=' . $func;
    foreach ($params as $k => $v) {
      $uri .= ('&' . $k . '=' . $v);
    }
    $uri .= ('&User=' . USER);
    $uri .= ('&Pass=' . PASS);

    $handle = fopen($uri, 'rb');
    $contents = '';
    while(!feof($handle)) {
      $contents .= fread($handle, 8192);
    }

    return $contents;
  }
?>
