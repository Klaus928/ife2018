/*MDN小练习 定位练习*/
$(function(){
	/*鼠标点击标题 显示文章 其他的全部背景设置为red 文章设置为none*/
	$("a").click(function(){
		$("a").removeClass("active");
		$(this).addClass("active");
		var index=$("a").index(this);
		$("article").removeClass("active-panel");
		$("article:eq("+index+")").addClass("active-panel");
	})
})
