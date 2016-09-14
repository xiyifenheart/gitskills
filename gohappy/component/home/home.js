define([], function(){

	function render(){

		require(['text!component/home/home.html', 'css!component/home/home.css'], function(content){
			$('.main').html(content);
		});
		
	}

	function myajax(){
		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/home_data.php',
			type: 'GET',
			dataType: 'JSON',
			success:function(data){
				console.log(data);
				setData(data);
			}
		});

		
	}
	function setData(obj){

		//轮播图数组
		var sliderArr = obj.slider;

		//中间图片数组
		var arealistArr = obj.arealist;

		//上面列表图片
		var reclistArr = obj.reclist;

		//添加轮播图片
		for(var i = 0;i < sliderArr.length;i++){
			var objA = $("<a href='#'> <img src='" + sliderArr[i].img + "'> </a>");
			$('.home_box_imgbox').append(objA);
		 }
		 //添加中间图片
		 for(var j = 0;j < arealistArr.length;j++){
		 	$('.home_center').append($("<a href='" +  arealistArr[j].href + "'> <img src='" +  arealistArr[j].img + "' /></a>"));
		 }
		 for(var k = 0;k < reclistArr.length;k++){
		 	$('.home_bottom ul').append($("<li><img src='" + reclistArr[k].img + "'></li>"));
		 }
		 //轮播图
		 if (timer) {
		 	clearInterval(timer);
		 }
		 var i = 0;
		 var timer =  setInterval(function(){
		 	i++;
		 	if (i == 3) {
		 		i = 0;
		 	}
		 	$('.boll').removeClass('boll_live');
		 	$('.boll').eq(i).addClass('boll_live');
			 $('.home_box_imgbox').animate({
			 	'left' : -i * $('.home_box').width()
			 },500);

		 },1500);
		 

	}

	return{
		render : render,
		myajax : myajax
	}
});
