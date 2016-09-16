define([], function(){

	function render(){
		require(['text!component/person/person.html', 'css!component/person/person.css'], function(content){
			$('.main').html(content);
		});
		
	}

	return{
		render : render
	}
});
