const { PDFDocument, rgb, StandardFonts } = PDFLib;

import {fieldsPlacement} from './itl-016-placeholders.js';

export async function radiere(fieldsMap) {
    // Fetch an existing PDF document
    const url = "ITL-016.pdf";
    const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
    );

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Înregistrează fontkit
    pdfDoc.registerFontkit(fontkit);

    // Încarcă fontul extern
    const fontBytes = await fetch('fonts/Roboto-Regular.ttf').then(res => res.arrayBuffer());

    // Înregistrează fontul
    const customFont = await pdfDoc.embedFont(fontBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    const fontSize = 8;

    writeOnPDF(fieldsMap, firstPage, customFont, fontSize);

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Trigger the browser to download the PDF document
    download(pdfBytes, "declaratie-scoatere-din-evidență.pdf", "application/pdf");
}

function writeOnPDF(fields, page, font, fontSize) {

    fieldsPlacement.forEach(field => {

        if(field.type == "line") {
            field.values.forEach(value => {
                if(value.value == fields[field.field]) {
                    page.drawLine({
                        start: { x: value.x, y: field.y },
                        end: { x: value.final, y: field.y },
                        thickness: 2});
                }
            })
        }

        page.drawText(fields[field.field], {
            x: field.x,
            y: field.y,
            size: fontSize,
            font: font,
        });
    });
}

