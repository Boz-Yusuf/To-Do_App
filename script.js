const todos_list = ["görev_1", "görev_2", "görev_3", "görev_4"];
let taskParent = document.getElementById("todo_list");

function list_tasks() {
  todos_list.forEach((element) => {
    create_task(element);
  });
}

function add_task() {
  let task_info = document.getElementById("task-input-text");
  create_task(task_info.value);
  task_info.value = "";
}

function check_todo_item(obj) {
  obj.parentElement.parentElement.style.background = "green";
}

function delete_todo_item(obj) {
  obj.parentElement.parentElement.remove();
}

function create_task(task_info) {
  let createdTask = document.createElement("li");
  createdTask.classList = "todo-list__todo-item";
  createdTask.innerHTML = `
  <div class="todo-item__info">
    ${task_info}
  </div>
  <div class="todo-item__edit">
    <button class="edit__button edit__button--check" onclick="check_todo_item(this)">Complate</button>
    <button class="edit__button edit__button--delete" onclick="delete_todo_item(this)">Delete</button>
  </div>`;
  taskParent.append(createdTask);
}
