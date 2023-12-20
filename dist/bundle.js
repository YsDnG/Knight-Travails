/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Class/Graph.js":
/*!****************************!*\
  !*** ./src/Class/Graph.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Graph)
/* harmony export */ });
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Class/Node.js");


class Graph {
    constructor() {
      this.nodes = {}; // Stocke les nœuds sous forme de dictionnaire pour un accès rapide
    }
  
    addNode(position) {
      this.nodes[position] = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](position);
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
  

/***/ }),

/***/ "./src/Class/Knight.js":
/*!*****************************!*\
  !*** ./src/Class/Knight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Knight)
/* harmony export */ });

class Knight {
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

/***/ }),

/***/ "./src/Class/Node.js":
/*!***************************!*\
  !*** ./src/Class/Node.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
class Node 
{

    constructor(position) {
      this.position = position;
      this.edges = []; 
    }
  }
  

/***/ }),

/***/ "./src/component/cp-container.js":
/*!***************************************!*\
  !*** ./src/component/cp-container.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*Create a new div with the class of className and it to his parent */
const createContainer=(className,parent)=>{
    
    const element = document.createElement('div');
    element.classList.add(className);
   
    if(parent)
    {
         parent.appendChild(element);
         return element
        
    }
    else
    {
         document.getElementById('app').appendChild(element);
         return element
    }
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContainer);

/***/ }),

/***/ "./src/component/cp-createBoard.js":
/*!*****************************************!*\
  !*** ./src/component/cp-createBoard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp-createElementWithText */ "./src/component/cp-createElementWithText.js");





function createBoard(){


    const boardDiv = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("board")
    let board = [];
    let numRows = 8;
    let numCols = 8;
   
    
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (let j = 0; j < numCols; j++) {
           
            board[i][j] = 0;
        }
    }
    
    let element; 
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            
            if((i+j)%2===0){
                element= (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',``,boardDiv,"white")
                element.classList.add(`${i}/${j}`)
                
            }
            else{
                element = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('div',``,boardDiv,"black")
                element.classList.add(`${i}/${j}`)
            }
            
                   
        }
    }



        return boardDiv;
            

}

/***/ }),

/***/ "./src/component/cp-createElementWithText.js":
/*!***************************************************!*\
  !*** ./src/component/cp-createElementWithText.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithText)
/* harmony export */ });


function createElementWithText(balise,text,container,className)
{
   const element= document.createElement(balise)
   element.innerText= text

    if(className)
        element.classList.add(className)

    if(container)
        container.appendChild(element)
    else
        document.getElementById('app').appendChild(element)

    return element;

}



/***/ }),

/***/ "./src/component/cp-init-page.js":
/*!***************************************!*\
  !*** ./src/component/cp-init-page.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _cp_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cp-container */ "./src/component/cp-container.js");
/* harmony import */ var _cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp-createElementWithText */ "./src/component/cp-createElementWithText.js");
/* harmony import */ var _cp_createBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cp-createBoard */ "./src/component/cp-createBoard.js");




function initPage()
{
    (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('h1',"Knight Travails",(0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("title"),"title")
    const divGestion = (0,_cp_container__WEBPACK_IMPORTED_MODULE_0__["default"])("gestion");
    const btnReset = (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('button',"Reset Board",divGestion,"btn");
    (0,_cp_createElementWithText__WEBPACK_IMPORTED_MODULE_1__["default"])('h3',"Click on the board to place Knight",divGestion,"info-display");

    const boardDiv = (0,_cp_createBoard__WEBPACK_IMPORTED_MODULE_2__["default"])();
    
}

/***/ }),

/***/ "./src/component/prettyPrint.js":
/*!**************************************!*\
  !*** ./src/component/prettyPrint.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prettyPrintGraph)
/* harmony export */ });

function prettyPrintGraph(node, visited = new Set(), prefix = "") {
  if (visited.has(node)) {
      return; // Si le nœud a déjà été visité, arrêter pour éviter les cycles infinis
  }
  visited.add(node); // Marquer le nœud comme visité

  console.log(prefix + node.value); // Afficher la valeur du nœud

  node.edges.forEach(childNode => {
      prettyPrintGraph(childNode, visited, prefix + "   ");
  });
}


/***/ }),

/***/ "./src/logic/logic.js":
/*!****************************!*\
  !*** ./src/logic/logic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllMovePossible: () => (/* binding */ getAllMovePossible),
/* harmony export */   getPositionWanted: () => (/* binding */ getPositionWanted),
/* harmony export */   initGraph: () => (/* binding */ initGraph)
/* harmony export */ });
/* harmony import */ var _Class_Knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Class/Knight */ "./src/Class/Knight.js");
/* harmony import */ var _Class_Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Class/Node */ "./src/Class/Node.js");
/* harmony import */ var _Class_Graph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Class/Graph.js */ "./src/Class/Graph.js");
/* harmony import */ var _component_prettyPrint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/prettyPrint */ "./src/component/prettyPrint.js");





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

    const chessGraph = new _Class_Graph_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

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






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/knight-travails.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Class_Knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Class/Knight */ "./src/Class/Knight.js");
/* harmony import */ var _component_cp_init_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/cp-init-page */ "./src/component/cp-init-page.js");
/* harmony import */ var _logic_logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/logic.js */ "./src/logic/logic.js");
/* harmony import */ var _Class_Node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Class/Node */ "./src/Class/Node.js");
/* harmony import */ var _Class_Graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Class/Graph */ "./src/Class/Graph.js");









(0,_component_cp_init_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
let chessGraph = (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_2__.initGraph)();
let knight = null
const cases= document.querySelector('.board').querySelectorAll('*')
makeMove();

function makeMove()
{
    (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_2__.getPositionWanted)()
        .then((position)=>{
            knight = new _Class_Knight__WEBPACK_IMPORTED_MODULE_0__["default"](position)
            cases.forEach(element => {
                document.querySelector('.info-display').innerText="Now click on the destination you want to reach !  "
                let position = element.classList[1].split('/').map((string)=>parseFloat(string))
                    if(knight._position[0] === position[0]&& knight._position[1]=== position[1])
                    {
                        element.classList.toggle('knight-icon')
                        element.innerText ="Start"
                        element.classList.add('start')
                    }   
            })
        }).
            then(()=>{
                (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_2__.getPositionWanted)()
                .then((position) => {

                    cases.forEach(element => {
                        let p = element.classList[1].split('/').map((string)=>parseFloat(string))
                            if(p[0] === position[0]&& p[1]=== position[1])   
                            {
                                element.innerText = "X"
                                    
                            }        
                        
                    });
                    const movement = knight.shortedWayToPosition(knight._position,position,chessGraph);
                    
                    simulateKnightMoveOnBoard(movement)
                    
                });
        })
}


function moveKnightOnBoard(kPosition)
{
    cases.forEach(element => {
        element.classList.remove('knight-icon');
    });
  
    cases.forEach(element => {
        let position = element.classList[1].split('/').map((string)=>parseFloat(string))
            if(kPosition[0] === position[0]&& kPosition[1]=== position[1])   
            {
                element.classList.toggle('knight-icon')
                element.innerText="Visited"
                    
            }        
        
    });
}

function simulateKnightMoveOnBoard(movement)
{
    let currentIndex = 0
    let moveInterval = setInterval(() => {
        if (currentIndex < movement.length) {
            moveKnightOnBoard(movement[currentIndex]);
            currentIndex++;
        } else {
            
            clearInterval(moveInterval); 
            document.querySelector('.knight-icon').innerText = " "
            document.querySelector('.btn').addEventListener('click',reset);

        }
    }, 750);
    
}



function reset() {
  // Supprimez la classe 'knight-icon' et réinitialisez le contenu des éléments
  cases.forEach(element => {
    element.classList.remove('knight-icon', 'start');
    element.innerText = "";
  });

  // Réinitialisez le texte de la zone d'information
  document.querySelector('.info-display').innerText = "Click on the starting position to begin.";

  // Réinitialisez la classe CSS du bouton
  document.querySelector('.btn').classList.remove('disabled');

  // Réinitialisez le graphique, le chevalier, et tout autre état nécessaire
  chessGraph = (0,_logic_logic_js__WEBPACK_IMPORTED_MODULE_2__.initGraph)();
  knight = null;

  makeMove();
}




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map