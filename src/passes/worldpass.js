// @flow

var P = require('../position.js');

/**
 * Base class for passes.
 */
class WorldPass {

  size : number;

  run(positions : P.Position[]) {
    throw 'Not implemented';
  }

  getPixelData() : P.PixelData {
    throw 'Not implemented';
  }

}
exports.WorldPass = WorldPass;
