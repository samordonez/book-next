webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Load all specs so webpack can find them. Think of this as an automatic
	// manifest for bundling specs.

	var req = __webpack_require__(53);
	req.keys().forEach(req);

/***/ },

/***/ 43:
/***/ function(module, exports) {

	'use strict';

	module.exports = true;

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./example.spec.js": 54
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 53;


/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var example = __webpack_require__(43);

	describe('Example', function () {
	  it('is true', function () {
	    expect(example).toBe(true);
	  });
	});

/***/ }

});