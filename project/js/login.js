//  test@marktube.tv :: 1234

function getToken() {
    return localStorage.getItem("token");
}

async function login(event) {
    event.preventDefault(); // 기본 제공 함수 내용은 찾아볼것
    event.stopPropagation(); // 기본 제공 함수 내용은 찾아볼것

    const emailElement = document.querySelector("#email");
    const passwordElement = document.querySelector("#password");

    const email = emailElement.value;
    const password = passwordElement.value;
    
    try {
        const res = await axios.post("https://api.marktube.tv/v1/me", {
            email, //email: email,
            password // password: password
        });
        
        const {token} = res.data;
        if(token === undefined) {
            return;
        }

        localStorage.setItem("token", token);
        location.assign("/project/index.html");

    } catch(error) {
        const data = error.response.data;
        if(data) {
            const state = data.error;
            if(state === "USER_NOT_EXIST") {
                alert("사용자가 존재하지 않습니다.");
            } else if(state === "PASSWORD_NOT_MATCH") {
                alert("비밀번호가 틀렸습니다.");
            }
        }
    }
}

function bindLoginButton() {
    const form = document.querySelector("#form-login");
    form.addEventListener("submit", login);
}

function main() {
    // 버튼 이벤트 연결
    bindLoginButton();
    // 토큰 체크
    const token = getToken();
    
    if(token !== null) {
        localStorage.clear();
        location.assign("/project/login.html");
        return;
    }
}

document.addEventListener("DOMContentLoaded", main);