// @flow
/**
 * Position of an agent, building, resource, ...
 */
class Position {
  content : Object;
  posOnMap : number;
  height : number;

  // attributes : Attribute<String, T>[] where T is a union
  /*
  class Attribute<S : string, T : string|number> {
  }
  */

  constructor(posOnMap : number) {
    this.posOnMap = posOnMap;
  }

  /**
   * Pixel representation of this position
   */
  getPixelData() : Object {
    var c = Math.abs(this.height) * 255;
    return {
      r: c,
      g: c,
      b: c
    };
  }
}
exports.Position = Position;

