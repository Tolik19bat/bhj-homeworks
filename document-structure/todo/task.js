const form = document.getElementById("tasks__form");
form.type = "submit";//добавляем форме метод submit
const text = document.getElementById("task__input");
text.setAttribute("required", true);//добавляем атрибут для инпута
const tasks = document.getElementById("tasks__list");//

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const task = document.createElement("div");//создаём див
  task.className = "task";// присваиваем класс
  tasks.prepend(task);//вставляем первым дочерним

  const taskTitle = document.createElement("div");//дочерний див
  taskTitle.className = "task__title";// присваиваем класс
  taskTitle.textContent = text.value;// вставляем текст задачи
  task.prepend(taskTitle);//вставляем первым дочерним в родителя "task"

  const taskRemove = document.createElement("a");//ссылка для закрытия задачи
  taskRemove.href = "#";//присваеваем href
  taskRemove.className = "task__remove";//присваиваем класс
  taskRemove.textContent = "x";
  task.appendChild(taskRemove);//вставляем последним дочерним элементом
  form.reset();//при добавлении задачи форма очищается
});

tasks.addEventListener('click', function (event) {
	event.preventDefault();
	const remove = event.target;//получаем нажатый элемент
	let deleteElement = remove.closest('.task');//получаем ближайшего родителя элемента
	deleteElement.remove();//удаляем родителя
})
