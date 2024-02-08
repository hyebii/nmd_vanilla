const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기함(string저장)
function onLoginSubmit(event){
	event.preventDefault(); 
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem("username", username);
	greeting.innerText = `Hello ${username}` 
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

//새로고침 하면 다시 form이 나타나니까 
//localStorage에 username있으면 form 안보이고 h1 보이도록,
//유저정보 없다면 form이 먼저 표시되도록 만들어줄것임