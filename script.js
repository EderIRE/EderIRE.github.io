var checkedAnswer = document.getElementById("Try1");
var conclusion1 = document.getElementById("h1");
var conclusion2 = document.getElementById("h2")
var conclusion3 = document.getElementById("h3")
var firstA = document.querySelector("input.A");
var firstB = document.querySelector("input.B");
var firstC = document.querySelector("input.C");
var firstD = document.getElementsByName("answer")
var firstE = document.getElementsByName("answer2")
var firstF = document.getElementsByName("answer3")
var firstG = document.getElementById("box2")





// function isAnswerValidPress (){
// 	if (event.keyCode === 13){
// 		isAnswerValid()
// 	}
// }

function isAnswerValidClick () {
	isAnswerValid()
	isAnswerValid2()
	isAnswerValid3()

}




function isAnswerValid () {
	var a1 = firstA.value;
	var a2 = firstB.value;
	var a3 = firstC.value;
	if ( a1.length == 0 || a2.length == 0 || a3.length == 0) {
		conclusion1.innerHTML = "You've forgotten to answer some question";
	} else if ( a1 === "plane" || a1 === "aeroplane" || a1 === "airplane" && a2 === "mobile phone" || a2 === "mobile" && a3 === "car"){
		conclusion1.innerHTML = "Right :) !!!";
	}else{
		conclusion1.innerHTML =" Oops, something is wrong :( !!!";
	}
	}


function isAnswerValid2 () {
	if ( firstD[0].checked && firstE[2].checked && firstF[1].checked){
		conclusion2.innerHTML = "Great :) !!!"	
	}else {
		conclusion2.innerHTML = "Oops, something is wrong :( !!!"
}	
}

function isAnswerValid3 () {
	if (firstG.checked === true){
		conclusion3.innerHTML = "Amazing :) !!!"	
	} else {
		conclusion3.innerHTML = "Oops, something is wrong :( !!!"	
	}

}




// firstA.addEventListener("keypress", isAnswerValidPress);
// firstB.addEventListener("keypress", isAnswerValidPress);
// firstC.addEventListener("keypress", isAnswerValidPress);
checkedAnswer.addEventListener("click", isAnswerValidClick);







