function append(result: any) {
    const liItem = document.createElement("li");
    liItem.textContent = result;
    document.getElementById("output-list")?.appendChild(liItem);
}

