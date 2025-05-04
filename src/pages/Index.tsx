
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [videoStarted, setVideoStarted] = useState(false);

  const handleStartVideo = () => {
    setVideoStarted(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {!videoStarted ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Приготовьтесь к музыкальному шедевру!</h1>
          <Button 
            onClick={handleStartVideo}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-xl"
          >
            Запустить видео со звуком
          </Button>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center" style={{ aspectRatio: '16/9', maxWidth: '100vw', maxHeight: '100vh' }}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0&showinfo=0&mute=0" 
            title="Rick Astley - Never Gonna Give You Up"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ maxWidth: '100%', maxHeight: '100vh' }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Index;
