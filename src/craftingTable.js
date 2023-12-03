import iconModule from "./iconCreator";

function elementCrafter(param1, param2, param3) {
    const icon = function(param1) {
        let craftedIcon = iconModule.create(param1);
        return craftedIcon;
    }

    return { param1, icon }
}

export default elementCrafter();