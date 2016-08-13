// @flow

/**
 * Incremental game approx Settlers + Civilization
 *
 * Babel: babel --watch=./src --out-dir=./build
 *
 * @since 2016-08-5
 * @author Olle Härstedt
 */

$(document).ready(function() {

  console.log('here');

  var agent = new Agent();

  Agent.updateAgentsTable();

  console.log('end');

  var world = new World(255, 'civset-map-canvas');
  world.draw();

});
