import { updateTasks, domProjectSwitch, getTask } from "./projectTaskRender";
import { getTaskFromDialog } from "./otherDomLogic";

const projects = [];

const allTaskProject = createProject("All Tasks", true);
const starredTasks = createProject("Starred", false);
const completedTasks = createProject("Completed", false);

projects.push(allTaskProject, starredTasks, completedTasks);

export function getProjects() {
    return projects;
}

export function createProject(title, selected) {
    let tasks = [];

    return { title, selected, tasks };
}

export function createTask(title, details, dueDate, starred, parentProject, number, ppIndex, completed) {
    return { title, details, dueDate, starred, parentProject, number, ppIndex, completed };
}

export function selectProject(projectNum) {
    let projectToSelect = projects[projectNum];

    projects.forEach((project) => {
        if (project !== projectToSelect) {
            project.selected = false;
        } else {
            project.selected = true;
        }
    });

    domProjectSwitch(projectToSelect);
    
    updateTasks(projectToSelect);
}

export function starTask(taskNum) {
    const task = getTask(taskNum);

    const selectedProject = projects.find((project) => project.selected === true);

    if (task.starred) {
        task.starred = false;
        starredTasks.tasks.splice(task.number, 1);
    } else {
        task.starred = true;
        starredTasks.tasks.push(task);
    }

    updateTasks(selectedProject);
}

export function deleteTask() {
    const dialogForm = document.querySelector("dialog");

    const task = getTaskFromDialog();
    const project = projects[task.ppIndex];

    let confirmation = confirm("Confirm Delete Task");

    if (confirmation === true) {
        projects.forEach((project) => {
            project.tasks.forEach((taskToDelete) => {
                if (taskToDelete.number === task.number && 
                    taskToDelete.ppIndex === task.ppIndex) {
                    project.tasks.splice(taskToDelete.number, 1);
                }
            });
        });

        updateTasks(project);

        dialogForm.close();
    } else {
        dialogForm.close();
    }
}



