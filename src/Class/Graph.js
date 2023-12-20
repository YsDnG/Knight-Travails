import Node from './Node';

export default class Graph {
    constructor() {
      this.nodes = {}; // Stocke les nœuds sous forme de dictionnaire pour un accès rapide
    }
  
    addNode(position) {
      this.nodes[position] = new Node(position);
    }
  
    addEdge(position1, position2) {
      // Assurez-vous que les deux positions sont valides
      if (this.nodes[position1] && this.nodes[position2]) {
        this.nodes[position1].edges.push(this.nodes[position2]);
      }
    }
  
    getNode(position) {
      return this.nodes[position];
    }
  }
  