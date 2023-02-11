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
        // console.log(data)
        // console.log(data.results[0])
        // 1. male and female user counts
        const femaleCount = data.results.filter((obj) => obj.gender == "female").length;
        // console.log(femaleCount);
        // appendToList(femaleCount);
        const maleCount = data.results.filter((obj) => obj.gender == "male").length;
        // console.log(maleCount);
        const counts = "Males: " + String(maleCount) + "; Females: " + String(femaleCount);
        appendToList(counts);
        // 2. display all users over age 40
        let over40 = data.results.filter((obj) => obj.dob.age >= 40);
        // over40 = JSON.stringify(over40, null, 4); 
        // it is impossible to append the object to the div, but converted to a string the data is too large
        console.log(over40);
        // i should make an ordered list with each item the name of each user over age 40
        // append(over40);
        appendToList("List of users in console");
        // 3. display all users from germany
        let germans = data.results.filter((obj) => obj.location.country == "Germany");
        // germans = JSON.stringify(germans, null, 4) 
        // null, 4 arguments format the data to be read easier
        console.log(germans);
        appendToList("List of users in console");
        // append(germans); //same problem as above, not sure how to display users in the html easily
        // i should make an ordered list with each item the name of each user from germany, or something
        // 4. display index position of first user from germany
        const firstGerman = data.results.indexOf(germans[0]);
        console.log(firstGerman);
        // appendToMainContainer(firstGerman);
        appendToList(firstGerman);
        // 5. find first user of age 28
        const twenty8s = data.results.filter((obj) => obj.dob.age == 28);
        const first28 = data.results.indexOf(twenty8s[0]);
        // console.log(first28);
        console.log(data.results[64]);
        appendToList(data.results[64].name.first + " " + data.results[64].name.last + " at index 64");
        // 6. generate new user list
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
        // console.log(globalUsers)
        for (let i = 0; i < globalUsers.length; i++) {
            globalUsers[i].id = randomIntFromInterval(1000, 5000);
            globalUsers[i].credit = randomIntFromInterval(1, 100);
        }
        console.log(globalUsers);
        appendToList("new user list in console");
        // 7. Develop a bootstrap card and display first 20 users whose credit is greater than 50
        filtered50 = globalUsers.filter((obj) => obj.credit > 50);
        console.log(filtered50);
        bootstrapDisp();
        appendToList("Displayed below");
        // 8. add filter buttons for men, women, and all
        appendToList("filtration buttons below");
    });
}
;
getText("https://randomuser.me/api/?results=500&seed=foo");
