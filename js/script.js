const tasks = [];
const tasksContainer = document.querySelector(".list");
const addBtn = document.querySelector(".add-btn");

function addTask() {
  let task = document.querySelector(".task").value;

  if (task === "") {
    alert("No empty fields.");
  } else if (tasks.includes(task)) {
    alert("You already have that task.");
    document.querySelector(".task").value = "";
  } else {
    let li = document.createElement("li");

    tasks.push(task);
    li.innerHTML = `<p>${task}</p>`;
    li.style.listStyle = "none";
    tasksContainer.appendChild(li);
    document.querySelector(".task").value = "";

    let span = document.createElement("span");
    span.textContent = "x";
    li.appendChild(span);
  }
  saveData();
  showTasks();
}

addBtn.addEventListener("click", addTask);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function checked(e) {
  if (e.target.tagName == "P") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}

tasksContainer.addEventListener("click", checked);

function saveData() {
  localStorage.setItem("tasks", tasksContainer.innerHTML);
}

function showTasks() {
  tasksContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();
