
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Автоматически запускать видео после загрузки страницы
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Фоновое видео */}
      {isPlaying && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe 
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&showinfo=0&mute=${isMuted ? 1 : 0}&loop=1&playlist=dQw4w9WgXcQ`}
            title="Rick Astley - Never Gonna Give You Up"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Полупрозрачный оверлей */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Контент */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-5xl font-bold mb-8 text-white">
            Никогда не сдавайся!
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
            Вы только что стали свидетелем легендарного "Rick Roll" - одного из самых известных интернет-мемов всех времен.
          </p>
          <Button 
            onClick={toggleMusic} 
            className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-6 rounded-full text-xl transition-all duration-300"
          >
            {isMuted ? "Включить музыку 🎵" : "Выключить музыку 🔇"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
