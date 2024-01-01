const projects = [];

const allTaskProject = createProject("All Tasks", true);

projects.push(allTaskProject);

export function getProjects() {
    return projects;
}

export function createProject(title, selected, number) {
    let tasks = [];

    return { title, selected, tasks, number };
}

export function createTask(title, details, dueDate, starred, parentProject, number) {
    return { title, details, dueDate, starred, parentProject, number };
}



