import React from 'react'

const Header = ({ onSearch }) => {
  return (
    <header>
        <h1>Lumora</h1>
        <p className="subtitle">
          Glow Up Your Ideas: AI Art Downloads & Prompt Blueprints.
        </p>
        <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input 
          type="text" 
          placeholder="Search for 'Space', 'Neon'..." 
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  )
}

export default Header