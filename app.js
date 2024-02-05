const h1 = document.querySelector(".hello h1")
//document.title은 <title>nico</title> 이기 때문에 헷갈릴까봐 바꿔줌

function handleH1Click(){
  h1.style.color = "blue";
};
function handleMouseEneter(){
  h1.innerText = "Mouse is here~"
};
function handleMouseLeave(){
  h1.innerText = "Mouse is gone!"
};
function handleWindowResize(){
	document.body.style.background = "green"; //body의 style이라서 body태그안에 style property
}
function handleWindowCopy(){
	alert("copier!")
}
function handleWindowOffline(){
	alert("SOS no WIFI");
}
function handleWindowOnline(){
	alert("wifi Conectied");
}

h1.addEventListener("click", handleH1Click); 
// h1.onclick = handleH1Click; //동일한 코드
h1.addEventListener("mouseenter", handleMouseEneter);
h1.addEventListener("mouseleave", handleMouseLeave);
//removeEventListener로 addEventListener 삭제가능

//oneventname 속성 -> onclick onmouseenter
//document가 자바에서 기본제공되듯이 window도 제공됨
window.addEventListener("resize", handleWindowResize); //resize = 화면크기가 바뀌는 이벤트
window.addEventListener("copy", handleWindowCopy); //사용자가 복사했을때
window.addEventListener("offline", handleWindowOffline); //wifi해제
window.addEventListener("online", handleWindowOnline); //wifi 연결

//document.body/head/title 중요해서 존재하지만
//나머지 element들은 querySelector나 getElementById등으로 찾아와야함