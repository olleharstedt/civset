// @flow

var WorldPass = require('./worldpass.js').WorldPass;
var P = require('../position.js');

/**
 * Naive, meaning one straight river
 */
class NaiveRiverPass extends WorldPass {

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

  getPixelData(pos : P.Position) : P.PixelData {
    var pd = new P.PixelData(155, 155, 155);
    return pd;
  }

}

exports.NaiveRiverPass = NaiveRiverPass;
