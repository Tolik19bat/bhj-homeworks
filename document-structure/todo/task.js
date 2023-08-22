const form = document.getElementById("tasks__form");
form.type = "submit";//добавляем форме метод submit
const text = document.getElementById("task__input");
text.setAttribute("required", true);//добавляем атрибут для инпута
const tasks = document.getElementById("tasks__list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

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
  form.reset();//при добавлении задачи форма очищается
});

tasks.addEventListener('click', function (event) {
	event.preventDefault();
	const remove = event.target;//получаем нажатый элемент
	let deleteElement = remove.closest('.task');//получаем ближайшего родителя элемента 
	deleteElement.remove();//удаляем родителя
})
