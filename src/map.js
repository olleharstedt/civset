/**
 * The world map
 */
class Map {

  positions : Position[];

  /**
   * Size of map. Always square.
   */
  size : number;

  /**
   * Id of canvas element
   */
  canvasId : string;

  /**
   * @param {number} size Height of map (always a square)
   * @param {string} canvasId
   * @return {Map}
   */
  constructor(size : number, canvasId : string) {
    this.size = size;
    this.positions = new Array(size * size);
    this.canvasId = canvasId;
  }

  /**
   * Draws the map on specified canvas id
   * Code copied from http://stackoverflow.com/questions/26692575/html5-canvas-fastest-way-to-display-an-array-of-pixel-colors-on-the-screen
   * @return
   */
  draw() {
    var c2 = document.getElementById(this.canvasId);
    var ctx2 = c2.getContext('2d');
    var c1 = document.createElement('canvas');
    c1.width = 40;
    c1.height = 40;
    var ctx1 = c1.getContext('2d');

    var pixelData1 = new Array(40 * 40);

    for (var i = 0; i < 40; i++) {
      for (var j = 0; j < 40; j++) {
        var k = j * 40;
        pixelData1[i + k] = {};
        pixelData1[i + k].r = 5 * i;
        pixelData1[i + k].g = 5 * j;
        pixelData1[i + k].b = 255;
      }
    }

    var imgData = ctx1.createImageData(40, 40);
    for (var i=0; i<imgData.data.length; i+=4) {
      var x = (i/4)%40;
      var y = 1;
      //console.log('x', x);
      //console.log('y', y);
      imgData.data[i] = pixelData1[x * y].r;
      imgData.data[i+1] = pixelData1[x * y].g;
      imgData.data[i+2] = pixelData1[x * y].b;
      imgData.data[i+3] = 255;
    }
    ctx1.putImageData(imgData, 0, 0);

    c2.width = 400;
    c2.height = 400;

    ctx2.mozImageSmoothingEnabled = false;
    ctx2.webkitImageSmoothingEnabled = false;
    ctx2.msImageSmoothingEnabled = false;
    ctx2.imageSmoothingEnabled = false;
    ctx2.drawImage(c1, 0, 0, 400, 400);
  }
}
