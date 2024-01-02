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

export function createTask(title, details, dueDate, starred, parentProject, number, ppIndex) {
    return { title, details, dueDate, starred, parentProject, number, ppIndex };
}



