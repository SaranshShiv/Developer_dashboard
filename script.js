let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    input.value = "";

    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let completedCount = 0;

    tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
        span.classList.add("completed");
        completedCount++;
    }

    span.onclick = () => toggleTask(index);

    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.style.marginLeft = "10px";

    delBtn.onclick = () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
});

    document.getElementById("progressText").textContent =
        `${completedCount} of ${tasks.length} completed`;
}
renderTasks();