// @flow

var W = require('./world.js');

/**
 * Incremental game approx Settlers + Civilization
 *
 * To build:
 *   babel --watch=./src --out-dir=./build
 *   browserify build/*.js -o browserified/civset.js
 *
 * @since 2016-08-5
 * @author Olle Härstedt
 */

$(document).ready(function() {

  //var agent = new Agent();
  //Agent.updateAgentsTable();

  var world = new W.World(255, 'civset-map-canvas');
  world.draw();

});
