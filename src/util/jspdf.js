// PdfGenerator.js
import React from 'react';
import jsPDF from 'jspdf';

const PdfGenerator = ({ userId, password }) => {
  const generatePdf = () => {
    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.text(`User ID: ${userId}`, 20, 20);
    pdf.text(`Password: ${password}`, 20, 30);

    // Save the PDF
    pdf.save('user_credentials.pdf');
  };

  return (
    <div>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
