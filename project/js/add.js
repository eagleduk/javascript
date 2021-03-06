function getToken() {
    return localStorage.getItem("token");
}

async function getUserByToken(token) {
    try {
        const res = await axios.get("https://api.marktube.tv/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error) {
        console.log(`getUserByToken error, ${error}`);
        return null;
    }
}

async function save(event) {
    event.preventDefault();
    event.stopPropagation();

    event.target.classList.add("was-validated"); // bootstrap 의 validated 기능

    const titleElement = document.querySelector("#title");
    const messageElement = document.querySelector("#message");
    const authorElement = document.querySelector("#author");
    const urlElement = document.querySelector("#url");

    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if( title === "" || message === "" || author === "" || url === "") return;

    const token = getToken();
    if(token === null) {
        location.assign("/project/login.html");
        return;
    }

    try {
        await axios.post("https://api.marktube.tv/v1/book", {
            title,
            message,
            author,
            url
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        location.assign("/project/index.html");
    } catch(error) {
        console.log("save error", error);
        alert("책 추가 실패");
    }   
}

function bindSaveButton() {
    const form = document.querySelector("#form-add-book");
    form.addEventListener("submit", save);
}

function bindCancelButton() {
    document.querySelector("#btn-cancel").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        location.assign("/project/index.html");
    })
}

async function main() {
    // 버튼에 이벤트 연결
    bindSaveButton();
    bindCancelButton();

    // 토큰 체크
    const token = getToken();
    if(token===null) {
        location.assign("/project/login.html");
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if(user===null) {
        localStorage.clear();
        location.assign("/project/login.html");
        return;
    }

}


document.addEventListener("DOMContentLoaded", main);