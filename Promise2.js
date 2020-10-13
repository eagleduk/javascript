// fulfilled 되거나 rejected 된 후에 최종적으로 실행할 함수는 finally 함수를 이용할 수 있다. 인자도 가능
function P() {
    return new Promise((resolve, reject) => {
        console.log("P reject: ", new Date());
        setTimeout(() => {
            //resolve("hello");
            reject(new Error("error"));
        }, 1000);
    });
}

P().then((message) => {
    console.log(message, "P resolve: ", new Date());
}).catch((error) => {
    console.log(error, "P reject: ", new Date());
}).finally(() => {
    console.log('finally 입니다.');
});


// callback 함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출
function c(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            callback();
        }, 1000);
    })
}

c(() => console.log(new Date()));
c(() => c(() => console.log(new Date())));


// then 함수에서 다시 Promise 객체를 리턴하는 방법을 통해 체이닝 하면, 비동기 작업을 순차적으로 아래로 표현 가능
function pp() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000)
    })
}

let count = 0;
pp().then(() => {
    console.log(`${(++count)} 번째 실행`);
    return pp();
}).then(() => {
    console.log(`${(++count)} 번째 실행`);
    return pp();
}).then(() => {
    console.log(`${(++count)} 번째 실행`);
}).then(pp)
