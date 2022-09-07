$(document).ready(function(){ 
    	
//	sticky
	$("#hero_section").waypoint(function(direction){
		if(direction == "down"){
			$("#main_menu").addClass("sticky");
		}else{
			$("#main_menu").removeClass("sticky");
		}
	});
//	pocoder mobile_menu
//	$("#main_menu").meanmenu({
//		meanMenuContainer: '#mobile_menu',
//		meanScreenWidth: 991,
//	});
		
    }); 
//	mobile_menu
//function openNev() {
//	document.getElementById("myNav").style.width = "100%";
//}
//function closeNav() {
//	document.getElementById("myNav").style.width = "0%";
//}