
import { useEffect } from 'react';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Рикролл видео на весь экран */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&showinfo=0&loop=1&playlist=dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Index;
