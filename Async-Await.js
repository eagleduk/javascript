// Promise 객체를 리턴하는 함수
function p(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Promise 객체를 이용해서 비동기 로직을 수행할 때
p(1000).then((ms) => {
    console.log(`${ms} ms 후에 실행된다`);
})

// Promise 객체를 리턴하는 함수를 await 로 호출하는 방법
//const ms = await p(1000);  // await is only valid in async function 에러 발생 => await 으로 호출할 때에는 async 가 있어야 한다.
//console.log(`${ms} ms 후에 실행된다`);

function p2(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

(async function main() {
    const ms = await p2(1000); 
    console.log(`${ms} ms 후에 실행된다`);
})();

// Promise 객체가 rejected 된 경우의 처리를 위해 try ~ catch 를 이용한다.
function p3(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("reason"));
        }, ms);
    });
}

(async function main() {
    try {
        const ms = await p3(1000); 
    } catch(error) {
        console.log(error);
    }
})();

// async function 에서 return 되는 값은 Promise.resolve 함수로 감싸서 리턴된다.
async function asyncP() {
    const ms = await p2(1000);
    return "mark: " + ms;
}

(async function main() {
    try {
        const name = await asyncP();
        console.log(name);
    } catch(error) {
        console.log(error);
    }
})();

// Error의 전파 - Error 처리
async function asyncP2() {
    const ms = await p3(1000);
    return "mark: " + ms;
}

(async function main2() {
    try {
        const name = await asyncP2();
        console.log(name);
    } catch(error) {
        console.log(error);
    }
})();

// finally

(async function main3() {
    try {
        const name = await asyncP2();
        console.log(name);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('end');
    }
})();

// Promise 로 연속된 실행
p(1000)
    .then(() => p(1000))
    .then(() => p(1000))
    .then(() => {
        console.log('3000 ms 후에 실행');
});

// async 로 연속된 실행
(async function main4() {
    await p2(1000);
    await p2(1000);
    await p2(1000);
    console.log('3000 ms 후에 실행');
})();

// async 로 Promise.all
(async function main5() {
    const results = await Promise.all([p2(1000), p2(2000), p2(3000)]);
    console.log(results);
})();

// async 로 Promise.race
(async function main5() {
    const result = await Promise.race([p2(1000), p2(2000), p2(3000)]);
    console.log(result);
})();
