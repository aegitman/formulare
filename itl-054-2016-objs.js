import { numarInLitere } from "./utile.js";

const {PDFDocument, rgb, StandardFonts } = PDFLib;

export async function modifyPdf(fieldsMap) {
  // Fetch an existing PDF document
  const url = "contract.pdf";
  const existingPdfBytes = await fetch(url).then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Înregistrează fontkit
  pdfDoc.registerFontkit(fontkit);

  // Încarcă fontul extern
  const fontBytes = await fetch('bitter/Bitter-Regular.otf').then(res => res.arrayBuffer());
  
  // Înregistrează fontul
  const customFont = await pdfDoc.embedFont(fontBytes);

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();

  const fontSize = 8;

  // seller 675
  // buyer  558
  writePerson(fieldsMap, 'Seller', firstPage, customFont, fontSize, 675);
  writePerson(fieldsMap, 'Buyer', firstPage, customFont, fontSize, 558);

  writeVehicle(fieldsMap, firstPage, customFont, fontSize, 431);

  writePrice(fieldsMap, firstPage, customFont, fontSize, 367);

  writeAnnexes(fieldsMap, firstPage, customFont, fontSize);

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, "contract-itl-054-2016.pdf", "application/pdf");
}

function writePrice(fields, firstPage, helveticaFont, fontSize, firstLineY) {
  firstPage.drawText(fields['price'], {
    x: 140,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  
  firstPage.drawText(fields['priceWritten'], {
    x: 280,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });
}

function writeVehicle(fields, page, helveticaFont, fontSize, firstLineY) {
 page.drawText(fields['brand'], {
    x: 164,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['type'], {
    x: 294,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['vehicleIdNumber'], {
    x: 441,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['engineIdNumber'], {
    x: 100,
    y: firstLineY - 12,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['engineCapacity'], {
    x: 260,
    y: firstLineY - 12,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['maxWeight'], { //maxWight
    x: 540,
    y: firstLineY - 12,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['matNr'], { // matNr
    x: 215,
    y: firstLineY - 23,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['expITP'], { // expITP
    x: 480,
    y: firstLineY - 23,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['nrBookId'], { // nrBookId
    x: 215,
    y: firstLineY - 35,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['year'], { // year
    x: 360,
    y: firstLineY - 35,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['euro'], { // euro
    x: 470,
    y: firstLineY - 35,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['prevBuyDate'], { // prevBuyDate
    x: 50,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });

  page.drawText(fields['buyDocument'], { // buyDocument
    x: 195,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });
}

function writePerson(fields, person, page, font, fontSize, firstLineY) {

  writeTypeOfEntity(fields, person, page, firstLineY + 1);

  // first line
  page.drawText(fields['fullName' + person], {
    x: 340,
    y: firstLineY,
    size: fontSize,
    font: font,
  });

  // second line
  page.drawText(fields['county' + person], { //county 
    x: 278,
    y: firstLineY - 11,
    size: fontSize,
    font: font,
  });

  page.drawText(fields['postalCode' + person], { //postalCode 
    x: 416,
    y: firstLineY - 11,
    size: fontSize,
    font: font,
  });

  drawCityOrMunicipality(fields['cityOrMunicipality' + person], page, 465, firstLineY - 11);

  // third line
  page.drawText(fields['city' + person], { // city 
    x: 45,
    y: firstLineY - 22,
    size: fontSize,
    font: font,
  });

  drawVillageOrSectorType(fields['villageOrSectorType' + person], page, 165, firstLineY - 22);

  page.drawText(fields['villageOrSector' + person], { // villageOrSector 
    x: 219,
    y: firstLineY - 22,
    size: fontSize,
    font: font,
  });

  page.drawText(fields['street' + person], { //street 
    x: 330,
    y: firstLineY - 22,
    size: fontSize,
    font: font,
  });

  page.drawText(fields['streetNumber' + person], { // streetNumber 
    x: 550,
    y: firstLineY - 22,
    size: fontSize,
    font: font,
  });

  // fourth line
  // block
  page.drawText(fields['block' + person], { // block 
    x: 60,
    y: firstLineY - 33,
    size: fontSize,
    font: font,
  });
  // scara
  page.drawText(fields['staircase' + person], { // staircase 
    x: 120,
    y: firstLineY - 33,
    size: fontSize,
    font: font,
  });
  // etaj
  page.drawText(fields['floor' + person], { // floor 
    x: 170,
    y: firstLineY - 33,
    size: fontSize,
    font: font,
  });
  // apartament
  page.drawText(fields['apartment' + person], { // apartment 
    x: 220,
    y: firstLineY - 33,
    size: fontSize,
    font: font,
  });

  // idType
  drawIdType(fields['idType' + person], page, 335, firstLineY - 34, fontSize, font);

  // id seria
  page.drawText(fields['idSeries' + person], { // idSeries
    x: 480,
    y: firstLineY - 33,
    size: fontSize,
    font: font,
  });
  // id numarul
  page.drawText(fields['idNumber' + person], { // idNumber
    x: 535,
    y: firstLineY - 33,
    size: fontSize,
    font: font,
  });

  drawCnpOrCif(fields['cnpOrCif' + person], page, 40, firstLineY - 45);

  // fifth line
  // cnp
  page.drawText(fields['cnp' + person], { // cnp 
    x: 100,
    y: firstLineY - 45,
    size: fontSize,
    font: font,
  });

  drawPhoneOrFax(fields['phoneOrFax' + person], page, 235, firstLineY - 45);

  // telefon fax
  page.drawText(fields['phone' + person], { //phone 
    x: 265,
    y: firstLineY - 45,
    size: fontSize,
    font: font,
  });

  // email
  page.drawText(fields['email' + person], { //email 
    x: 380,
    y: firstLineY - 45,
    size: fontSize,
    font: font,
  });

  // sixth line
  // domiciliul fiscal
  page.drawText("", {
    x: 310,
    y: firstLineY - 56,
    size: fontSize,
    font: font,
  });

  // codul postal
  page.drawText("", {
    x: 530,
    y: firstLineY - 56,
    size: fontSize,
    font: font,
  });

  // seventh line
  // Municipiul
  page.drawText("", {
    x: 150,
    y: firstLineY - 67,
    size: fontSize,
    font: font,
  });

  // Sectorul
  page.drawText("", {
    x: 350,
    y: firstLineY - 67,
    size: fontSize,
    font: font,
  });

  // adresa
  page.drawText("", {
    x: 480,
    y: firstLineY - 67,
    size: fontSize,
    font: font,
  });

  // eighth line
  // adresa continuare
  page.drawText("", {
    x: 40,
    y: firstLineY - 79,
    size: fontSize,
    font: font,
  });

  // numar
  page.drawText("", {
    x: 140,
    y: firstLineY - 79,
    size: fontSize,
    font: font,
  });

  // bloc
  page.drawText("", {
    x: 178,
    y: firstLineY - 79,
    size: fontSize,
    font: font,
  });

  // scara
  page.drawText("", {
    x: 220,
    y: firstLineY - 79,
    size: fontSize,
    font: font,
  });

  // etaj
  page.drawText("", {
    x: 260,
    y: firstLineY - 78,
    size: fontSize,
    font: font,
  });

  // apartament
  page.drawText("", {
    x: 300,
    y: firstLineY - 79,
    size: fontSize,
    font: font,
  });

  //
  //
  // reprezentant legal
  //
  //
  page.drawText(fields['fullNameRep' + person], {
    x: 400,
    y: firstLineY - 79,
    size: fontSize,
    font: font,
  });

  // ninth line
  // seria act identificare
  page.drawText(fields['idSeriesRep' + person], {
    x: 230,
    y: firstLineY - 91,
    size: fontSize,
    font: font,
  });

  // numar act identificare
  page.drawText(fields['idNumberRep' + person], {
    x: 265,
    y: firstLineY - 91,
    size: fontSize,
    font: font,
  });

  // CIF
  page.drawText(fields['cnpRep' + person], {
    x: 330,
    y: firstLineY - 91,
    size: fontSize,
    font: font,
  });

  // Telefon
  page.drawText(fields['phoneRep' + person], {
    x: 480,
    y: firstLineY - 91,
    size: fontSize,
    font: font,
  });

  // email
  page.drawText(fields['emailRep' + person], {
    x: 70,
    y: firstLineY - 103,
    size: fontSize,
    font: font,
  });

  // calitatea reprezentantului legal
  let repType = fields['typeOfRep' + person];
  let repTypeStr = repType == 'M' ? 'Mandatar' : 'Reprezentant legal';
  if(fields['typeOfEntity' + person] == 'PJ') {
    page.drawText(repTypeStr, {
      x: 260,
      y: firstLineY - 103,
      size: fontSize,
      font: font,
    });
  }  
}

function writeAnnexes(fields, page, helveticaFont, fontSize) {
    let x = fields['withAnexe'].length == 0 ? 136/* NO */ : 106 /* YES */; 

  page.drawText("x", { /// checked on NO
    x: x,
    y: 304,
    size: fontSize + 1,
    font: helveticaFont,
  });
}

function writeTypeOfEntity(fields, person, page, firstLineY) {
    let typeOfEntity = fields['typeOfEntity' + person];
    let middleX = person == 'Buyer' ? 288 : 300;
    if(typeOfEntity == "PF") {
        page.drawLine({
            start: { x: middleX, y: firstLineY },
            end:   { x: middleX + 38, y: firstLineY },
            thickness: 2
          });
    } else {
        page.drawLine({
            start: { x: middleX - 69, y: firstLineY },
            end:   { x: middleX, y: firstLineY },
            thickness: 2
          });
    }
}

function drawPhoneOrFax(phoneOrFax, page, x, y) {
    if(phoneOrFax == "fax") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 14, y: y },
            thickness: 2
          });
    }

    if(phoneOrFax == "phone") {
        page.drawLine({
            start: { x: x + 15, y: y },
            end:   { x: x + 30, y: y },
            thickness: 2
          });
    }
}


function drawCnpOrCif(cnpOrCif, page, x, y) {
    if(cnpOrCif == "cnp") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 30, y: y },
            thickness: 2
          });
    }

    if(cnpOrCif == "cif") {
        page.drawLine({
            start: { x: x + 30, y: y },
            end:   { x: x + 55, y: y },
            thickness: 2
          });
    }
    
}

function drawVillageOrSectorType(villageOrSectorType, page, x, y) {
    // village // sector
    if(villageOrSectorType == "village") {
        page.drawLine({
            start: { x: x + 19, y: y },
            end:   { x: x + 49, y: y },
            thickness: 2
          });
    }

    if(villageOrSectorType == "sector") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 18, y: y },
            thickness: 2
          });
    }
}

function drawCityOrMunicipality(cityOrMunicipality, page, x, y) {
    // city,      municipality,   comuna
    if(cityOrMunicipality == "comuna") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 74, y: y },
            thickness: 2
          });
    }

    if(cityOrMunicipality == "city") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 47, y: y },
            thickness: 2
          });
          page.drawLine({
            start: { x: x + 77,  y: y },
            end:   { x: x + 106, y: y },
            thickness: 2
          });
    }

    if(cityOrMunicipality == "municipality") {
        page.drawLine({
            start: { x: x + 47,  y: y },
            end:   { x: x + 106, y: y },
            thickness: 2
          });
    }
}

function drawIdType(idType, page, x, y) {

    if(idType == "BI") {
        page.drawLine({
            start: { x: x + 18, y: y },
            end:   { x: x + 98, y: y },
            thickness: 2
          });
    }

    if(idType == "CI") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 15, y: y },
            thickness: 2
          });
          page.drawLine({
            start: { x: x + 34, y: y },
            end:   { x: x + 98, y: y },
            thickness: 2
          });
    }

    if(idType == "CIP") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 34, y: y },
            thickness: 2
          });
          page.drawLine({
            start: { x: x + 60, y: y },
            end:   { x: x + 98, y: y },
            thickness: 2
          });
    }

    if(idType == "Pasaport") {
        page.drawLine({
            start: { x: x,      y: y },
            end:   { x: x + 58, y: y },
            thickness: 2
          });
    }
}