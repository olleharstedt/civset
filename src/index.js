// @flow

var World = require('./world.js').World;
var NoiseHeightPass = require('./passes/noiseheightpass.js').NoiseHeightPass;
var NaiveHeightPass = require('./passes/naiveheightpass.js').NaiveHeightPass;
var NaiveRiverPass = require('./passes/naiveriverpass.js').NaiveRiverPass;

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

  var world = new World(255, 'civset-map-canvas');

  var config = {
    size: 255,
    passes: [
      {
        name: 'NaiveHeightPass'
      },
      {
        name: 'NaiveRiverPass'
      }
    ]
  };

  $(config.passes).each(function(i, pass) {
    var str = '(new ' + pass.name + '(' + config.size + '))';
    var c = eval(str);
    world.addPass(c);
  });

  /*
  var heightPass = new PS.NoiseHeightPass(255);
  world.addPass(heightPass);
  world.runAllPasses();
  */

  //var heightPass = new NHP.NaiveHeightPass(255);
  //var riverPass = new NRP.NaiveRiverPass(255);
  //world.addPass(heightPass);
  //world.addPass(riverPass);
  world.runAllPasses();

  world.draw();

});
