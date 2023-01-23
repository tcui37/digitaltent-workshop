var score = 0;


var up = document.getElementById("up");
var reset = document.getElementById("reset");

up.addEventListener("click", increaseScore);
reset.addEventListener("click", resetScore);


function increaseScore(){
    score = score + 1;
    document.getElementById('score').innerHTML = `Score: ${score}`

}

function resetScore(){
    score = 0;
    document.getElementById('score').innerHTML = `Score: ${score}`
}
