const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event){
	event.preventDefault(); //기본동작 막기
	loginForm.classList.add("hidden"); //form 숨기기
	const username = loginInput.value; //유저이름 변수로 저장 
	greeting.innerText = "Hello " + username; //저장한 이름 h1안에 넣어줌
	greeting.classList.remove("hidden");
}
function handleLinkClick(event){
	event.preventDefault();
	console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);