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
			Fasterclick.touch_handlers[uid] = Function('event', 'Fasterclick.touchWrapper(event, "' + uid + '")');

			Fasterclick.click_handlers[uid] = Function('event', 'Fasterclick.clickWrapper(event, "' + uid + '")');

			//add references
			Fasterclick.elements[uid] = element;
			Fasterclick.callbacks[uid] = callback;
			Fasterclick.touch_queue[uid] = 0;

			//attach event wrappers to element
			element.addEventListener('touchstart', Fasterclick.touch_handlers[uid]);
			element.addEventListener('click', Fasterclick.click_handlers[uid]);

			//for use with Fasterclick.cancel(uid);
			return uid;
		},

		cancel: function(uid) {
			Fasterclick.elements[uid].removeEventListener('touchstart', Fasterclick.touch_handlers[uid]);
			Fasterclick.elements[uid].removeEventListener('click', Fasterclick.click_handlers[uid]);

			//remove references
			Fasterclick.callbacks[uid] = null;
			Fasterclick.touch_queue[uid] = null;

			Fasterclick.elements[uid] = null;
			Fasterclick.touch_handlers[uid] = null;
			Fasterclick.click_handlers[uid] = null;
		},

		//event handlers
		touchWrapper: function(event, uid) {
			Fasterclick.touch_queue[uid]++;
			Fasterclick.callbacks[uid](event);
		},

		clickWrapper: function(event, uid) {
			if (Fasterclick.touch_queue > 0) {
				Fasterclick.touch_queue--;
			} else {
				Fasterclick.callbacks[uid](event);
			}
		},

		//FUTURE: move the following code into Fasterclick.cache
		//FUTURE: change cache names from plural to singular

		//reference caches for event wrappers
		callbacks: [],
		touch_queue: [],

		//reference caches for Fasterclick.cancel()
		elements: [],
		touch_handlers: [],
		click_handlers: [],

		//misc. helpers
		latest_uid: 0

	};
})();
