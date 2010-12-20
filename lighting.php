<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Gym Lighitng Status</title>
    <link href="css/yuan-lighting.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/alun-lighting.js"></script>
  </head>

  <body>
    <div id="container">
      <div id="header">
        <h1>West Gym Lighting Status</h1>
      </div>

      <div id="content">
        <div id="lightings">
          <?php
            for ($i = 1; $i <= 36; $i++) {
          ?>
            <div id="lighting<?=($i < 10) ? '0'.$i : $i?>" class="off"><p>OFF</p></div>
          <?php } ?>
        </div> 
      </div>

      <div id="footer">
        <h2>by alunwk</h2>
      </div>
  </body>
</html>
