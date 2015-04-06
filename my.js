jQuery(document).ready(function($) {
   var direct=true;
	$(window).scroll(function(e) {
		if ($(window).scrollTop()>200) {
			$("#scroll").fadeIn(500);
		}
		else{
           $("#scroll").fadeOut(500);
		}
	});  
    $("#up").click(function(event) {
    	$("html,body").animate({scrollTop:'0'}, 600);
    });
    $("#down").click(function(event) {
        $("html,body").animate({scrollTop:'999999px'}, 600);
    });
     $("#up").hover(function() {
     	direct=true;
         intervalId=setInterval(go,2);
     }, function() {
     	clearInterval(intervalId);
     });
    $("#down").hover(function() {
        direct=false;
        dd=setInterval(go,2);
     }, function() {
     	clearInterval(dd);
     });
     function go(){
     	var pos=$(window).scrollTop();
     	if(direct==true){
     	pos=pos-1;
     	$(window).scrollTop(pos);}
     	else {
     	pos=pos+1;
     	$(window).scrollTop(pos);}
     	}
});