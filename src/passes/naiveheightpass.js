// @flow

var WP = require('./worldpass.js');
var P = require('../position.js');

/**
 * Naive, meaning same height to all points
 */
class NaiveHeightPass extends WP.WorldPass {

  /**
   * @param {number} size
   */
  constructor(size : number) {
    super();
    this.size = size;
  }

  /**
   * Run pass
   * @param {P.Position[]} positions
   */
  run(positions : P.Position[]) {
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        var k = j * this.size;
        var p = positions[i + k];
        p.height = 0.5;
      }
    }
  }

}
