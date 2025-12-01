import React from 'react'

const Lightbox = ({selectedImg, onClose}) => {

    const copyPrompt = () =>{
    if (selectedImg) {
      navigator.clipboard.writeText(selectedImg.prompt);
      alert("Prompt copied to clipboard!");
    }
  }

  const downloadImage = () => {
    if (selectedImg) {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = selectedImg.src;
      // Name the file based on the art title
      link.download = `AI-Art-${selectedImg.title.replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  
  return (
    <div className="lightbox active" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <img src={selectedImg.src} alt={selectedImg.title} />
        
        <div className="lb-details">
          <h3>{selectedImg.title}</h3>
          <p>{selectedImg.prompt}</p>
          
          <div className="action-buttons">
            <button className="btn primary" onClick={copyPrompt}>
              Copy Prompt
            </button>
            <button className="btn secondary" onClick={downloadImage}>
              Download Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lightbox