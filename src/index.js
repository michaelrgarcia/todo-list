import { header, main, dialog, addTaskPrompt, addProjectPrompt, detailsPrompt, settingsPrompt, renamePrompt } from "./siteBuilder.js";
import { updateProjects, updateTasks, domCreateTask, selectProject, domCreateProject, displayDetails, submitDetails, starTask, displayTaskTitle, changeDialogTaskNum, submitTaskTitle } from "./projectTaskRender.js";

const content = document.getElementById("content");
content.append(header(), main(), dialog());

selectProject(0); //selects "All Tasks" project

window.addEventListener("click", function(event) {
    const dialogSelector = document.querySelector("dialog");

    if (event.target.className === "all-tasks" || event.target.parentNode.className === "all-tasks") {
        selectProject(0);
    }
    if (event.target.dataset.pnum) {
        selectProject(event.target.dataset.pnum);
    } else if (event.target.parentNode.dataset.pnum) {
        selectProject(event.target.parentNode.dataset.pnum);
    }
    if (event.target.id === "add-task") {
        dialogSelector.showModal();
        addTaskPrompt();
    }
    if (event.target.id === "add-project") {
        dialogSelector.showModal();
        addProjectPrompt();
    }
    if (event.target.className === "submit-task") {
        domCreateTask();
    }
    if (event.target.className === "submit-project") {
        domCreateProject();
    }
    if (event.target.className === "svg close-dialog") {
        dialogSelector.close();
    }
    if (event.target.className === "svg notes") {
        dialogSelector.showModal();
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
        dialogSelector.showModal();
        settingsPrompt();
        changeDialogTaskNum(event.target.parentNode.parentNode.dataset.tnum);
    }
    if (event.target.className === "rename-task") {
        dialogSelector.showModal();
        renamePrompt();
        displayTaskTitle();
    }
    if (event.target.className === "confirm-new-task-title") {
        submitTaskTitle();
    }
}); 

//make every svg icon run changeDialogTaskNum (bundle their event listener with a if event.target INCLUDES svg class)

updateProjects();