//-----------------------------Validating User-------------------------------

localStorage.removeItem("currentUser");

function loginUser() {
  var username = document.querySelector("#username");
  var password = document.querySelector("#password");
  var flag = false;
  //   console.log("value => ", username.value);

  users.forEach((u) => {
    if (u.id === username.value) {
      if (u.password === password.value) {
        flag = true;
      }
    }
  });

  if (flag) {
    localStorage.setItem("currentUser", username.value);
    location.href = "../invoice/homepage.html";
  } else {
    alert("User does not exist, Incorrect Username and Password!");
    username.value = "";
    password.value = "";
  }
}
