const fs = require('fs');

const streamContent = `BT
/F1 24 Tf
50 720 Td
(Bhavy Garg - Resume) Tj
/F1 14 Tf
0 -40 Td
(Software Engineer & Machine Learning Engineer) Tj
0 -25 Td
(Email: bhavygarg7636@gmail.com | Phone: +91 8810517347) Tj
0 -25 Td
(VIT Chennai - B.Tech CSE AI & ML | CGPA: 9.15/10) Tj
0 -40 Td
(Projects: Bluestock, Nifty 100, TruthLens AI, FoodShare, Movie4U, SevaSetu) Tj
0 -25 Td
(Skills: Python, React, Machine Learning, Node.js, SQL, C++, Java) Tj
ET`;

const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${streamContent.length} >>
stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000319 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
590
%%EOF`;

fs.writeFileSync('public/bhavyresume.pdf', pdfContent);
console.log('PDF written successfully!');
