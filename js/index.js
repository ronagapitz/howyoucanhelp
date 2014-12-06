//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 
//document.addEventListener('DOMContentLoaded', setTimeout(function () { loaded(); }, 200), false);
document.addEventListener("offline", onOffline, false);

function onOffline() {
    // Handle the offline event
	alert('no internet connection');
}   






	 $(".ico").on("tap",function()
	 {
	
		
		
		
		selectPicture();
		
					$(".upcrop").show();
$(".uppop").hide();
	 });
		
		
		
		function selectPicture() {

		
		   navigator.camera.getPicture(
            function(uri) {
			
			

			
$("#parent_canvas").width($(window).height() * .44).height($(window).height() * .90);

           	localStorage.upload = uri;
		
		
				  var gesturableImg = new ImgTouchCanvas({
            canvas: document.getElementById('mycanvas'),
            path: localStorage.upload 
        });

            },
            function(e) {
                console.log("Error getting picture: " + e);
               // document.getElementById('camera_status').innerHTML = "Error getting picture.";
            },
            
{
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
    quality: 100,
    destinationType: navigator.camera.DestinationType.FILE_URI,correctOrientation: true
  }			
			);
    	$(".upcrop").show();
			$(".uppop").hide();
     
		}
		
		
	  
$(document).on("tap","#tofollow",function()
{
$("#tofollow_div").show().load("http://matchdrobe.com/app/arena/arena_functions.php",{follow_people: localStorage.user_id });
$("#settings_div").hide();
});

		
		
		
//for refresh feed

var $cat_id=12,$skimlinks= 0,myScroll,looksScroll,pullDownEl, pullDownOffset,cache_profile,$ajax_collection,$arena_src,$feed_collection,
	pullUpEl, pullUpOffset,
	generatedCount = 0, hof_html,html_arena,looks_html,feed_html,
   currentPage = 0, 
// The wrapperWidth before orientationChange. Used to identify the current page number in updateLayout();
wrapperWidth = 0,
foot_select = 1,profile_html,
$profile = "	<div class='row text-center style  navbar_profile' data-position='fixed'style='background: white;'>"+
"<img src='img/profile_tab.png' class='pull-left profile_tab' />"+
		
		
		"<div id='edit_settings'><img src='mg/settings2.png'  />  </div>"+
		"</div><div   id='profile_page'>"+
							
			  "<div id='profile_content'>{{.}}"+
								
			  "</div>"+
		
		
		
			"</div>";
arena_url = "http://matchdrobe.com/app/arena/arena_functions.php",
$arena_image = "http://matchdrobe.com/app/img/arena/",
$thumb = "http://matchdrobe.com/function/thumbnail.php?file=",
$tutorial = "<div class='frame frame2'>"+
				"<div id='pageWrapper_t'>"+
					"<div id='pageScroller_t'>"+
						"<div class='page' id='thome_page' >"+
							"<center><img id='enter' src='img/1.png'  /></center>"+
						"</div>"+
						"<div class='page' id='thome_page' >"+
							"<center><img src='img/2.png'  /></center>"+
						"</div>"+
						"<div class='page' id='thome_page' >"+
							"<center><img src='img/3.png'  /></center>"+
						"</div>"+
						"<div class='page' id='thome_page' >"+
							"<center><img src='img/4.png'  /></center>"+
						"</div> "+
						"<div class='page' id='thome_page' >"+
							"<center><img src='img/5.png'  /></center></div>"+
						"<div class='page' id='thome_page' >"+
							"<center><img id='t_login'  class='login_start' src='img/6.png'  /></center>"+
						"</div>"+
					"</div>"+
				"</div>"+
			"<center id='tutorial_nav' >"+
				"<img id='1_t' src='img/tutorial_h.png'  data-text='about' />"+
				"<img id='2_t' src='img/tutorial.png'  data-text='looks' />"+
				"<img id='3_t' src='img/tutorial.png'  data-text='followers' />"+
				"<img id='4_t' src='img/tutorial.png'  data-text='following'  />"+
				"<img id='5_t' src='img/tutorial.png'  data-text='activity' />"+
				"<img id='6_t' src='img/tutorial.png'  data-text='activity' />"+

			"</center>"+
		"</div>",
$footer = "<div class='navbar-fixed-bottom' >"+
					
				"<div id='f1'  data-url='0'>"+
					"<img src='img/f1.png' class='f_active' />"+
				    "<img src='img/f1_h.png' class='none' />"+
				"</div>"+
				
				"<div id='f3' data-url='2'>"+
					"<img src='img/f3.png' class='f_active' style='display:none' />"+
					"<img src='img/f3_h.png' class='none' style='display:inline' />"+
				"</div>"+
				"<div id='f4' data-url='3'>"+
					"<img src='img/f4.png' class='f_active' />"+
					"<img src='img/f4_h.png' class='none' />"+
				"</div>"+
				"<div  id='f5' data-url='4'>"+
					"<img src='img/f5.png' class='f_active'  />"+
					"<img src='img/f5_h.png' class='none' />"+
				"</div>"+
			"</div>",
			$feed_page = " <div  id='feed_page' ><div class='feed_div  adjust_container '>"+
				"<div class='row text-center navbar navbar-fixed-top nav_feed'>"+
					"<div id='data'></div>"+
                    "<img src='img/feed.jpg' class='pull-left feed_tab' /> "+		
				"</div>"+
				"<div  style='height: 70rem !important; overflow: hidden;' class='accelerated'>"+
                    "<div  >"+
						
						"<div class='container' >"+
							"{{#feeds}}{{#.}}"+
							"<div class='activity row' data-id='{{feed_item.id}}' style='margin-top: 20px;'>"+
								"<p></p>"+
								"<div style='float: left'>"+
									"<div class='circle_thumb'>"+
										"<img class='feed_user lazy' data-name='{{feed_item.name}}' data-tab='0' data-id='{{feed_item.user_id}}' src='{{feed_item.user_image}}' />"+
									"</div>"+
								"</div>"+
								"<div style='float: left;width: 70%;margin-left: 1.4rem'>"+
									"<span class='pink bold vtop feed_user' data-name='{{feed_item.name}}' data-tab='0' data-id='feed_item.user_id'></span>"+
									"<span class='vtop darkgray'>{{feed_item.name}}'s bet </span><br>"+
									"<span class='gray small'>1 day ago</span>"+
								"</div>"+
								"<p></p>"+
								"<div class='row act_row'>"+
								
									"<div  style='width:60%;margin: auto;float: left;margin-left: 9rem' class='activity_item {{}}'>"+
										"<img  data-id='{{feed_item.item_1_id}}' class='lazy' style='min-height:30rem' data-url='http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}' data-id='{{feed_item.id}}' src='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}&amp;width=300' data-big='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}&amp;width=300' />"+
									"</div>"+
									
									"<div class='heart_parent'>"+
										"<div class='heart_div'>"+
											"<img data-id='{{feed_item.item_1_id}}' data-feed='{{feed_item.id}}' class='heart liker' src='{{feed_item.item_1_heart}}' data-url='http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}' data-id='{{feed_item.id}}'  data-src='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}&amp;width=300' data-big='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}&amp;width=300' />"+
											"<span class='count'></span>"+
										"</div>"+
										
									"</div>"+
									
								
									
								"</div>"+
							"</div>"+
							"{{/.}}{{/feeds}}"+
						"</div>"+
					
				"</div>"+
				"</div>"+
		       "</div></div>",
	$feed_ajax ="{{#feeds}}{{#.}}"+
							"<div class='activity row' data-id='{{feed_item.id}}' style='margin-top: 20px;'>"+
								"<p></p>"+
								"<div style='float: left'>"+
									"<div class='circle_thumb'>"+
										"<img class='feed_user lazy' data-name='{{feed_item.name}}' data-tab='0' data-id='{{feed_item.user_id}}' src='{{feed_item.user_image}}' />"+
									"</div>"+
								"</div>"+
								"<div style='float: left;width: 70%;margin-left: 1.4rem'>"+
									"<span class='pink bold vtop feed_user' data-name='{{feed_item.name}}' data-tab='0' data-id='feed_item.user_id'></span>"+
									"<span class='vtop darkgray'>{{feed_item.name}}'s bet </span><br>"+
									"<span class='gray small'>1 day ago</span>"+
								"</div>"+
								"<p></p>"+
								"<div class='row act_row'>"+
									"<div class='activity_item {{feed_item.item_1_class}}'>"+
										"<img  data-id='{{feed_item.item_1_id}}' class='lazy' style='min-height:30rem' data-url='http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}' data-id='{{feed_item.id}}' src='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}&amp;width=300' data-big='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_1}}&amp;width=300' />"+
									"</div>"+
									"<div data-id='{{feed_item.item_2_id}}' class='activity_item {{feed_item.item_2_class}}' >"+ 
										"<img class='lazy' style='min-height:30rem' data-url='http://matchdrobe.com/app/img/{{feed_item.item_2}}' data-id='{{feed_item.id}}' src='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{feed_item.item_2}}&amp;width=300' data-big='http://matchdrobe.com/app/img/arena/{{feed_item.item_2}}' />"+
									"</div>"+
									"<div class='heart_parent'>"+
										"<div class='heart_div'>"+
											"<img data-id='{{feed_item.item_1_id}}' data-feed='{{feed_item.id}}' class='heart liker' src='{{feed_item.item_1_heart}}' />"+
										"</div>"+
										"<div class='heart_div'>"+
											"<img data-id='{{feed_item.item_2_id}}' data-feed='{{feed_item.id}}' class='heart unliker' src='{{feed_item.item_2_heart}}' />"+
										"</div>"+
									"</div>"+
								"</div>"+
							"</div>"+
							"{{/.}}{{/feeds}}",
$hof_page =   "<div class='page'  id='hof_page'>"+
 "<div class='row text-center navbar navbar-fixed-top' style='background: white;'>"+
						"<img src='img/hof_tab.png' class='hof_tab pull-left' />"+
						"<div class='pointsd   pull-right'>"+
							"<img id='search_icon2' src='img/search2.png'  />"+
						"</div>"+
					"</div>"+
               " <div class='hof_div' >"+
                   
		
	
						
								"<div class='ron container hof_container' >"+
"{{#.}}<div class='hof_parent'>"+
				"<div class='inline'>"+
					"<div style='overflow: hidden;width: 20%;float: left' >"+
						"<div class='hof_percent'>{{look.percent}}%"+
						"</div>"+
						
						"<span  class='pink bold' style='float: right;line-height:3;width:50%;text-align: right'></span>"+
					"</div>"+
					"<div class='hof_thumb'>"+
						"<div class='imgcon'>"+
							"<img  class='img-ron lazy' data-big='http://matchdrobe.com/app/img/arena/{{look.image}}'"+
							"src='http://matchdrobe.com/function/thumbnail.php?file=http://matchdrobe.com/app/img/arena/{{look.image}}&width=300'"+
							"data-url='http://matchdrobe.com/app/img/arena/{{look.image}}'"+
							"data-id='{{look.id}}'  />"+
						"</div>"+
						"<p class=' hof_title'> {{look.description}} </p>"+
						"<p>By <span class='pinkname'>{{look.name}} </span></p>"+
						"<p class='gray smaller'>{{look.date}}</p>"+
					"</div>"+
			
				"</div>"+
			"</div> {{/.}}</div></div>",
$single = "<div id='single_item'>"+
			//"<img src='img/white_heart.png' style='width: 3rem;' /> "+
		//	"<span class='white'>{{wins}}</span>"+
		//	"<img src='img/settings_icon.png' style='width: 3rem;' id='settings_icon' />"+
		 // "</div>"+
		//  " <div class='pop_options' style='width: 90%;margin: auto;display: none'>"+
		//	"<br/>"+
		//	"<p id='save_collection' data-desc='{{description}}' data-id='{{id}}'>Save to collections</p>"+

		//	"<hr class='white'/>"+
       // "<p id='sharer2' data-desc='<?php echo $row['description'];?>' data-image='{{img}}'>Share</p>"+
       //  "<hr class='white'/>"+

//"<p id='dl_photo'  data-name='<?php echo $row['arena_img'];?>' data-big='http://matchdrobe.com/app/img/arena/{{img}}' "+
 //">Download Photo</p>"+
  //"<hr class='white'/>"+
  //"</div>"+
"<div class='pop_content'>"+
"<div style='width:100%;overflow:hidden'>"+
"<div class='circle_thumb look_circle'><img class='feed_user lazy'data-name='' data-tab='0' data-id='{{user_id}}' src='{{photo}}'></div>"+
"<div class='pop_username'>"+
"<span class='feed_user pink'  data-name='{{name}}' data-tab=1  data-id='{{user_id}}' >"+
"{{name}}</span>"+
"<br/>"+
"<span  class='silver'style='font-size: 1.8rem'>{{date}}</span>"+
"</div></div>"+
"<div class='pop_desc silver'>"+
"{{{description}}}</div>"+
"<div class='pop_tagged pink'>"+
"{{#tags}}<span class='pink'> #{{.}}</span>{{/tags}}"+


"</div>"+

"</div>" ,
$profile_page = "<div class='frame frameron'>"+
	              " <div id='pageWrapper'>"+
						"<div id='pageScroller'>"+
							 "<div class='page'  id='profile_page'>"+
							
							   "<div id='profile_content'>"+
								
								"</div>"+
		
		
		
							"</div>"+
                        "</div>"+						
					"</div>"+
				"</div>";
				
				
				
				
				
 
 	
				
			$(document).on("tap","div.followers",function()
{
//cache_profile = $(".main_profile").html();
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{followers: $(this).attr("data-id")},function(e)
{
$(".main_profile").html(e);
});
});


$(document).on("tap","div.following",function()
{
//cache_profile = $(".main_profile").html();
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{following: $(this).attr("data-id")},function(e)
{
$(".main_profile").html(e);
});
});

$(document).on("tap","img.backer",function()
{
$("#tofollow_div").hide();
$("#settings_div").show();
});


function tutorial(check)
{
	/*
if(check == "true")
{
$("body").prepend($tutorial);

 wrapperWidth2 = $('#pageWrapper_t').width();
	$(".frame2 .page").width(wrapperWidth2);

var tscroll = new iScroll('pageWrapper_t', {
useTransition:true,
snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true,click: true,
	onScrollEnd: function()
{

    if (wrapperWidth2 > 0) {
	
        currentPage = - Math.ceil( $('#pageScroller_t').position().left / wrapperWidth2);
		 current =  currentPage + 1;
		 $("#tutorial_nav img").attr("src","img/tutorial.png");
		 $("img#"+current+"_t").attr("src","img/tutorial_h.png");
		}
		}

});

$(".page").height($(window).height());
}

else
{

$(".frame2").remove();
}

*/
}



function footer(check)
{

if(check == "true")
{
$("body").append($footer);

}
else
{
$(".navbar-fixed-bottom").remove();

}

}

$(document).ready(function() {



$("#tag_btn").on("tap", function()
{
$("#tag_me").empty();
$("textarea.textarea").text('');
$('.pop_tagged span.pink').each(function()
{

$("#tag_me").prepend('<div class="top_tags " style="font-size: 1.5rem !important">'+$(this).text()+'</div>');



});
$(".tag_pop").show("slide");
});
    // are we running in native app or in browser?
    window.isphone = false;
    if(document.URL.indexOf("http://") === -1 
        && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
    }

    if(window.isphone) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }

	
	
	
	
	
	});
function onDeviceReady()   //begin
{
	
	//StatusBar.hide();

 try {
                                     // alert('Device is ready! Make sure you set your app_id below this alert.');
                                      FB.init({ appId: 493708454047333, nativeInterface: CDV.FB, useCachedDialogs: false });
                                      document.getElementById('data').innerHTML = "";
                                      } catch (e) {
                                     // alert(e);
                                      }
//remCalibrate();
updateLayout();
feed_functions();


/*
$(document).on('tap', 'a', function(event) {

	event.preventDefault();
event.stopPropagation();
    var href = $(this).attr('href');
    if (typeof href !== 'undefined' &&
        href.substr(0, 7) === 'http://')
    {
	//window.plugins.ChildBrowser.openExternal(this.href);
	 if(device.platform === 'Android') {
        navigator.app.loadUrl(encodeURI(this.href), {openExternal:true});
    } else {
        window.open(encodeURI(this.href), '_system');
    }
    }
	
	 return false;

}); */
//window.addEventListener('resize', remCalibrate, false);
pullDownEl = document.getElementById('pullDown');
	
$(".container").width($(window).width());
$("div.containerx").height($(window).height() * 0.7);


var zoom;



$("#tet").click(function()
{
tutorial();

});

$(document).on("tap","div.s_back",function()
{
$(".triangle,#pop").hide();
});
/*
$(document).on("tap","img#t_login,img#enter,#stylfi_login",function()
	{
	console.log('puta');
	//spinnerplugin.show();
	 // $("#fb_load").show();
	$.login();
	});
*/
$(document).on("tap","p#save_collection",function()
{
$.get(arena_url,{save: $(this).attr('data-id'),user_id: localStorage.user_id},function()
{

$(".looks_div .gender").load("http://matchdrobe.com/app/arena/arena_functions.php",{looks: 1,user_id: localStorage.user_id,offset:0},function()

{
});
});
});
$(document).on("tap","div.ronz img, div.activity_item img,.hof_div .img-ron",function()
{
$("#popup_image").width($(window).height() * .44).height($(window).height());
$("#pop_con").width($(window).height() * .44)
//$("#viewport").attr("content","width=device-width; initial-scale=1.0; maximum-scale=10.0; user-scalable=1;");
$(".big_img2").attr({"src":$(this).attr("data-big"),"data-url":$(this).attr("data-url")}).css('display', 'block');
$("#pop").show();
$("#popup").show();

$.post(arena_url,{single: $(this).attr('data-id')},function(e)
{

var html_single = Mustache.to_html($single,e);
 function links2(text) {

    var re = /(https?:\/\/(([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?))/g;
fuck = '<a href=$1 target=_blank>$1</a>';
	
   return  text.replace(re, fuck);
 
  }

$("#pop_con").empty().html(html_single);


},"json");


});

$(".big_img2").on("tap", function()
{
//$("#viewport").attr("content","width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no; height=device-height");

$("#pop").hide();

$("#popup").hide();


});


/*****************settings ******************/
//localStorage.clear();


/*
$("#change_tribe").on("tap",function()
{
localStorage.tribe = '';
$.post("http://matchdrobe.com/app/register_app.php",{"change_tribe": 'true',"user_id" : localStorage.user_id },function(e)
{
document.location.href = 'f_style_tribe.html';
});

}); */



$(".crop_button").click(function()
{

/*
 $('img#preview').imgAreaSelect({ aspectRatio: '4:9',handles: true,  x1: 120, y1: 190, x2: 280, y2: 310,zIndex: 10001, onSelectEnd: function (img, selection) {
            $('input[name="x1"]').val(selection.x1);
            $('input[name="y1"]').val(selection.y1);
            $('input[name="x2"]').val(selection.x2);
            $('input[name="y2"]').val(selection.y2); 

		
	
        }}); */
 //$('img#test').imgAreaSelect({ aspectRatio: '4:9',handles: true,  x1: 120, y1: 190, x2: 280, y2: 310, zIndex: 10001});

});

upload_functions();

$(document).on("tap","#set_back",function()
	{
	$("#settings_div").hide();
	});
$(document).on("tap","#edit_settings",function()
	{
	$("#settings_div").show();
	});
	
	

$("img.login_start").on("tap", function()
{
//login();
});
//sharer
$(document).on("tap","p#sharer2",function()
{
//window.plugins.socialsharing.share(null, null, $src, null);
window.plugins.socialsharing.share("Great look found on Arena!", null, null, "http://www.matchdrobe.com/sharer.php?file="+$(this).attr("data-image"));
 
});


		//parent scroller horizontal
		var looks_offset =12;
//lookscroll

		//endof parent scroll
		
		$(document).on("tap","#submit_search",function()
		{
				   $("#pop,.triangle").hide();

		html_arena = null;

           load_arena();
		   
		});
		
			$(document).on("tap","#submit_search_hof",function()
		{
		$(".navbar-fixed-bottom").css("bottom","0px");
				   $("#pop,.triangle_hof").hide();

		$.post("http://matchdrobe.com/app/arena/arena_functions.php",{hof: 1,search_hof: $("#s_tag_hof").val()},function(e)
{
$("#master").empty();
var sdds='';
var html = Mustache.to_html($hof_page,e);
$("#master").html(html)
updateLayout();
//hofscroll

},"json");
		   
		});
	$(document).on("keypress","#s_tag",function(evt){ 
        if(evt.which==32){
            $(this).val($(this).val()+',');
            evt.preventDefault();
        }
		
		if(evt.which==13){
		 $("#pop,.triangle").hide();
			html_arena = null;

           load_arena();
        }
		
		

    });	
	
	
	$(document).on("keypress","#input_hof",function(evt){ 
 if(evt.which==32){
            $(this).val($(this).val()+',');
            evt.preventDefault();
        }
    var code = evt.which; // recommended to use e.which, it's normalized across browsers
 //   if(code==13)e.preventDefault();
    if(code==13){
	      
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{hof: 1,search_hof: $(this).val()},function(e)
{
$("#master").empty();
var sdds='';
var html = Mustache.to_html($hof_page,e);
$("#master").html(html)
updateLayout();
//hofscroll

},"json");
	}
	});

		
		//looks_scroll

 	off= 6;
	off_looks = 9;
add = 1500;

//feedscroll

/*

 
 */
//profile srcolls



profile_functions();




      //  navigator.splashscreen.show();


setTimeout(function() {



      //  navigator.splashscreen.hide();
    }, 5000);

	
	$("#popup").height($(window).height());

$(document).on("tap","img.heart.unliker", function()
{

if($(this).attr("src") == 'img/heart.png')
{
//likes = $(this).parent().find("span");
$(this).attr("src","img/heart_fill.png");

$(this).parent().prev().find(".liker").attr("src","img/heart.png");

$.post(arena_url,{feed_id: $(this).attr("data-feed"),item_id: $(this).attr("data-id"), user_id: localStorage.user_id, feed_liker2: 1},function(e)
{
});

}
});

$("input").on("tap",function()
{

//$(this).focus();
});

$("#f4").on("tap",function()
{


});

init();
/****profile ******************/

current = 1;



$(".setter").on("tap",function()
{

$(".profile_setings,.main_profile").toggle();
})

load_arena();


/* adjust header height */

 $.adjust = function adjust_arena()
{
$(".page").css('min-height',"100%");

//$("#profile_nav img").attr("src","img/profile_nav.jpg");
 //$("#1").attr("src","img/profile_nav_h.jpg");
//$(".looks_div .container").css({"margin-top":$(".looks_tab").height() + 20});
//$(".feed_div .container").css({"margin-top":$(".nav_feed").height() + 20});

/*
$(".adjust_container").css({
"padding-bottom": $("#f1").height()+40,
"padding-top": $("#f1").height() -15


});
 
 
$(".pair").css("margin-top",$(".navbar_arena").height()-20);
*/

}
 

	
	
	//reg 
	

	
	
	


//set style tribe

var $img = '';

$.important = function important()
{
//init();
$(".frameron,.navbar-fixed-bottom").css("visibility","visible");
$.profile(localStorage.full_name,"true",localStorage.user_id,1);
//myScroll.scrollToPage(2, 0, 0);

$(".main_page, .register_div, .login_div,.frame2").hide();
 //$("#f3 img").toggle();

 //$(".navbar-fixed-bottom").css("visibility","visible");

 //$(".frame").css("visibility","visible");
 $.adjust();
// $(".tribe_div,.main_page").hide();

//load_arena();
}

toggle_arena = 0;

$(document).on("tap",".reset",function()
{
$skimlinks = 0;

});

 

// Usage

$(document).on("tap","h1.collect",function()
{
$(".skim_pop,#pop").hide();
});
$(document).on("tap","a.skimlinks",function()
{
	var ref = window.open($(this).attr("href"), '_system', 'location=yes');
return false;
})
$(document).on("tap", "a.arena_img", 
	function(event){
$img_liked = $(this).attr("data-image");
		skimlinks();
	$(this).parent().css('background','rgb(184, 9, 65)');
	$('img',this).css('opacity','.6');
	//alert();
	$arena_src = $('img',this).attr('src');
	
setTimeout(function(){ 

$("#master").html($("#arena_page2").html());
		//$(".fu").fadeIn();
		
	
$("#arena_page2").remove();malupit();

}, 1500);

	sec =$("#fuck").val();

	$.get("http://matchdrobe.com/app/arena/arena_functions.php",{img_1: $("#h1").attr("data-image"), img_3: sec,item_1 : $("#h1").val(), item_2: $("#h3").val(),
	user_id : localStorage.user_id, item_like : $id, full_name : localStorage.full_name,img_liked : $img_liked,
	img_user: localStorage.dp,img1_id: $("#h1").val(),img2_id: $("#h3").val(),desc: $(".textarea").val()},function(e)
	{
	
	
	if($img_liked == $("#h1").val() )
	{
	
	$loser =  $("#h3").val();
	}
	else
	{
		$loser =  $("#h1").val();

	
	}
		$.post("http://matchdrobe.com/api/index.php/algo/elo",{winner_id: $img_liked,loser_id: $loser},function()
		{
		
		});



				$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'tag','user_id':localStorage.user_id,'tag': $(".textarea").val(),'look_id': $img_liked});

//refresh_collection();

				});
		
			html_arena = null;
		//load_arena();
		
		var $object = $('#c'+$img_liked);
		//alert($object.length);
if($object.length >0) {
    // there's at least one matching element
	//alert();
}
if($ajax_collection == null)
{
$ajax_collection ="<div id='c"+$img_liked+"' class='col-xs-4 text-center tribe' style='adding: 0px'>"+
						'<div class="ronz">'+
							"<img  class='img-ron lazy' data-id='76' data-big='"+$arena_src+"' src='"+$arena_src+"' data-url='"+$img_liked+"' style='margin: auto'>"+
						'</div>'+
					'</div>';
					
					
					}
					else
					{
					$ajax_collection ='<div  "c'+$img_liked+'" class="col-xs-4 text-center tribe" style="padding: 0px">'+
						'<div class="ronz">'+
							"<img  class='img-ron lazy' data-id='76' data-big='"+$arena_src+"' src='"+$arena_src+"' data-url='"+$img_liked+"' style='margin: auto'>"+
						'</div>'+
					'</div>' + $ajax_collection ;
					
				
					}
	localStorage.pts = parseInt(localStorage.pts) + 1;
	$("span.xx").empty().text(localStorage.pts);

	$(".tapper").attr("style","display: none !important");
	
//	$(".popup").hide("slide");
	
	
	if(localStorage.pts == null)


{
localStorage.pts =  parseInt(array_tag.length);

$(".points").text(localStorage.pts);

					//	  document.location.href = 'f_style_tribe.html';

}

else
{
localStorage.pts = parseInt(localStorage.pts) + parseInt(array_tag.length);

$(".points").text(localStorage.pts);


}

array_tag = [];



//$(".follow").attr('data-id',$(this).attr("data-userid"));
		//$(".like_modal .tag_content").empty();
//$(".fb_photo").attr({"src": $(this).attr("data-photo"),"data-user":$(this).attr("data-name"),"data-id":$(this).attr("data-userid"),"data-tab":2,
//"data-user":$(this).attr("data-full")} );

      //  $("textarea.textarea").hashtags();


//$(".username").text($(this).attr("data-name"));
//	$(".item_desc").html( '<div>'+links($(this).attr('data-desc'))+'</div>');
//$("#pop").show();
	//	$(".tag_pop").show("slide");
$id = $(this).attr("data-id");
$img_liked = $(this).attr("data-image");

//$("#tagger").html($(this).next().html());
/*

$("#tagger").load("http://matchdrobe.com/app/arena/arena_popup_tags.php?id="+$id,function(e)
{
$("input#tag").focus().focus();

}); */
 
	 return false;
	
	});
	
 if(localStorage.user_id != null)


{




load_arena();
 

	
	// document.location.href = 'f_style_tribe.html';
footer("true");
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{follow_admin: localStorage.user_id},function()
{
});

$.important();
}	

else
{

tutorial("true");

}

//$("body").css({'padding-top':$(".res_head").height(),'margin-top': '10px'});

var tribe = 3;
$(".choose").on("tap", function()
{
$( "body" ).scrollTop( 0 );
$("#pop,.popup").hide("slide");
$($img.id).css({'opacity': '.7'});
   $.post("http://matchdrobe.com/app/register_app.php",{'tribe': $img.tid,'user_id':localStorage.user_id});
tribe--;
$("#span3").text(tribe);
if(tribe < 3)
{
$(".more").removeClass("hide");
}
if(tribe == 0)
{
$("#f3").click();
$(".navbar-fixed-bottom").css("visibility","visible");
localStorage.tribe ="full";
 $(".frame").css("visibility","visible");
 updateLayout();
adjust_arena();
 $(".tribe_div").remove();
}
return false;
});
$(".back_style").on("tap", function()
{
$("#pop,.popup").hide("slide");


return false;
});
$(".tribe img").on('tap',function()
{


$img = {src: $(this).attr("data-src"),
id : "#"+$(this).attr("id"),
tid : $(this).attr("data-id")


};
$(".big_img").attr("src",$img.src);

//$(".gender, .choose_style").hide("scale");
$("#pop,.big_style").show();
//$(this).css({'opacity': '.6'});

});

//end style tribe

$(document).on('backbutton',
     function(e){
	 $(".tag_pop").hide("slide");

 $(".popup,#pop,#popup,#searchbar2,#searchbar,.triangle").hide();

         e.preventDefault();

         // do whatever you like here.

});
	
/***************register *****************************/

$(".reg_con").on("tap",function()
{
	$(".register_div").hide();
					$(".tribe_div").show("slide");
				
					$(".reg_pop,#pop").hide();

});
$("#reg_btn").on('tap',function()
	{
	

		// $(".f2").slideDown();
		 		// $("#reg1")[0].scrollIntoView();

	 	// $(".f1").slideUp();
  

  }

 // return false;
   );
//arena ******************************************************************************************************
//tioggle options
$(document).on("tap","img#settings_icon",function()
{
$("div.pop_options,div.pop_content").toggle();
});

$("#profile_follow .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{followers: localStorage.user_id },function()
{
updateLayout();
});


$("#profile_following .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{following: localStorage.user_id },function()
{
updateLayout();
});
$(".follow").on("tap",function()
{

refresh_followers();


});
$(document).on("tap",".pop_back",function()
{
$(".tag_pop").hide("slide");

});
$(document).on("tap",".skip",function()
{
		   $(".lazy.fucker").fadeOut();


//$("#master").empty();
	html_arena = null;
	
setTimeout(function() {



load_arena();
    }, 2000);


$(".tapper").attr("style","display: none !important");
}); 
 
 
 $(".upback").on("tap",function()
 {
 $("#pop, .popup").hide();
 });
 
 var array_tag = [];
var $id = '';
var $img_liked = '';

/* arena to profile */
$(".name_plate").on("tap",function()
{
$("#f3").trigger("tap");
});

 function links(text) {

    var re = /(https?:\/\/(([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?))/g;
fuck = '<a href=$1 target=_blank>$1</a>';
	
   return  text.replace(re, fuck);
 
  }
  
	
	

	
	$(document).on('tap','.ctag',function()
	{
	$(this).remove();
	
	});
	
	 $( document ).on('keypress','.tagg',function(event) {
        if ( event.keyCode == 32 ) {
	
		if($(this).val() !== "")
		{
			 		var str = $(this).val();

if(str.indexOf("#") == 0 || str.indexOf("#") == 1)
{
		 array_tag.push( $('.tagg').val() );
		 		        // $('#textarea').append(' '+$('.tagg').val());

		 }
		 else
		 {
		 		       //  $('#tag_area').append('<span class="ctag" >'+$('.tagg').val()+' </span>');

						  
		 }
		 						;
								

		
		//$('.tagg').focus().val('');
		}
	$(this).val("");

        }
    });

	$(document).on("tap",".confirm",function()
	{
	$(".tag_pop").hide("slide");

		 //  $(".lazy.fucker").fadeOut();

		html_arena = null;
		//load_arena();


$ajax_collection ='<div  class="col-xs-4 text-center tribe" style="padding: 0px">'+
						'<div class="ronz">'+
							"<img class='img-ron lazy' data-id='76' data-big='"+$arena_src+"' src='"+$arena_src+"' data-url='"+$img_liked+"' style='margin: auto'>"+
						'</div>'+
					'</div>';
	localStorage.pts = parseInt(localStorage.pts) + 1;
	$("span.xx").empty().text(localStorage.pts);

	$(".tapper").attr("style","display: none !important");
	
	//$("#pop,.popup").hide("slide");
	sec =$("#fuck").val();
	$.get("http://matchdrobe.com/app/arena/arena_functions.php",{img_1: $("#h1").attr("data-image"), img_3: sec,item_1 : $("#h1").val(), item_2: $("#h3").val(),
	user_id : localStorage.user_id, item_like : $id, full_name : localStorage.full_name,img_liked : $img_liked,
	img_user: localStorage.dp,img1_id: $("#h1").val(),img2_id: $("#h3").val(),desc: $(".textarea").val()},function(e)
	{
	
	
	if($img_liked == $("#h1").val() )
	{
	
	$loser =  $("#h3").val();
	}
	else
	{
		$loser =  $("#h1").val();

	
	}
		$.post("http://matchdrobe.com/api/index.php/algo/elo",{winner_id: $img_liked,loser_id: $loser},function()
		{
		
		});


	

				$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'tag','user_id':localStorage.user_id,'tag': $(".textarea").val(),'look_id': $img_liked});

//refresh_collection();

				});
	
	if(localStorage.pts == null)


{
localStorage.pts =  parseInt(array_tag.length);

$(".points").text(localStorage.pts);

					//	  document.location.href = 'f_style_tribe.html';

}

else
{
localStorage.pts = parseInt(localStorage.pts) + parseInt(array_tag.length);

$(".points").text(localStorage.pts);


}

array_tag = [];



	});

	
	$(document).on('tap','.top_tags',function()
	{
	$text = $(this).text();
	$me = $("textarea.textarea");
	if($(this).hasClass("highlight"))
	{
		$("textarea.textarea").val($("textarea.textarea").val().replace($text,' '));

	$(this).removeClass("highlight");
	
	}
	
	else
	{
	
			 		       $("textarea.textarea").val( $("textarea.textarea").val()+$text);

		$(this).addClass("highlight");

	}
	 //array_tag.push( $(this).text() );
	//$(this).css({'background':'#b80941','color': 'white'});

	
	
	
	});


	
	
	
	$(document).on("tap","img.follow_button",function()
	{
	if($(this).attr("src") == "img/unfollow.jpg")
{
$(this).attr("src","img/follow.jpg");
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{user:$(this).attr("data-id"), unfollower: localStorage.user_id },function(e)
{

});
}
else
{
$(this).attr("src","img/unfollow.jpg");

$.post("http://matchdrobe.com/app/arena/arena_functions.php",{user:$(this).attr("data-id"),follower: localStorage.user_id },function(e)
{

});
}


refresh_followers();
	});
/* footer *********************** //**/

		 $(document).on("tap","span.feed_user,img.feed_user, .f_pic img,img.fb_photo",function()
{
$(".popup,#pop,#popup").hide();
$.post(arena_url,{user_id: $(this).attr("data-id"),profile: 1,owner: localStorage.user_id},function(e)
{

    //profile_html = Mustache.to_html($profile,e);
	$("#master").empty();
$("#master").html(e);


},"json");

});


$(document).on("tap",".navbar-fixed-bottom div",function() {
//updateLayout();
$("#master").empty();
$(".navbar-fixed-bottom div .f_active").show();
   $(".navbar-fixed-bottom .none").hide();
   $(".none", this).show();
      $(".f_active", this).hide();

   

//$.myprofile();
url = $(this).attr("data-url");
//myScroll.scrollToPage(url, 0, 0);
$( "body" ).scrollTop( 0 );
if(url == '.profile_div')
{
//$("body").css("overflow-x", "hidden");
current = 1;
 $("#profile_nav img").attr("src","img/profile_nav.jpg");
 $("#1").attr("src","img/profile_nav_h.jpg");
$(".setter,#profile_nav").show("slide");
}



updateLayout();

//$(".adjust_container").hide();

 
//$(url).show("slide");
$.adjust();
if(url == '2')
{
$("#master").html($("#arena_page2").html());   

}
if(url == '3')
{
if(looks_html == null)
{
refresh_collection();

}
else
{
$("#master").html(looks_html)
$(".looks_div .gender").prepend($ajax_collection);
$(".looks_div .gender").prepend($feed_collection);

$ajax_collection = null;
$feed_collection = null;

}
}
 if(url == '1')
{
 
if(hof_html == null)
{
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{hof: 1},function(e)
{
var sdds='';
 hof_html = Mustache.to_html($hof_page,e);
$("#master").html(hof_html)
updateLayout();
//hofscroll

},"json");
}
else
{
$("#master").html(hof_html)

}

}

if(url == 4)
{

if(profile_html ==null)
{
$.post(arena_url,{user_id: localStorage.user_id,profile: 1,owner: localStorage.user_id},function(e)
{

    //profile_html = Mustache.to_html($profile,e);
	
	profile_html = e;
$("#master").html(e);


},"json");
}
else
{
$("#master").html(profile_html);

}

}
if(url == 0)
{

if(feed_html ==null)
{
//$("#wrapper_feeds,#wrapper_looks,#wrapper_hof,div.pair").css({"margin-top":$(".feed_tab").height()+20,"margin-bottom":$(".feed_tab").height()});
$.get("http://matchdrobe.com/app/arena/arena_functions.php?offset=0&my_activity=0&user_id="+localStorage.user_id,function(e)
{
    feed_html = Mustache.to_html($feed_page,e);
$("#master").html(feed_html);

			feeder();
						//feedScroll.refresh();


			 //   ed = { 'roles': e };
			


updateLayout();

//lazy_feed = $("div.activity_item img.lazy");

//lazy_feed.height(lazy_feed.width()*2.1);
},"json");

}


else
{
$("#master").html(feed_html);
feeder();
}
}

/*
 if(url == '.looks_div')
{
$(".looks_div .container").css({"margin-top":$(".looks_tab").height() + 20});
looksScroll.refresh();
}
if(url == '.feed_div')
{
$(".feed_div .container").css({"margin-top":$(".nav_feed").height() + 20});

feedScroll.refresh();

}  */
// loaded();

 
 	
}); 

/*hof**************************/
$(document).on("tap",".big_img2",function()
{

$("#pop").hide();
$(this).hide();
});

/*

$(document).on("tap",".f_items img",function()
{

$(".big_img2").attr({"src":$(this).attr("data-big"),"data-url":$(this).attr("data-url")}).css('display', 'inline-block').center();
$("#pop").show();
$("#popup").show().center();
zoom = new iScroll('popup', { zoom:true ,  lockDirection: true,click: true});
}); */
$(".hof_toggle").on("tap",function()
{



	$(".hof_pop").effect('slide', { direction: 'right', mode: 'show' });


});
$(".hof_pop").on("tap",function()
{
	$(this).effect('slide', { direction: 'right', mode: 'hide' });

});





/*looks **********************************/
$(".looks_div .gender,.profile_div .looks, #profile_looks .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{looks: 1,user_id: localStorage.user_id,offset:0},function()

{
updateLayout();
});
jQuery.fn.center = function () {
  //  this.css("position","fixed");
	//Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
      //                                          $(window).scrollTop()) +  center height
    this.css("top", "0px");
   // this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
   //                                             $(window).scrollLeft()) + "px");
    return this;
}




function cropper()

{

}
/** * Take picture with camera */
function takePicture() { 

setTimeout(function() {
  

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,destinationType: navigator.camera.DestinationType.FILE_URI,correctOrientation: true,allowEdit: true, encodingType: Camera.EncodingType.JPEG
  
});

function onSuccess(imageData) {
    var image = document.getElementById('preview');
	
	$('img#preview').attr("src", imageData);
	//$('img#test').attr("src", imageData);
	
	
$(".upcrop").show();
$(".uppop").hide();

}

function onFail(message) {
    alert('Failed because: ' + message);
}
}, 0);  


		 
		 };
		 



function encodeImageUri(imageUri)
{
     var c=document.createElement('canvas');
     var ctx=c.getContext("2d");
     var img=new Image();
     img.onload = function(){
       c.width=this.width;
       c.height=this.height;
       ctx.drawImage(img, 0,0);
     };
     img.src=imageUri;
     var dataURL = c.toDataURL('image/png');;
     return dataURL;
}



//uploader
/** * Upload current picture */
var ft;

$("#updone").on("tap",function()
{
//	$("#pop,.popup").hide();

//uploadPicture();
$("#uploading").show();


params = {desc :$('#desc_up').val(),id: localStorage.user_id,file_upload: localStorage.upload_image };

 $.post("http://matchdrobe.com/app/arena/arena_functions.php", params, function(data) {
       
		
		 navigator.notification.alert(
            data,  // message
           function()
		   {
		   				$("#uploading").hide();
$(".updetails").hide();
$("#pop,.popup").hide();
		   },         // callback
            'Upload',            // title
            'Done'                  // buttonName
        );


		refresh_collection();

        // Display the selected image on send complete
      //  $('#image').attr('src', 'data:image/jpeg;base64,' + params['image']);     
    });

});

	  
	  load_arena();
	  
	
	  function load_arena()
	  {
	  
	  setTimeout(function() {





			$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'arena_transaction','user_id':localStorage.user_id});

			
	 
	   $("#fb_load").fadeOut();

	  $.post("http://matchdrobe.com/app/arena/",{"search_tags": $("#s_tag").val()},function(e)
	{
	
if(e.item_1)
{
 $html =  "<div class='page' id='arena_page'>"+
							"<div class='arena_div  adjust_container' >"+
					"<div class='container'>"+
						"<div class='row text-center style  navbar_arena' data-position='fixed' style='ackground: white;'>"+
							"<img src='img/arena_tab.png' class='pull-left arena_tab' /><br/>"+
							"<div class='pointsd   pull-right'>"+
								"<img id='search_icon' src='img/search2.png'  />"+
						    "</div>"+
						"</div>"+
						"<div id='searchbar' ><input id='s_tag' type='text' style='width: 100%'  placeholder='Search for hashtags' />"+
						"</div>"+
						"<div id='which' ><center> Which look is better?</center>"+
						"</div>"+
		
						
					"<div class='row  pair '>"+

    "<img   class='tapper' src='img/tap.png' />"+
							"<div class='cont text-center  '>"+
			"<div class='col-xs-6 nopad fleft'>"+
 	         "<a  class='arena_img' data-userid='{{item_1.user_id}}' data-image='{{item_1.image}}' data-full='{{item_1.full_name}}' "+
			 "data-name='{{item_1.user_name}}' data-photo='{{item_1.photo}}' data-id='{{item_1.id}}' data-desc='{{item_1.desc}}'>"+
				"<img class='img-responsive lazy fucker pull-left' src='"+$thumb+$arena_image+"{{item_1.image}}&width=300' /></a>"+
		"<div class='modal-body' style='display: none' >"+
		 "<a  href=#  class='confirm'  data-dismiss='modal'><img class='hov confirm_button' src='img/confirm.png' /></a>"+
             "<div id='parent_tag'>"+
				 "<div id='tag_area>"+
				 "</div>"+
			"<div id='add_tag'>"+
				//"<textarea class='textarea' placeholder='Describe the look to gain points' ></textarea>"+

			"</div>"+
			 "</div>"+
			 "<div class='tops'>"+ //toptag
			
			" {{#item_1.tags}}<div class='top_tags' style='font-size: 1.5rem !important'>{{.}}</div> {{/item_1.tags}}"+

			

			"</div>"+


		 "</div>"+
		 "</div>"+
		 "<div class='col-xs-6 nopad fright'>"+
 	         "<a  class='arena_img' data-userid='{{item_2.user_id}}' data-image='{{item_2.image}}' data-full='{{item_2.full_name}}' "+
			 "data-name='{{item_2.user_name}}' data-photo='{{item_2.photo}}' data-id='{{item_2.id}}' data-desc='{{item_2.desc}}'>"+
				"<img class='img-responsive lazy fucker pull-right' src='"+$thumb+$arena_image+"{{item_2.image}}&width=300' /></a>"+
				"<div class='modal-body' style='display: none' >"+
		 "<a  href=#  class='confirm'  data-dismiss='modal'><img class='hov confirm_button' src='img/confirm.png' /></a>"+
             "<div id='parent_tag'>"+
				 "<div id='tag_area>"+
				 "</div>"+
			"<div id='add_tag'>"+
				//"<textarea class='textarea' placeholder='Describe the look to gain points' ></textarea>"+

			"</div>"+
			 "</div>"+
			 "<div class='tops'>"+ //toptag
			
			" {{#item_2.tags}}<div class='top_tags' style='font-size: 1.5rem !important'>{{.}}</div> {{/item_2.tags}}"+

			

			"</div>"+


		 "</div>"+
		 "</div>"+
		 "<input type=hidden id=h1 value='{{item_1.id}}' data-image='{{item_1.image}}' />"+
		 "<input type=hidden id=h3 value='{{item_2.id}}' data-images='{{item_2.image}}' />"+
		 "<input type=hidden id=fuck value='{{item_2.image}}' />"+
		 "</div>"+
						"</div>"+
				

					"<img src='img/skip.png' class='skip hov' />"+			
					"</div><!-- /content -->"+

	
				


"</div>"+
               " </div>" ;
 html_arena = Mustache.to_html($html,e);
localStorage.arena = html_arena;
$("#master").html(html_arena);

}
















	if(e.num)
	{
	var tpl = "<center><h1>{{num}}</h1></center>";
var html = Mustache.to_html(tpl,e);

$(".pair .cont").empty().html(html);

     }
	
	
	
	
	


	$("a.arena_img img").delay( 1000 ).fadeIn(function()
	{
	
	$(".tapper").show();
	});
	
	//updateLayout();
//$.adjust();

	},"json");
	
    }, 200);
	
	  
	  
	
	  
	  	
	 


}
	  
	  

				  
$("div#f5").on("tap",function()
{
console.log('dd');
		$.myprofile();

});
	  
	  
	  
	  
	  
	  
	  
	  	   if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) 
	   //alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
            if (typeof CDV == 'undefined')
			//alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
            if (typeof FB == 'undefined') 
			{
			
			}
			//alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.');
            
            FB.Event.subscribe('auth.login', function(response) {
                              // alert('auth.login event');
                               });
            
            FB.Event.subscribe('auth.logout', function(response) {
                              // alert('auth.logout event');
                               });
            
            FB.Event.subscribe('auth.sessionChange', function(response) {
			
			
			
			
			
			
                             //  alert('auth.sessionChange event');
                               });
            
            FB.Event.subscribe('auth.statusChange', function(response) {
                             //  alert('auth.statusChange event');
                               });
            
           function getSession() {
              //  alert("session: " + JSON.stringify(FB.getSession()));
            }
            
            function getLoginStatus() {
                FB.getLoginStatus(function(response) {
                                  if (response.status == 'connected') {
								  var accessToken = response.authResponse.accessToken;
								 var uid = response.authResponse.userID || response.authResponse.userId;
								//  alert(uid);
								 localStorage.dp = 'https://graph.facebook.com/'+uid+'/picture?type=large&return_ssl_results=1';
								//  alert(accessToken);
								  localStorage.fbid = uid;

								  FB.api('/me', function(response) {
  //alert(response.name);
  
  localStorage.full_name = response.name;
  $.get("")
  
});

$("#dp").attr("src", localStorage.dp);
		$(".profile_pic img").attr("src", localStorage.dp);

		$(".profile_name").text(localStorage.full_name);
								 // alert(localStorage.dp);
								 // alert(response.status);
                                 // alert('logged in');
                                  } else {
                                  alert('not logged in');
                                  }
                                  });
            }
            var friendIDs = [];
                        var fdata;
            function me() {
                FB.api('/me/friends', { fields: 'id, name, picture' },  function(response) {
                       if (response.error) {
                       alert(JSON.stringify(response.error));
                       } else {
                       var data = document.getElementById('data');
                                           fdata=response.data;
                                           console.log("fdata: "+fdata);
                       response.data.forEach(function(item) {
                                             var d = document.createElement('div');
                                             d.innerHTML = "<img src="+item.picture+"/>"+item.name;
                                             data.appendChild(d);
                                             });
                       }
                                        var friends = response.data;
                                        console.log(friends.length); 
                                        for (var k = 0; k < friends.length && k < 200; k++) {
                                        var friend = friends[k];
                                        var index = 1;

                                        friendIDs[k] = friend.id;
                                        //friendsInfo[k] = friend;
                                        }
                                        console.log("friendId's: "+friendIDs);
                       });
            }
            
            function logout() {
			
			tutorial("true");

			$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'log_out','user_id':localStorage.user_id});
                FB.logout(function(response) {
                        //  alert('logged out');
                          });
            }
            
          $.login =   function login() {
				

			
			     FB.login(function(response) {
						 
						 window.plugins.spinnerDialog.show();

                          if (response.authResponse) {

     console.log('Welcome!  Fetching your information.... ');

     FB.api('/me', function(response) {
						 	//  $("#fb_load").hide();
							//  $("body").append($footer);

$(".logo_div").hide();
window.plugins.spinnerDialog.hide();

	 //	  alert("Name: "+ response.name + "\nFirst name: "+ response.first_name + "ID: "+response.id + "EMAIL: "+ response.email);
		localStorage.dp = 'https://graph.facebook.com/'+response.id+'/picture?type=large&return_ssl_results=1';

		$.get("http://matchdrobe.com/app/register_app.php",
		{'login':'1','fb_id':response.id,'email':  response.email,'user_name': response.first_name,'full_name': response.name, 'photo' : localStorage.dp },function(e)
		{
		localStorage.user_id = e.id;
		localStorage.full_name = response.name;
		if(e.gender)
		{
			$(".stylfi_header").show();
	 $(".active_tab").text("SUGGESTIONS").show();
$(".active_tab").text("SUGGESTIONS");
			if(e.gender =="male")
			{
				
localStorage.cat = 54;
				
			}
			else
			{
				localStorage.cat = 12;
			}
			
			
			
							$("div.suggestion_div").show("slide").load("http://matchdrobe.com/app/arena/arena_functions.php",{skimlinks: 'true' ,cat_id: localStorage.cat},function()
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
		else
		{
			$(".choose_gender").show();

		}
		
		
		
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
			 			$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'log_in','user_id':localStorage.user_id});

			//	init();

//$.profile(localStorage.full_name,"true",localStorage.user_id,1);
//myScroll.scrollToPage(2, 0, 0);


//load_arena();				
localStorage.fbid = response.id;	
		setTimeout( function()
{
			 $.post("http://matchdrobe.com/api/index.php/events/log",{user_id:localStorage.user_id}); //api login


		},1500);
		
		},"json");
								 

	//  load_arena();
	
	// document.location.href = 'f_style_tribe.html';
//footer("true");
$.post("http://matchdrobe.com/app/arena/arena_functions.php",{follow_admin: localStorage.user_id},function()
{
});

	  
     });		 
	 
	 
                        
						
                         } else {

                         alert('not logged in');
                         }
                         },
                         { scope: "email" });
           
            }
                        
                        
                        function facebookWallPost() {
                            console.log('Debug 1');
                                var params = {
                                    method: 'MAtchdrobe Arena',
                                    name: 'Facebook Dialogs',
                                    link: 'http://matchdrobe.com',
                                    picture: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-prn1/1497502_658266787558380_127825057_n.png',
                                    caption: 'MAtchdrobe Arena',
                                    description: 'MAtchdrobe Arena'
                                  };
                                console.log(params);
                            FB.ui(params, function(obj) { console.log(obj);});
                        }
            
                        function publishStoryFriend() {
                                randNum = Math.floor ( Math.random() * friendIDs.length ); 

                                var friendID = friendIDs[randNum];
                                if (friendID == undefined){
                                        alert('please click the me button to get a list of friends first');
                                }else{
                                    console.log("friend id: " + friendID );
                                console.log('Opening a dialog for friendID: ', friendID);
                                var params = {
                                        method: 'feed',
                                    to: friendID.toString(),
                                    name: 'Facebook Dialogs',
                                    link: 'https://developers.facebook.com/docs/reference/dialogs/',
                                    picture: 'http://fbrell.com/f8.jpg',
                                    caption: 'Reference Documentation',
                                    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
                                     };
                                        FB.ui(params, function(obj) { console.log(obj);});
                            }
                        } 
			
	function feeder()
	{
				
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
	/*
feedScroll = new iScroll('wrapper_feeds', {
			momentum: true,
topOffset: $(".nav_feed").height()-30,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
			} else if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
			}
		},
		hScrollbar: false,
		vScrollbar: false, 
		lockDirection: true,
		click:true,
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.className.match('flip')) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.className.match('flip')) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
				this.minScrollY = -pullDownOffset;
			} else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
				this.maxScrollY = pullUpOffset;
			}
		},
		onScrollEnd: function () {
		
   if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
$.get("http://matchdrobe.com/app/arena/arena_functions.php",{user_id:localStorage.user_id,my_activity:0,start: $(".feed_div .activity").attr('data-id')},function(e)
			{
			
			var htmlf = Mustache.to_html($feed_ajax,e);

			$('#wrapper_feeds .scroller .container').prepend(htmlf);
			feedScroll.refresh();
			},"json");				
			//	pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				
$.get("http://matchdrobe.com/app/arena/arena_functions.php",{offset:off,user_id:localStorage.user_id,my_activity:0},function(e)
			{
			
			var htmlf = Mustache.to_html($feed_ajax,e);

			$('#wrapper_feeds .scroller .container').append(htmlf);
			feedScroll.refresh();
off+=6;
			},"json");}}
});


*/

	}
						
						function init()
{

//$("#wraper_looks div.gender div.ron").width($(window).width());






}
	
  
	function upload_functions()
	{
	
$("img#next").on("tap",function()  //uploader
{
//$('img#preview').imgAreaSelect({ hide: true });

$(".updetails").show();
$(".upcrop").hide();
	var image = new Image();
	var canvas1 = document.getElementById("mycanvas");
	image.src = canvas1.toDataURL("image/png");
localStorage.upload_image =  image.src;

});
//login
$(document).on("tap","span#uplink", function()
{

	$("#pop").show();

		selectPicture();
		
					$(".upcrop").show();
$(".uppop").hide();
//$("#pop,.uppop").show();
});
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 wrapperWidth2 = $('#pageWrapper_t').width();



  //  $('#pageScroller_t').css('width', wrapperWidth2 * 5);
	
	
	
	
	
	
	
	
	

	$(document).on("tap","img.follow_people",function()
	{
	$.profile($(this).attr("data-name")," ",$(this).attr("data-id"));

	})
	
	$("#settings_div img").on("tap",function()
	{
		$("#settings_div").hide();

	});
	
$("#logout").on("tap",function()
{
			tutorial("true");

$("#settings_div, .navbar_profile,#master").hide();
localStorage.clear();
 FB.logout(function(response) {
                          alert('logged out');
                          });
$(".frame2").show();
$(".frameron, .navbar-fixed-bottom").css("visibility","hidden");
});








$("#searchbar input").keyup(function(e){ 
    var code = e.which; // recommended to use e.which, it's normalized across browsers
 //   if(code==13)e.preventDefault();
    if(code==13){
	//alert($(this).val());
		$(".arena_div .loader").show();
load_arena();
    } // missing closing if brace
});




    function downloadFile(){
        window.requestFileSystem(
                     LocalFileSystem.PERSISTENT, 0, 
                     function onFileSystemSuccess(fileSystem) {
                     fileSystem.root.getFile(
                                 "dummy.html", {create: true, exclusive: false}, 
                                 function gotFileEntry(fileEntry){
                                 var sPath = fileEntry.fullPath.replace("dummy.html","");
                                 var fileTransfer = new FileTransfer();
                                 fileEntry.remove();
 
                                 fileTransfer.download(
                                           $("p#dl_photo").attr("data-big"),
                                           sPath + $("p#dl_photo").attr("data-name"),
                                           function(theFile) {
                                           console.log("download complete: " + theFile.toURL());
                                           showLink(theFile.toURI());
                                           },
                                           function(error) {
                                           console.log("download error source " + error.source);
                                           console.log("download error target " + error.target);
                                           console.log("upload error code: " + error.code);
                                           }
                                           );
                                 }, 
                                 fail);
                     }, 
                     fail);
 
    }
 
    function showLink(url){
      //  alert(url);
        var divEl = document.getElementById("ready");
        var aElem = document.createElement("a");
        aElem.setAttribute("target", "_blank");
        aElem.setAttribute("href", url);
        aElem.appendChild(document.createTextNode("Ready! Click To Open."))
        divEl.appendChild(aElem);
 
    }
 
 
    function fail(evt) {
        console.log(evt.target.error.code);
    }

//download photo
$(document).on("tap","p#dl_photo",function()
{
var $source = $("p#dl_photo").attr("data-big");
var $name = $(this).attr("data-name");
downloadFile();
//var fileTransfer = new FileTransfer();
/*fileTransfer.download(
    $source,
    "file://sdcard/"+$name,
    function(entry) {
        alert("download complete: " + entry.fullPath);
    },
    function(error) {
        alert("download error source " + error.source);
        alert("download error target " + error.target);
        alert("upload error code" + error.code);
    },
	 true,
    {
        headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
		}); */
});




//mescroll
// looks toggle

$("#mylooks").on("tap",function()
{
$(".looks_div .gender").load("http://matchdrobe.com/app/arena/arena_functions.php",{mylooks: 1,looks: 1,user_id: localStorage.user_id,offset:0},
function()
{
//$("div.ronz").height($(window).height() * 0.3);

});

});
$("#mybets").on("tap",function()
{
$(".looks_div .gender").load("http://matchdrobe.com/app/arena/arena_functions.php",{looks: 1,user_id: localStorage.user_id,offset:0},function()
{
//$("div.ronz").height($(window).height() * 0.3);

});

});



$("div.ronz").load(function(e)
{
//e.height($(window).height() * 0.3);
});

delete onDeviceReady;

}   //end of device ready
	




/*   */

		/*	 */
	
/*css */



/* end of css */	

//remCalibrate();
/* all functions below */
	function remCalibrate() {
	//document.documentElement.style.fontSize = window.innerWidth/100 + 'px';
	 var aspect_ratio =  (window.innerHeight/window.innerWidth)/0.75
    var vwh =  window.innerWidth/100
    var rem = Math.max(8,Math.min(24,vwh*aspect_ratio))

    document.documentElement.style.fontSize =  rem + 'px';
} 
	

function pullDownAction () {
	setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
		
		
		myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
	}, 100);	// <-- Simulate network congestion, remove setTimeout from production!

}
//document.addEventListener("orientationchange", updateLayout);


//upload



//	page3Scroll = new iScroll('wrapper', {hScrollbar: false, vScrollbar: false, lockDirection: true });








function updateLayout() {

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
    }

    wrapperWidth = $('#pageWrapper').width();

    $('#pageScroller').css('width', wrapperWidth * 9);
    $('.page').css('width', wrapperWidth);
   // myScroll.refresh();
   // myScroll.scrollToPage(currentPage, 0, 0);
	//page3Scroll.refresh();
	//looksScroll.refresh();
	//feedScroll.refresh();
	//followersScroll.refresh();
	
	//hofScroll.refresh();
}


function refresh_followers()
{
$("#profile_follow .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{followers: localStorage.user_id },function()
{
updateLayout();
});


$("#profile_following .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{following: localStorage.user_id },function()
{


});

}


/* own profile */

$.myprofile = function my()
{
$(".profile_tab").attr("src","img/profile_tab.png").removeClass("other_profile");

$("#profile_page #profile_content").empty().html($("#hidden_profile").html());
$("#profile_looks .container").empty().html($("#hidden_looks").html());
$("#profile_follow .container").empty().html($("#hidden_follow").html());
$("#profile_following .container").empty().html($("#hidden_following").html());
$("#profile_activity .container").empty().html($("#hidden_activity").html());
}


function profile_functions()
{
  $(".profile_tab").on("tap",function()
     {	
//myScroll.scrollToPage($(this).attr("data-tab"), 0, 0);

         });
		 
		 
		 
		 //user thumbnails to profile

}







//profile layout
$.profile =  function profile(name,me,uid,tab)
{

$("#popup").hide();
if(me == "true")
{
$(".profile_tab").attr("src","img/profile_tab.png").removeClass("other_profile");


}


else
{

$(".profile_tab").attr({"src":"img/upback.png","data-tab":tab}).addClass("other_profile");
$("#tofollow_div").hide();
//myScroll.scrollToPage(4, 0, 0);
}
$("#profile_content").empty();
$("#profile_activity .container").load("http://matchdrobe.com/app/arena/arena_functions.php?offset=0&my_activity=1&me_id="+localStorage.user_id+"&user_id="+uid,function(e)
{
if( $('#hidden_activity').is(':empty') ) {

$('#hidden_activity').append(e);
}

//meAct.refresh();
//lazy_feed.height(lazy_feed.width()*2.1);
});
$("#profile_content").load(arena_url,{user_id: uid,profile: 1,owner: localStorage.user_id},function(e)
{
localStorage.pts = parseInt($("#profile_content span.xx").text());

if( $('#hidden_profile').is(':empty') ) {

$('#hidden_profile').append(e);
}

$("#profile_looks .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{mylooks:1,looks: 1,user_id: uid,offset:0},function(e)

{

//mylooksScroll.refresh();
if( $('#hidden_looks').is(':empty') ) {

$('#hidden_looks').append(e);
}

$("#profile_follow .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{followers: uid },function(e)
{


if( $('#hidden_follow').is(':empty') ) {

$('#hidden_follow').append(e);
}
$("#profile_following .container").load("http://matchdrobe.com/app/arena/arena_functions.php",{following: uid },function(e)
{

if( $('#hidden_following').is(':empty') ) {

$('#hidden_following').append(e);
}


updateLayout();

//lazy_feed = $("div.activity_item img.lazy");

//lazy_feed.height(lazy_feed.width()*2.1);


});
});

});
});
 $(".popup,#pop").hide();
}





// refresh my collection
function refresh_collection()
{
$("#master").load("http://matchdrobe.com/app/arena/arena_functions.php",{looks: 1,user_id: localStorage.user_id,offset:0},function(e)

{
looks_html =e;
});

}



function feed_functions()
{
//feed to profile

$(document).on("tap","img.heart.liker", function()
{
if($(this).attr("src") == 'img/heart.png')
{
$(this).attr("src","img/heart_fill.png");

if($feed_collection == null)
{
$feed_collection ='<div class="col-xs-4 text-center tribe" style="padding: 0px">'+
						'<div class="ronz">'+
							"<img id='s1' class='img-ron lazy' data-id='76' data-big='"+$(this).attr('data-big')+"' src='"+$(this).attr('data-src')+"' data-url='"+$(this).attr('data-url')+"' style='margin: auto'>"+
						'</div>'+
					'</div>';
					
					
					}
					else
					{
					$feed_collection ='<div class="col-xs-4 text-center tribe" style="padding: 0px">'+
						'<div class="ronz">'+
							"<img id='s1' class='img-ron lazy' data-id='76' data-big='"+$(this).attr('data-big')+"' src='"+$(this).attr('data-src')+"' data-url='"+$(this).attr('data-url')+"' style='margin: auto'>"+
						'</div>'+
					'</div>' + $feed_collection ;
					
					}


//$(this).parent().next().find(".unliker").attr("src","img/heart.png");
$.post(arena_url,{feed_id: $(this).attr("data-feed"),item_id: $(this).attr("data-id"), user_id: localStorage.user_id, feed_liker: 1},function(e)
{
});

}



/*
else if($(this).attr("src") == 'img/heart_fill.png')
{

$(this).attr("src","img/heart.png");
}*.*/


/*
else if($(this).attr("src") == 'img/broken_fill.png')
{

$(this).attr("src","img/broken.png");
}*/

});

}

//followers to profile

$(document).on("tap",".navbar_arena",function()
{

$("#pop").show();
$(".triangle").show();
//var softkeyboard = window.cordova.plugins.SoftKeyBoard;
//$('#searchbar').toggle(softkeyboard.show, softkeyboard.hide);

//$(".triangle input").focus();


});



$(document).on("tap","#search_icon2",function()
{

$("#pop").show();
$(".triangle_hof").show();
//var softkeyboard = window.cordova.plugins.SoftKeyBoard;
//$('#searchbar_hof').toggle(softkeyboard.show, softkeyboard.hide);

//$(".triangle_hof input").focus();


});



$(document).on("tap","#search_icon2",function()
{
//$//("#searchbar2").slideToggle('fast');
//var softkeyboard = window.cordova.plugins.SoftKeyBoard;

//$('#searchbar2').toggle(softkeyboard.show, softkeyboard.hide);

//$("#searchbar2 input").focus();
});

function malupit()

{

setTimeout(function(){
$.post("http://matchdrobe.com/app/arena/",{"search_tags": $("#s_tag").val()},function(e)
	{
	
if(e.item_1)
{
$("#arena_page2").remove();
 $html2 =  "<div class='page' id='arena_page2' style='display: none'>"+
							"<div class='arena_div  adjust_container' >"+
					"<div class='container'>"+
						"<div class='row text-center style  navbar_arena' data-position='fixed' style='ackground: white;'>"+
							"<img src='img/arena_tab.png' class='pull-left arena_tab' /><br/>"+
							"<div class='pointsd   pull-right'>"+
								"<img id='search_icon' src='img/search2.png'  />"+
						    "</div>"+
						"</div>"+
						"<div id='searchbar' ><input id='s_tag' type='text' style='width: 100%'  placeholder='Search for hashtags' />"+
						"</div>"+
						"<div id='which' ><center> Which look is better?</center>"+
						"</div>"+
		
						
					"<div class='row  pair '>"+

    "<img   class='tapper' src='img/tap.png' />"+
							"<div class='cont text-center  '>"+
			"<div class='col-xs-6 nopad fleft fu'>"+
 	         "<a  class='arena_img' data-userid='{{item_1.user_id}}' data-image='{{item_1.image}}' data-full='{{item_1.full_name}}' "+
			 "data-name='{{item_1.user_name}}' data-photo='{{item_1.photo}}' data-id='{{item_1.id}}' data-desc='{{item_1.desc}}'>"+
				"<img class='img-responsive lazy fucker pull-left' src='"+$thumb+$arena_image+"{{item_1.image}}&width=250' /></a>"+
		"<div class='modal-body' style='display: none' >"+
		 "<a  href=#  class='confirm'  data-dismiss='modal'><img class='hov confirm_button' src='img/confirm.png' /></a>"+
             "<div id='parent_tag'>"+
				 "<div id='tag_area>"+
				 "</div>"+
			"<div id='add_tag'>"+
				//"<textarea class='textarea' placeholder='Describe the look to gain points' ></textarea>"+

			"</div>"+
			 "</div>"+
			 "<div class='tops'>"+ //toptag
			
			" {{#item_1.tags}}<div class='top_tags' style='font-size: 1.5rem !important'>{{.}}</div> {{/item_1.tags}}"+

			

			"</div>"+


		 "</div>"+
		 "</div>"+
		 "<div class='col-xs-6 nopad fright fu'>"+
 	         "<a  class='arena_img' data-userid='{{item_2.user_id}}' data-image='{{item_2.image}}' data-full='{{item_2.full_name}}' "+
			 "data-name='{{item_2.user_name}}' data-photo='{{item_2.photo}}' data-id='{{item_2.id}}' data-desc='{{item_2.desc}}'>"+
				"<img class='img-responsive lazy fucker pull-right' src='"+$thumb+$arena_image+"{{item_2.image}}&width=250' /></a>"+
				"<div class='modal-body' style='display: none' >"+
		 "<a  href=#  class='confirm'  data-dismiss='modal'><img class='hov confirm_button' src='img/confirm.png' /></a>"+
             "<div id='parent_tag'>"+
				 "<div id='tag_area>"+
				 "</div>"+
			"<div id='add_tag'>"+
				//"<textarea class='textarea' placeholder='Describe the look to gain points' ></textarea>"+

			"</div>"+
			 "</div>"+
			 "<div class='tops'>"+ //toptag
			
			" {{#item_2.tags}}<div class='top_tags' style='font-size: 1.5rem !important'>{{.}}</div> {{/item_2.tags}}"+

			

			"</div>"+


		 "</div>"+
		 "</div>"+
		 "<input type=hidden id=h1 value='{{item_1.id}}' data-image='{{item_1.image}}' />"+
		 "<input type=hidden id=h3 value='{{item_2.id}}' data-images='{{item_2.image}}' />"+
		 "<input type=hidden id=fuck value='{{item_2.image}}' />"+
		 "</div>"+
						"</div>"+
				

					"<img src='img/skip.png' class='skip hov' />"+			
					"</div><!-- /content -->"+

	
				


"</div>"+
               " </div>" ;
 html_arena2 = Mustache.to_html($html2,e);
localStorage.arena2 = html_arena2;
$("body").append(html_arena2);

}
	

	$("a.arena_img img").delay( 1000 ).fadeIn(function()
	{
	
	$(".tapper").show();
	});
	
	//updateLayout();
//$.adjust();

	},"json");
	}, 200);
	}
	
	malupit();
	










$(document).on("tap","img#t_login,img#enter,#stylfi_login",function()
	{
	//	alert();
	console.log('puta');
	 // $("#fb_load").show();
	$.login();
	});
