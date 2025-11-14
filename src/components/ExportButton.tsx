import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import './ExportButton.css';

const ExportButton: React.FC = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    setIsExporting(true);
    
    const element = document.getElementById('portfolio-content');
    
    if (!element) {
      alert('Content not found');
      setIsExporting(false);
      return;
    }

    const opt = {
      margin: 0,
      filename: 'ProdNet-Portfolio.pdf',
      image: { type: 'jpeg', quality: 0.85 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
      setTimeout(() => {
        setIsExporting(false);
      }, 1000);
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('Failed to export PDF');
      setIsExporting(false);
    }
  };

  return (
    <button 
      className={`export-button ${isExporting ? 'exporting' : ''}`}
      onClick={handleExportPDF}
      disabled={isExporting}
      title="Export as PDF"
    >
      {isExporting ? (
        <>
          <span className="button-icon spinner">⏳</span>
          <span className="button-text">Exporting...</span>
        </>
      ) : (
        <>
          <span className="button-icon">📄</span>
          <span className="button-text">Export PDF</span>
        </>
      )}
    </button>
  );
};

export default ExportButton;
