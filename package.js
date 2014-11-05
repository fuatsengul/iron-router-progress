Package.describe({
	version : '1.0.0',
	summary : 'Progressbar for iron:router, forked from Multiply',
	git     : 'https://github.com/fuatsengul/iron-router-progress'
});

Package.onUse(function (api) {
	api.use([
		'coffeescript@1.0.0',
		'less@1.0.0',
		'jquery@1.0.0',
		'underscore@1.0.0',
		'iron:router@1.0.0'
	], 'client');

	api.imply('iron:router');

	api.addFiles([
		'progress.coffee',
		'progress.less'
	], 'client');
	
	api.export('IronRouterProgress', 'client');
});
