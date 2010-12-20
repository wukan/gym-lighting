var ajax = null;

$(document).ready(function() {
    $(".court").click(function() {
        var group_name = '';
        var mode = '-1';
        if ($(this).attr('id') == 'court-northwest') {
            group_name = 'KanNorthwestLights';          
        } else if ($(this).attr('id') == 'court-northeast') {
            group_name = 'KanNortheastLights';
        } else if ($(this).attr('id') == 'court-southwest') {
            group_name = 'KanSouthwestLights';
        } else if ($(this).attr('id') == 'court-southeast') {
            group_name = 'KanSoutheastLights';
        } 

        if ($(this).hasClass('light-off')) {
            mode = '3';
        } else {
            mode = '0';
        }

        if (group_name != '' && mode != '-1') {
            // Set group's lights' status 
            set_group_mode(group_name, mode);
        }
        
        if ($(this).attr('id') == 'court-northwest') {
            $('#court-northwest').fadeTo(400, 0.5); 
            $('#loader-northwest').fadeIn();
            setTimeout('$("#loader-northwest").fadeOut()', 3000);
            setTimeout('$("#court-northwest").fadeTo(400, 1)', 3000);
        } else if ($(this).attr('id') == 'court-northeast') {
            $('#court-northeast').fadeTo(400, 0.5);
            $('#loader-northeast').fadeIn();
            setTimeout('$("#loader-northeast").fadeOut()', 3000);
            setTimeout('$("#court-northeast").fadeTo(400, 1)', 3000);
        } else if ($(this).attr('id') == 'court-southwest') {
            $('#court-southwest').fadeTo(400, 0.5);
            $('#loader-southwest').fadeIn();
            setTimeout('$("#loader-southwest").fadeOut()', 3000);
            setTimeout('$("#court-southwest").fadeTo(400, 1)', 3000);
        } else if ($(this).attr('id') == 'court-southeast') {
            $('#court-southeast').fadeTo(400, 0.5);
            $('#loader-southeast').fadeIn();
            setTimeout('$("#loader-southeast").fadeOut()', 3000);
            setTimeout('$("#court-southeast").fadeTo(400, 1)', 3000);
        } 

    });

    check_all_lighting_status();
});

function check_all_lighting_status() {
    // check northwest court
    setTimeout("check_group_lighting_status('KanNorthwestLights', '#court-northwest')", 500);
    setTimeout("check_group_lighting_status('KanNortheastLights', '#court-northeast')", 1000);
    setTimeout("check_group_lighting_status('KanSouthwestLights', '#court-southwest')", 1500);
    setTimeout("check_group_lighting_status('KanSoutheastLights', '#court-southeast')", 2000);
    setTimeout("check_all_lighting_status()", 2500);
}

function set_group_mode(group_name, mode, group_id) {
    var params = {'group_name': group_name, 'mode': mode};
    $.get('set-group-mode.php', params, function(response) {
        // if fail something will happens here
    });
}

function check_group_lighting_status(group_name, group_id) {
    var params = {'group_name': group_name};
    $.get('get-group-devices-statuses.php', params, function(response) {
        var group_lighting_status = true;
        var light_status;
        for (i in response) {
            if (response[i][1] != '3') {
                group_lighting_status = false;
                break;
            }
        }
        if (group_lighting_status) {
            $(group_id).removeClass('light-off');
            $(group_id).addClass('light-on');
        } else {
            $(group_id).removeClass('light-on');
            $(group_id).addClass('light-off');
        }
    });
}

