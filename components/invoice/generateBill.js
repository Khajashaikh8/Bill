// User Validation
var currentUser = localStorage.getItem("currentUser");

if (!currentUser) {
  location.href = "../login/login.html";
} else {
  var user = document.querySelector("#user");
  user.innerHTML += currentUser;
}

//-----------------Adding Remarks----------------------
function loadRemarks() {
  const remarksMenu = document.querySelector("#remarksList");
  var remarksList = [];
  remarksList = remarks.map((r) => `<option value="${r}">${r}</option>`);

  remarksMenu.innerHTML = remarksList;
}

//---------------------Setting Bill Number--------------------
const currentBillNumber = localStorage.getItem("currentBillNumber");

document.querySelector("#billNumber").value = currentBillNumber ? (parseInt(currentBillNumber)) : billNumber;

//------------------------Setting New Bill Number------------------
function increaseBillNumber() {
  const previosBillNumber = document.querySelector("#billNumber").value;
  console.log(previosBillNumber);
  //document.querySelector("#billNumber").value = parseInt(previosBillNumber) + 1;
  localStorage.setItem("currentBillNumber", parseInt(previosBillNumber) + 1);
}

//---------------------Setting Note Value--------------------
document.querySelector("#note").value = note;

//----------------------Setting date------------------------
const date = new Date();
document.querySelector("#billDate").value = date.toISOString().substr(0, 10);

//------------------------------------------------------------------------------
//Ship From
const shipFromInput = document.querySelector("#shipFrom");
const shipFromSuggBox = document.querySelector(".shipFrom-autocom-box");

shipFromInput.onkeyup = (e) => {
  let shipData = e.target.value; //user enetered data
  let emptyArray = [];

  if (shipData) {
    emptyArray = locations.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(shipData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data}</li>`);
    });

    showSuggestions(emptyArray, shipFromInput, shipFromSuggBox);

    let allList = shipFromSuggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute(
        "onclick",
        "select(this, shipFromInput, shipFromSuggBox)"
      );
    }
  }
};
//-------------------------------

//Ship To
const shipToInput = document.querySelector("#shipTo");
const shipToSuggBox = document.querySelector(".shipTo-autocom-box");

shipToInput.onkeyup = (e) => {
  let shipData = e.target.value; //user enetered data
  let emptyArray = [];

  if (shipData) {
    emptyArray = locations.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.toLocaleLowerCase().startsWith(shipData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data}</li>`);
    });

    showSuggestions(emptyArray, shipToInput, shipToSuggBox);

    let allList = shipToSuggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute(
        "onclick",
        "select(this, shipToInput, shipToSuggBox)"
      );
    }
  }
};
//-------------------------------------------

//Consignor
const consignorInput = document.querySelector("#consignor");
const consignorSuggBox = document.querySelector(".consignor-autocom-box");

consignorInput.onkeyup = (e) => {
  let consignorData = e.target.value; //user enetered data
  let emptyArray = [];

  if (consignorData) {
    emptyArray = customer.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.name
        .toLocaleLowerCase()
        .startsWith(consignorData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data.name}</li>`);
    });

    showSuggestions(emptyArray, consignorInput, consignorSuggBox);

    let allList = consignorSuggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute(
        "onclick",
        "select(this, consignorInput, consignorSuggBox)"
      );
    }
  }
};

//--------------------------------

//Consignee
const consigneeInput = document.querySelector("#consignee");
const consigneeSuggBox = document.querySelector(".consignee-autocom-box");

consigneeInput.onkeyup = (e) => {
  let consigneeData = e.target.value; //user enetered data
  let emptyArray = [];

  if (consigneeData) {
    emptyArray = customer.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.name
        .toLocaleLowerCase()
        .startsWith(consigneeData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data.name}</li>`);
    });

    showSuggestions(emptyArray, consigneeInput, consigneeSuggBox);

    let allList = consigneeSuggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute(
        "onclick",
        "select(this, consigneeInput, consigneeSuggBox)"
      );
    }
  }
};

//--------------------------------

//Consignor
const consignorAddrInput = document.querySelector("#cgrAddress");
const consignorAddrSuggBox = document.querySelector(
  ".consignor-address-autocom-box"
);

consignorAddrInput.onkeyup = (e) => {
  let consignorAddrData = e.target.value; //user enetered data
  let emptyArray = [];

  if (consignorAddrData) {
    emptyArray = customer.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.address
        .toLocaleLowerCase()
        .startsWith(consignorAddrData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data.address}</li>`);
    });

    showSuggestions(emptyArray, consignorAddrInput, consignorAddrSuggBox);

    let allList = consignorAddrSuggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute(
        "onclick",
        "select(this, consignorAddrInput, consignorAddrSuggBox)"
      );
    }
  }
};

//--------------------------------

//Consignee
const consigneeAddrInput = document.querySelector("#cgeAddress");
const consigneeAddrSuggBox = document.querySelector(
  ".consignee-address-autocom-box"
);

consigneeAddrInput.onkeyup = (e) => {
  let consigneeAddrData = e.target.value; //user enetered data
  let emptyArray = [];

  if (consigneeAddrData) {
    emptyArray = customer.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.address
        .toLocaleLowerCase()
        .startsWith(consigneeAddrData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data = `<li>${data.address}</li>`);
    });

    showSuggestions(emptyArray, consigneeAddrInput, consigneeAddrSuggBox);

    let allList = consigneeAddrSuggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute(
        "onclick",
        "select(this, consigneeAddrInput, consigneeAddrSuggBox)"
      );
    }
  }
};

//--------------------------------

function select(element, ship, suggBox) {
  let selectData = element.textContent;
  ship.value = selectData;
  suggBox.innerHTML = "";
}

function showSuggestions(list, ship, suggBox) {
  let listData;
  if (!list.length) {
    userValue = ship.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}

//---------------------------------------
//Calculating Total Payble Amount

function calculateBill() {
  const numberBales = document.querySelector("#balesNumber");
  const ratePerBale = document.querySelector("#rate");
  const advancePaid = document.querySelector("#advancePay");
  const totalPayable = document.querySelector("#totalPay");

  totalPayable.value =
    parseInt(numberBales.value) * parseFloat(ratePerBale.value) -
    parseFloat(advancePaid.value);
}

//---------------------------------------

//Generating Bill
function generateBill(e, type) {
  e.preventDefault();
  //console.log("Called");

  var remark = document.querySelector("#remarksList");
  console.log(remark.options[remark.selectedIndex].value);

  const bill = {
    billNumber: document.querySelector("#billNumber").value,
    billDate: document.querySelector("#billDate").value,
    lorryNumber: document.querySelector("#lrNumber").value,
    lorryOwnerName: document.querySelector("#lrOwner").value,
    driverName: document.querySelector("#drName").value,
    dlNumber: document.querySelector("#dlNumber").value,
    shipFrom: document.querySelector("#shipFrom").value,
    shipTo: document.querySelector("#shipTo").value,
    consignor: document.querySelector("#consignor").value,
    consignorAddress: document.querySelector("#cgrAddress").value,
    consignee: document.querySelector("#consignee").value,
    consigneeAddress: document.querySelector("#cgeAddress").value,
    numberBales: document.querySelector("#balesNumber").value,
    quality: document.querySelector("#quality").value,
    weight: document.querySelector("#weight").value,
    rate: document.querySelector("#rate").value,
    advancePay: document.querySelector("#advancePay").value,
    totalPayable: document.querySelector("#totalPay").value,
    prNumber: document.querySelector("#prNumber").value,
    pMark: document.querySelector("#pMark").value,
    lotnumber: document.querySelector("#lotNumber").value,
    invoiceNumber: document.querySelector("#invoiceNumber").value,
    remark: remark.options[remark.selectedIndex].value,
    note: document.querySelector("#note").value,
  };

  //console.log(JSON.stringify(bill));

  // localStorage.setItem("currentBill", JSON.stringify(bill));

  localStorage.setItem("billDate", bill.billDate);
  localStorage.setItem("billNumber", bill.billNumber);
  localStorage.setItem("lorryNumber", bill.lorryNumber);
  localStorage.setItem("lorryOwnerName", bill.lorryOwnerName);
  localStorage.setItem("driverName", bill.driverName);
  localStorage.setItem("dlNumber", bill.dlNumber);
  localStorage.setItem("shipFrom", bill.shipFrom);
  localStorage.setItem("shipTo", bill.shipTo);
  localStorage.setItem("consignor", bill.consignor);
  localStorage.setItem("consignorAddress", bill.consignorAddress);
  localStorage.setItem("consignee", bill.consignee);
  localStorage.setItem("consigneeAddress", bill.consigneeAddress);
  localStorage.setItem("numberBales", bill.numberBales);
  localStorage.setItem("quality", bill.quality);
  localStorage.setItem("weight", bill.weight);
  localStorage.setItem("rate", bill.rate);
  localStorage.setItem("advancePay", bill.advancePay);
  localStorage.setItem("totalPayable", bill.totalPayable);
  localStorage.setItem("prNumber", bill.prNumber);
  localStorage.setItem("pMark", bill.pMark);
  localStorage.setItem("lotnumber", bill.lotnumber);
  localStorage.setItem("invoiceNumber", bill.invoiceNumber);
  localStorage.setItem("remark", bill.remark);
  localStorage.setItem("note", bill.note);

  //setBillData(bill);

  //Saving Current Bill Number
  saveBillNumber(bill.billNumber);

  setTimeout(() => {
    if (type === "new") {
      location.href = "./bill.html";

    } else if(type === "old") {
      location.href = "./oldBill.html";

    } else if(type === "system") {
      location.href = "./systemBill.html";
      
    } else {
      location.href = "./oldBill.html";
    }
  }, 500);

  
}

//Working on it --> Phase 2 of SharpV2
function setBillData(billData) {
  var bills = [];
  console.log(billData);

  var oldBiills = localStorage.getItem("previosBills");

  if (oldBiills) {
    bills = [oldBiill];
    localStorage.removeItem("previosBills");
  }
  console.log(bills);

  bills.push(JSON.stringify(billData));
  console.log(bills);
  localStorage.setItem("previosBills", ...bills);
  
}

//-------------------------------------------------
//Saving Bill Number

function saveBillNumber(billNum) {
  localStorage.setItem("currentBillNumber", billNum);
}
