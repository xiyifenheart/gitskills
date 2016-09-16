define([], function(){

	function render(){
		require(['text!component/card/card.html', 'css!component/card/card.css'], function(content){
			$('.main').html(content);
		});
		
	}

	return{
		render : render
	}
});
