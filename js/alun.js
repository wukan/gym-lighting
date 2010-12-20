var ajax = null;

$(document).ready(function() {
    $(".court").click(function() {
        if ($(this).hasClass("light-off")) {
            $(this).removeClass("light-off");
            $(this).addClass("light-on");
        } else {
            $(this).removeClass("light-on");
            $(this).addClass("light-off");
        }
    });

    check_all_lighting_status();
});

function check_all_lighting_status() {
    // check northwest court
    setTimeout("check_group_lighting_status('KanNorthwestLights', '#court-northwest')", 1000);
    setTimeout("check_group_lighting_status('KanNortheastLights', '#court-northeast')", 2000);
    setTimeout("check_group_lighting_status('KanSouthwestLights', '#court-southwest')", 3000);
    setTimeout("check_group_lighting_status('KanSoutheastLights', '#court-southeast')", 4000);
    setTimeout("check_all_lighting_status()", 5000);
}

function check_group_lighting_status(group_name, group_id) {
    if (ajax)
        ajax.abort();
    var params = {'group_name': group_name};
    ajax = $.get('get-group-devices-statuses.php', params, function(response) {
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

