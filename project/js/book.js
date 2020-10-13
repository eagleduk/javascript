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

function getToken() {
    return localStorage.getItem("token");
}

async function logout() {
    localStorage.clear();
    location = "/project/login.html";
}

function bindLogoutButton() {
    const btnLogout = document.querySelector("#btn_logout");
    btnLogout.addEventListener("click", logout);
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
    const detailElement = document.querySelector("#detail");

    detailElement.innerHTML = `<div class="card bg-light w-100">
    <div class="card-header"><h4>${book.title}</h4></div>
        <div class="card-body">
        <h5 class="card-title">"${book.message}"</h5>
        <p class="card-text">글쓴이 : ${book.author}</p>
        <p class="card-text">링크 : <a href="${
            book.url
        }" target="_BLANK">바로 가기</a></p>
        <a href="/project/edit.html?id=${book.bookId}" class="btn btn-primary btn-sm">Edit</a>
        <button type="button" class="btn btn-danger btn-sm" id="btn-delete">Delete</button>
        </div>
        <div class="card-footer">
            <small class="text-muted">작성일 : ${new Date(
            book.createdAt,
            ).toLocaleString()}</small>
        </div>
    </div>`;

    document.querySelector("#btn-delete").addEventListener("click", async () => {
        try {
            await deletebook(book.bookId);
            location.href = "/project/index.html";
        } catch(error) {
            console.log(error);
        }
    })
}

async function deletebook(bookId) {
    const token = getToken();
    if(token===null) {
        location = "/project/login.html";
        return;
    }

    await axios.delete(`https://api.marktube.tv/v1/book/${bookId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

}

async function main() {
    // 버튼에 이벤트 연결
    bindLogoutButton();

    // 브라우저에서 id 가져오기
    const bookId = new URL(location.href).searchParams.get("id");

    // 토큰 체크
    const token = getToken();
    if(token===null) {
        location.assign("/project/login.html");
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
}

document.addEventListener("DOMContentLoaded", main);