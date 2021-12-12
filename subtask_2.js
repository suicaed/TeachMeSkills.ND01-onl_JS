const files = ['text.docx', 'index.html', 'document.pdf', 'script.js', 'style.css', 'summary.pdf', 'Harry_Potter.pdf', 'report.pdf']

const pdfFiles = files.filter((file) => file.slice(-4) === '.pdf')
console.log(pdfFiles)