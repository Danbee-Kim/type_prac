//tsc --init:tsconfig.josn 생성
//tsc: 모든 ts파일을 컴파일 시켜줌
//tsc -w or tsc --watch:파일 변경하고 저장하면 자동으로 다시 컴파일
interface Chicken{
  breed:string;
  eggsPerWeek:number;
  name:string;
  age:number;
}

const norma: Chicken={
  breed:"Silkie",
  eggsPerWeek:4,
  name:"Norma",
  age:2,
}

const juniper: Chicken={
  breed:"Silkie",
  eggsPerWeek:5,
  name:"Juniper",
  age:1,
}