

export default function createElementWithText(balise,text,container,className)
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

