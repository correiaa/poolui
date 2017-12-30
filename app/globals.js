'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "XMR.TheHashPool.io",
		api_url : 'https://xmr.thehashpool.io',
		api_refresh_interval: 5000,
		app_update_interval: 5*60000
	};
});