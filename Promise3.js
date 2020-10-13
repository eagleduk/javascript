/*
    value 가 Promise 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행한다.
    value 가 Promise 객체면, resolve 된 then 메서드를 실행.
    value 가 Promise 객체가 아니면, value 를 인자로 보내면서 then 메서드를 실행한다.
*/

Promise.resolve(
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo");
        }, 1000);
    })
).then(data => {
    console.log("Promise 객체인 경우, resolve 된 결과를 받아 then이 실행된다", data);
});

Promise.resolve("bar").then(data => {
    console.log("then 메소드가 없는 경우, fulfilled 된다", data);
});

/*
    Promise.reject 를 사용하면, catch 로 연결된 rejected 상태로 변경된다.
*/

Promise.reject(new Error("ERROR")).then(()=>{}).catch((error) => {console.log(error)});

/*
    Promise 객체 여러개를 생성하여 배열로 만들고 인자를 넣고 Promise.all 을 실행하면
    배열의 모든 Promise 객체들이 fulfilled 되었을 때, then 의 함수가 실행된다
    then 의 함수의 인자로 Promise 객체들의 resolve 인자값을 배열로 돌려준다.
*/

function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms)
    });
}

Promise.all([p(1000), p(2000), p(3000)]).then((messages) => {
    console.log("모두 fulfilled 된 이후 실행됩니다.", messages);
}); 

/*
    Promise 객체 여러개를 생성하여 배열로 만들고 인자를 넣고 Promise.race 을 실행하면
    배열의 모든 Promise 객체들 중 먼저 fulfilled 된 순서로 then 의 함수가 실행된다.
    then 의 함수의 인자로 가장 먼저 fulfilled 된 Promise 객체의 resolve 인자값을 배열로 돌려준다.
*/

Promise.race([p(1000), p(2000), p(3000)]).then(message => {
    console.log("가장 빠른 하나가 fulfilled 된 이후 실행됩니다.", message);
})