let globalUsers: Array<any> = [];

async function getText(file: string) {
    const response = await fetch(file);
    const data = await response.json();
    console.log(data)
    console.log(data.results[0])
    
    // 1. male and female user counts

    const femaleCount = data.results.filter((obj: any) => obj.gender == "female").length;
    console.log(femaleCount);
    append(femaleCount);
    const maleCount = data.results.filter((obj: any) => obj.gender == "male").length;
    console.log(maleCount);
    append(maleCount);

    // 2. display all users over age 40
    
    const over40 = data.results.filter((obj: any) => obj.dob.age >= 40);
    console.log(over40)
    // append(over40);

    // 3. display all users from germany

    const germans = data.results.filter((obj: any) => obj.location.country == "Germany")
    console.log(germans)
    // append(germans);

    // 4. display index position of first user from germany

    const firstGerman = data.results.indexOf(germans[0]);
    console.log(firstGerman);
    append(firstGerman);

    // 5. find first user of age 28

    const twenty8s = data.results.filter((obj: any) => obj.dob.age == 28);
    const first28 = data.results.indexOf(twenty8s[0]);
    console.log(first28);
    console.log(data.results[64]);
    append(first28);

    // 6. generate new user list

    globalUsers = data.results.map((user: any) => ({gender: user.gender, name: user.name.first + " " + user.name.last, location: user.location.city, country: user.location.country, email: user.email, username: user.login.username, password: user.login.password, age: user.dob.age, picture: user.picture.thumbnail}))
    // console.log(globalUsers)

    for (let i = 0; i < globalUsers.length; i++) {
        globalUsers[i].id = randomIntFromInterval(1000, 5000);
        globalUsers[i].credit = randomIntFromInterval(1, 100);
    }

    console.log(globalUsers);

};

getText("https://randomuser.me/api/?results=500&seed=foo");

