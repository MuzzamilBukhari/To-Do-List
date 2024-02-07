let input = document.querySelector("input");
let listContainer = document.querySelector("#list-container");

const addTask = () => {
    if (input.value === ""){
        alert("Please enter a task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        listContainer.append(li);

    }
    input.value = "";
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

const displayData = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();

