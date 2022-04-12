
// When script is l;loaded function
// automatically gets called
(() => {
    let data = [
        {
            name: "Yash Kaushik",
            age: 18,
            dob: "01/08/2001",
            email: "kaushik@gmail.com",
            company: "ABC"
        },
        {
            name: "aman",
            age: 22,
            dob: "04/08/2000",
            email: "aman@gmail.com",
            company: "ABC"
        },
        {
            name: "ram",
            age: 34,
            dob: "01/08/1992",
            email: "ram@gmail.com",
            company: "ABC"
        },
        {
            name: "sia",
            age: 18,
            dob: "01/08/2001",
            email: "sia@gmail.com",
            company: "ABC"
        },
        {
            name: "pria",
            age: 22,
            dob: "01/08/2000",
            email: "pria@gmail.com",
            company: "ABC"
        }
    ]
   
    let fields = ["Name", "Age", "D.O.B.", "Email", "Company"];
    // let table = document.getElementById("myTable");
    let table = document.createElement("TABLE");


    let tblHeadRow = document.createElement('tr');
    fields.forEach(item => {
        let th = document.createElement('th');
        th.innerHTML = item;
        tblHeadRow.appendChild(th);
    })
    table.appendChild(tblHeadRow);

    data.forEach(datarow => {
        let dataRowHTML = document.createElement('tr');
        let cellName = document.createElement('td');
        cellName.innerHTML = datarow.name;
        let cellAge = document.createElement('td');
        cellAge.innerHTML = datarow.age;
        let cellDob = document.createElement('td');
        cellDob.innerHTML = datarow.dob;
        let cellEmail = document.createElement('td');
        cellEmail.innerHTML = datarow.email;
        let cellCompany = document.createElement('td');
        cellCompany.innerHTML = datarow.company;
        dataRowHTML.appendChild(cellName);
        dataRowHTML.appendChild(cellAge);
        dataRowHTML.appendChild(cellDob);
        dataRowHTML.appendChild(cellEmail);
        dataRowHTML.appendChild(cellCompany);
        table.appendChild(dataRowHTML);
    })

    document.querySelector("body").appendChild(table);

})();