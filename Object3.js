// 객체 리터럴

const a = {};
const b = {
    name: "Mark"
}
const c = {
    name: "mark",
    hello1() {
        console.log("hello1", this.name);
    },
    hello2: function() {
        console.log("hello2", this.name);
    },
    hello3: () => {
        // arrow 함수는 this 에 접근할 수 없다.
        console.log("hello3", this.name);
    }
}

c.hello1();
c.hello2();
c.hello3();