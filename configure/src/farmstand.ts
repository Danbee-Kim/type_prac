
//tsc or tsc-w 뒤에 파일 이름이 붙으면 해당 파일만 컴파일링

interface Product{
  price:number;
  name:string;
  quantity:number;
}

const printProduct=(product:Product):void=>{
console.log(`${product.name}-$${product.price}`)
}