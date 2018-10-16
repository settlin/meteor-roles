Package.describe({
	summary: 'Authorization package for Meteor',
	version: '2.0.0',
	git: 'https://github.com/settlin/meteor-roles.git',
	name: 'settlin:roles',
});

Package.onUse(function(api) {
	var both = ['client', 'server'];

	api.versionsFrom('METEOR@1.4.1');

	api.use(['accounts-base', 'tracker', 'mongo', 'check'], both);
	api.export('Roles');

	api.addFiles('roles/common.js', both);
	api.addFiles('roles/server.js', 'server');
	api.addFiles(['roles/client/debug.js', 'roles/client/uiHelpers.js', 'roles/client/subscriptions.js'], 'client');
});

Package.onTest(function(api) {
	api.versionsFrom('METEOR@1.4.1');

	var both = ['client', 'server'];
	api.use(['settlin:roles',
		'accounts-password', // `accounts-password` is included so `Meteor.users` exists
		'mongo',
		'tinytest'], both);

	api.addFiles('roles/tests/client.js', 'client');
	api.addFiles('roles/tests/server.js', 'server');
});
