const taskInput = document.getElementById("taskInput");
console.log(taskInput);
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click",function() {
    console.log("Button clicked!");
    console.log(taskInput.value);
});