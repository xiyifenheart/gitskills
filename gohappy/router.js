define(['backbone'], function(backbone){
	var Router = Backbone.Router.extend({

		routes : {
			'home' : 'homefunc',
			'leyuan' : 'leyuanfunc',
			'card' : 'cardfunc',
			'person' : 'personfunc'
		},

		homefunc : function(){
			require(['component/home/home.js'],function(home){
				home.render();
				home.myajax();
			});
		},
		leyuanfunc : function(){
			require(['component/leyuan/leyuan.js'],function(leyuan){
				leyuan.render();
				leyuan.myajax();
			});
		},
		cardfunc : function(){
			require(['component/card/card.js'],function(card){
				card.render();
			});
		},
		personfunc : function(){
			require(['component/person/person.js'],function(person){
				person.render();
			});
		}

	});

	var router = new Router();
});
