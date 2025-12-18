import { useState } from "react";
import "./App.css";
import ImageCard from "./components/ImageCard.jsx";
import Lightbox from "./components/Lightbox.jsx";
import Header from "./components/Header.jsx";

const artData = [
  {
    id: 1,
    title: "Portrait Study",
    prompt: "Cinematic portrait of a woman, dramatic lighting, 8k, photorealistic",
    src: "/art/women.jpg",
  },
  {
    id: 2,
    title: "Innocence",
    prompt: "A child holding a golden retriever puppy, sunlight, soft bokeh background, warmth",
    src: "/art/child-with-puppy.jpg",
  },
  {
    id: 3,
    title: "Battle Ready",
    prompt: "Warrior woman in futuristic armor, neon accents, cybernetic details, sci-fi concept art",
    src: "/art/armor-women.png",
  },
  {
    id: 4,
    title: "Serenity",
    prompt: "Lush forest landscape, waterfall, misty mountains, nature photography style",
    src: "/art/nature.jpg",
  },
  {
    id: 5,
    title: "Nightfall",
    prompt: "Starry night sky over a city, long exposure, glowing lights, midnight blue palette",
    src: "/art/night.jpg",
  },
  {
    id: 6,
    title: "The Scholar",
    prompt: "Student studying in a magical library, floating books, candle light, hogwarts atmosphere",
    src: "/art/student.jpg",
  },
];

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArt = artData.filter((art) => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    art.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      
      <Header onSearch={setSearchQuery}/>
      {/* DYNAMIC GALLERY */}
      <section className="gallery">
        {filteredArt.map((art, index) => (
          <ImageCard 
            key={art.id} 
            art={art} 
            index={index}
            onClick={() => setSelectedImg(art)} 
          />
        ))}
      </section>

      {selectedImg && (
        <Lightbox
          selectedImg={selectedImg}
          onClose={() => setSelectedImg(null)}
        />
      )}
    </div>
  );
}

export default App;
