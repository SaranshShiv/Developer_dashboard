let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const task = {
        text: text,
        completed: false
    };

    tasks.push(task);
    input.value = "";

    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    let completedCount = 0;

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
            completedCount++;
        }

        li.onclick = () => toggleTask(index);
        list.appendChild(li);
    });

    document.getElementById("progressText").textContent =
        `${completedCount} of ${tasks.length} completed`;
}