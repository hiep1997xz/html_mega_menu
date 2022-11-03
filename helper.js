$(document).ready(function() {
    $(".dropdown-menu .dropdown-content").click(function(e){
        e.stopPropagation();
    })
    $(".child-item .collapse-child-item").click(function(){
        if($(this).hasClass('collapsed')) {
            $(this).parent().next().collapse("show");
        } else {
            $(this).parent().next().collapse("hide");
        }
    });
});