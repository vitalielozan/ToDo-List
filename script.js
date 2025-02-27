const btnaddTask = document.querySelector('#btnAdd');

btnaddTask.addEventListener('click', () => {
  const taskInput = document.querySelector('#taskInput');
  const taskInputDate = document.querySelector('#inputDate');
  const taskText = taskInput.value.trim();
  const taskDate = taskInputDate.value;

  if (taskText === '') {
    alert('Va rog adaugati o sarcina!');
    return;
  }
  // Introduserea datei este la dorinta

  const taskList = document.querySelector('#taskList');
  const li = document.createElement('li');
  li.textContent = `${taskText} :   ${taskDate}`;
  li.setAttribute('class', 'my-3 bg-success text-white');

  const btnDelete = document.createElement('i');
  btnDelete.setAttribute('class', 'bi bi-trash3-fill');

  btnDelete.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(btnDelete);
  taskList.appendChild(li);

  taskInput.value = '';
  taskInputDate.value = '';
});
