/**
 * Position of an agent, building, resource, ...
 */
class Position {
  content : Object;
  posOnMap : number;
  height : number;

  constructor(posOnMap) {
    this.posOnMap = posOnMap;
  }

  /**
   * Pixel representation of this position
   */
  getPixelData() {
    var c = Math.abs(this.height) * 255;
    return {
      r: c,
      g: c,
      b: c
    };
  }

}
