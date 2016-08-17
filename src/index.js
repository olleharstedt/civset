// @flow

var W = require('./world.js');
var PS = require('./passes/noiseheightpass.js');
var NHP = require('./passes/naiveheightpass.js');
var NRP = require('./passes/naiveriverpass.js');

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

  /*
  var heightPass = new PS.NoiseHeightPass(255);
  world.addPass(heightPass);
  world.runAllPasses();
  */

  var heightPass = new NHP.NaiveHeightPass(255);
  var riverPass = new NRP.NaiveRiverPass(255);
  world.addPass(heightPass);
  world.addPass(riverPass);
  world.runAllPasses();

  world.draw();

});
