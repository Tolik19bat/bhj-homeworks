const form = document.getElementById("tasks__form");
form.type = "submit";//добавляем форме метод submit
const text = document.getElementById("task__input");
text.setAttribute("required", true);//добавляем атрибут для инпута
const tasks = document.getElementById("tasks__list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // e.stopPropagation();

  const task = document.createElement("div");//создаём див
  tasks.prepend(task);
  task.className = "task";

  const taskTitle = document.createElement("div");//дочерний див
  task.prepend(taskTitle);
  taskTitle.className = "task__title";
  taskTitle.textContent = text.value;

  const taskRemove = document.createElement("a");//ссылка для закрытия задачи
  task.appendChild(taskRemove);
  taskRemove.href = "#";
  taskRemove.className = "task__remove";
  taskRemove.textContent = "x";

	const remove = Array.from(document.getElementsByClassName("task__remove"));//массив открытых задач

  for (let index = 0; index < remove.length; index++) {//цикл
      remove[index].addEventListener("click", (e) => {//при клике на ссылку
        e.preventDefault();
        // e.stopPropagation();
        task.remove();//удаляем задачу
      });
    }
  form.reset();//при добавлении задачи форма очищается
});
