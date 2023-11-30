// User Validation
var currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  location.href = "../../index.html";
}
else {
  var user = document.querySelector("#user");
  user.innerHTML += currentUser;
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
