"use strict";
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const men = document.getElementById("men");
const women = document.getElementById("women");
const all = document.getElementById("all");
men === null || men === void 0 ? void 0 : men.addEventListener("click", () => {
    filtered50 = globalUsers.filter((obj) => obj.credit > 50);
    filtered50 = filtered50.filter((obj) => obj.gender == "male");
    document.getElementById("bootstrap-container").innerHTML = "";
    bootstrapDisp();
});
women === null || women === void 0 ? void 0 : women.addEventListener("click", () => {
    filtered50 = globalUsers.filter((obj) => obj.credit > 50);
    filtered50 = filtered50.filter((obj) => obj.gender == "female");
    document.getElementById("bootstrap-container").innerHTML = "";
    bootstrapDisp();
});
all === null || all === void 0 ? void 0 : all.addEventListener("click", () => {
    filtered50 = globalUsers.filter((obj) => obj.credit > 50);
    document.getElementById("bootstrap-container").innerHTML = "";
    bootstrapDisp();
});
