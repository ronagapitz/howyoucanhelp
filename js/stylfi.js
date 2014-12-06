
var $look_id= '' ,$gender='female',$arena_click =2 ,$skimlinks //load next 
, $pop_image=$(".big_img2"), $stylfi_choose = '',$master = $("#master_ron"),$arena = $(".arena_parent"),$arena_child = $(".arena"),
$arena_functions = "http://matchdrobe.com/app/arena/arena_functions.php";


function showload()
{
	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
window.plugins.spinnerDialog.show();
} else {
  //onDeviceReady(); //this is the browser
}
}
function hideload()
{
	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
window.plugins.spinnerDialog.hide();
} else {
  //onDeviceReady(); //this is the browsergit 
}
}
/*login status */
if(!!localStorage.user_id)
{
	$(".stylfi_header").show();
	 $(".active_tab").text("SUGGESTIONS").show();

	$(".logo_div").hide();

$(".active_tab").text("SUGGESTIONS");

$cat_id =12;
$master.show();
if(localStorage.cat==12)
{
	$gender ='female';

}
else
{
		$gender ='male';

}

$stylfi_choose = $master.html();
$("div.suggestion_div").load("http://matchdrobe.com/app/arena/arena_functions.php",{skimlinks: 'true' ,cat_id: localStorage.cat},function()
{

$('#suggests').imagesLoaded(function() {
//$(this)[0].masonry().layout();

$container= $('#suggests');
$container.imagesLoaded(function() {
var msnry = new Masonry( $container[0]);
	
	 msnry.layout();

	});
});



}).show("slide");
//$.post("http://matchdrobe.com/app/arena/",{"search_tags": $("#s_tag").val()},function(e)
	
		if(localStorage.cat==12)
{
	$gender ='female';

}
else
{
		$gender ='male';

}
	setTimeout(function()
	{

$("div.front").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	setTimeout(function()
	{
	$("div.back").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	

});
	


},200);
});



},200);
$master.hide().html($arena.html());


}
else{
	//alert('nulld');

}



/*reg*/
$("#reg_form").on("submit",function(e)
{	 
	
showload();
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{"reg2": "true","email": $("#reg_email").val(),
"password": $("#reg_password").val()},function(e)
{
if(e.success=="true")
{
	alert("Registration Successful");

	$(".choose_gender,.reg_div").toggle("slide");
localStorage.user_id = e.id;

}
else{

alert("Email already exists");

}	
hideload();

},"json");

return false;
});

$("#reg_in,.cancel_reg").on("tap",function()
{
$(".reg_div,.logo_div").toggle("slide");

});





/* login */

$("#log_form").on("submit",function(e)
{
	
	showload();

$.post("http://matchdrobe.com/app/arena/arena_functions.php",{"login2": "true","email": $("#log_email").val(),
"password": $("#log_password").val()},function(e)
{
if(e.success=="true")
{
	if(e.type=="fb")
	{
		
	$("#stylfi_login").click();
	return false;	
		
	}
	localStorage.user_id = e.id;
if(e.gender== null)
{
//alert(e.gender);
$(".choose_gender,.login_div").toggle("slide");

}
else{
	
	if(e.gender== "female")
{
	$gender ='female';
localStorage.cat = 12;
}
else
{
		$gender ='male';
localStorage.cat = 54;
}

$(".active_tab").text("SUGGESTIONS");
$(".stylfi_header").show();
	 $(".active_tab").text("SUGGESTIONS").show();
	setTimeout(function()
	{

$("div.front").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	setTimeout(function()
	{
	$("div.back").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	

});
	


},200);
});



},200);
$(".choose_gender,.suggestion_div,.login_div,#master_ron").toggle("slide");

}





$cat_id =12;

//$master.fadeOut();

$stylfi_choose = $master.html();
$("div.suggestion_div").load("http://matchdrobe.com/app/arena/arena_functions.php",{skimlinks: 'true' ,cat_id: localStorage.cat},function()
{

//$(this)[0].masonry().layout();

$container= $('#suggests');
$container.imagesLoaded(function() {
var msnry = new Masonry( $container[0]);
	
	 msnry.layout();
hideload();
	});
});






}
else{

alert("log in failed");

}
	hideload();

},"json");

return false;
});
$("#log_in,.cancel_log").on("tap",function()
{
$(".login_div,.logo_div").toggle("slide");

});



/*menus  */
$(document).on("tap","#toggle2",function()
{                                                               
	$(".toggle_menu2").toggle("slide",{ direction: 'right' });
	
	});
$(document).on("tap","#toggle",function()
{                                                               
	$(".toggle_menu").toggle("slide");
	
	});
$(document).on("tap",".toggle_menu p",function()
{                                                               
	$(".toggle_menu").toggle("slide");
	$(".active_tab").text($(this).text());

	});
$(document).on("tap","div.front .winner_left",function()
{                                                               
$("div.front .img_left .winner").show();



	$loser = $("div.front .img_right").attr("data-id");
			$look_id = $("div.front .img_left").attr("data-id");

				$.get("http://matchdrobe.com/app/arena/arena_functions.php",{"item_like": $look_id,"loser": $loser,"user_id": localStorage.user_id});

				
				
					
				
				$.post("http://matchdrobe.com/api/index.php/algo/elo",{winner_id: $look_id,loser_id: $loser},function()
		{
		
		});
	$(".flipper").addClass("flip-active");
	
	$("div.front").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender});
	return false;
	
	
	

});

$(document).on("tap","div.back .winner_left",function()
{                                                               

$("div.back .img_left .winner").show();



	$loser = $("div.back .img_right").attr("data-id");
			$look_id = $("div.back .img_left").attr("data-id");

				$.get("http://matchdrobe.com/app/arena/arena_functions.php",{"item_like": $look_id,"loser": $loser,"user_id": localStorage.user_id});

				
				
					
				
				$.post("http://matchdrobe.com/api/index.php/algo/elo",{winner_id: $look_id,loser_id: $loser},function()
		{
		
		});

	$(".flipper").removeClass("flip-active");
		$("div.back").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender});

	return false;
	
	
	

});

$(document).on("tap","div.front .winner_right",function()
{       
	
	$("div.front .img_right .winner").show();



	$loser = $("div.front .img_left").attr("data-id");
			$look_id = $("div.front .img_right").attr("data-id");

				$.get("http://matchdrobe.com/app/arena/arena_functions.php",{"item_like": $look_id,"loser": $loser,"user_id": localStorage.user_id});

				
				
					
				
				$.post("http://matchdrobe.com/api/index.php/algo/elo",{winner_id: $look_id,loser_id: $loser},function()
		{
		
		});                                                        

	$(".flipper").addClass("flip-active");
			$("div.front").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender});

	return false;
	
	
	

});

$(document).on("tap","div.back .winner_right",function()
{                                                               
$("div.back .img_right .winner").show();



	$loser = $("div.back .img_left").attr("data-id");
			$look_id = $("div.back .img_right").attr("data-id");

				$.get("http://matchdrobe.com/app/arena/arena_functions.php",{"item_like": $look_id,"loser": $loser,"user_id": localStorage.user_id});

				
				
					
				
				$.post("http://matchdrobe.com/api/index.php/algo/elo",{winner_id: $look_id,loser_id: $loser},function()
		{
		
		});
	$(".flipper").removeClass("flip-active");
			$("div.back").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender});

	return false;
	
	
	

});
/* styles */
$(document).on("tap",".winner_left",function()
{
	

});

$(document).on("tap",".img_left,.img_right",function()
{
/*
$look_id = $(this).attr('data-id');
$simage = $(this).attr('data-big');

$comments = $(this).attr('data-comments');
$likes =  $(this).attr('data-wins');
$("#count_comments").text($comments);
$("#count_likes").text($likes);
$("#share_look").attr('data-image',$simage);



			$("#comment_section").load("http://matchdrobe.com/app/arena/arena_functions.php",{"comment": $look_id});

	$("#popup_image").width($(window).height() * .44).height($(window).height());
$("#pop_con").width($(window).height() * .44);
	$("#popup,#pop").show();
	
	$("#pop_thumb").attr("src",$(this).attr("data-user_image"));
		$("#pop_name").text($(this).attr("data-name"));
		$("#pop_date").text($(this).attr("data-date"));
				$("#pop_desc").text($(this).attr("data-desc"));


	$pop_image.attr("src",$(this).attr("data-big")).css('display', 'block');
	*/
	
});

$(document).on("tap","img#share_look",function()
{
//window.plugins.socialsharing.share(null, null, $src, null);
window.plugins.socialsharing.share("Great look found on Arena!", null, null, "http://www.matchdrobe.com/sharer.php?file="+$(this).attr("data-image"));
 
});


$(document).on("tap",".female, .care",function()
{
	$(".gender_div").hide("slide");

	localStorage.cat=12;
showload();
$(".stylfi_header").show();
	 $(".active_tab").text("SUGGESTIONS").show();
$(".active_tab").text("SUGGESTIONS");
$.post($arena_functions,{regender:"female",user_id: localStorage.user_id});
$cat_id =12;
//$master.fadeOut();
$gender ='female'
$stylfi_choose = $master.html();
$("div.suggestion_div").load("http://matchdrobe.com/app/arena/arena_functions.php",{skimlinks: 'true' ,cat_id: $cat_id},function()
{

$('#suggests').imagesLoaded(function() {
//$(this)[0].masonry().layout();

$container= $('#suggests');
$container.imagesLoaded(function() {
var msnry = new Masonry( $container[0]);
	
	 msnry.layout();
hideload();
	});
});



}).show("slide");
//$.post("http://matchdrobe.com/app/arena/",{"search_tags": $("#s_tag").val()},function(e)
$arena_child.empty().load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function()
{
	
	setTimeout(function()
	{
$master.hide().html($arena.html()).fadeIn();
$("div#arena1").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	setTimeout(function()
	{
	$("div#arena2").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	
	setTimeout(function()
	{
		$("div#arena3").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	
hideload();
	
});


},200);
});
	


},200);
});



},200);
}


).hide();

$master.hide().html($arena.html());


});
$(document).on("tap",".reset",function()
{
 $master.html($stylfi_choose);
});

$("#profile").on("tap",function()
{
$(".toggle_div").hide();

$(".profile_div").show("slide");
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{profile:localStorage.user_id},function(e)
{
$(".profile_div").html(e);	
},"json");
});
$("#suggest").on("tap",function()
{
$(".toggle_div").hide();

$(".suggestion_div").show("slide");


});

$("#reset").on("tap",function()
{
$(".toggle_div").hide();
$(".toggle_menu2").toggle("slide");
	 $(".active_tab").text("CHOOSE YOUR STYLE").show();

$(".gender_div").show("slide");


});
$("#mash").on("tap",function()
{
$(".toggle_div").hide();

$("div.arena_parent.ron_row").show("slide");
$(".arena").show();

});


$(document).on("tap","#close",function()
{
$(".popup,#pop").hide();
});
$("#favorite").on("tap",function()
{
showload();
$(".toggle_div").hide("slide");
$(".favorite_div").show("slide").load("http://matchdrobe.com/app/arena/arena_functions.php",{myfavorite:localStorage.user_id},function()
{
$container= $('#myfav');
$container.imagesLoaded(function() {
var msnry = new Masonry( $container[0]);
	
	 msnry.layout();
hideload();
	});
});


});

$(document).on("tap",".view_items",function()
{
$(".skim_pop").load("http://matchdrobe.com/app/arena/arena_functions.php",{view_items:true});
$("#pop,.skim_pop").show();
return false;
});
$("#lout").on("tap",function()
{
	showload();
				localStorage.clear();
location.reload();
	hideload();


/*
$(".logo_div").show("slide");
$(".choose_gender").hide("slide");
*/
});
$("#inspiration").on("tap",function()
{
showload();
$(".toggle_div").hide("slide");
$(".inspiration_div").empty().show("slide").load("http://matchdrobe.com/app/arena/arena_functions.php",{inspiration:localStorage.user_id},function()
{

$('#inspired').imagesLoaded(function() {
//$(this)[0].masonry().layout();

$container= $('#inspired');
$container.imagesLoaded(function() {
var msnry = new Masonry( $container[0]);
	
	 msnry.layout();
hideload();
	});
});
});

});
$(document).on("tap",".stylfi_button",function()
{
	
	$.skimlinks();

/*
	setTimeout(function(){
	

	console.log($arena_click);
		$(".arena").addClass('flip').html($("#arena"+$arena_click).html()).fadeIn();
		if($arena_click ==1)
		{
			$("#arena"+($arena_click+2)).load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
		{
		});
		}
		else
		{
		$("#arena"+($arena_click-1)).load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
		{
		});
		
		}
			setTimeout(function(){

		$(".arena").removeClass("flip");
},250);
		$arena_click ++;


if($arena_click == 4)
{
	$arena_click =1;
}
$(".winner").hide();

//$master.hide().html($arena.html());
}, 1000); */
});


$(document).on("tap",".collect",function()
{
	$(".skim_pop").empty();
	$("#pop").hide();
});
$(document).on("tap",".male",function()
{
	
		localStorage.cat=54;
$(".gender_div").hide("slide");
$(".stylfi_header").show();
	 $(".active_tab").text("SUGGESTIONS").show();
$(".active_tab").text("SUGGESTIONS");
$.post($arena_functions,{regender:"male",user_id: localStorage.user_id});
showload();
	$(".active_tab").text("SUGGESTIONS");

//window.plugins.spinnerDialog.show();

	$gender ='male';
	$cat_id =54;

$stylfi_choose = $master.html();

//$.post("http://matchdrobe.com/app/arena/",{"search_tags": $("#s_tag").val()},function(e)
$arena_child.empty().load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function()
{
	
	setTimeout(function()
	{
$master.hide().html($arena.html()).fadeIn();
$("div#arena1").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	setTimeout(function()
	{
	$("div#arena2").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	
	setTimeout(function()
	{
		$("div#arena3").load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
{
	
hideload();
	
});


},200);
});
	


},200);
});



},200);
}


).hide();
$(".arena").hide();
$master.hide().html($arena.html());
$("div.suggestion_div").load("http://matchdrobe.com/app/arena/arena_functions.php",{skimlinks: 'true' ,cat_id: $cat_id},function()
{

$('#suggests').imagesLoaded(function() {
//$(this)[0].masonry().layout();

$container= $('#suggests');
$container.imagesLoaded(function() {
var msnry = new Masonry( $container[0]);
	
	 msnry.layout();
hideload();
	});
});



}).show("slide");

});



$(document).on("tap",".skip_button",function()
{
	setTimeout(function(){
	console.log($arena_click);
		$(".arena").html($("#arena"+$arena_click).html()).fadeIn();
		if($arena_click ==1)
		{
			$("#arena"+($arena_click+2)).load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
		{
		});
		}
		else
		{
		$("#arena"+($arena_click-1)).load("http://matchdrobe.com/app/arena/arena_functions.php",{"stylfi": '1',gender: $gender},function(e)
		{
		});
		
		}

		$arena_click ++;


if($arena_click == 4)
{
	$arena_click =1;
}
$(".winner").hide();

//$master.hide().html($arena.html());
}, 200);

});


	$(document).on("keypress","#comment_box",function(evt){ 

	    var code = evt.which; // recommended to use e.which, it's normalized across browsers
if(code==13){
	$("#comment_section").append(	"<div class='row' style='zoom:.8;width: 100%;overflow: hidden'>"+
  '<div class="circle_thumb" style="float: left;width:5rem;height:5rem">'+
   "<img  class='feed_user' style='width:5rem;height:5rem' src='"+localStorage.dp+"'>"
 +"</div>"+
 "<div class='comment_desc' style='float: left'>"+
 '<span id="pop_name" class="title" style="font-size: 2.5rem;'+
'padding-left: 1rem;">'+localStorage.full_name+'</span><br>'+
'<span id="pop_date" class="title" style="font-size: 2rem;'+
'padding-left: 1rem;">'+$(this).val()+'</span>'+
 '</div></div>');
			$.post("http://matchdrobe.com/app/arena/arena_functions.php",{"add_comment": '1',look_id: $look_id,text: $('#comment_box').val(),user_id:localStorage.user_id});

$(this).val('');
}
	});
	
	$.skimlinks = function skimlinks()
{
$skimlinks +=1;


event.preventDefault();
$skimlinks =0;
$("div.suggestion_div").load("http://matchdrobe.com/app/arena/arena_functions.php",{skimlinks: 'true' ,cat_id: localStorage.cat},function()
{

$('#suggests').imagesLoaded(function() {
//$(this).masonry();
});



});




}
 $(document).on("tap","a.removeme",function()
 {
 $(this).closest(".suggested_row").remove();

 $.post("http://matchdrobe.com/app/arena/arena_functions.php",{"removeme":localStorage.user_id,"item":$(this).attr("href")},function()
 {
 var msnry = new Masonry( $("#myfav")[0]);
	
	 msnry.layout();
 });
 
 return false;
 });
 $(document).on("tap","a.saveme",function()
 {
 
 $.post("http://matchdrobe.com/app/arena/arena_functions.php",{"saveme":localStorage.user_id,"item":$(this).attr("href")});
 $(this).removeClass("saveme").addClass("remove").text("SAVED");
 return false;
 });
 


















