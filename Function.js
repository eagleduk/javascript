
// 함수를 객체화하여 선언
const sum = new Function('a','b','c', 'return a + b + c');

console.log(sum(1,2,3));

global.a = 0;
{
    const a = 2;
    // 함수 객체에서 선언된 변수는 global 변수를 사용
    const test = new Function('return a');
    console.log(test());
}

{
    const a = 2;
    const test = function() {
        return a;
    }
    console.log(test());
}

// 함수의 객체화
function Person(name, age) {
    this.name = name;
    this.age = age;
}


const Cat = (name) => {
    this.name = name;
}

const a = new Person("name", 10);   // 가능
const b = new Person("name2", 20);  // 가능
//const c = new Cat("cat");           // 불가능

// 함수를 호출하여 함수를 만들어서 리턴

function plus(base) {
    return function(num) {
        return base+num;
    };
}

const plus5 = plus(5);
console.log(plus5(10));

// 함수를 인자로 함수를 호출
function hello(c) {
    console.log("hello");
    c();
}

hello(() => console.log("world"));