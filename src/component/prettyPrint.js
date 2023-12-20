
export default function prettyPrintGraph(node, visited = new Set(), prefix = "") {
  if (visited.has(node)) {
      return; // Si le nœud a déjà été visité, arrêter pour éviter les cycles infinis
  }
  visited.add(node); // Marquer le nœud comme visité

  console.log(prefix + node.value); // Afficher la valeur du nœud

  node.edges.forEach(childNode => {
      prettyPrintGraph(childNode, visited, prefix + "   ");
  });
}
