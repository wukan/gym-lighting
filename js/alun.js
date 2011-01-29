var ajax = null;

$(document).ready(function() {
    $(".court").click(function() {
        var group_name = '';
        var mode = '-1';
        if ($(this).attr('id') == 'court-northwest') {
            group_name = 'NorthwestLights';          
        } else if ($(this).attr('id') == 'court-northeast') {
            group_name = 'NortheastLights';
        } else if ($(this).attr('id') == 'court-southwest') {
            group_name = 'SouthwestLights';
        } else if ($(this).attr('id') == 'court-southeast') {
            group_name = 'SoutheastLights';
        } 

        if ($(this).hasClass('light-off')) {
            mode = '1';
        } else {
            mode = '0';
        }

        if (group_name != '' && mode != '-1') {
            // Set group's lights' status 
            set_group_mode(group_name, mode, $(this).attr('id'));
        }
    });

    check_all_lighting_status();
    setInterval('flash_text()', 2500);
});

function check_all_lighting_status() {
    // check northwest court
    check_group_lighting_status('NorthwestLights', '#court-northwest');
    check_group_lighting_status('NortheastLights', '#court-northeast');
    check_group_lighting_status('SouthwestLights', '#court-southwest');
    check_group_lighting_status('SoutheastLights', '#court-southeast');
    setTimeout("check_all_lighting_status()", 2000);
}

function set_group_mode(group_name, mode, group_id) {
    var params = {'group_name': group_name, 'mode': mode};
    $.get('set-group-mode.php', params, function(response) {
        if ("error" in response) {
          if (response['error'] == '1') {
            var waiting = response['waiting'].toString();
            
            if (group_id == 'court-northwest') {
              $('#court-northwest').fadeTo(400, 0.5);
              $('#error-northwest').fadeIn();
              $('#error-northwest > p').text('please wait ' + waiting + 's for next operation');
              setTimeout('$("#error-northwest").fadeOut()', 3000);
              setTimeout('$("#court-northwest").fadeTo(400, 1)', 3000);
            } else if (group_id == 'court-northeast') {
              $('#court-northeast').fadeTo(400, 0.5);
              $('#error-northeast').fadeIn();
              $('#error-northeast > p').text('please wait ' + waiting + 's for next operation');
              setTimeout('$("#error-northeast").fadeOut()', 3000);
              setTimeout('$("#court-northeast").fadeTo(400, 1)', 3000);
            } else if (group_id == 'court-southwest') {
              $('#court-southwest').fadeTo(400, 0.5);
              $('#error-southwest').fadeIn();
              $('#error-southwest > p').text('please wait ' + waiting + 's for next operation');
              setTimeout('$("#error-southwest").fadeOut()', 3000);
              setTimeout('$("#court-southwest").fadeTo(400, 1)', 3000);
            } else if (group_id == 'court-southeast') {
              $('#court-southeast').fadeTo(400, 0.5);
              $('#error-southeast').fadeIn();
              $('#error-southeast > p').text('please wait ' + waiting + 's for next operation');
              setTimeout('$("#error-southeast").fadeOut()', 3000);
              setTimeout('$("#court-southeast").fadeTo(400, 1)', 3000);
            }
          }
        } else {
          if (group_id == 'court-northwest') {
            $('#court-northwest').fadeTo(400, 0.5); 
            $('#loader-northwest').fadeIn();
            setTimeout('$("#loader-northwest").fadeOut()', 3000);
            setTimeout('$("#court-northwest").fadeTo(400, 1)', 3000);
          } else if (group_id == 'court-northeast') {
            $('#court-northeast').fadeTo(400, 0.5);
            $('#loader-northeast').fadeIn();
            setTimeout('$("#loader-northeast").fadeOut()', 3000);
            setTimeout('$("#court-northeast").fadeTo(400, 1)', 3000);
          } else if (group_id == 'court-southwest') {
            $('#court-southwest').fadeTo(400, 0.5);
            $('#loader-southwest').fadeIn();
            setTimeout('$("#loader-southwest").fadeOut()', 3000);
            setTimeout('$("#court-southwest").fadeTo(400, 1)', 3000);
          } else if (group_id == 'court-southeast') {
            $('#court-southeast').fadeTo(400, 0.5);
            $('#loader-southeast').fadeIn();
            setTimeout('$("#loader-southeast").fadeOut()', 3000);
            setTimeout('$("#court-southeast").fadeTo(400, 1)', 3000);
          } 
          ; 
        }
    });
}

function check_group_lighting_status(group_name, group_id) {
    var params = {'group_name': group_name};
    $.get('get-group-devices-statuses.php', params, function(response) {
        var group_lighting_status = true;
        var light_status;
        for (i in response) {
            if (response[i][1] == '0') {
                group_lighting_status = false;
                break;
            }
        }
        if (group_lighting_status) {
            $(group_id).removeClass('light-off');
            $(group_id).addClass('light-on');
            $(group_id + ' p.court-text').text('DO NOT FORGET TO TURN OFF');
        } else {
            $(group_id).removeClass('light-on');
            $(group_id).addClass('light-off');
            $(group_id + ' p.court-text').text('TOUCH TO TURN ON');
        }
    });
}

function flash_text() {
    if ($('#court-northwest').hasClass('light-on')) {
        $('#court-northwest p.court-text').fadeTo(750, 0.3);
        setTimeout("$('#court-northwest p.court-text').fadeTo(750, 1)", 1000);
    }
    if ($('#court-northeast').hasClass('light-on')) {
        $('#court-northeast p.court-text').fadeTo(750, 0.3);
        setTimeout("$('#court-northeast p.court-text').fadeTo(750, 1)", 1000);
    }
    if ($('#court-southwest').hasClass('light-on')) {
        $('#court-southwest p.court-text').fadeTo(750, 0.3);
        setTimeout("$('#court-southwest p.court-text').fadeTo(750, 1)", 1000);
    }
    if ($('#court-southeast').hasClass('light-on')) {
        $('#court-southeast p.court-text').fadeTo(750, 0.3);
        setTimeout("$('#court-southeast p.court-text').fadeTo(750, 1)", 1000);
    }

}

