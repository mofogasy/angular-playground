// since this is the default export, it can be imported giving any name -> see index.js
export default function somePrintFunction() {
    console.log('Printing...');
    cosnole.log('Typo!');   //enable source maps to get a readable stack trace
}
