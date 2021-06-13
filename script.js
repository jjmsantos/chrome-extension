let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
    //console.log("Button clicked!");
    //myLeads.push("www.awesomelead.com");
    myLeads.push(inputEl.value).reset;
    inputEl.value = "";
    //console.log(myLeads);
    renderLeads();
});


function renderLeads() {
    let listItems = "";
    
    for (let i = 0; i < myLeads.length; i++) {    
        
        //METHOD 1
        listItems += `
            <li>
                <a href= "${myLeads[i]}" target="_blank">
                    ${myLeads[i]}
                </a>
            </li>
        `;
    
    /*  
        //STREAMLINED METHOD
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li)
     */
    
        //console.log(myLeads[i]);
    }
    
    ulEl.innerHTML = listItems;
}
