// prototype

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log("hello ", name , age);
    }
}

const p = new Person("mark", 33);
p.hello();
console.log(p.toString());

console.log(Person.prototype);
console.log(Person.prototype.toString);
console.log(Person.prototype.constructor);

console.log(Person.prototype.hello2); // undefined

Person.prototype.hello2 = function() {
    console.log(this.name, this.age);
}

console.log(Person.prototype.hello2); // Function

console.log(Object.prototype);
console.log(Object.prototype.toString);
console.log(Object.prototype.constructor);

console.log(p instanceof Person);
console.log(Person instanceof Object);


// prototype 상속

function Person2() {

}

Person2.prototype.hello = function() {
    console.log("Hello");
}

function Korean(region) {
    this.region = region;
    this.where = function() {
        console.log("where ", this.region);
    }
}

Korean.prototype = Person2.prototype;

const k = new Korean("Seoul");
k.hello();
k.where();

console.log(k instanceof Korean);
console.log(k instanceof Person2);
console.log(k instanceof Object);