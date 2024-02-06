let input = document.querySelector("input");
let addBtn = document.querySelector(".input button");
let tasks = document.querySelector(".tasks");


let tasksArr = [];

const checkButton = () => {
    let tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => {
        let checkBtn = task.firstChild;
        let para = task.children[1];
        checkBtn.onclick = () => {
            let newChkBtn = checkBtn.src.split("/");
            if (newChkBtn[4] == "checked.png"){
                para.style.color = "black"
                para.style.textDecoration = "none";
                checkBtn.src = "images/unchecked.png";
            } else {
                para.style.color = "grey"
                para.style.textDecoration = "line-through";
                checkBtn.src = "images/checked.png";
            }
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
const displayTasks = () => {
    tasksArr.forEach((taskName) => {
        
    })
}
addBtn.onclick = () => {
    if (input.value != ""){
        let task = document.createElement("div");
        task.setAttribute("class", "task");
        task.innerHTML = `<img src="images/unchecked.png"><p>${input.value}</p><button>x</button>`;
        tasks.appendChild(task);
        input.value = "";
        checkButton ();
        closeButton ();
    }
}



