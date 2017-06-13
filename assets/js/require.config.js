//config require.js
requirejs.config({
	baseURL: "wp-content/themes/next/assets/js/",
	paths: {
		jquery:"vendor/jquery.min",
		browserSelector:"vendor/css_browser_selector",
		oldJquery:"old/vendor/jquery-1.10.2.min",
		waypoints:"vendor/jquery.waypoints.min",
		enquire:"vendor/enquire",
		bodymovin:"vendor/bodymovin",
		headroom:"vendor/headroom",
		headroomJquery:"vendor/jquery.headroom.min",
		underscore:"vendor/underscore",
		velocity:"vendor/velocity.min",
		velocityUI:"vendor/velocity.ui.min",
		scrollMagic:"vendor/ScrollMagic.min",
		hammer:"vendor/hammer.min",
		inview:"vendor/jquery.inview",
		bootstrap:"vendor/bootstrap",
		youtubeplugin:"old/vendor/jquery.youtubepopup.min",
		handlebars: ['https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.amd', 'vendor/handlebars.min'],
		selectize: ['https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.min'],
	},
	shim: {
		headroomJquery: {
			deps: ["jquery", "headroom"]
		},
		enquire: {
			deps: ["jquery"]
		},
		bodymovin: {
			deps: ["jquery"]
		},
		underscore: {
			deps: ["jquery"]
		},
		velocity: {
			deps: ["jquery"]
		},
		waypoints: {
			deps: ["jquery", "bodymovin"]
		},
		velocityUI: {
			deps: ["velocity"]
		},
		bootstrap: {
			deps: ["jquery"]
		},
		youtubeplugin: {
			deps:["oldJquery"]
		},
		selectize: {
			deps: ["jquery"]
		}
	}
});
