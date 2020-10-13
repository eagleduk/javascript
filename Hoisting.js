console.log(name); // var name; 이 올라와서 선언된다. hoisting이 일어난다.

name = "mark";

console.log(name);

var name = "TEST";



console.log(name2); // 변수를 let으로 선언하면 hoisting이 일어나지 않는다.

name2 = "mmakr";

console.log(name2);

let name = "EFE";