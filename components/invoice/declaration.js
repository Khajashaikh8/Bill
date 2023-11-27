// User Validation
var currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  location.href = "../login/login.html";
}
const names = document.getElementsByClassName("name");
for (var i=0; i < names.length; i++){
      names[i].innerHTML =declaration_details.name ? declaration_details.name : "ABBED GULAMALI SHAIK";
}

const companyNames = document.getElementsByClassName("company");
for (var i=0; i < companyNames.length; i++){
  companyNames[i].innerHTML = declaration_details.company ? declaration_details.company : "SOUTH INDIA LORRY SUPPLIERS";
}

const companyAddress = document.getElementsByClassName("address");
for (var i=0; i < companyAddress.length; i++){
  companyAddress[i].innerHTML = declaration_details.address ? declaration_details.address : "SOUTH INDIA LORRY SUPPLIERS, H.O BIDAR";
}

const financial_year = document.getElementsByClassName("financial_year");
for (var i=0; i < financial_year.length; i++){
  financial_year[i].innerHTML = declaration_details.financial_year ? declaration_details.financial_year : "2022-2023";
}

function enterKeyPressed(event) {
     
         windows.print();
         return true;
     
   }
