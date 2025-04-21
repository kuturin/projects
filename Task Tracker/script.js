const submitButton = document.getElementById("submit");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const taskListCompleted = document.getElementById("task-list-completed");

const tasks = [];
const completedTasks = [];

function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        tasks.push(taskValue);

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                const index = tasks.indexOf(taskValue);
                if (index > -1) {
                    tasks.splice(index, 1);
                }

                completedTasks.push(taskValue);

                taskList.removeChild(li);
                taskListCompleted.appendChild(li);

                li.style.textDecoration = "line-through";
                li.style.color = "gray";
            } else {
                const index = completedTasks.indexOf(taskValue);
                if (index > -1) {
                    completedTasks.splice(index, 1);
                }

                tasks.push(taskValue);

                taskListCompleted.removeChild(li);
                taskList.appendChild(li);

                li.style.textDecoration = "none";
                li.style.color = "black";
            }
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskValue));

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", () => {
            const indexInTasks = tasks.indexOf(taskValue);
            if (indexInTasks > -1) {
                tasks.splice(indexInTasks, 1);
            }

            const indexInCompleted = completedTasks.indexOf(taskValue);
            if (indexInCompleted > -1) {
                completedTasks.splice(indexInCompleted, 1);
            }

            if (taskList.contains(li)) {
                taskList.removeChild(li);
            } else if (taskListCompleted.contains(li)) {
                taskListCompleted.removeChild(li);
            }
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

submitButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

const clearAllButton = document.getElementById("clear-all");

clearAllButton.addEventListener("click", () => {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    tasks.length = 0;

    while (taskListCompleted.firstChild) {
        taskListCompleted.removeChild(taskListCompleted.firstChild);
    }
    completedTasks.length = 0;
});