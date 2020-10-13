// 선언적 방식
class A {}

console.log(new A());

// 변수 할당 방식
const B = class {};

console.log(new B());

// constructor
class C {}
console.log(new C());

class D {
    constructor() {
        console.log("class D");
    }
}
new D();

// get, set
class E {
    _name = "no name";
    get name() {
        return this._name + "@@@";
    }
    // set 함수가 없으면 변수를 변경할 수 없다.
    set name(name) {
        this._name = name + "!!!";
    }
}

const e = new E();
console.log(e._name);
e.name= "name";
console.log(e._name);
console.log(e.name);

// static 변수, 함수
class F {
    static age = 37;
    static hello() {
        console.log(F.age);
    }
}

console.log(F.age);
F.hello();

class G {
    static name = "클래스의 이름(설명)을 설정할 수 있다."
}

console.log(G);

// 상속

class Parent {
    name = "Lee";
    hello() {
        console.log("hello", this.name);
    }
}

class Child extends Parent {

}

const parent = new Parent();
const child = new Child();

console.log(parent);
console.log(child);

child.name = "Kim";
child.hello();

class Child2 extends Parent {
    age = 33;
    // 함수 오바라이드
    hello() {
        console.log(this.name, this.age);
    }
}

const child2 = new Child2();
child2.hello();

// super
class superParent {
    name;
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hello", name);
    }
}

class superChild extends superParent {
    age;
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    hello() {
        console.log("hello", name, age);
    }
}

const sp = new superParent("parent");
const sc = new superChild("child", 30);
console.log(sp, sc);


// static 상속
class staticParent {
    static name1 = "mark";
    static age = 33;
}

class staticChild extends staticParent {

}

console.log(staticParent.name1, staticChild.name1);
