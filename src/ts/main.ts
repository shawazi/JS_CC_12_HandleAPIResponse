let globalUsers: Array<any> = [];
let filtered50: Array<any> = [];

async function getText(file: string) {
    const response = await fetch(file);
    const data = await response.json();
    // console.log(data)
    // console.log(data.results[0])
    
    // 1. male and female user counts

    const femaleCount = data.results.filter((obj: any) => obj.gender == "female").length;
    console.log(femaleCount);
    appendToList(femaleCount);
    const maleCount = data.results.filter((obj: any) => obj.gender == "male").length;
    console.log(maleCount);
    appendToList(maleCount);

    // 2. display all users over age 40
    
    let over40 = data.results.filter((obj: any) => obj.dob.age >= 40);
    over40 = JSON.stringify(over40, null, 4) // it is impossible to append the object to the div, but converted to a string the data is too large
    console.log(over40) 
    // append(over40);

    // 3. display all users from germany

    const germans = data.results.filter((obj: any) => obj.location.country == "Germany")
    console.log(germans)
    // append(germans); //same problem as above, not sure how to display users in the html easily

    // 4. display index position of first user from germany

    const firstGerman = data.results.indexOf(germans[0]);
    console.log(firstGerman);
    // appendToMainContainer(firstGerman);

    // 5. find first user of age 28

    const twenty8s = data.results.filter((obj: any) => obj.dob.age == 28);
    const first28 = data.results.indexOf(twenty8s[0]);
    console.log(first28);
    console.log(data.results[64]);
    // appendToMainContainer(first28);

    // 6. generate new user list

    globalUsers = data.results.map((user: any) => ({
        gender: user.gender, 
        name: user.name.first + " " + user.name.last,
        city: user.location.city, 
        country: user.location.country, 
        email: user.email, 
        username: user.login.username, 
        password: user.login.password, 
        age: user.dob.age, 
        picture: user.picture.thumbnail
    }))
    // console.log(globalUsers)

    for (let i = 0; i < globalUsers.length; i++) {
        globalUsers[i].id = randomIntFromInterval(1000, 5000);
        globalUsers[i].credit = randomIntFromInterval(1, 100);
    }

    // console.log(globalUsers);

    // 7. Develop a bootstrap card and display first 20 users whose credit is greater than 50

    filtered50 = globalUsers.filter((obj: any) => obj.credit > 50);

    console.log(filtered50);

    bootstrapDisp();

    // for (let i = 0; i < 20; i++) {
    //     fullName.textContent = 
    // }

    
    


};

getText("https://randomuser.me/api/?results=500&seed=foo");

