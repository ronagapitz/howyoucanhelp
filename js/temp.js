myScroll = new iScroll('pageWrapper', {
useTransition:false,
bounceLock: false,
bounce: false,

onScrollStart: function()
{
/*
$("img.lazy").lazyload({
   
});
    $('img.lazy').on('load',function(){mylooksScroll.refresh();});
*/
},
onScrollEnd: function()
{

    if (wrapperWidth > 0) {
        currentPage = - Math.ceil( $('#pageScroller').position().left / wrapperWidth);
		
		current = currentPage + 1;
		$(".navbar-fixed-bottom div .f_active").show();
   $(".navbar-fixed-bottom .none").hide();
   $('#f'+current+ " .none").show();
      $('#f'+current+ " .f_active").hide();
	  
	  if(current == 2)
	  {
	  
	 			$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'view_hof','user_id':localStorage.user_id});

	  }
	  
	   
	  if(current == 4)
	  {
	  
	 			$.post("http://matchdrobe.com/api/index.php/events/log",{'type': 'view_collection','user_id':localStorage.user_id});

	  }
	 if( current >= 5)
{
   $('#f5'+ " .none").show();
      $('#f5'+ " .f_active").hide();
	  	  	  $("#profile_nav img").attr("src","img/profile_nav.jpg");

	  if(current == "5")
	  {

	  $("#profile_nav #1").attr("src","img/profile_nav_h.jpg");
$("#profile_nav span").text($("#profile_nav #1").attr("data-text"));
	  }
	  if(current == "6")
	  {

	  $("#profile_nav #2").attr("src","img/profile_nav_h.jpg");
$("#profile_nav span").text($("#profile_nav #2").attr("data-text"));
	  }
	   if(current == "7")
	  {

	  $("#profile_nav #3").attr("src","img/profile_nav_h.jpg");
$("#profile_nav span").text($("#profile_nav #3").attr("data-text"));

	  }
	  
	  
	   if(current == "8")
	  {

	  $("#profile_nav #4").attr("src","img/profile_nav_h.jpg");
$("#profile_nav span").text($("#profile_nav #4").attr("data-text"));

	  }
	    if(current == "9")
	  {

	  $("#profile_nav #5").attr("src","img/profile_nav_h.jpg");
$("#profile_nav span").text($("#profile_nav #5").attr("data-text"));

	  }
$(".navbar_profile,#profile_nav").show();
}
else
{
$(".navbar_profile,#profile_nav").hide();

}
looksScroll.refresh();
//	feedScroll.refresh();
	followersScroll.refresh();
	
	//hofScroll.refresh();
  

	//alert(currentPage);



}
},
	snap: true,
	momentum: false,
	hScrollbar: false,
	vScrollbar: false,
    lockDirection: true,click: true
	});
	
	 myScroll.options.onBeforeScrollStart = function(e) {                
        var target = e.target;

        while (target.nodeType != 1) target = target.parentNode;
        if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA'){
            e.preventDefault();
        }
   }
	
	
	
	
	
	
	//hofscroll
	
	
	hofScroll = new iScroll('wrapper_hof', {hScrollbar: false, vScrollbar: false, lockDirection: true,	momentum: true,
bounceLock: true,

onScrollEnd: function () {
   // $('#wrapper_hof').trigger('scroll');
}
 });
 
 
 
 
 //lookscroll
 	looksScroll = new iScroll('wrapper_looks', {hScrollbar: false, vScrollbar: false, lockDirection: true,
	  onScrollEnd: function () {
                                                 if (this.y == this.maxScrollY) 
												 {
												$.post("http://matchdrobe.com/app/arena/arena_functions.php",{looks: 1,user_id: localStorage.user_id,offset:looks_offset},function(e)

{

$(".looks_div .gender,.profile_div .looks, #profile_looks .container").append(e);
updateLayout();
});
looks_offset +=12;
												 }
                                            }

					
	
				});	
				
				
				
				
				
				//profile scrolls
				followersScroll = new iScroll('wrapper_followers', {topOffset: -10,
hScrollbar: false, vScrollbar: false, lockDirection: true });
//scroll
followingScroll = new iScroll('wrapper_following', {topOffset: -10,hScrollbar: false, vScrollbar: false, lockDirection: true });
//own looks scroll
mylooksScroll = new iScroll('wrapper_mylooks', {hScrollbar: false, vScrollbar: false, lockDirection: true ,
topOffset: -10,
onScrollEnd: function ()
{
 
}


});




//feedscroll
			pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;
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


//mescroll

var meAct = new iScroll('wrapper_myactivity', {

useTransition: true,
topOffset: -10,
momentum: true,
	hScrollbar: false,
	vScrollbar: false,
	 lockDirection: true,click: true,
	onScrollEnd: function () {
		
   if (pullDownEl.className.match('flip')) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';

$.get("http://matchdrobe.com/app/arena/arena_functions.php",{my_activity:localStorage.user_id,start: $("#wrapper_myactivity .activity").attr('data-id')},function(e)
			{
			
			$('#wrapper_myactivity .scroller .container').prepend(e);
off+=6;
			});				
			//	pullDownAction();	// Execute custom function (ajax call?)
			} else if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';				

$.get("http://matchdrobe.com/app/arena/arena_functions.php",{my_activity:0,offset:off},function(e)
			{
			
			$('#wrapper_feeds .scroller .container').append(e);
		//	feedScroll.refresh();
off+=6;
			},"json");	
			}
	
	
	
	}

});
//lazy_feed = $("div.activity_item img.lazy");

//hofscroll
hofScroll = new iScroll('wrapper_hof', {hScrollbar: false, vScrollbar: false, lockDirection: true,	momentum: true,
bounceLock: true,

onScrollEnd: function () {
   // $('#wrapper_hof').trigger('scroll');
}
 });