import { header, main, dialog, addTaskPrompt, addProjectPrompt, detailsPrompt, settingsPrompt, renamePrompt, projectSettingsPrompt, projectRenamePrompt } from "./siteBuilder.js";
import { updateProjects, domCreateTask, domCreateProject, displayDetails, displayDate, displayTaskTitle } from "./projectTaskRender.js";
import { changeDialogTaskNum, submitDetails, submitTaskTitle, closeDialog } from "./otherDomLogic.js";
import { selectProject, starTask, deleteTask, completeTask } from "./siteLogic.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

selectProject(0); //selects "All Tasks" project

window.addEventListener("click", function(event) {
    let domTask = event.target.parentNode.parentNode.dataset.tnum;

    if (event.target.className === "all-tasks" || event.target.parentNode.className === "all-tasks") {
        selectProject(0);
    }
    if (event.target.className === "starred-tasks" || event.target.parentNode.className === "starred-tasks") {
        selectProject(1);
    }
    if (event.target.className === "completed-tasks" || event.target.parentNode.className === "completed-tasks") {
        selectProject(2);
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
    if (event.target.className === "svg notes" ||
        event.target.className === "svg notes completed") {
        detailsPrompt();
        displayDetails(domTask);
        displayDate(domTask);
    }
    if (event.target.className === "confirm-details") {
        submitDetails();
    }
    if (event.target.className === "svg star") {
        starTask(domTask);
    }
    if (event.target.className === "svg other") {
        settingsPrompt();
        changeDialogTaskNum(domTask);
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
    if (event.target.className === "task-check") {
        completeTask(domTask);
    }
    if (event.target.className === "svg project-settings") {
        event.stopPropagation();
        projectSettingsPrompt();
    }
    if (event.target.className === "rename-project") {
        //renameProject();
    }
    if (event.target.className === "delete-project") {
        //deleteProject();
    }
});

updateProjects();