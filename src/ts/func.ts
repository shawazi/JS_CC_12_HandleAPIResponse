function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

const men = document.getElementById("men");
const women = document.getElementById("women");
const all = document.getElementById("all");

men?.addEventListener("click", () => {
    // console.log("filter and display only men");
    filtered50 = filtered50.filter((obj: any) => obj.gender == "male");
    
    // console.log(filtered50)
    document.getElementById("bootstrap-container")!.innerHTML = "";
    bootstrapDisp();
});

women?.addEventListener("click", () => {
    filtered50 = filtered50.filter((obj: any) => obj.gender == "female");
    document.getElementById("bootstrap-container")!.innerHTML = "";
    // bootstrapDisp();
    // console.log(filtered50);
    bootstrapDisp();
});

all?.addEventListener("click", () => {
    document.getElementById("bootstrap-container")!.innerHTML = "";
    bootstrapDisp();
})