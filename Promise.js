console.log(Promise);

//new Promise(/* excutor */);

new Promise((resolve, reject) => {}); // pending

new Promise((resolve, reject) => {
    /**
     *  함수 실행 
     */
    resolve();
}); // fulfilled

new Promise((resolve, reject) => {
    /**
     *  함수 실행 
     */
    reject();
}); // rejected

// 1000ms 후에 fulfilled 상태로 전환
const p = new Promise((resolve, reject) => {
    console.log("resolve: ", new Date());
    setTimeout(() => {
        resolve();
    }, 1000);
});

// p 객체가 resolve 된 후 실행 callback
p.then(() => {
    console.log("resolve: ", new Date());
});

function P() {
    return new Promise((resolve, reject) => {
        console.log("P resolve: ", new Date());
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

P().then(() => {
    console.log("P resolve: ", new Date());
})

function PR() {
    return new Promise((resolve, reject) => {
        console.log("PR reject: ", new Date());
        setTimeout(() => {
            reject();
        }, 1000);
    });
}

PR().then(() => {
    console.log("PR resolve: ", new Date());
}).catch(() => {
    console.log("PR reject: ", new Date());
})