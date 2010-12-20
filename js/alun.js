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

