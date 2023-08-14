const form = document.getElementById("tasks__form");
form.type = "submit";
const text = document.getElementById("task__input");
text.setAttribute("required", true);
const tasks = document.getElementById("tasks__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // e.stopPropagation();

  const task = document.createElement("div");
  tasks.prepend(task);
  task.className = "task";

  const taskTitle = document.createElement("div");
  task.prepend(taskTitle);
  taskTitle.className = "task__title";
  taskTitle.textContent = text.value;

  const taskRemove = document.createElement("a");
  task.appendChild(taskRemove);
  taskRemove.href = "#";
  taskRemove.className = "task__remove";
  taskRemove.textContent = "x";

	const remove = Array.from(document.getElementsByClassName("task__remove"));

  for (let index = 0; index < remove.length; index++) {
      remove[index].addEventListener("click", (e) => {
        e.preventDefault();
        // e.stopPropagation();
        task.remove();
      });
    }
  form.reset();
});
