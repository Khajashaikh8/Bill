//--------------Testing------------------------

const QRDataDemo = `SOUTH INDIAN LORRY SUPPLIERS - BIDAR
                    Contact: M.9741754999, 9742362999, 9741753888, 9742938888, Off No. 9980741222
                    -------------------------------------------------------------------------
                    Bill No.2345                                             
                    Date: 05-12-2022 
                    Lorry No.KA 38 SS 49494  
                    -------------------------------------------------------------------------
                    From Bidar (K.A) ----> To Bhalki (K.A),
                    Consignor: JOIJSWFPIPFWOJOFPIKFDPWOJFDOWJFOPWJFOWEJKFDOEJKWOFOPEWJKFRO,
                    Consignee: HIKFDSOIKFREWIHFRUIHBIFBIEHNDIKFHIEEHRIEHJNOIJFROIJEWOFRJEO,
                    Number of Bales: 5000,
                    Rate: 5000/- Per Bale,
                    Invoice No.NJ8N 89JRLOIKS0,
                    -------------------------------------------------------------------------
                    Advance Paid: 105661
                    Total Amount Payable: 74654798
                    -------------------------------------------------------------------------
                    `;

//----------------------------------------------------------------------------------------------

//--Loading Bill Data
const currentBillNumber = localStorage.getItem("billNumber");
const currentBillDate = localStorage.getItem("billDate");
const lorryNumber = localStorage.getItem("lorryNumber");
const lorryOwnerName = localStorage.getItem("lorryOwnerName");
const driverName = localStorage.getItem("driverName");
const dlNumber = localStorage.getItem("dlNumber");
const shipFrom = localStorage.getItem("shipFrom");
const shipTo = localStorage.getItem("shipTo");
const consignorName = localStorage.getItem("consignor");
const consignorAddress = localStorage.getItem("consignorAddress");
const consigneeName = localStorage.getItem("consignee");
const consigneeAddress = localStorage.getItem("consigneeAddress");
const numberBales = localStorage.getItem("numberBales");
const quality = localStorage.getItem("quality");
const weight = localStorage.getItem("weight");
const rate = localStorage.getItem("rate");
const advancePay = localStorage.getItem("advancePay");
const totalPayable = localStorage.getItem("totalPayable");
const prNumber = localStorage.getItem("prNumber");
const pMark = localStorage.getItem("pMark");
const lotNumber = localStorage.getItem("lotnumber");
const invoiceNumber = localStorage.getItem("invoiceNumber");
const remark = localStorage.getItem("remark");
const noteData = localStorage.getItem("note");

//-----------------------------------------------------------------------------------------------------
const QRData = `${company.name} - ${company.subjectTo}
                Contact: M.${company.currentContacts}
                -------------------------------------------------------------------------
                Bill No.${currentBillNumber}
                Date: ${currentBillDate}
                Lorry No.${lorryNumber}
                From ${shipFrom} ----> To ${shipTo},
                Consignor: ${consigneeName} ---> Consignee: ${consigneeName},
                Total Payable: ${totalPayable}
                `;

//Generating QR
// var qrcode = new QRious({
//   element: document.getElementById("qrcode"),
//   background: "#ffffff",
//   backgroundAlpha: 1,
//   foreground: "Black",
//   foregroundAlpha: 1,
//   level: "h",
//   padding: 0,
//   size: 255,
//   value: QRData,
// });

// JsBarcode("#barcode", QRData);

//------------------------------------------------------------
//Setting Title
document.querySelector(
  "#title"
).innerHTML = `${lorryNumber}-${currentBillNumber} `;

//---------------------------------------------------------
//Setting Bill Data

document.querySelector(
  "#subject"
).innerHTML = `SUBJECT TO ${company.subjectTo} JURISDICTION`;

document.querySelector("#companyName").innerHTML = company.name;

document.querySelector("#agentType").innerHTML = `${company.agent}`;

document.querySelector("#pan").innerHTML += company.pan;

document.querySelector("#gstIn").innerHTML += ` ${company.gstIn}`;

var branchsListElement = "";
company.branchOffice.forEach((b) => {
  branchsListElement += `<tr class='border border-dark mx-1'><td class='border border-dark'>${b.name}</td><td class='border border-dark mx-1'>${b.contactDetails}</td></tr>`;
});

document.querySelector("#branches").innerHTML += branchsListElement;

document.querySelector("#address").innerHTML = company.currentAddress;

document.querySelector("#contacts").innerHTML += company.currentContacts;

document.querySelector("#email").innerHTML += company.eamil
  ? company.eamil
  : defaultValue;

document.querySelector("#expressService").innerHTML += company.expressService
  ? company.expressService
  : defaultValue;

document.querySelector("#lorryNumber").innerHTML += lorryNumber
  ? lorryNumber
  : defaultValue;

document.querySelector("#driverName").innerHTML += driverName
  ? driverName
  : defaultValue;

document.querySelector("#shipFrom").innerHTML += shipFrom
  ? shipFrom
  : defaultValue;

document.querySelector("#consignor").innerHTML += consignorName
  ? consignorName
  : defaultValue;

document.querySelector("#cgrAddress").innerHTML += consignorAddress
  ? consignorAddress
  : defaultValue;

document.querySelector("#lorryOwnerName").innerHTML += lorryOwnerName
  ? lorryOwnerName
  : defaultValue;

document.querySelector("#dlNumber").innerHTML += dlNumber
  ? dlNumber
  : defaultValue;

document.querySelector("#shipTo").innerHTML += shipTo ? shipTo : defaultValue;

document.querySelector("#consignee").innerHTML += consigneeName
  ? consigneeName
  : defaultValue;

document.querySelector("#cgeAddress").innerHTML += consigneeAddress
  ? consigneeAddress
  : defaultValue;

document.querySelector("#billDate").innerHTML += currentBillDate
  ? currentBillDate
  : new Date().toISOString().substr(0, 10);

document.querySelector("#billNumber").innerHTML += currentBillNumber
  ? currentBillNumber
  : defaultValue;

document.querySelector("#bales").innerHTML += numberBales
  ? numberBales
  : defaultValue;

document.querySelector("#quality").innerHTML += quality
  ? quality
  : defaultValue;

document.querySelector("#prNumber").innerHTML += prNumber
  ? prNumber
  : defaultValue;

document.querySelector("#pMark").innerHTML += pMark ? pMark : defaultValue;

document.querySelector("#lotNumber").innerHTML += lotNumber
  ? lotNumber
  : defaultValue;

document.querySelector("#invoNumber").innerHTML += invoiceNumber
  ? invoiceNumber
  : defaultValue;

document.querySelector("#weight").innerHTML += weight ? weight : defaultValue;

document.querySelector("#rate").innerHTML += rate ? `${rate}/-` : defaultValue;

document.querySelector("#advance").innerHTML += advancePay
  ? advancePay
  : defaultValue;

document.querySelector("#total").innerHTML += totalPayable
  ? totalPayable
  : defaultValue;

document.querySelector("#note").innerHTML += noteData ? noteData : defaultValue;

document.querySelector("#remark").innerHTML += remark
  ? remark
  : defaultValue;

document.querySelector("#gstMessage").innerHTML = company.gstMessage
  ? company.gstMessage
  : defaultValue;

document.querySelector("#bankName").innerHTML += company.bankDetails.bankName
  ? company.bankDetails.bankName
  : defaultValue;

document.querySelector("#generatingNote").innerHTML = company.generatingNote ? company.generatingNote :  defaultValue;

document.querySelector("#bankBranch").innerHTML += company.bankDetails
  .branchName
  ? company.bankDetails.branchName
  : defaultValue;

document.querySelector("#accountNumber").innerHTML += company.bankDetails
  .accountNumber
  ? company.bankDetails.accountNumber
  : defaultValue;

document.querySelector("#ifscCode").innerHTML += company.bankDetails.ifscCode
  ? company.bankDetails.ifscCode
  : defaultValue;

document.querySelector("#disclaimer").innerHTML += company.disclaimer
  ? company.disclaimer
  : defaultValue;

//--------------------------------------------------------------------------------------------------------
document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
  const body = document.getElementsByTagName('body')[0];
  body.querySelector("#billType").innerHTML = "Consignee copy";
  const copy1 = body.cloneNode(true);
  copy1.querySelector("#billType").innerHTML = "Consignor copy";
  const copy2 = body.cloneNode(true);
  copy2.querySelector("#billType").innerHTML = "Driver copy";
  document.body.appendChild(copy1);
  document.body.appendChild(copy2);
  }
  });

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      const data = [{
        lrNumber: currentBillNumber,
        date: currentBillDate,
        lorryNumber: lorryNumber,
        lorryOwnerName: lorryOwnerName,
        driverName: driverName,
        dlNumber: dlNumber,
        shipFrom: shipFrom,
        shipTo: shipTo,
        consignee: consigneeName,
        consigneeAddress: consigneeAddress,
        consignor: consignorName,
        consignorAddress: consignorAddress,
        numberBales: numberBales,
        quality: quality,
        prNumber: prNumber,
        pMark: pMark,
        lotNumber: lotNumber,
        invoiceNumber: invoiceNumber,
        weight: weight,
        rate: rate,
        advance: advancePay,
        total: totalPayable,
        remark: remark,
        note: noteData

      },];

      writeToExcel(data, currentBillNumber);
     //editToExcel(...data);
    }
  });

// Create a function to write data to Excel
function writeToExcel(data, number) {
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, `${number}.xlsx`);
}



// // Create a function to write data to Excel
function editToExcel(data) {
//   // Load the existing workbook from file
const workbook = XLSX.readFile("data.xlsx");
  
//   // Get the first worksheet of the workbook
 const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  
//   // Get the range of cells that contain data in the worksheet
const range = XLSX.utils.decode_range(worksheet["!ref"]);
  
//   // Get the number of rows in the worksheet
 const numRows = range.e.r - range.s.r + 1;
  
//   // Convert the data to a 2D array of values
  const newData = data.map(obj => Object.values(obj));
  
//   // Append the new data to the existing worksheet
 const newRange = XLSX.utils.range(
   range.s.r + numRows, // Start row
    0, // Start column (A)
  range.s.r + numRows + newData.length - 1, // End row
   newData[0].length - 1 // End column
   );
 XLSX.utils.sheet_add_aoa(worksheet, newData, {origin: newRange});
  
//   // Save the modified workbook to file
  XLSX.writeFile(workbook, "data.xlsx");
}