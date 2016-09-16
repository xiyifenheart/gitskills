define([], function(){

	function render(){
		require(['text!component/leyuan/leyuan.html','css!component/leyuan/leyuan.css'], function(content){
			$('.main').html(content);
			touch();
		});
		
	}

	function touch(){
		var flag = true;
		$('.nav a').on('touchstart', function(){
			$('.nav a').removeClass('border_bottom');
			$(this).addClass('border_bottom');
			if ($(this).index() == 1) {
				if (flag) {
					$('.leyuan .panel').css({
						'display': 'flex'
					});
					$('.black').css({
						'display' : 'block'
					});
					flag = false;
				}else{
					$('.leyuan .panel').css({
						'display': 'none'
					});
					$('.black').css({
						'display' : 'none'
					});
					flag = true;
				}
			}
		});
	}

	function myajax(){

		$.ajax({
			url: 'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城',
			type: 'GET',
			dataType: ' json',
			success : function(data){
				console.log(data.data)
				setData(data.data);

			}
		})
		
	}

	function setData(arr){
		for(var i = 0;i < arr.length;i++){
			$('.leyuan .list_box').append($("<li><img src='" + arr[i].img + "'><h2>" + arr[i].name + "</h2><p>" + arr[i].address + "</p><span class='leyuanfont'>&#xe604;</span></li>")); 

		}
	}

	return{
		render : render,
		myajax : myajax
	}
});
