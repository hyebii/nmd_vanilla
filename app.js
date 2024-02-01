//  const mon = "mon";
//  const tue = "tue";
//  const wed = "wed";
//  const thu = "thu";
//  const fri = "fri";
//  const sat = "sat";
//  const sun = "sun";

 const week = ["mon" ,"tue", "wed", "thu", "fri", "sat", "sun"];
 //array로 묶어줌 -> variable들을 그룹화 시킴, 데이터로 이뤄진 리스트
 //array의 목적은 하나의 variable안에 데이터의 list를 가지는 것

 const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"]

 console.log(week);

 //Get Item form Array
 console.log(week[4]);

 //Add one more day to the array
 week.push("hyel") //push()는 항목하나를 array안에 추가해줌
 console.log(week);