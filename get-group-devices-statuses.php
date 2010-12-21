<?php
  require_once('api.php');

  if (empty($_REQUEST['group_name'])) {
    echo 'parameter "group_name" missing';
  } else {
    $group_name = trim($_REQUEST['group_name']);
    $result = callApi('GetGroupDevicesStatuses',
                      array('GroupName' => $group_name)
              );
    $lights_array = explode(';', $result);
    for ($i = 0; $i < count($lights_array); $i += 1) {
      $lights_array[$i] = explode(',', $lights_array[$i]);
    }
    header('Content-Type: application/json');
    echo json_encode($lights_array);
  }
?>
