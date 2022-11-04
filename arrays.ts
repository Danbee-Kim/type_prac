//Using Brackets:
  //string array
  let names: string[]= ["hello", "world"];
  //number array
  let ages: number[]=[24,32,19,29];

  const activeUsers: string[]=[];
  activeUsers.push("Tony");
  
  const ageList:number[]=[45,56,13];
  ageList[0]=99;
  ageList[0]="asd" // =>error 숫자 배열이 아니기 때문에


//An alternate syntax
  //string array
  let names: Array<string>=["hello","world"];
  //number aaray
  let ages: Array<number>=[24,32,19,29];

  const bools:boolean []=[]

  type Point ={
    x:number,
    y:numebr
  }

  const coords : Point []=[]
  coords.push({x:23,y:8})


  //다차원 배열 
  const board:string[][]=[
    ["X","O","X"],
    ["X","O","X"],
    ["X","O","X"]
  ];

  const demo:number[][][]=[[[1]]]