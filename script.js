let myform = document.querySelector('form');
let inpName = document.getElementById("name");
let docID = document.getElementById("doctor_id");
let spe = document.getElementById("Specialization");
let ex = document.getElementById("experience");
let emailId = document.getElementById("email");
let mbln = document.getElementById("mobile");
let allData = [];
let tbody = document.querySelector('tbody')

function determineRole(Experience)
{
    if(Experience > 5)
    {
        return "Senior";
    }
    else if(Experience >= 2 && Experience <=5 )
    {
        return "Junior";
    }
    else{
        return "Trainee";
    }
}


myform.addEventListener('submit', function(e)
{
    e.preventDefault();

    let data = {};

    data.input1 = inpName.value;
    data.input2 = docID.value;
    data.input3 = spe.value;
    data.input4 = ex.value;
    data.input5 = emailId.value;
    data.input6 = mbln.value;
    data.input7 = determineRole(ex.value)

    allData.push(data);
    // console.log(allData)

    tbody.innerHTML = null;

    allData.map((ele)=>
    {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');

        td1.innerText = ele.input1;       
        td2.innerText = ele.input2;       
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;       
        td5.innerText = ele.input5;       
        td6.innerText = ele.input6;       
        td7.innerText = ele.input7;  
        
        row.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(row)

        renderTable();

    })

})

function deleteRow(index) {
    allData.splice(index, 1);
    renderTable();
}

function renderTable() {
    tbody.innerHTML = null;
    allData.forEach((ele, index) => {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let td7 = document.createElement('td');
        let deleteBtn = document.createElement('button'); // Create delete button

        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        td3.innerText = ele.input3;
        td4.innerText = ele.input4;
        td5.innerText = ele.input5;
        td6.innerText = ele.input6;
        td7.innerText = ele.input7;
        deleteBtn.innerText = "Delete"; // Set button text

        deleteBtn.addEventListener('click', () => deleteRow(index)); // Attach click event

        row.append(td1, td2, td3, td4, td5, td6, td7, deleteBtn); // Add delete button to row
        tbody.append(row);
    });
}