const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

// isNaN() 에 하나의 인자를 주면 number인지 아닌지 알려줌(true, false)
// boolean을 return함 
// false -> 숫자임 true ->숫자아님

// 조건condition -> true or false
if(isNaN(age) || age < 0){
console.log("Please write a real posible number");
} else if(age < 18){
console.log("You are too young")
} else if(age >= 18 && age <= 50){ 
	// &&두가지모두 만족 해야함(하나라도 false면 false) 
	// ||는 하나만만족해도 true
	console.log("You can drink")
} else if(age > 80){
	console.log("You can do whatever you want")
}