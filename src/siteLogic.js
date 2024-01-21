import { updateTasks, domProjectSwitch, getTask } from "./projectTaskRender";
import { getTaskFromDialog } from "./otherDomLogic";

const projects = [];
const allTaskProject = createProject("All Tasks", true);
const starredTasks = createProject("Starred", false);
const completedTasks = createProject("Completed", false);

const userProjectsArray = [];
const storedUserProjects = localStorage.getItem("user-projects");

projects.push(allTaskProject, starredTasks, completedTasks);

if (storedUserProjects) {
    projects.push(...JSON.parse(storedUserProjects));
}

projects.forEach((project) => {
    let storedTasks = localStorage.getItem(`${project.title}-tasks`);

    if (storedTasks) {
        project.tasks.push(...JSON.parse(storedTasks));
    }
});

export function getProjects() {
    return projects;
}

export function getUserProjects() {
    return userProjectsArray;
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
    const selectedProject = projects.find((project) => project.selected === true);

    let confirmation = confirm("Confirm Delete Task");

    if (confirmation === true) {
        projects.forEach((project) => {

            if (project !== completedTasks) {
                project.tasks.forEach((desiredTask) => {
                    if (desiredTask.ppIndex === task.ppIndex && 
                        desiredTask.number === task.number) {
                        project.tasks.splice(desiredTask.number, 1);
                    }
                });
            }
        });

        updateTasks(selectedProject);

        dialogForm.close();
    } else {
        dialogForm.close();
    }
}

export function completeTask(taskNum) {
    const task = getTask(taskNum);
    const selectedProject = projects.find((project) => project.selected === true);

    let confirmation = confirm("Confirm Complete Task");

    if (confirmation === true) {
        task.completed = true;
        completedTasks.tasks.push(task);

        projects.forEach((project) => {
            if (project !== completedTasks) {
                project.tasks.forEach((desiredTask) => {
                    if (task.ppIndex === desiredTask.ppIndex && 
                        task.number === desiredTask.number) {
                        project.tasks.splice(desiredTask.number, 1);
                        localStorage.setItem(`${project.title}-tasks`, JSON.stringify(project.tasks));
                    }
                });
            }
        });
    }

    updateTasks(selectedProject);
}



