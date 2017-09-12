/**
 * Created by Kavindu on 9/4/2017.
 */

$("#menu-icon").click(function menu_btn_click(){
    $("#menu-div").css("width","4"+"cm");
    $("#menu-div").css("margin-left","30"+"cm");
    $("#menu-icon").css("opacity","0.0");
    $("#menu-div").css("opacity","0.5");
    $("#closer-icon").css("opacity","0.9");
});

$("#closer-icon").click(function menu_btn_click(){
    $("#menu-div").css("width","0.1"+"cm");
    $("#menu-div").css("margin-left","34"+"cm");
    $("#menu-icon").css("opacity","1");
    $("#menu-div").css("opacity","0.01");
    $("#closer-icon").css("opacity","0.0");
});
