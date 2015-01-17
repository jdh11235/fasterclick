/* Copyright (c) 2015 Jonathan Herman. MIT License. */
/* https://github.com/jdh11235/fasterclick */

(function(){
	'use strict';
	window.Fasterclick = {

		//main method
		attach: function(element, callback) {

			//generate uid to store info in cache with
			var uid = Fasterclick.latest_uid;
			Fasterclick.latest_uid++;

			//construct Function() event wrapper that calls handler with uid
			Fasterclick.cache.touch_handlers[uid] = Function('event', 'Fasterclick.touchWrapper(event, "' + uid + '")');

			Fasterclick.cache.click_handlers[uid] = Function('event', 'Fasterclick.clickWrapper(event, "' + uid + '")');

			//add references
			Fasterclick.cache.elements[uid] = element;
			Fasterclick.cache.callbacks[uid] = callback;
			Fasterclick.cache.touch_queue[uid] = 0;

			//attach event wrappers to element
			element.addEventListener('touchstart', Fasterclick.cache.touch_handlers[uid]);
			element.addEventListener('click', Fasterclick.cache.click_handlers[uid]);

			//for use with Fasterclick.cancel(uid);
			return uid;
		},

		cancel: function(uid) {
			Fasterclick.cache.elements[uid].removeEventListener('touchstart', Fasterclick.cache.touch_handlers[uid]);
			Fasterclick.cache.elements[uid].removeEventListener('click', Fasterclick.cache.click_handlers[uid]);

			//remove references
			Fasterclick.cache.callbacks[uid] = null;
			Fasterclick.cache.touch_queue[uid] = null;

			Fasterclick.cache.elements[uid] = null;
			Fasterclick.cache.touch_handlers[uid] = null;
			Fasterclick.cache.click_handlers[uid] = null;
		},

		//event handlers
		touchWrapper: function(event, uid) {
			Fasterclick.cache.touch_queue[uid]++;
			Fasterclick.cache.callbacks[uid](event);
		},

		clickWrapper: function(event, uid) {
			if (Fasterclick.cache.touch_queue[uid] > 0) {
				Fasterclick.cache.touch_queue[uid]--;
			} else {
				Fasterclick.cache.callbacks[uid](event);
			}
		},

		cache: {
			//reference caches for event wrappers
			callbacks: [],
			touch_queue: [],

			//reference caches for Fasterclick.cancel()
			elements: [],
			touch_handlers: [],
			click_handlers: []
		},

		//misc. helpers
		latest_uid: 0

	};
})();
