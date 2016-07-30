// @flow

/**
 * Position of an agent, building, resource, ...
 */
class Position {
  x : number;
  y : number;

  constructor(x : number, y : number) {
    this.x = x;
    this.y = y;
  }
}

/**
 * 
 */
class Agent {
  pos : Position;

  /**
   * @var {array}
   */
  static agents;

  /**
   * 
   */
  constructor() {
    this.pos = new Position(0, 0);

    // Add to agents array
    Agent.agents.push(this);
  }

  /**
   * @return {string} Table html
   */
  static updateAgentsTable() {
    var table = $('#civset-agents-table');
    for (var agent of Agent.agents) {
      console.log(agent);
    }
    return `<div>Hej</div>`;
  }
}
Agent.agents = []

$(document).ready(function() {

  console.log('here');

  function initWorld() {
    var world = new Array(10);
    for (var i = 0; i < 100; i++) {
      world[i] = new Array(100);
    }
    world[0][0] = {asd: 'qwe'};
  }

  initWorld();

  var agent = new Agent();

  Agent.updateAgentsTable();

});
