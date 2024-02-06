let input = document.querySelector("input");
let addBtn = document.querySelector(".input button");
let tasks = document.querySelector(".tasks");


let tasksArr = [];

const checkButton = () => {
    let checkBtns = document.querySelectorAll(".task img");
    checkBtns.forEach((checkBtn) => {
        checkBtn.onclick = () => {
            checkBtn.src = "images/checked.png";
        }
    })
}

const closeButton = () => {
    let closeBtns = document.querySelectorAll(".task button");
    closeBtns.forEach((closeBtn) => {
        closeBtn.onclick = () => {
            tasks.removeChild(closeBtn.parentElement);
        }
    })
}
addBtn.onclick = () => {
    if (input.value != ""){
        let task = document.createElement("div");
        task.setAttribute("class", "task");
        task.innerHTML = `<img src="images/unchecked.png"><p>${input.value}</p><button>x</button>`;
        tasks.appendChild(task);
        tasksArr.push(task);
        input.value = "";
        checkButton ();
        closeButton ();
    }
}



console.log(tasksArr)
