

 
function mediumGrid(a){
 

    const gridBox = document.querySelector('#gridBox')
    for (let i = 0; i < a; i++){
        const div = document.createElement('div');
        div.classList.add('gridContent');
        gridBox.appendChild(div);
    }


}


mediumGrid(16)



const element = document.querySelectorAll('.gridContent')
   
 
element.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add('onHover')
    });
}) 

element.forEach(element => {
    element.addEventListener("mouseout", () => {
        console.log('Mouse out')
    });
})

document.querySelector('#resetButton').addEventListener("click", () => {
    reset()
})


function reset (){
    element.forEach(element => {
        element.classList.remove('onHover');
})
}
