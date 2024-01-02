import { header, main, dialog, addTaskPrompt, addProjectPrompt, detailsPrompt, settingsPrompt, renamePrompt, closeDialog } from "./siteBuilder.js";
import { updateProjects, domCreateTask, selectProject, domCreateProject, displayDetails, submitDetails, starTask, displayTaskTitle, changeDialogTaskNum, submitTaskTitle, deleteTask } from "./projectTaskRender.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

selectProject(0); //selects "All Tasks" project

window.addEventListener("click", function(event) {
    if (event.target.className === "all-tasks" || event.target.parentNode.className === "all-tasks") {
        selectProject(0);
    }
    if (event.target.dataset.pnum) {
        selectProject(event.target.dataset.pnum);
    } else if (event.target.parentNode.dataset.pnum) {
        selectProject(event.target.parentNode.dataset.pnum);
    }
    if (event.target.id === "add-task") {
        addTaskPrompt();
    }
    if (event.target.id === "add-project") {
        addProjectPrompt();
    }
    if (event.target.className === "submit-task") {
        domCreateTask();
    }
    if (event.target.className === "submit-project") {
        domCreateProject();
    }
    if (event.target.className === "svg close-dialog") {
        closeDialog();
    }
    if (event.target.className === "svg notes") {
        detailsPrompt();
        displayDetails(event.target.parentNode.parentNode.dataset.tnum);
    }
    if (event.target.className === "confirm-details") {
        submitDetails();
    }
    if (event.target.className === "svg star") {
        starTask(event.target.parentNode.parentNode.dataset.tnum);
    }
    if (event.target.className === "svg other") {
        settingsPrompt();
        changeDialogTaskNum(event.target.parentNode.parentNode.dataset.tnum);
    }
    if (event.target.className === "rename-task") {
        renamePrompt();
        displayTaskTitle();
    }
    if (event.target.className === "confirm-new-task-title") {
        submitTaskTitle();
    }
    if (event.target.className === "delete-task") {
        deleteTask();
    }
}); 

updateProjects();