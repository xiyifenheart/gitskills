define([], function(){

	function render(){
		require(['text!component/card/card.html'], function(content){
			$('.main').html(content);
		});
		
	}

	return{
		render : render
	}
});
