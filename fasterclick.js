/* Copyright (c) 2015 Jonathan Herman. MIT License. */
/* https://github.com/jdh11235/fasterclick */

(function(){
	'use strict';

	window.Fasterclick = {

		//main method
		attach: function(element, callback) {

			//generate uid to store element, callback, touch_counter in cache
			var uid = Fasterclick.latest_uid + 1;
			Fasterclick.latest_uid++;

			//construct Function() event wrapper that calls handler with uid
			var touch_wrapper = Function('event', 'Fasterclick.touchHandler(event, "' + uid + '")');

			var click_wrapper = Function('event', 'Fasterclick.clickHandler(event, "' + uid + '")');

			//add references
			Fasterclick.elements[uid] = element;
			Fasterclick.callbacks[uid] = callback;
			Fasterclick.touch_counters[uid] = 0;

			//attach event wrappers to element
			element.addEventListener('touch', touch_wrapper);
			element.addEventListener('click', click_wrapper);

			//for use with Fasterclick.cancel(uid);
			return uid;
		},

		cancel: function(uid) {
			Fasterclick.elements[uid].removeEventListener(Fasterclick.touch_events[uid]);
			Fasterclick.elements[uid].removeEventListener(Fasterclick.click_events[uid]);

			//remove references
			Fasterclick.elements[uid] = null;
			Fasterclick.callbacks[uid] = null;
			Fasterclick.touch_events[uid] = null;
			Fasterclick.click_events[uid] = null;
			Fasterclick.touch_counters[uid] = null;
		},

		//event handlers
		touchHandler: function(event, uid) {
			//TODO
			console.log(event, uid);
		},

		clickHandler: function(event, uid) {
			//TODO
			console.log(event, uid);
		},

		//FUTURE: move the following code into Fasterclick.cache

		//reference caches for event handlers
		callbacks: [],
		touch_counters: [],

		//reference caches for Fasterclick.cancel()
		elements: [],
		touch_events: [],
		click_events: [],

		//misc. helpers
		latest_uid: 0

	};
})();
