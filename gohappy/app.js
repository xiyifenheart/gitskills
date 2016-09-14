require.config({

	paths : {
		'jquery' : 'lib/jquery-1.12.3',
		'backbone' : 'lib/backbone',
		'underscore' : 'lib/underscore',
		'text' : 'lib/text',
		'css' : 'lib/css',
		'baiduTemplate' : 'lib/baiduTemplate'

	},

	shim : {
		'underscore' : {
			exports : '_'
		}
	}

});
require(['jquery', 'backbone', 'router' ], function($,backbone){
	console.log($);
	backbone.history.start();
});
