// User Validation
var currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  location.href = "../login/login.html";
}

//----------------------------------------
// Loading Old Bills

// const previosBills = localStorage.getItem("previosBills");
// document.querySelector("#oldBills").innerHTML = previosBills[0];

//===================================================================================
function generateBill() {
  location.href = "./generateBill.html";
}

function generateDeclaration() {
  location.href = "./declaration.html";
}
