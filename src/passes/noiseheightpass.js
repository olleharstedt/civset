// @flow

var WP = require('./worldpass.js');
var P = require('../position.js');

/* Hack external lib noise */
declare var noise : Object;

/**
 * Perlin noise for height map
 */
class NoiseHeightPass extends WP.WorldPass {

  constructor(size : number) {
    super();
    this.size = size;
    noise.seed(Math.random());
  }

  run(positions : P.Position[]) {
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        var k = j * this.size;
        var p = positions[i + k];
        p.height = noise.perlin2(i / 100, j / 100);
      }
    }

  }

}
exports.NoiseHeightPass = NoiseHeightPass;
