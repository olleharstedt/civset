// @flow

var P = require('../position.js');

/**
 * Base class for passes.
 */
class WorldPass {

  size : number;

  /**
   * Run the pass
   */
  run(positions : P.Position[]) {
    throw 'Not implemented';
  }

  /**
   * Get pixel data at this position
   */
  getPixelData(pos : P.Position) : P.PixelData {
    throw 'Not implemented';
  }

}
exports.WorldPass = WorldPass;
