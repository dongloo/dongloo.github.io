$(document).ready(function () {
    function display_desktop() {
        jQuery("#view_desktop").addClass("active");
        jQuery("#view_desktop").addClass("hidden");
        jQuery("#view_mobile").removeClass("active");
        jQuery("#view_mobile").removeClass("hidden");
        localStorage.setItem('toggle_desktop_mobile', 'desktop');
        $("meta[name=viewport]").attr('content', 'width=1200');
        location.reload();
        
    }
    function display_mobile() {
        jQuery("#view_desktop").removeClass("active");
        jQuery("#view_desktop").removeClass("hidden");

        jQuery("#view_mobile").addClass("active");
        jQuery("#view_mobile").addClass("hidden");
        localStorage.setItem('toggle_desktop_mobile', 'mobile');
        $("meta[name=viewport]").attr('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        location.reload();
    }
    jQuery("#view_desktop").click(function () {
        display_desktop();
    });
    jQuery("#view_mobile").click(function () {
        display_mobile();
    });
    if (localStorage.getItem('toggle_desktop_mobile') == 'desktop') {
        display_desktop();
    } else {
        display_mobile();
    }
});