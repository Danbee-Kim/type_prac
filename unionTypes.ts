import { privateEncrypt } from "crypto";

// 유니온 타입을 이용해 여러 타입의 값을 가질 수 있음 
let age: number | string = 21;
age= 23;
age= "24"

type Points ={
  x:number;
  y:number;
}

type Loc={
  lat:number,
  long:number
}

let coordinates: Points|Loc={x:1,y:34}
coordinates={lat:321.213,long:23.334}
 
function printAge(age:number|string):void{
  console.log(`You are ${age} years old`)
}
printAge(26)
printAge("97")

// function calculateTax(price:number|string){
//    price.replace("$","")   => error  string이 아니면 오류
//   return price * tax     => error number가 아니면 오류
// }

//Type Narrowing : 타입을 확인하는 단계
function calculateTax(price:number|string, tax:number){
  if (typeof price ==="string"){
    price=parseFloat(price.replace("$",""))
  } 
  return price * tax    
}
calculateTax(45, 0.07);
calculateTax('$45', 0.07);

//숫자나 문자열을 입력할 수 있는 배열
const stuffs: (number | string)[] = [1, 2, 3, 4, 'das'];

const coords:(Points|Loc)[]=[]
coords.push({lat:321.213,long:23.334})
coords.push({x:32,y:4})

//리터럴 타입 
let zero:0=0;
// zero=2 =>error 타입 0에 2를 할당 할 수 없음

let mood:"Happy"|"Sad"="Happy";
mood="Sad";
// mood="angry" =>error 

type DayOfWeek=
|"Monday"
|"Tuesday"
|"Wednesday"
|"Thursday"
|"Friday"
|"Saturday"
|"Sunday";

let today: DayOfWeek="Monday"
// today="Fri" => error