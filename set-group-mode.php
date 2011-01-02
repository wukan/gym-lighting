<?php
  session_start();
  require_once('api.php');

  if (!isset($_REQUEST['group_name'])) {
    echo 'parameter "group_name" missing';
  } else if (!isset($_REQUEST['mode'])) {
    echo 'parameter "mode" missing';
  } else {
    $group_name = trim($_REQUEST['group_name']);
    $mode = trim($_REQUEST['mode']);

    $now = time();
    if (isset($_SESSION[$group_name]) && (($now - $_SESSION[$group_name]) < 60)) {
      // something happens here to prevent calling SetGroupMode
      header('Content-Type: application/json');
      echo json_encode(2);
    } else {
      $result = callApi('SetGroupMode',
                         array('GroupName' => $group_name,
                               'Mode' => $mode)
                );

      header('Content-Type: application/json');
      if ($result == 'Success!') {
        echo json_encode(1);
        // update the previous update time
        $_SESSION[$group_name] = $now;
      } else {
        echo json_encode(0);
      }
    }
  }
?>
