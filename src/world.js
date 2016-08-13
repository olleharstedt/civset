/**
 * The world map
 */
class World {

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

    noise.seed(Math.random());

    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        var k = j * this.size;
        var p = new Position(i + k);
        p.height = noise.perlin2(i / 100, j / 100);
        this.positions[i + k] = p;
      }
    }
    console.log(p);

    console.log('positions = ', this.positions);

    this.canvasId = canvasId;

    var c2 = document.getElementById(this.canvasId);
    c2.width = size * 4;
    c2.height = size * 4;
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
    c1.width = this.size;
    c1.height = this.size;
    var ctx1 = c1.getContext('2d');

    var pixelData1 = new Array(this.size * this.size);

    var imgData = ctx1.createImageData(this.size, this.size);
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        var k = j * this.size;

        var position = this.positions[i + k];
        var pixelData = position.getPixelData();

        pixelData1[i + k] = {};
        pixelData1[i + k].r = pixelData.r;
        pixelData1[i + k].g = pixelData.g;
        pixelData1[i + k].b = pixelData.b;
      }
    }
    console.log(pixelData);

    for (var i = 0; i < imgData.data.length; i+= 4) {
        var j = i/4;

        imgData.data[i] = pixelData1[j].r;
        imgData.data[i+1] = pixelData1[j].g;
        imgData.data[i+2] = pixelData1[j].b;
        imgData.data[i+3] = 255;
    }
    ctx1.putImageData(imgData, 0, 0);

    ctx2.mozImageSmoothingEnabled = false;
    ctx2.webkitImageSmoothingEnabled = false;
    ctx2.msImageSmoothingEnabled = false;
    ctx2.imageSmoothingEnabled = false;
    ctx2.drawImage(c1, 0, 0, this.size * 2, this.size * 2);
  }
}
