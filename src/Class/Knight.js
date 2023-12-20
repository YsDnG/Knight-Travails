
export default class Knight {
  constructor(position) {
    this._position = position;
    
  }

  getPosition() {
    return this._position;
  }

  knightMove(finalPosition) {
    if (this.isMovementValid(finalPosition)) 
          this._position = finalPosition;
  }

 

  shortedWayToPosition(startPosition,finalPosition,graph) {
    
      let queue = [];
      let visited = [];  // Utilisez un tableau pour les positions visitées
      let predecessor = {};
  
      queue.push(startPosition);
      visited.push(startPosition);
  
      while (queue.length > 0) {
          let currentPosition = queue.shift();
  
          if (areArraysEqual(currentPosition, finalPosition)) {
              return reconstructPath(predecessor, finalPosition);
          }
  
          for (let edge of graph.getNode(currentPosition).edges) {
              let nextPosition = edge.position;
  
              if (!isVisited(visited, nextPosition)) {
                  queue.push(nextPosition);
                  visited.push(nextPosition);
                  predecessor[arrayToString(nextPosition)] = currentPosition;
              }
          }
      }
  
      return [];  // Aucun chemin trouvé
    
  
  
      function reconstructPath(predecessor, finalPosition) {
        let path = [finalPosition];
        let currentPosition = finalPosition;
    
        while (arrayToString(currentPosition) in predecessor) {
            currentPosition = predecessor[arrayToString(currentPosition)];
            path.unshift(currentPosition);  // Ajouter au début du chemin
        }
    
        // La position de départ sera la dernière ajoutée. Si elle est votre position initiale, retirez-la.
        if (areArraysEqual(path[0], startPosition)) {
            path.shift(); // Retirer la position de départ si elle est incluse
        }
    
        return path;
    }
    
  
  function areArraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
      }
      return true;
  }
  
  function isVisited(visited, position) {
      return visited.some(visitedPosition => areArraysEqual(visitedPosition, position));
  }
  
  function arrayToString(array) {
      return array.join(',');
  }
        
}

/***/


  isMovementValid(finalPosition) {
    const dx = Math.abs(finalPosition[1] - this._position[1]);
    const dy = Math.abs(finalPosition[0] - this._position[0]);

    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  }
}