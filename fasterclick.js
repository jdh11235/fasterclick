(function(){
	'use strict';

	window.Fasterclick = {

		//main method
		attach: function(element, callback) {

			//generate uid to store element, callback, touch_counter in cache
			var uid = Fasterclick.latest_uid + 1;
			Fasterclick.latest_uid++;

			//construct Function() element event wrapper that calls cache with uid
			var touch_wrapper = Function('event', 'Fasterclick.touchHandler(event, "' + uid + '")');

			var click_wrapper = Function('event', 'Fasterclick.clickHandler(event, "' + uid + '")');

			//store element callback and counter info in cache using uid
			Fasterclick.callbacks[uid] = callback;
			Fasterclick.touch_counters[uid] = 0;

			//attach event wrappers to element
			element.addEventListener('touch', touch_wrapper);
			element.addEventListener('click', click_wrapper);

		},

		//event handlers
		touchHandler: function(event, uid) {
			//TODO
		},

		clickHandler: function(event, uid) {
			//TODO
		},

		//reference caches
		callbacks: [],
		touch_counters: [],

		//misc. helpers
		latest_uid: 0

	};
})();
