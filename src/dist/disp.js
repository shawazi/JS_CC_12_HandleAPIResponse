"use strict";
function appendToList(arg) {
    var _a;
    const liItem = document.createElement("li");
    liItem.textContent = arg;
    (_a = document.getElementById("output-list")) === null || _a === void 0 ? void 0 : _a.appendChild(liItem);
}
function appendToMainContainer(result) {
    var _a;
    (_a = document.getElementById("bootstrap-container")) === null || _a === void 0 ? void 0 : _a.appendChild(result);
}
function bootstrapDisp() {
    for (let i = 0; i < 20; i++) {
        const pleaseROW = document.createElement("div");
        pleaseROW.classList.add("col-mb-5", "col", "mb-3");
        const card = document.createElement("div");
        card.classList.add("card", "w-100", "h-100", "text-light", "bg-dark");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const fullName = document.createElement("h2");
        const city = document.createElement("p");
        const country = document.createElement("p");
        const age = document.createElement("p");
        const gender = document.createElement("p");
        const email = document.createElement("p");
        const username = document.createElement("p");
        const password = document.createElement("p");
        const id = document.createElement("p");
        const credit = document.createElement("p");
        const picture = document.createElement("img");
        fullName.textContent = "Name: " + filtered50[i].name;
        city.textContent = "City: " + filtered50[i].city;
        country.textContent = "Country: " + filtered50[i].country;
        age.textContent = "Age: " + filtered50[i].age;
        gender.textContent = "Gender: " + filtered50[i].gender;
        email.textContent = "Email: " + filtered50[i].email;
        username.textContent = "Username: " + filtered50[i].username;
        password.textContent = "Password: " + filtered50[i].password;
        id.textContent = "ID: " + filtered50[i].id;
        credit.textContent = "Credit: " + filtered50[i].credit;
        picture.setAttribute("src", filtered50[i].picture);
        picture.setAttribute("class", "card-img-bottom");
        picture.setAttribute("style", "float: right;");
        cardBody.append(fullName, city, country, age, gender, email, username, password, id, credit, picture);
        card.appendChild(cardBody);
        pleaseROW.appendChild(card);
        appendToMainContainer(pleaseROW);
    }
}
