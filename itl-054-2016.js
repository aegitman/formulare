import { numarInLitere } from "./utile.js";

const {PDFDocument, rgb, StandardFonts } = PDFLib;

export async function modifyPdf() {
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
  writePerson(firstPage, customFont, fontSize, 675);
  writePerson(firstPage, customFont, fontSize, 558);

  writeVehicle(firstPage, customFont, fontSize, 431);

  writePrice(firstPage, customFont, fontSize, 368);

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Trigger the browser to download the PDF document
  download(pdfBytes, "contract-itl-054-2016.pdf", "application/pdf");
}

function writePrice(firstPage, helveticaFont, fontSize, firstLineY) {
  firstPage.drawText("123456", {
    x: 140,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText(numarInLitere(123456), {
    x: 280,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });
}

function writeVehicle(firstPage, helveticaFont, fontSize, firstLineY) {
  firstPage.drawText("Volkwagen", {
    x: 160,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("Passat", {
    x: 293,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("ABCDEFGHIJKLMNOP", {
    x: 440,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("ABCDEFGHI", {
    x: 100,
    y: firstLineY - 11,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("2450", {
    x: 260,
    y: firstLineY - 11,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("2,5", {
    x: 540,
    y: firstLineY - 11,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("BT-24-MMA", {
    x: 215,
    y: firstLineY - 23,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("26 / Jun / 2026", {
    x: 480,
    y: firstLineY - 23,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("12312312", {
    x: 215,
    y: firstLineY - 34,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("2002", {
    x: 355,
    y: firstLineY - 34,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText(" IV", {
    x: 465,
    y: firstLineY - 34,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("27 / Mar / 2023", {
    x: 50,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("Conform actului de vanzare cumparare", {
    x: 195,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });
}

function writePerson(firstPage, helveticaFont, fontSize, firstLineY) {
  // first line
  firstPage.drawText("GITMAN Alexandru Eduard", {
    x: 340,
    y: firstLineY,
    size: fontSize,
    font: helveticaFont,
  });

  // second line
  firstPage.drawText("Botosani", {
    x: 278,
    y: firstLineY - 11,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("710147", {
    x: 416,
    y: firstLineY - 11,
    size: fontSize,
    font: helveticaFont,
  });

  // third line
  firstPage.drawText("Dorohoi", {
    x: 45,
    y: firstLineY - 22,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("Mileaanca", {
    x: 219,
    y: firstLineY - 22,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("Aleea Teodor Callimachi", {
    x: 330,
    y: firstLineY - 22,
    size: fontSize,
    font: helveticaFont,
  });

  firstPage.drawText("2342", {
    x: 550,
    y: firstLineY - 22,
    size: fontSize,
    font: helveticaFont,
  });

  // fourth line
  // block
  firstPage.drawText("21 B", {
    x: 60,
    y: firstLineY - 33,
    size: fontSize,
    font: helveticaFont,
  });
  // scara
  firstPage.drawText("B 12", {
    x: 120,
    y: firstLineY - 33,
    size: fontSize,
    font: helveticaFont,
  });
  // etaj
  firstPage.drawText("21", {
    x: 170,
    y: firstLineY - 33,
    size: fontSize,
    font: helveticaFont,
  });
  // apartament
  firstPage.drawText("12", {
    x: 220,
    y: firstLineY - 33,
    size: fontSize,
    font: helveticaFont,
  });

  // id seria
  firstPage.drawText("XT", {
    x: 480,
    y: firstLineY - 33,
    size: fontSize,
    font: helveticaFont,
  });
  // id numarul
  firstPage.drawText("123456", {
    x: 535,
    y: firstLineY - 33,
    size: fontSize,
    font: helveticaFont,
  });

  // fifth line
  // cnp
  firstPage.drawText("1234567890123", {
    x: 100,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });

  // telefon fax
  firstPage.drawText("+40 123 456 789", {
    x: 265,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });

  // email
  firstPage.drawText("alexandru.gitman@gmail.com", {
    x: 380,
    y: firstLineY - 45,
    size: fontSize,
    font: helveticaFont,
  });

  // sixth line
  // domiciliul fiscal
  firstPage.drawText("Botosani", {
    x: 310,
    y: firstLineY - 56,
    size: fontSize,
    font: helveticaFont,
  });

  // codul postal
  firstPage.drawText("710147", {
    x: 530,
    y: firstLineY - 56,
    size: fontSize,
    font: helveticaFont,
  });

  // seventh line
  // Municipiul
  firstPage.drawText("Botosani", {
    x: 150,
    y: firstLineY - 67,
    size: fontSize,
    font: helveticaFont,
  });

  // Sectorul
  firstPage.drawText("Sectorul 1", {
    x: 350,
    y: firstLineY - 67,
    size: fontSize,
    font: helveticaFont,
  });

  // adresa
  firstPage.drawText("Aleea teodor callimachi", {
    x: 480,
    y: firstLineY - 67,
    size: fontSize,
    font: helveticaFont,
  });

  // eighth line
  // adresa continuare
  firstPage.drawText("Aleea teodor callimachi", {
    x: 40,
    y: firstLineY - 79,
    size: fontSize,
    font: helveticaFont,
  });

  // numar
  firstPage.drawText("1234", {
    x: 140,
    y: firstLineY - 79,
    size: fontSize,
    font: helveticaFont,
  });

  // bloc
  firstPage.drawText("12 B", {
    x: 178,
    y: firstLineY - 79,
    size: fontSize,
    font: helveticaFont,
  });

  // scara
  firstPage.drawText("B 21", {
    x: 220,
    y: firstLineY - 79,
    size: fontSize,
    font: helveticaFont,
  });

  // etaj
  firstPage.drawText("12", {
    x: 260,
    y: firstLineY - 78,
    size: fontSize,
    font: helveticaFont,
  });

  // apartament
  firstPage.drawText("90", {
    x: 300,
    y: firstLineY - 79,
    size: fontSize,
    font: helveticaFont,
  });

  // reprezentant legal
  firstPage.drawText("Gitman alexandru eduard", {
    x: 400,
    y: firstLineY - 79,
    size: fontSize,
    font: helveticaFont,
  });

  // ninth line
  // seria act identificare
  firstPage.drawText("XT", {
    x: 230,
    y: firstLineY - 91,
    size: fontSize,
    font: helveticaFont,
  });

  // numar act identificare
  firstPage.drawText("123456", {
    x: 265,
    y: firstLineY - 91,
    size: fontSize,
    font: helveticaFont,
  });

  // CIF
  firstPage.drawText("12321313123", {
    x: 330,
    y: firstLineY - 91,
    size: fontSize,
    font: helveticaFont,
  });

  // Telefon
  firstPage.drawText("+40 123 456 789", {
    x: 480,
    y: firstLineY - 91,
    size: fontSize,
    font: helveticaFont,
  });

  // email
  firstPage.drawText("alexandru.gitman@gmail.com", {
    x: 70,
    y: firstLineY - 103,
    size: fontSize,
    font: helveticaFont,
  });

  // calitatea reprezentantului legal
  firstPage.drawText("Reprezentant legal", {
    x: 260,
    y: firstLineY - 103,
    size: fontSize,
    font: helveticaFont,
  });
}