
import Container from './cp-container'
import createElementWithText from './cp-createElementWithText';


export default function createBoard(){


    const boardDiv = Container("board")
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
                element= createElementWithText('div',``,boardDiv,"white")
                element.classList.add(`${i}/${j}`)
                
            }
            else{
                element = createElementWithText('div',``,boardDiv,"black")
                element.classList.add(`${i}/${j}`)
            }
            
                   
        }
    }



        return boardDiv;
            

}