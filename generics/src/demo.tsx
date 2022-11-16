//tsx파일로 작업하면서 제네릭 함수인 화살표 함수를 잘성할 땐
//후행 쉼표를 붙이지 않으면 오류가 발생

const getRandomElement1=<T,>(list: T[]): T =>{
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}