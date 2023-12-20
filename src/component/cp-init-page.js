import Container from "./cp-container"
import createElementWithText from "./cp-createElementWithText"
import createBoard from "./cp-createBoard"

export default function initPage()
{
    createElementWithText('h1',"Knight Travails",Container("title"),"title")
    const divGestion = Container("gestion");
    const btnReset = createElementWithText('button',"Reset Board",divGestion,"btn");
    createElementWithText('h3',"Click on the board to place Knight",divGestion,"info-display");

    const boardDiv = createBoard();
    
}