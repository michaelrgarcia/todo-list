import { createProject, createTask } from "./siteLogic";
import { updateScreen } from "./projectTaskRender";

export function domCreateTask() {
    const title = document.getElementById("task-title");
    const details = document.getElementById("task-details");
    const due = document.getElementById("task-due");

    const dialogForm = document.querySelector("dialog");

    if (title.value !== "") {
        const newTask = createTask(title.value, details.value, "", due.value, false);
        test.tasks.push(newTask);
        dialogForm.close();
        updateScreen();
    }
}