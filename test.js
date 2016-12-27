jQuery("document").ready(function(){
	$("#tabs-1").show();
	$("#items li").click(function(){
		if($(this).attr("class")=="active"){
			return false;
		}
		var text=$(this).children().attr("href");
		console.log(text);
		var prevActive=$("li.active").children().attr("href");
		console.log(prevActive);
		$("li.active").removeClass("active");
		$(this).addClass("active");
		$(prevActive).fadeOut(500,function(){
			$(text).fadeIn();
		});
	});
});