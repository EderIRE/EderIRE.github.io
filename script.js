const checkedAnswer = document.getElementById("Try1");
const conclusion1 = document.getElementById("h1");
const conclusion2 = document.getElementById("h2")
const conclusion3 = document.getElementById("h3")
const firstA = document.querySelector("input.A");
const firstB = document.querySelector("input.B");
const firstC = document.querySelector("input.C");
const firstD = document.getElementsByName("answer")
const firstE = document.getElementsByName("answer2")
const firstF = document.getElementsByName("answer3")
const firstG = document.getElementById("box2")





// const isAnswerValidPress = () => {
// 	if (event.keyCode === 13){
// 		isAnswerValid()
// 	}
// }

const isAnswerValidClick = () => {
	isAnswerValid();
	isAnswerValid2();
	isAnswerValid3();

}




const isAnswerValid = () => {
	let a1 = firstA.value;
	let a2 = firstB.value;
	let a3 = firstC.value;
	if ( a1.length == 0 || a2.length == 0 || a3.length == 0) {
		conclusion1.innerHTML = "You've forgotten to answer some question";
	} else if ( a1 === "plane" || a1 === "aeroplane" || a1 === "airplane" && a2 === "mobile phone" || a2 === "mobile" && a3 === "car"){
		conclusion1.innerHTML = "Right :) !!!";
	}else{
		conclusion1.innerHTML =" Oops, something is wrong :( !!!";
	}
	}


const isAnswerValid2 = () => {
	if ( firstD[0].checked && firstE[2].checked && firstF[1].checked){
		conclusion2.innerHTML = "Great :) !!!"	
	}else {
		conclusion2.innerHTML = "Oops, something is wrong :( !!!"
}	
}

const isAnswerValid3 = () => {
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







