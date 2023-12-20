import Knight from "../Class/Knight";
import Node from "../Class/Node";
import Graph from"../Class/Graph.js"
import prettyPrintGraph from "../component/prettyPrint";

function getPositionWanted() {
    return new Promise((resolve) => {
    const cases = document.querySelector('.board').querySelectorAll('*');
      
  
      function clickHandler(e) {
        e.preventDefault();
        const element = e.currentTarget;
        

        const position = element.classList[1].split('/').map((string) => parseFloat(string));
        resolve(position);

        cases.forEach((caseElement) => {
        caseElement.removeEventListener('click', clickHandler);

        });
        return position;
      }  
      cases.forEach((element) => {
        element.addEventListener('click', clickHandler);
      });
    });
}

function getAllMovePossible(knight)
{
    const allNextMovePossible = [];
    const cases = document.querySelector('.board').querySelectorAll('*');
    cases.forEach(element => {
        let position = element.classList[1].split('/').map((string)=>parseFloat(string))
        if(knight.isMovementValid(position))
        {
            allNextMovePossible.push(position)     
        }
    })

    return allNextMovePossible;
}

function initGraph()
{
    const knightMoves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];

    const chessGraph = new Graph();

    // Ajouter des nœuds pour chaque position sur l'échiquier
    for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        chessGraph.addNode([x, y]);
    }
    }

    // Ajouter des arêtes pour les mouvements valides du cavalier
    for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        knightMoves.forEach(move => {
        const newX = x + move[0];
        const newY = y + move[1];

        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            chessGraph.addEdge([x, y], [newX, newY]);
        }
        });
    }
    }
    return chessGraph;
}

/***/




export {getPositionWanted,getAllMovePossible,initGraph}