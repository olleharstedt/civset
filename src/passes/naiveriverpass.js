// @flow

var WP = require('./worldpass.js');
var P = require('../position.js');

/**
 * Naive, meaning one straight river
 */
class NaiveRiverPass extends WP.WorldPass {

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
    var i = Math.floor(this.size / 2);
    for (var j = 0; j < this.size; j++) {
      var k = j * this.size;
      var p = positions[i + k];
      p.set('water',  1);
    }
  }

}

exports.NaiveRiverPass = NaiveRiverPass;
