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
    this.pos = new Position();

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

