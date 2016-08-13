// @flow

var P = require('../position.js');

/**
 * Base class for passes.
 */
class WorldPass {
  run(positions : P.Position[]) {
    throw 'Not implemented';
  }
}
exports.WorldPass = WorldPass;
