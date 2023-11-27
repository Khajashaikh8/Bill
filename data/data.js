//-------------------------Note Data--------------
const note = "PAY AT TRANSPORT ACCOUNT ONLY.";

//------------------Remark Data------------------------
const remarks = ["Transport A/C only.", "To be billed.", "To pay."];

//---------------------Formar for Amount----------------
const amtFormat = Intl.NumberFormat("en-US");

//------------------------Save Invoice to Excel----------------




//-----------------Company Data---------------------
const company = {
  name: "SOUTH INDIA LORRY SUPPLIERS",
  agent: "COMMISSION AGENT",
  pan: "BTOPS9421D",
  eamil: "SOUTHINDIALS999@GMAIL.COM",
  expressService: "TAMILNADU",
  gstIn: "29BTOPS9421D1Z6",
  currentAddress:
    "H.O.Near Dastagir Masjid Shahpur Gate, Hyderabad Road, BIDAR - 585402(K.A.)",
  currentContacts:
    "9741754999, 9742362999, 9741753888, 9742938888, Off No. 9980741222",
  branchOffice: [
    {
      name: "SANGAREDDY (T.S.)",
      contactDetails: "M. 9271714371, 9271775666, 9573389992",
    },
    {
      name: "SHAHPUR (K.A.)",
      contactDetails: "M. 9686183777, 9742937777, 9901670333",
    },
    {
      name: "UDGIR (M.H.)",
      contactDetails: "M. 9075275444, 9075585444",
    },
    
  ],
  subjectTo: "BIDAR",
  gstMessage: "GST Payable by: Consignor/Consignee only",
  bankDetails: {
    bankName: "I.D.B.I",
    branchName: "BIDAR (K.A)",
    accountNumber: "1081102000002288",
    ifscCode: "IBKL0001081",
  },
  disclaimer:
    "1. Goods booked at Owner's Risk (Content not Checked). 2. We are not responsible for any loss of goods caused due to theft, accident, riot, rainwater, etc.",
  generatingNote: `"This is a computer generated L.R, hence no signature required."`,
};

//---------------------------------
const declaration_details = {
  name: "ABBED GULAMALI SHAIK",
  company: company.name,
  pan: company.pan,
  financial_year: "2023-2024",
  address: "SOUTH INDIA LORRY SUPPLIERS, H.O BIDAR",
}

//-----------------------Default Value for Empty Fields-------------------------------------
const defaultValue = "----"; //NA aya tha

//------------------------Customer Data-----------------------------------
const customer = [
  {
    name: "VENKATESH FIBRES",
    address: `SR No.152 MARDASGAON, TQ GANGAKHED DIST PARBHANI (M.H)`,
  },
  {
    name: "THE SUGUNA MILLS PVT LTD",
    address: `DEL AT:- 8/587, PALGHAT MAIN ROAD KUNIAMUTHUR COIMBATORE-641108 (T.N)`,
  },
  {
    name: "GANESH SPINTEX PVT LTD",
    address: `2/2, 2/3, Palghat Main Road, Mavuthampathy Navakkarai Post, Coimbatore-641105`,
  },
  {
    name: "SHRIYANSH AGRO",
    address: `PLOT No.101 SECTOR F-1 CIDCO N-4 AURANGABAD (M.H)`,
  },
  {
    name: "KUMARAGIRI SPINNERS PRIVATE LIMITED",
    address: `391/392 KUTTAKADU, VALRAJAPALAYAM, SANNIYASIPATTI AGRAHARAM (PO) SANKIRI (T.N)`,
  },
  {
    name: "S.P SPINNING MILLS PVT LTD",
    address: `NEW No.3/233 OLD NO.1/147/104, CUDDALORE MAIN ROAD KARIPATTI, SALEM (T.N)`,
  },
  {
    name: "JAYAVELU SPINNING MILLS PVT LTD",
    address: "GREAT COTTON ROAD PANDALGUDI",
  },
  {
    name: "KRISHNA NATURAL FIBRE PVT LTD",
    address: `D No.3-95 & 3-96 SHAKKARGA ROAD, MADNOOR-503309 DIST- KAMARREDY, TELANGANA`,
  },
  {
    name: "SJLT TEXTILES P LTD UNIT - 1",
    address: `MH-7 KARUR MAIN ROAD PILLAIKALATHUR, PARAMANTHI VELUR PO DIST NAMAKKAL-637207`,
  },
  {
    name: "SHRI RAJA LAKSHMI ENTERPRISES",
    address: `3-2-15/Z/8, SHIV NAGAR, JAMMIKUNTA, DISTRICT KARIMNAGAR`,
  },
  {
    name: "SRI VAIBHAV MURUGA AGRO TECH INDUSTRIES",
    address: `SY.No.38/A, Nanded Road, Erraram Gate, Jogipet-502270, Mandal: Andol, Dist. Sangareddy (T.S)`,
  },
  {
    name: "KAYAAR EXPORTS PRIVATE LIMITED",
    address: `RAILWAY FEEDER ROAD, K.R NAGAR KOVILPATTI, TUTICORIN (DIST)-628503`,
  },
  {
    name: "SWAMY MURUGA COTTON CORPORATION",
    address: `C/O MALLIKARJUNA COTTON INDUSTRIESRAGHUNATHPURAM ROAD ALER YADADRI BHUVAMGIRI DIST`,
  },
  {
    name: "SREE SAI TEXTILES",
    address: `No.2/216 UDAYA NAGAR , GANAPATHY COIMBATOR (T.N)`,
  },
  {
    name: "ERODE ANNAI SPINNING MILLS (P) LTD",
    address: `PERUNDURAI (R.S), PERUNDURAI, ERODE`,
  },
  {
    name: "VANSHIKA ENTERPRISES",
    address: `H No.1-57 MAHADEV TEMPAL, GAJULPAD KANGTI, DIST SANGAREDDY (T.S)`,
  },
  {
    name: "K.M KNITWEAR PVT LTD",
    address: `SF No.169 CHETTIPALAYAM PIRIVU TRICHY ROAD AVINASHIPALAYAM`,
  },
  {
    name: "EKAGRA COTTON CORPORATION PVT LTD",
    address: `100/A/2 100/A/1 40/U NAGWAR RAIKODE MANDAL DIST-SANGAREDDY, TELANGANA	`,
  },
  {
    name: "SUDEV SPINNERS (P) LTD",
    address: `DEL AT:- SF No.36/1 ALATHUR PO , MONDIPALAYAM AVINASHI TK.TIRUPUR DIST (T.N)`,
  },
  {
    name: "MADHU SRI FIBERS",
    address: `23-A RAITHU NAGAR ROAD NANDYAL-518502`,
  },
  {
    name: "K.S.V COTTON MILLS (P) LTD",
    address: `K.S.V GARDEN , GUJILIAM PARAI VEDASANDUR (TK) DINDIGUL DIST-624703	`,
  },
  {
    name: "LOYAL TEXTILES MILLS LTD",
    address: `UNIT-SHRI VISHALA TEXTILES MILLS LTD, MENAKUR APIIC IND PARK NAIDUPET-524421`,
  },
  {
    name: "ADHILAKSHMI SPINNING MILLS (P) LTD",
    address: `149-A MALLEGOUNDENPALAYAM KAMANAICKENPALAYAM ROAD KARADIVAVI POST, PALLADAM (TALUK) TIRUPR-641658 (T.N)`,
  },
  {
    name: "SIDDHARTH FIBRE",
    address: `JOGIPET (T.S)`,
  },
  {
    name: "SOWMIYA TEXTILES PVT LTD",
    address: `ANNUR (T.N)`,
  },
  {
    name: "GOYAL ENTERPRISES",
    address: `SURVEY No.400, PARLI ROAD GANGAKHED-431514 DIST-PARBHANI (M.H)`,
  },
  {
    name: "AMUTHALAKSHMI SPINNERS",
    address: `14/87 SELVARAJPURAM, CHINTHAMANIPUDUR, PAPPAMPATTI PIRIVU, IRUGAR (VIA) , COIMBATORE-641103 (T.N)`,
  },
  {
    name: "SRI KUMARAN SYNTHETICS INDIA PVT LTD",
    address: `DEL AT :- KOLLAPATTY, PALLAKKAPALAYAM, KUMARAPALAYAM, NAMAKKAL-637303 (T.N)	`,
  },
  {
    name: "MANGALMURTY COTSPIN",
    address: `SURVEY No.124, MELASANGAM MUNPALLE MANDAL DIST-SANGAREDDY (T.S)`,
  },
  {
    name: "TOP LIGHTTEXTILES PVT LTD, TIRUPUR",
    address: `DEL AT :- 337-338 NEELIPALAYAM NOCHIKUTTAI POST PUNJAIPULIAMPATTI, COIMBATORE (T.N)`,
  },
  {
    name: "R.S FIBERS",
    address: `SY No.249/6 MADDANIKA, SHAHPUR`,
  },
  {
    name: "BRINDAVAN COTTON MILLS PVT LTD",
    address: `S.F No.887, POLLACHI ROAD SULUR DIST-SULTHANPET`,
  },
  {
    name: "SREE SAI TEXTILES",
    address: `S.F No. 653/2 PADUVAMPALLI ROAD, KANJAPALLI PIRIVU COIMBATORE (T.N)`,
  },
  {
    name: "MANJEET COTTON PVT LTD",
    address: `SY.No.129, 130, 131, VILLAGE CHANDAPUR, SADASHIVPETH-502291 SANGAREDDY`,
  },
  {
    name: "KARIKALI AMMAN SPINNING MILLS",
    address: `SF No.4, 5 VELAMPALAYAM, ELUMATHUR TO POONDURAI ROAD MODAKKURICHI(VIA), ELUMATHUR-638104, ERODE`,
  },
  {
    name: "M/S KRISHNA POULTRY TEX MILL (INDIA) PVT",
    address: `3/64 THULUKKAN THOTTAN UNIT. KALKOLAYAM PIRIVU, VIJAYMANGALAM , (T.N)	`,
  },
  {
    name: "SRI BALAJI COTTON SYNDICATE",
    address: `WARANGAL (T.S)`,
  },
  {
    name: "RAJASEKHAR SPINTEX PVT LTD",
    address: `15/554, RAJAPALAYAM ROAD CHARTRAPATTI RAJAPALAYAM`,
  },
  {
    name: "RAJASEKHAR SPINTEX PVT LTD",
    address: `15/554, RAJAPALAYAM ROAD CHARTRAPATTI RAJAPALAYAM`,
  },
  {
    name: "L.K TEXTILES PVT LTD",
    address: `464, COVAI-SATHYA MAIN ROAD NEAR SRIDEVI THEATERES PUNJAI PULIAMPATTI -638459 SATHY (TK) ERODE (DT) T.N`,
  },
  {
    name: "SRI PARAMESWARI SPINNING MILLS",
    address: `PRIVATE LIMITED, 4-A GREAT COTTON ROAD, PANDHALGUDI, TALUKA ARUPPUKOTTAI, PANDHALGUDI-626113`,
  },
  {
    name: "MANJEET COTTON PVT LTD",
    address: `SY No.129,130,131, VILLAGE CHANDAPUR, SADASHIVPETH-502291 SANGAREDDY`,
  },
  {
    name: "KARIKALI AMMAN SPINNING MILLS",
    address: `SF No.4, 5 VELAMPALAYAM, ELUMATHUR TO POONDURAI ROAD MODAKKURICHI(VIA),ELUMATHUR-638104, ERODE`,
  },
  {
    name: "AHATHESHWARAR SPINNING MILL PVT LTD (PALLADAM)",
    address: `DEL AT:- 491/4B2 SALIYUR NALROAD SULLERUMBU VILLAGE, NEAR VEDASANDUR-624710 (T.N)`,
  },
  {
    name: "S.V.P.B. SPINNERS (P) LIMITED",
    address: `SEMMADAIPATTY, PALAKANUTHA POST DINDIGUL.`,
  },
  {
    name: "R.G SPINNING MILLS PVT LTD, SANKIRI WEST",
    address: `DEL-PALLIPALAYAM TO SANKARRI MAIN ROAD NATHAMEDU ROAD SANYASIPATTI, SANKIRI WEST (T.N)`,
  },
  {
    name: "MAJESTIC EXPORTS (TIRUPUR)",
    address: `SPINNING DIVISION, SF No.453, ANNUR TO AVINASHI ROAD ANNUR-641653 , COIMBATORE (T.N)`,
  },
  {
    name: "EVEREST SPINNERS INDIA PVT LTD",
    address: `SF No.473, POLLACHI ROAD VENKITTAPURAM, PALLADAM (T.N)`,
  },
  {
    name: "R.G SPINNING MILLS PVT LTD, SANKIRI WEST",
    address: `DEL AT :- PALLIPALAYAM TO SANKIRI MAIN ROAD NATHAMEDU ROAD, SANYASIPATTI, SANKIRI WEST`,
  },
  {
    name: "GOVIND INDUSTRIES",
    address: `MADNOOR`,
  },
  {
    name: "M/S SJLT TEXTILES PVT LTD UNIT - 2",
    address: `MUSRI`,
  },
  {
    name: "SRI VAIBHAV MURUGA AGRO TECH",
    address: `INDUSTRIES, SY NO.38/A NANDED ROAD ERRARAM GATE JOGIPET-502270 MANDAL ANDOL DIST SANGAREDDY (T.S)`,
  },
  {
    name: "SAMBANDAM MILLS",
    address: `390 NEHRU NAGAR PUNJAIPULIAMPATTI , ERODE (T.N)`,
  },
  {
    name: "KIWI COTTSPIN MILL PVT LTD",
    address: `SULUR (T.N)`,
  },
  {
    name: "SUDARSHAN KRUSHI SEVA KENDRA",
    address: `C/O RIDDHI SIDDHI FIBERS SINDKHED RAJA ROAD DEULGAONRAJA-443204`,
  },
  {
    name: "M/S SCM SPINNERS",
    address: `A UNIT OF SCM GARMENTS PVT LTD SF NO.5/1 METTUPATTI PIRIVU VELAMBADI VILLAGE PONNAGOUNDANOOR (S.POST) PALAPATTI BAAZAR (POST) ARAVAKURICHI(TK) KARUR (DT)`,
  },
  {
    name: "AADHIVINAYAGA SPINNERS",
    address: `B.O- S.F NO.435, KULATHUTHOTTAM VARATHIYANGARPALAYAM KOUNDAYAPALAYAM (PO) COIMBATORE-641110`,
  },
{
    name: "SRI KANNAPIRAN MILLS LTD",
    address: `UNIT SRINIVASA MILLS JADAYAMPALAYAM, METTUPALAYAM-641302`,
  },
  {
    name: "SRI GNANAVEL SPINNING MILL ( P ) LTD",
    address: `365/1 B KOVAI SATHY MAIN ROAD PUNJAIPULIAMPATTI (T.N )`,
  },
{
    name: "SUBBURAJ SPG MILLS PVT LTD",
    address: `S.F. NO: 598, MADURAI ROAD SANKAR NAGAR TIRUNENVELLI`,
  },
  {
    name: "CHENNIAPPA YARN SPINNERS PVT LTD",
    address: `SF NO. 95/1 MANGARASA VALAPALAYAM ALATHUR MEDU, AVINASHI -PULIAMPATTI ROAD, TIRUPUR -641655`,
  },
  {
    name: "MANGALMURTY COTSPIN ",
    address: `SURVEY No.124, MELASANGAM MUNPALLE MANDAL DIST-SANGAREDDY (T.S)`,
  },
  {
    name: "EVEREADY COTTON MILLS (P) LTD",
    address: `S FNO 536 DHARAPURAM KARUR MAIN ROAD KANNIVADI POST MULANUR TIRUPUR-639202`,
  },
  {
    name: "SASI ANAND SPINNING MILLS PERUNDURAI",
    address: `43/1 ELLAPPALAYAM, PETHAMPALAYAM ROAD KARUMANDISELLIPALAYAM (POST) PERUNDURAI ERODE`,
  },

  {
    name: "EVEREADY SPINNING MILLS PVT LTD UNIT-1",
    address: `NH-7 KOTTAAIYUR AGARAM VILLAGE THADICOMBU ,
DINDIGUL-624709`,
  },
  {
    name: "EVEREADY SPINNING MILLS PVT LTD ,UNIT-4",
    address: `KOTTAIYUR AGRAM VILLAGE THADICOMBU , DINDIGUL`,
  },
  {
    name: "EVEREADY COTTON MILLS (P) LTD",
    address: `S FNO 536 DHARAPURAM KARUR MAIN ROAD KANNIVADI
POST MULANUR TIRUPUR - 639202`,
  },
  {
    name: "SIDDHARTH FIBRE",
    address: `SY NO. 277 , RAMSANPALLY VILLAGE ANDOLE MANDAL
DIST SANGAREDDY , JOGIPET`,
  },
  {
    name: "D.F.F TEXTILES",
    address: `SF NO. 529/2 POTHIYAMPALAYAM ROAD .ARASUR
VILLAGE ,COIMBATORE -641407`,
  },
 {
    name: "EVEREADY SPINNING MILLS PVT LTD",
    address: `NH-7 NAGAMPATTY VILLAGE VEDASANDUR , DINDIGUL-
624710`,
  },
 {
    name: "ANANDM TEXTILES , RAJAPALAYAM",
    address: `237/1A KALANGAPERI ROAD ARASIAPATTI VILLAGE ,
RAJAPALAYAM`,
  },
 {
    name: "MANJEET FIBERS PVT LTD ",
    address: `SY NO.428/427 , BANGARIGADDA ( V ) CHANDUR ( M )
NALGONDA ( D ) GST NO. 36AAICM0112G1ZY`,
  },
 {
    name: "SOUTHERN SPINNERS AND PROCESSORS LT",
    address: `( A UNIT OF JK FENNERS INDIA LTD ) KUMARAKOTTAM
,PATTUKONAMPATTY POST ,PAPPIREDDIPATTY TALUK ,
DHARMAPURI-636905 GST NO.33AAJCS7137G1ZA`,
  },
 {
    name: "ADWAITH TEXTILES PRIVATE LIMITED",
    address: `114-A SENTHOTTAM ,SOWRIPALAYAM COIMBATORE-
641028`,
  },
 {
    name: "ADHILAKSHMI SPINNING MILLS (P) LTD",
    address: `149-A MALLEGOUNDENPALAYAM
KAMANAICKENPALAYAM ROAD KARADIVAVI POST,
PALLADAM (TALUK) TIRUPR-641658 (T.N)`,
  },
 {
    name: "SASI ANAND SPINNING MILLS ( I ) PVT LTD",
    address: `ELLALAPALAYAM , PETHAMPALAYAM ROAD
KARUMANDISELLIPALAYAM (PO) PERUNDURAI ( T.N )`,
  },
 {
    name: "SRI KANNAPIRAN MILLS LTD",
    address: `UNIT SRINIVASA MILLS JADAYAMPALAYAM ,
METTUPALAYAM-641302`,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
  {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },
 {
    name: "",
    address: ``,
  },



];












//-----------------------------Location Data---------------------------
const locations = ["Bidar (KA)", "Bhalki (K.A)"];

//-----------------------------Bill Number Initial-------------------------
const billNumber = 4300;
