(function(){
	'use strict';

	window.Fasterclick = {

		//main method
		attach: function(element, callback) {

			//generate uid to store element, callback, touch_counter in cache
			var uid = 1;

			//construct Function() element event wrapper that calls cache with uid
			var touch_wrapper = Function('');
			var click_wrapper = Function('');

			//attach event wrappers to element
			element.addEventListener('touch', touch_wrapper);
			element.addEventListener('click', click_wrapper);

		},

		//reference caches
		elements: [],
		callbacks: [],
		touch_counters: [],

		//misc. helpers
		latest_uid: 0

	};
})();
