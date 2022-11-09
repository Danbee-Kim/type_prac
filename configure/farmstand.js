"use strict";
//tsc or tsc-w 뒤에 파일 이름이 붙으면 해당 파일만 컴파일링
const printProduct = (product) => {
    console.log(`${product.name}-$${product.price}`);
};
