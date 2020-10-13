// 생성자 함수

function A() {}

const a = new A();
console.log(a, typeof a);
console.log(A());

// 생성하면서 데이터 넣기
function B(name, age) {
    console.log(name, age);
}

const b = new B();
const c = new B("mark", 33);
console.log(B());

// 값을 속성으로 넣기
function C() {
    this.name = "mark";
}

const d = new C(); // {name:"mark"}
console.log(d);

// 함수를 속성으로 넣기
function D() {
    this.hello = function() {
        console.log("hello");
    };
}

new D().hello();