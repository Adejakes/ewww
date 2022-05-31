// const color = ["blue", "red", "yellow", "green"]
// const btn = document.getElementById("btn")

// btn.addEventListener ("click", function () {

//    const randomNumber = getRandomNumber();
   
//     document.body.style.backgroundColor = color[randomNumber] 

// });

// function getRandomNumber(){
//      return Math.floor(Math.random() * color.length);

// } 


const color = ["blue", "red", "yellow", "green"]
const btn = document.getElementById("btn")

btn.addEventListener ("click", function () {

   const randomNumber = getRandomNumber();
   
    document.body.style.color = color[randomNumber] 

});

function getRandomNumber(){
     return Math.floor(Math.random() * color.length);

} 