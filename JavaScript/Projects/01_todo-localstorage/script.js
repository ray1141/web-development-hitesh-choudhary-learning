document.addEventListener("DOMContentLoaded", () => {
  //variables
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  const newTaskInput = document.getElementById("todo-input");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(tasks);

  //rendering tasks
  tasks.forEach((task) => {
    renderTasks(task);
  });

  //adding a task
  addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
    };
    newTaskInput.value = "";
    tasks.push(newTask);
    renderTasks(newTask);
    saveTaskToLocalStorage(tasks);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `<span>${task.text}</span> 
      <button>delete</button>`;
    todoList.appendChild(li);

    if (task.isCompleted) li.classList.add("completed");

    //mark the task as done
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.isCompleted = !task.isCompleted;
      li.classList.toggle("completed");
      saveTaskToLocalStorage(tasks);
    });

    //delete a task
    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTaskToLocalStorage(tasks);
      li.remove();
    });
  }

  //saving to local storage
  function saveTaskToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
