var url = "http://localhost:3000/";

$(".navItem").hover(function(){
		$(this).find('.navHover').css('width','100%');
	},function(){
		$(this).find('.navHover').css('width','0%');
})

$(window).scroll(function(){
	if($(this).scrollTop()>=100){
		$("#navLogo").css({
			'visibility':'visible',
			'top':'40px'
		});
	} else{
		$("#navLogo").css({
			'visibility':'hidden',
			'top':'-20px'
		});
	}
})


// $.ajax({
// 	   url: url+"trends",
// 	   contentType: "application/json",
// 	   dataType: "json",
// 	   success: function(data){
// 	   		console.log(data);
// 	   		for (var i = 0; i < 100; i++) {
// 	   			var trends = data[0].trends[i].name;
// 	   			var tweetURL = data[0].trends[i].url;
//    				$("#contentContainer").append("<div class='itemContainer'>"+
// 											"<div class='itemContent'>"+
// 											"<div class='itemHeader'>"+trends+"</div>"+
// 											"<div class='tweetURL'>"+tweetURL+"</div>"+
// 											"</div>"+
// 											"</div>");
// 				console.log(trends); 
// 	   		}
// 	   },
// 	   error: function(){
// 			console.log("Error");
// 	   }
// });
