
import { useState, useEffect } from 'react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Автоматически запускать видео после загрузки страницы
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Рикролл видео на весь экран */}
      {isPlaying && (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
          <iframe 
            className="absolute w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&loop=1&playlist=dQw4w9WgXcQ"
            title="Rick Astley - Never Gonna Give You Up"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Index;
