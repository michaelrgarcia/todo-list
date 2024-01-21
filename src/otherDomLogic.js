import { getTask, updateTasks } from "./projectTaskRender";
import { getProjects } from "./siteLogic";

export function closeDialog() {
    const dialogForm = document.querySelector("dialog");

    dialogForm.close();
}

export function getTaskFromDialog() {
    const dialogForm = document.querySelector("dialog");

    const taskNum = dialogForm.dataset.tnum;
    const task = getTask(taskNum);

    return task;
}

export function getProjectFromDialog() {
    const dialogForm = document.querySelector("dialog");

    const projectNum = dialogForm.dataset.pnum;
    const projects = getProjects();
    const project = projects[projectNum];

    return project;
}

export function changeDialogTaskNum(taskNum) {
    const dialogForm = document.querySelector("dialog");

    dialogForm.setAttribute("data-tnum", taskNum);
    dialogForm.removeAttribute("data-pnum");
}

export function changeDialogProjectNum(pNum) {
    const dialogForm = document.querySelector("dialog");

    dialogForm.setAttribute("data-pnum", pNum);
    dialogForm.removeAttribute("data-tnum");
}

export function submitDetails() {
    const dialogForm = document.querySelector("dialog");
    const domTaskDetails = document.getElementById("task-details");
    const domTaskDueDate = document.getElementById("task-due");

    const task = getTaskFromDialog();

    if (task.details !== domTaskDetails.value || task.dueDate !== domTaskDueDate.value) {
        let confirmation = confirm("Confirm Changes");
    
        if (confirmation === true) {
            task.details = domTaskDetails.value;
            task.dueDate = domTaskDueDate.value;
    
            dialogForm.close();
        }
        } else {
            dialogForm.close();
        }
}

export function submitTaskTitle() {
    const dialogForm = document.querySelector("dialog");
    const domTaskTitle = document.getElementById("new-task-title");

    const task = getTaskFromDialog();

    const projects = getProjects();

    const selectedProject = projects.find((project) => project.selected === true);
    
    if (task.title !== domTaskTitle.value) {
        let confirmation = confirm("Confirm Changes");
    
        if (confirmation === true) {
            task.title = domTaskTitle.value;
    
            dialogForm.close();
            updateTasks(selectedProject);
        } else {
            dialogForm.close();
        }
    }
}

export function toggleDropdown() {
    const dropdown = document.querySelector("nav");

    if (!dropdown.classList.contains("hide-nav")) {
        dropdown.classList.add("hide-nav");
    } else if (dropdown.classList.contains("hide-nav")) {
        dropdown.classList.remove("hide-nav");
    }
}