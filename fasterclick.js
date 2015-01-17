(function(){
	'use strict';

	window.Fasterclick = {

		//main method
		attach: function(element, callback) {

			//add Function() wrapper to element event listener that calls reference cache
			//generate uid to store element, callback, touch_counter in caches

		},

		//reference caches
		elements: [],
		callbacks: [],
		touch_counters: []

	};
})();
