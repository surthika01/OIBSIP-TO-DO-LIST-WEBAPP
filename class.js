document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const pendingList = document.getElementById("pendingList");
  const completedList = document.getElementById("completedList");

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
            <button class="completeBtn">Complete</button>
        `;

    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    const completeBtn = li.querySelector(".completeBtn");
    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
      if (li.classList.contains("completed")) {
        completedList.appendChild(li);
      } else {
        pendingList.appendChild(li);
      }
    });

    pendingList.appendChild(li);
  }
});
