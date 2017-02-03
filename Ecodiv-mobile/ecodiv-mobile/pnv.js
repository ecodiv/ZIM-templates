/* Turn of animation */
$(document).ready(function(){
 //jQuery.fx.off = true;
 $('#btnShow').click(function(){
    $('#dvText').toggle("slow");
 });
});

$( "img" ).wrap( "<div class='imgcenter'></div>" );
