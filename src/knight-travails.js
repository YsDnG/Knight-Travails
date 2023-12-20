import Knight from "./Class/Knight";
import initPage from "./component/cp-init-page";
import { getAllMovePossible, getPositionWanted,initGraph} from "./logic/logic.js";
import Node from "./Class/Node";
import Graph from "./Class/Graph";




initPage();
let chessGraph = initGraph();
let knight = null
const cases= document.querySelector('.board').querySelectorAll('*')

makeMove();

function makeMove()
{
    getPositionWanted()
        .then((position)=>{
            knight = new Knight(position)
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
                getPositionWanted()
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
    document.querySelector('.btn').removeEventListener('click',reset);

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
  chessGraph = initGraph();
  knight = null;

  makeMove();
}



