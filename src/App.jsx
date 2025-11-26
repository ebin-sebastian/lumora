import { useState } from 'react';
import './App.css'

const artData = [
  {
    id: 1,
    title: "Neon City",
    prompt: "Cyberpunk street, rain, neon lights, 8k, unreal engine 5 render",
    src: "https://placehold.co/600x400/1c1c1e/FFF?text=Neon+City"
  },
  {
    id: 2,
    title: "Retro Portrait",
    prompt: "Oil painting style, vintage colors, portrait of a woman, 1950s aesthetic",
    src: "https://placehold.co/600x800/1c1c1e/FFF?text=Retro+Portrait"
  },
  {
    id: 3,
    title: "Abstract Flow",
    prompt: "Liquid metal, flowing shapes, chrome, 3d render, abstract background",
    src: "https://placehold.co/600x500/1c1c1e/FFF?text=Abstract+Flow"
  },
  {
    id: 4,
    title: "Space Voyager",
    prompt: "Astronaut floating in deep space, nebula background, digital art",
    src: "https://placehold.co/500x500/1c1c1e/FFF?text=Space+Voyager"
  },{
    id: 5,
    title: "Space Dik",
    prompt: "Astronaut floating in deep space, nebula background, digital art",
    src: "https://placehold.co/500x500/1c1c1e/FFF?text=Space+Dik"
  }
];

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  const copyPrompt = () =>{
    if (selectedImg) {
      navigator.clipboard.writeText(selectedImg.prompt);
      alert("Prompt copied to clipboard!");
    }
  }

  return (
   <div className="app-container">
      <header>
        <h1>Lumora</h1>
        <p className="subtitle">Glow Up Your Ideas: AI Art Downloads & Prompt Blueprints.</p>
      </header>

      {/* DYNAMIC GALLERY */}
      <section className="gallery">
        {artData.map((art) => (
          <div key={art.id} className="card" onClick ={()=> setSelectedImg(art)} > 
            <img src={art.src} alt={art.title} className="card-image" />
            <div className="card-info">
              <div className="card-title">{art.title}</div>
              <div className="card-prompt">{art.prompt}</div>
            </div>
          </div>
        ))}
      </section>

      {selectedImg && (
        <div className="lightbox active" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImg(null)}>&times;</button>
            
            <img src={selectedImg.src} alt={selectedImg.title} />
            
            <div className="lb-details">
              <h3>{selectedImg.title}</h3>
              <p>{selectedImg.prompt}</p>
              <div className='action-buttons'>
                <button className='btn primary' onClick={copyPrompt}>
                  Copy Prompt
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default App
