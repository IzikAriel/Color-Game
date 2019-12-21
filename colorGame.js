var numSquare = 6;
var colors= [];
var slectedColor ;  
var colorDisplay = document.getElementById("colDis");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColorsbuttun = document.getElementById("newColors");
var modButton= document.querySelectorAll(".mode");






init();

function init()
{
	reset();
for (var i = 0; i < modButton.length; i++) {
	modButton[i].addEventListener("click", function(){
    modButton[0].classList.remove("selected");
    modButton[1].classList.remove("selected");
    this.classList.add("selected");
    if (this.textContent ==="Esay") {
    	numSquare = 3;
    }
    else{
     numSquare = 6;
 }
    reset();
	});
}

for (var i = 0; i < squares.length; i++) 
{
	// squares[i].style.background = colors[i];
	squares[i].addEventListener("click" , function(){

     var colorcur = this.style.background;
     
     if(colorcur === slectedColor){
     	console.log(colorcur + " " + slectedColor)
     	h1.style.background = slectedColor;  
     	changeColor(slectedColor); 
     	messageDisplay.textContent  ="Correct";
     	newColorsbuttun.textContent="play Again ?"
     }
     else{
     
     	this.style.background = "#232323";
        messageDisplay.textContent  ="try Again";
     }
    

	});
}

}

function reset()
{
    colors = genrateRandomColor(numSquare)
    slectedColor = pickColor();
    colorDisplay.textContent = slectedColor; 
    messageDisplay.textContent = " ";	
    h1.style.background="steelblue";
    for (var i = 0; i < squares.length; i++) 
    {
  	if(colors[i])
  	{
  		squares[i].style.display="block";
  		squares[i].style.background = colors[i];
  	}
  	else 
  		{squares[i].style.display = "none";}
    
    }


  newColorsbuttun.addEventListener("click", function(){
  newColorsbuttun.textContent="NEW colors";
  reset();
});

}

// colorDisplay.textContent = slectedColor; 




function changeColor(color){

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = color}
}

 function pickColor(){
  var random = Math.floor(Math.random() * colors.length ); 
  return colors[random];
 		 	
 }

 function genrateRandomColor(numSquare){
 
  var arr =[];
  for (var i = 0; i < numSquare; i++) {
  	arr.push(randomColor());}
  return arr; 
 }

 function randomColor() {
 	var r = Math.floor(Math.random() * 256 ); 
 	var g = Math.floor(Math.random() * 256 ); 
 	var b = Math.floor(Math.random() * 256 );
	return "rgb(" + r  + ", "  + g + ", " + b + ")";  
}