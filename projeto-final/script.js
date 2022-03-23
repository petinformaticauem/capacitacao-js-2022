const form = document.querySelector('form');
const list = document.querySelector('.list');
const input = document.querySelector('.input');

let tasks = [];

const getTasks = () => {
  const tasksAdded = localStorage.getItem('tasks');

  if (tasksAdded) {
    tasks = JSON.parse(tasksAdded);
  }

  renderTasks(tasks);
};

const renderTasks = (tasks) => {
  list.innerHTML = '';

  tasks.forEach((task) => {
    const li = document.createElement(`li`);
    li.setAttribute('id', task.id);
    li.setAttribute('class', 'task');
    li.innerHTML = `
    <span style="max-width: 100%; word-break: break-all">
      ${task.name}
    </span>
    <button class="btn btn-danger delete">Concluir</button>`;

    list.append(li);
  });
};

getTasks();

const addToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
};

const addTask = (item) => {
  if (item !== '') {
    const task = {
      id: Date.now(),
      name: item,
    };

    tasks.push(task);
    addToLocalStorage(tasks);
    input.value = '';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(input.value);
});

const removeTask = (id) => {
  tasks = tasks.filter((task) => task.id != id);
  addToLocalStorage(tasks);
};

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const taskId = e.target.parentElement.getAttribute('id');
    removeTask(taskId);
  }
});
