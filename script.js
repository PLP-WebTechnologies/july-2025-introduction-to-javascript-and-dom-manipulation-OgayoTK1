// Part 1: Variables and Conditionals
let tasks = []; // Array to store tasks
let taskCount = 0; // Track number of tasks

// Part 2: Custom Functions
// Function to add a new task
function addTask(taskText) {
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return false;
    }
    const task = {
        id: Date.now(), // Unique ID based on timestamp
        text: taskText,
        completed: false
    };
    tasks.push(task);
    taskCount++;
    return true;
}

// Function to format task text (capitalize first letter)
function formatTaskText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Part 3: Loops
// Function to render tasks using forEach loop
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing list

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = `task-item ${task.completed ? "completed" : ""}`;
        li.innerHTML = `
            <span>${formatTaskText(task.text)}</span>
            <button onclick="toggleTask(${task.id})">${task.completed ? "Undo" : "Complete"}</button>
        `;
        taskList.appendChild(li);
    });

    // Update task count using a for loop
    let completedCount = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) completedCount++;
    }
    document.getElementById("taskCount").textContent = `Total Tasks: ${taskCount} (Completed: ${completedCount})`;
}

// Part 4: DOM Manipulation
// DOM Element selections
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const clearTasksBtn = document.getElementById("clearTasksBtn");

// Event listener for adding tasks
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (addTask(taskText)) {
        renderTasks();
        taskInput.value = ""; // Clear input
    }
});

// Event listener for clearing all tasks
clearTasksBtn.addEventListener("click", () => {
    tasks = [];
    taskCount = 0;
    renderTasks();
});

// Function to toggle task completion
function toggleTask(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

// Initial render
renderTasks();
