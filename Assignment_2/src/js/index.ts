let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("btn");
let input: HTMLInputElement = <HTMLInputElement>document.getElementById("inputText");
let selecet: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");
let table: HTMLTableElement = <HTMLTableElement>document.getElementById("table");

btn.addEventListener("click", () => {
    let inputText = input.value;

    if (selecet.options[selecet.selectedIndex].value === "Uppercase") {
        inputText = inputText.toUpperCase();
    }
    if (selecet.options[selecet.selectedIndex].value === "Lowercase") {
        inputText = inputText.toLocaleLowerCase();
    }

    let row = table.insertRow(0);
    let cellId = row.insertCell(0);
    let CellData = row.insertCell(1);
    cellId.textContent = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length.toString();
    CellData.textContent = inputText;
})