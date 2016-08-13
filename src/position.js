/**
 * Position of an agent, building, resource, ...
 */
class Position {
  content : Object;
  posOnMap : number;

  constructor() {
  }

  /**
   * Pixel representation of this position
   */
  getPixelData() {
    return {
      r: 127,
      g: 127,
      b: 127
    };
  }

}
