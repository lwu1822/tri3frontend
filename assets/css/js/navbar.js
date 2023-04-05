$("#right-sidebar").children().css("opacity", "0");

var menu = document.getElementById("menu");
menu.addEventListener("click", rightSidebarOn);

var closeButton = document.getElementById("right-sidebar-close-button");
closeButton.addEventListener("click", rightSidebarOff);

function rightSidebarOn() {
    $(".right-sidebar-background").animate({width: "200px"}, {duration: 500, queue: true});
    $("#right-sidebar").animate({width: "200px"}, {duration: 500, queue: true});
    $("#right-sidebar").children().animate({opacity: "1"}, {duration: 800, queue: true});
}

function rightSidebarOff() {
    $("#right-sidebar").children().animate({opacity: "0"}, {duration: 200, queue: true});
    $(".right-sidebar-background").animate({width: "0"}, {duration: 500, queue: true});
    $("#right-sidebar").animate({width: "0px"}, {duration: 500, queue: true});
}