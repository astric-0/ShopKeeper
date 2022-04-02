//var box = JSON.parse("{{box|escapejs}}");
//console.log(box);

//let data =  JSON.parse("{{JSdata|escapejs}}");

$(document).ready( function(){
    $("form").trigger('reset');    
});

if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}

$('.form-control[name="searchThread"]').click(function(){
    $('select').removeClass("bg-success").css({"background-color":"teal"});
    $('.boxesIcon').removeClass("fa-2x").css({"color":"teal"});    
}).mouseenter(function(){
    $('.boxesIcon').removeClass("fa-2x").css({"font-size":"300%"});   
}).mouseleave(function(){
    $('.boxesIcon').addClass("fa-2x").css({"font-size":"200%"});;
});

$("#home").click(function(){
    $("#defaultSection , #homeList").removeClass("d-none");
    $("#addNewBoxSection , #editCountSection , #soldSection, #gridSection , #searchBox").addClass("d-none");
    $(this).addClass("fa-2x");
    $("#grid").removeClass("fa-2x");
});

$("#grid").click(function(){
    $("#gridSection , #searchBox").removeClass("d-none");
    $("#defaultSection, #addNewBoxSection , #editCountSection , #soldSection , #homeList").addClass("d-none");
    $(this).addClass("fa-2x")
    $("#home").removeClass("fa-2x");
})

$("#addNewBoxBtn").click(function(){
    $("#addNewBoxSection").removeClass("d-none");
    $("#defaultSection , #editCountSection , #soldSection").addClass("d-none");
});

$("#editCountBtn").click(function(){
    $("#editCountSection").removeClass("d-none");
    $("#defaultSection , #addNewBoxSection , #soldSection").addClass("d-none");
});

$("#soldBtn").click(function(){    
    $("#soldSection").removeClass("d-none");
    $("#defaultSection , #addNewBoxSection , #editCountSection").addClass("d-none");
});

console.log(mode);


modevalues = {  background : "", 
                lists : { label : "", background : "", plusbuttonhover : "" , hover : "", antihover : "", hovertext : "", antihovertext : ""},
                homeform : { label : "", background : "" },
                menuicons : "",
            };

if(mode="light"){
    modevalues.lists.background = "black";
    modevalues.lists.label = "white";
    modevalues.lists.plusbuttonhover = "black";
    modevalues.lists.hover = "white";
    modevalues.lists.antihover = "black";
    modevalues.lists.hovertext = "black";
    modevalues.lists.antihovertext = "white";

    modevalues.menuicons = "black";
    
    modevalues.homeform.background = "black";
    modevalues.homeform.label = "white";    
    $("#modeset").html("<i class='fas fa-moon'></i>");   
}

else if(mode="dynamic"){
    var colors = new Array(
        [62,35,255],
        [60,255,60],
        [255,35,98],
        [45,175,230],
        [255,0,255],
        [255,128,0]);
  
    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];
    
    //transition speed
    var gradientSpeed = 0.002;
    
    function updateGradient()
    {    
        if ($===undefined ) return;
        
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];
    
        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb("+r1+","+g1+","+b1+")";
        
        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb("+r2+","+g2+","+b2+")";
    
        $('body').css({
            background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
            background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
            
            step += gradientSpeed;
            if ( step >= 1 )
            {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
            
            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            
            }
        }
    setInterval(updateGradient,10); 
}    

$(".list-group-item").css({ "background-color" : modevalues.lists.background});
$(".list-group-item label").css({"color" : modevalues.lists.label});
$("#grid , #home , #modeset").css({"color" : modevalues.menuicons});
$(".homeform").css({"color" : modevalues.homeform.label, "background" : modevalues.homeform.background});

$("#addNewBoxBtn , #editCountBtn , #soldBtn").hover(function(){
    $(this).css({"color":modevalues.lists.plusbuttonhover});
}, function(){
    $(this).css({"color":""});
});

$(".list-group-item").hover(function(){
    $(this).css({"background-color":modevalues.lists.hover});
    $(this).find("label").css({"color" : modevalues.lists.hovertext});
},function(){
    $(this).css({"background-color":modevalues.lists.antihover});
    $(".list-group-item label").css({"color" : modevalues.lists.antihovertext});
});