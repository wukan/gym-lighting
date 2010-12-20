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

    get_all_lighting_status();
});

function get_all_lighting_status() {
    if (ajax)
       ajax.abort();
    var params = {'group_name': 'KanAllLights'};
    ajax = $.get('get-group-devices-statuses.php', params, function(response) {
        for (var i = 0; i < 36; i += 1) {
            var light_status = response[i][1];
            if ((i + 1) < 10) {
                var light_id = '#lighting0' + (i + 1);      
            } else {
                var light_id = '#lighting' + (i + 1);
            }
            if (light_status == '0') {
                $(light_id).text('OFF');
                $(light_id).removeClass();
                $(light_id).addClass('off');
            } else if (light_status == '1') {
                $(light_id).text('LOW');
                $(light_id).removeClass();
                $(light_id).addClass('low');
            } else if (light_status == '2') {
                $(light_id).text('MED');
                $(light_id).removeClass();
                $(light_id).addClass('medium');
            } else {
                $(light_id).text('HI'); 
                $(light_id).removeClass();
                $(light_id).addClass('high');
            }
        }
    });
    var timer = setTimeout('get_all_lighting_status()', 3000);
};

