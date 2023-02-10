"use strict";
function append(result) {
    var _a;
    const liItem = document.createElement("li");
    liItem.textContent = result;
    (_a = document.getElementById("output-list")) === null || _a === void 0 ? void 0 : _a.appendChild(liItem);
}
