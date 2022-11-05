//튜플: 고정된 길이를 갖는 배열, 고정된 타입 세트로 순서가 정렬 

// These are NOT tuples:
// const stuff: (string | number)[] = [1,'asd', 'asdasd', 'asdasd', 2]
// const color: number[] = [23,45,234,234]

// This is a tuple!
const color: [number, number, number] = [255, 0, 45];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = '200'  Error => 원래 값의 타입을 변경할 수 없음
// 튜플의 한계 :  push()나 pop()으로 어떤 타입이든 막지 않는다.
// goodRes.push(123)
// goodRes.pop()


// An array of tuples:
const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

//Enums
//이넘을 사용하면 명명된 상수 집합을 정의할 수 있음
//반복적으로 참조하는 값의 집합이 있을 경우 사용

// Enum Example:
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
//const 키워드를 넣어서 자바스크립트로 컴파일할 때 직접 지정된 값을 넣어줌
// const enum OrderStatus {
//   PENDING :1,
//   SHIPPED,
//   DELIVERED,
//   RETURNED,
// }

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// String Enum:
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

