

 
function mediumGrid(a){
    document.getElementById('gridBox').innerHTML = ''
    const gridBox = document.getElementById('gridBox');
    gridBox.style.setProperty('--grid-rows', a);
    gridBox.style.setProperty('--grid-cols', a);
    const div = document.createElement('div');


    for (let i = 0; i < a * a; i++){
        const div = document.createElement('div');
        gridBox.appendChild(div).className = "gridContent";
    }

    color();
}


let slider = document.getElementById('myRange');
let output = document.getElementById('demo');
let gridSize = 50;    
mediumGrid(gridSize)


output.innerHTML = slider.value + ' ' + 'x' + ' ' + slider.value; // Display the default slider value// Update the current slider value

slider.oninput = function gridScale() {
    output.innerHTML = this.value + ' ' + 'x' + ' ' + this.value;
    gridSize = this.value
    console.log(gridSize)
    mediumGrid(gridSize)
};



function color(){
const element = document.querySelectorAll('.gridContent')
let mouseDown = false

document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false
   
 
element.forEach(element => {
    element.addEventListener("mouseover", () => {
        if (mouseDown == true)
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

}

