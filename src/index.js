// @flow

/**
 * Incremental game approx Settlers + Civilization
 *
 * Babel: babel --watch=./src --out-dir=./build
 *
 * @since 2016-08-5
 * @author Olle Härstedt
 */

import Map from "./map.js";

/**
 * Position of an agent, building, resource, ...
 */
class Position {
  x : number;
  y : number;
  content : {};

  constructor() {
  }
}

/**
 * A resource. Inanimate.
 */
class Resource {
  type : string;
}

/**
 * Agents move
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

  var agent = new Agent();

  Agent.updateAgentsTable();

  console.log('end');

  var map = new Map(256, 'civset-map-canvas');
  map.draw();

});
