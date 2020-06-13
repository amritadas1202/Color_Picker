var numSquare = 6;
var color = generateRandom(numSquare);
var pick;
var squares = document.querySelectorAll(".square");
var colorPicker = randomNum();
var rgb = document.getElementById("rgb");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#HardBtn");


easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    color = generateRandom(numSquare);
    colorPicker = randomNum();
    rgb.textContent = colorPicker;
    for(var i = 0; i < squares.length; i++)
        
        if(color[i]){
            
            squares[i].style.backgroundColor = color[i];   
        }else{
            squares[i].style.display = "none";
        }
    
});

hardBtn.addEventListener("click",function(){
     hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 6;
    color = generateRandom(numSquare);
    colorPicker = randomNum();
    rgb.textContent = colorPicker;
    for(var i = 0; i < squares.length; i++)
        
        if(color[i]){
            
            squares[i].style.backgroundColor = color[i];   
            squares[i].style.display = "block";
        }
});



rgb.textContent = colorPicker;
for(var i = 0; i < squares.length ; i++ ){
    squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener("click", function(){
        pick = this.style.backgroundColor;
    
        if( colorPicker === pick){
            
            message.textContent="Correct!!";
            reset.textContent = "Play Again?";
            correctColor(pick);
            h1.style.backgroundColor = pick;
        }
        else 
        {
           
            this.style.backgroundColor = "black";
            message.textContent = "Try Again!!";
        }     
});   
}

reset.addEventListener("click",function(){
    message.textContent = " ";
    color = generateRandom(numSquare);
    h1.style.backgroundColor = "#3262ad";
    colorPicker = randomNum();
    this.textContent = "New Color";
    rgb.textContent =colorPicker;
    for(var i = 0; i < squares.length ; i++ ){
    squares[i].style.backgroundColor = color[i];
    }
});

function correctColor(color){
    for( var i = 0;i < squares.length;i++){
        squares[i].style.backgroundColor = color; 
    }
}

function randomNum(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateRandom(num){
    var arr = [];
    
    for(var i = 0;i < num ; i++)
    {
        arr.push(randomColor())
    }
    return arr;        
}
function randomColor(){
    
    var r =  Math.floor(Math.random() * 256);
    var g =  Math.floor(Math.random() * 256);
    var b =  Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b +")";
}