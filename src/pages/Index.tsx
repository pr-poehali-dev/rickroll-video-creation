
import React from 'react';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center" style={{ aspectRatio: '16/9', maxWidth: '100vw' }}>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0&showinfo=0&mute=0" 
          title="Rick Astley - Never Gonna Give You Up"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: '100%', height: '100vh' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Index;
