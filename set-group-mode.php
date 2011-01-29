<?php
  session_start();
  require_once('api.php');

  define("INTERVAL", 15);

  if (!isset($_REQUEST['group_name'])) {
    echo 'parameter "group_name" missing';
  } else if (!isset($_REQUEST['mode'])) {
    echo 'parameter "mode" missing';
  } else {
    $group_name = trim($_REQUEST['group_name']);
    $mode = trim($_REQUEST['mode']);

    $now = time();
    if (isset($_SESSION[$group_name]) && (($now - $_SESSION[$group_name]) < INTERVAL)) {
      // something happens here to prevent calling SetGroupMode
      $waiting = INTERVAL - ($now - $_SESSION[$group_name]);
      header('Content-Type: application/json');
      echo json_encode(array('error' => 1, 'waiting' => $waiting));
    } else {
      $result = callApi('SetGroupMode',
                         array('GroupName' => $group_name,
                               'Mode' => $mode)
                );

      header('Content-Type: application/json');
      if ($result == 'Success!') {
        echo json_encode(array('success' => 1));
        // update the previous update time
        $_SESSION[$group_name] = $now;
      } else {
        echo json_encode(0);
      }
    }
  }
?>
