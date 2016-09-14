define([], function(){

	function render(){
		require(['text!component/person/person.html'], function(content){
			$('.main').html(content);
		});
		
	}

	return{
		render : render
	}
});
