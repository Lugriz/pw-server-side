import { DocumentDefinition } from 'pdfmake-wrapper/server';
import Pdfmake from 'pdfmake';
import fs from 'fs';

const pdf = new Pdfmake({
    openSans: {
        normal: `${__dirname}/fonts/OpenSans-Regular.ttf`,
        bold: `${__dirname}/fonts/OpenSans-Bold.ttf`,
        italics: `${__dirname}/fonts/OpenSans-Italic.ttf`,
        bolditalics: `${__dirname}/fonts/OpenSans-BoldItalic.ttf`
    }
});

DocumentDefinition.useFont('openSans');

const doc = new DocumentDefinition();

doc.add('Hello!');

const pdfDoc = pdf.createPdfKitDocument(doc.getDefinition());
pdfDoc.pipe(fs.createWriteStream('document.pdf'));
pdfDoc.end();