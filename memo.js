const storage = localStorage;
let memoNumber = storage.getItem("memoNumber");
console.log(memoNumber);
if (!memoNumber) {
    storage.setItem("memoNumber", 0);
};
const memos = document.getElementById("memos");
function add() {
    let memoTitle = document.getElementById("memo-title").value;
    let memoMain = document.getElementById("memo-main").value;
    console.log(`メモのタイトルは:${memoTitle}`);
    console.log(`メモの本文は:${memoMain}`);
    memoNumber += 1;
    storage.setItem(`memoTitle${memoNumber}`, memoTitle);
    storage.setItem(`memoMain${memoNumber}`, memoMain);
    storage.setItem("memoNumber", memoNumber);
    let createMemo = document.createElement("div");
    let createTitle = document.createElement("h2");
    let createMain = document.createElement("p");
    let createButton = document.createElement("button");
    createButton.innerHTML = "メモを削除する";
    createTitle.innerHTML = `タイトル：${memoTitle}`;
    createMain.innerHTML = `本文：${memoMain}`;
    createMemo.appendChild(createTitle);
    createMemo.appendChild(createMain);
    createMemo.appendChild(createButton);
    createButton.classList.add("btn");
    createButton.id = memoNumber;
    memos.appendChild(createMemo);
};

// 読み込み
window.onload = load();

function load() {
    memos.innerHTML = "";
    for (let i = 0; i < memoNumber; i++) {
        let memoTitle = storage.getItem(`memoTitle${i + 1}`);
        if (memoTitle) {
            let memoMain = storage.getItem(`memoMain${i + 1}`);
            let createMemo = document.createElement("div");
            let createTitle = document.createElement("h2");
            let createMain = document.createElement("p");
            let createButton = document.createElement("button");
            createButton.innerHTML = "メモを削除する";
            createTitle.innerHTML = `タイトル：${memoTitle}`;
            createMain.innerHTML = `本文：${memoMain}`;
            createMemo.appendChild(createTitle);
            createMemo.appendChild(createMain);
            createMemo.appendChild(createButton);
            createButton.classList.add("btn");
            createButton.id = i + 1;
            memos.appendChild(createMemo);
        }
    }
}
function reset() {
    storage.clear();
    memoNumber=0;
    load();
};
