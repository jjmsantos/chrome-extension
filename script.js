/* 
// myLeads is currently a string
let myLeads = `["first lead"]`;

//JSON.parse turns myLeads into an array
myLeads = JSON.parse(myLeads);

//Pushing new code into the array
myLeads.push("second lead");

//reverts the array back into a string
myLeads = JSON.stringify(myLeads);

//console logs what myLeads is -- whether that be a string or an array.
console.log(typeof myLeads);
 */

let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

function render(leads) {
    let listItems = "";
    
    for (let i = 0; i < leads.length; i++) {    
        
        //METHOD 1
        listItems += `
            <li>
                <a href= "${leads[i]}" target="_blank">
                    ${leads[i]}
                </a>
            </li>
        `;
    
    /*  
        //STREAMLINED METHOD
        const li = document.createElement("li");
        li.textContent = myLeads[i];
        ulEl.append(li)
     */
    
    }
    
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

});

