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
          <div id="tips-header">WEST GYM<br />LIGHTING CONTROLS</div>
          <div id="tips-content">
            <h3>Tips For Use</h3>
            <ol>
              <li>Lights are available by Half-Court</li>
              <li>Please choose only with what you need for play</li>
              <li>Turning lights On/Off takes <span>5 to 15 seconds</span></li>
              <li>Wait <span>30s</span> between operations on same lights</li>
              <li>Lights remain on while you use the count</li>
              <li>Please turn off lights when done</li>
              <li>Questions? Ask us at <span>Kan.Wu@dartmouth.edu</span></li>
            </ol>
          </div>
          <br class="clear" />
        </div>

        <div id="courts">
          <div id="court-northwest" class="court top light-off">
            <div class="court-content">
              <p>WEST COURT TOP</p>
              <div class="court-img"></div>
              <div class="switch"></div>
            </div>
            <div id="loader-northwest" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-northwest" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <div id="court-northeast" class="court top light-off">
            <div class="court-content">
              <p>EAST COURT TOP</p>
              <div class="court-img"></div>
              <div class="switch"></div>
            </div>
            <div id="loader-northeast" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-northeast" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <div id="court-southwest" class="court bottom light-off">
            <div class="court-content">
              <div class="court-img"></div>
              <div class="switch"></div>
              <p>WEST COURT BOT</p>
            </div>
            <div id="loader-southwest" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-southwest" class="error">
              <p>please wait 30s for next operation</p>
            </div>
          </div>
          
          <div id="court-southeast" class="court bottom light-off">
            <div class="court-content">
              <div class="court-img"></div>
              <div class="switch"></div>
              <p>EAST COURT BOT</p>
            </div>
            <div id="loader-southeast" class="loader">
              <p>WORKING......</p>
              <img src="img/loader.gif" alt="loader" />
            </div>
            <div id="error-southeast" class="error">
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

