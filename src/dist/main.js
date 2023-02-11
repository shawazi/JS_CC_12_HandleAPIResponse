"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let globalUsers = [];
let filtered50 = [];
function getText(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(file);
        const data = yield response.json();
        const femaleCount = data.results.filter((obj) => obj.gender == "female").length;
        const maleCount = data.results.filter((obj) => obj.gender == "male").length;
        const counts = "Males: " + String(maleCount) + "; Females: " + String(femaleCount);
        appendToList(counts);
        let over40 = data.results.filter((obj) => obj.dob.age >= 40);
        console.log(over40);
        appendToList("List of users in console");
        let germans = data.results.filter((obj) => obj.location.country == "Germany");
        console.log(germans);
        appendToList("List of users in console");
        const firstGerman = data.results.indexOf(germans[0]);
        console.log(firstGerman);
        appendToList(firstGerman);
        const twenty8s = data.results.filter((obj) => obj.dob.age == 28);
        const first28 = data.results.indexOf(twenty8s[0]);
        console.log(data.results[64]);
        appendToList(data.results[64].name.first + " " + data.results[64].name.last + " at index 64");
        globalUsers = data.results.map((user) => ({
            gender: user.gender,
            name: user.name.first + " " + user.name.last,
            city: user.location.city,
            country: user.location.country,
            email: user.email,
            username: user.login.username,
            password: user.login.password,
            age: user.dob.age,
            picture: user.picture.thumbnail
        }));
        for (let i = 0; i < globalUsers.length; i++) {
            globalUsers[i].id = randomIntFromInterval(1000, 5000);
            globalUsers[i].credit = randomIntFromInterval(1, 100);
        }
        console.log(globalUsers);
        appendToList("new user list in console");
        filtered50 = globalUsers.filter((obj) => obj.credit > 50);
        bootstrapDisp();
        appendToList("Displayed below");
        appendToList("Filtration buttons below");
    });
}
;
getText("https://randomuser.me/api/?results=500&seed=foo");
