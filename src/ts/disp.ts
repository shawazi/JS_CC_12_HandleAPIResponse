function appendToList(arg: any) {
    const liItem = document.createElement("li");
    liItem.textContent = arg;
    document.getElementById("output-list")?.appendChild(liItem);
}

function appendToMainContainer(result: any) {
    document.getElementById("bootstrap-container")?.appendChild(result);
}


function bootstrapDisp() {
    const card = document.createElement("div");
    card.classList.add("card");
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

    for (let i = 0; i < 20; i++) {
        fullName.textContent = "Name: " + filtered50[i].name;
        city.textContent = filtered50[i].city;
        country.textContent = filtered50[i].country;
        age.textContent = filtered50[i].age;
        gender.textContent = filtered50[i].gender;
        email.textContent = filtered50[i].email;
        username.textContent = filtered50[i].username;
        password.textContent = filtered50[i].password;
        id.textContent = filtered50[i].id;
        credit.textContent = filtered50[i].credit;
        picture.textContent = filtered50[i].picture;

        card.append(fullName, city, country, age, gender, email, username, password, id, credit, picture);
        
        appendToMainContainer(card);
    }

    

}