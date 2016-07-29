// @flow

class Agent {
}

$(document).ready(function() {

  function initWorld() {
    var world = new Array(10);
    for (var i = 0; i < 100; i++) {
      world[i] = new Array(100);
    }
    world[0][0] = {asd: 'qwe'};
  }

  initWorld();

});
