//Backgorund
const bodyElement = document.querySelector('body')
    bodyElement.style.backgroundColor = '#D0A2F7'; //set background to purple
let points = 0;//set score to zero
let score= document.getElementById('click');//

function hiS(){
    points+=1
    score.innerHTML = points
}
function reset(){
    click=0;
    score.innerHTML=click;
}

// if(points ===100){
//     const oneHun = window.alert(`You have reached 100 clicks!`)
        
// }
// original concept/ scrapped code
// class Egg {
//     constructor(points){
//         this.points = points; //score
//     }
// }

// class click extends Egg {
//     constructor(points){
//         points = 0; //set score to zero
//     }
//     //methods
//     cEgg(){
//         function addPoints(current) {
//             points = points + current;  //function to add additional points to score when clicked
//             return points
//         }
//             cEgg.addEventListener('click', addPoints)
            
//     }
//     displayPoints() {
//         this.pointsText.textContent = `Points: ${this.points}`;
//        }

// }
// let iggy = new Egg;

// document.getElementById("cEgg").addEventListener("click", function() {
//     clicker.cEgg();
//    });
