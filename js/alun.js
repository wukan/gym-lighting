var ajax = null;

var api_uri = 'https://www.corisecs.com/GUI.php';
var username = 'kurteego1';
var password = 'kurteego1';

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

    get_lighting('KanAllLights');
});

get_lighting = function(group_name) {
    if (ajax)
       ajax.abort();
    var params = {'GroupName': group_name,
              'Function': 'GetGroupDevicesStatuses',
              'User': username,
              'Pass': password};
    ajax = $.get(api_uri, params, function(response) {
        var lights_array = response.split(';');
        for (var i = 0; i < 36; i += 1) {
            var light_status = lights_array[i].split(',')[1];
            if ((i + 1) < 10) {
                var light_id = 'lighting0' + i;      
            } else {
                var light_id = 'lighting' + i;
            }
            if (light_status == '0')
                $(light_id).text('OFF');
            else if (light_status == '1')
                $(light_id).text('LOW');
            else if (light_status == '2')
                $(light_id).text('MEDIUM');
            else
                $(light_id).text('HIGH');
        }
    });
};

