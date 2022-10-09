import color from "./color.js"

export function printLog(isCmd, sender, gcName, isGc) {
    if (isCmd && isGc) {
        return console.log(color("[EXEC]", "aqua"), color(sender.split("@")[0], "lime"), "in", color(gcName, "lime"));
    }
    if (isCmd && !isGc) {
        return console.log(color("[EXEC]", "aqua"), color(sender.split("@")[0], "lime"));
    }
}