// @flow

type attributes = {[key: string] : number};
/**
 * @todo Make a type when it's possible to export
 */
class PixelData {
  r : ?number;
  g : ?number;
  b : ?number;
  constructor(r : ?number, g : ?number, b : ?number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

/**
 * Position of an agent, building, resource, ...
 */
class Position {
  content : Object;
  posOnMap : number;
  height : number;

  attributes : attributes;

  /*
  class Attribute<S : string, T : string|number> {
  }
  */

  constructor(posOnMap : number) {
    this.posOnMap = posOnMap;
    this.attributes = {};
  }

  /**
   * Pixel color representation of this position
   */
  getPixelData() : PixelData {
    var c = Math.abs(this.height) * 255;
    return new PixelData(c, c, c);
  }

  /**
   * Sets an attribute
   */
  set(key : string, value : number) : void {
    this.attributes[key] = value;
  }

  /**
   * Gets an attribute
   * @return {number}
   */
  get(key : string) : number {
    return this.attributes[key];
  }
}

exports.Position = Position;
exports.PixelData = PixelData;
