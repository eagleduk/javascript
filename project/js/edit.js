function getToken() {
    return localStorage.getItem("token");
}

async function getUserByToken() {
    const token = getToken();
    if(token===null) {
        return;
    }
    try {
        const res = await axios.get("https://api.marktube.tv/v1/me", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error) {
        return null;
    }
}

async function getBook(bookId) {
    const token = getToken();
    if(token===null) {
        return;
    }
    try {
        const res = await axios.get(`https://api.marktube.tv/v1/book/${bookId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch(error) {
        console.log("getBook", error);
        return null;
    }
}

function render(book) {

    const titleElement = document.querySelector("#title");
    const messageElement = document.querySelector("#message");
    const authorElement = document.querySelector("#author");
    const urlElement = document.querySelector("#url");

    const title = book.title;
    const message = book.message;
    const author = book.author;
    const url = book.url;

    titleElement.value = title;
    messageElement.value = message;
    authorElement.value = author;
    urlElement.value = url;
}

function bindUpdateButton() {
    const form = document.querySelector("#form-edit-book");
    form.addEventListener("submit", updateBook);
}

async function updateBook(event) {
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

    const bookId = new URL(location.href).searchParams.get("id");

    try {
        await axios.patch(`https://api.marktube.tv/v1/book/${bookId}`, {
            title,
            message,
            author,
            url
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        location.href = `/project/book.html?id=${bookId}`
    } catch(error) {
        console.log("update", error)
    }
}

function bindCancelButton() {
    const bookId = new URL(location.href).searchParams.get("id");
    document.querySelector("#btn-cancel").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        location.href = `/project/book.html?id=${bookId}`
    })
}

async function main() {
    // 브라우저에서 id 가져오기
    const bookId = new URL(location.href).searchParams.get("id");

    // 토큰 체크
    const token = getToken();
    if(token===null) {
        location.href = "/project/login.html";
        return;
    }

    // 토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken();
    if(user === null) {
        localStorage.clear();
        location.assign("/project/login.html");
        return;
    }

    // 책을 서버에서 받아오기
    const book = await getBook(bookId);
    if(book===null) {
        location.assign("/project/index.html");
        return;
    }

    // 받아온 책을 그리기
    render(book);

    // 버튼 이벤트
    bindUpdateButton();
    bindCancelButton();
}

document.addEventListener("DOMContentLoaded", main);