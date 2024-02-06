const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(event){ //argument event로 브라우저 info받아옴
	event.preventDefault(); //어떤 event의 기본행동이 발생되지 않도록 막는 함수
	// const userName = loginInput.value;
	console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
// submit은 엔터를 누르거나 버튼을 클릭할때 발생
// 새로고침이 일어나는건 form submit의 기본 동작, 브라우저의 프로그래밍

//브라우저가 이벤트 발생시 함수 호출 
//브라우저내에서 event로부터 정보를 잡아내서(argument를 가지고) 실행버튼을 누름

//모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일에 대한 정보임
//argument 공간만 주면 JS가 알아서 방금 일어난 event에 대한 정보를 채워넣어줌

//기본행동: 어떤 funciton에 대해 브라우저가 기본적으로 수행하는 동작
// 여기서의 기본행동 => 누군가 submit하면 브라우저는 기본적으로 페이지 새로고침함 
//preventDefault() 로 막음
//이 함수는 EventListener함수의 첫번째 argument안에 있는 fucntion임

//submit이벤트 발생할 때 JS는 onLoginSubmit 함수 호출하고 
//여기에 event argument에 정보를 넣어주고 실행(기본동작막아줌)