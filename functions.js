// Function parameter type annotations:
var doSomething = function (person, age, isFunny) { };
// Return type annotation:
function greet(person) {
    if (person === void 0) { person = "stranger"; }
    return "Hi there, ".concat(person, "!");
}
function square(num) {
    return num * num;
}
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);
// Arrow function:
var add = function (x, y) {
    return x + y;
};
// Contextual Type Clues
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
    return color.toUpperCase();
});
// Void : return 값이 없는 함수의 타입
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
// Never: 함수를 반환하지 않는 경우, 함수가 멈추지 않고 무한 루프가 돌아야 하는 경우
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("GAME LOOP RUNNING!");
    }
}
/* void는 undefined or null 상태로 반환한 함수의 타입이므로 엄밀히 값이고
never은 절대 반환할 기회를 가지면 안되는 함수 타입이라는 차이가 있다. */ 
