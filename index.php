<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
    <title>Gym Lighting Control</title>
    <link href="css/yuan.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/alun.js"></script>
  </head>
  
  <body>
    <div id="wrapper">
      <div id="header"></div> 

      <div id="content">
        <div id="tips">
          <div id="tips-header">Tips for use</div>
          <div id="tips-content">
            <ol>
              <li>Turning lights on/off can take a bit of the time.</li>
              <li>Wait <span>30s</span> between operations on the same lights.</li>
              <li>Questions? Ask us at <span>xx@dartmouth.edu</span>.</li>
            </ol>
          </div>
          <br class="clear" />
        </div>

        <div id="courts">
          <div id="court-northwest" class="court light-off">
            <div class="court-content">
              <p>WEST COURT TOP</p>
              <div class="switch"></div>
              <div class="court-img"></div>
            </div>
            <div id="loader-northwest" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-northwest" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <div id="court-northeast" class="court light-off">
            <div class="court-content">
              <p>EAST COURT TOP</p>
              <div class="switch"></div>
              <div class="court-img"></div>
            </div>
            <div id="loader-northeast" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-northeast" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <div id="court-southwest" class="court light-off">
            <div class="court-content">
              <p>WEST COURT BOT</p>
              <div class="switch"></div>
              <div class="court-img"></div>
            </div>
            <div id="loader-southwest" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-southeast" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <div id="court-southeast" class="court light-off">
            <div class="court-content">
              <p>EAST COURT BOT</p>
              <div class="switch"></div>
              <div class="court-img"></div>
            </div>
            <div id="loader-southeast" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-southwest" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <br class="clear" />
        </div>

        <div id="here"></div>
      </div>

      <div id="footer">
      </div>
    </div>
  </body>

</html>

