import icon from "./iconCreator"; //needs to be a middleman module, otherwise this will get clogged up with shit
import icon1 from "./svgs/format-list-bulleted-square.svg";
import icon2 from "./svgs/information-variant-circle-outline.svg";


function header() {
    const mainElement = document.createElement("header");

    const dropdown = icon.create(icon1);

    const text = document.createElement("p");
    text.id = "header-text"
    text.textContent = "To-Do List";

    const info = icon.create(icon2);

    mainElement.append(dropdown, text, info);

    return mainElement;
}

export default header();