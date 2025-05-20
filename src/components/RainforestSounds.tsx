
import { useState, useEffect, useRef } from 'react';

const RainforestSounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default volume at 30%
  const [isVisible, setIsVisible] = useState(true);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Create audio element
    const audio = new Audio();
    audio.src = '/sounds/rainforest-ambience.mp3';
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';
    
    // Add event listener to check when audio is loaded
    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
      console.log('Audio file loaded successfully');
    });
    
    audio.addEventListener('error', (e) => {
      console.error('Error loading audio file:', e);
      setAudioLoaded(false);
    });
    
    audioRef.current = audio;

    // Start playing with a delay to ensure better user experience
    const timer = setTimeout(() => {
      if (audioLoaded) {
        audio.play().catch(error => {
          // Browser might block autoplay, handle error silently
          console.log('Autoplay prevented due to browser policy:', error);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }, 1500);
    
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [audioLoaded]);
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div className={`fixed left-4 bottom-4 z-30 transition-all duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-20 opacity-60 hover:opacity-100'}`}>
      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-jungle-100">
        <div className="flex items-center gap-3">
          <button 
            onClick={togglePlay}
            className={`p-2 rounded-full ${isPlaying ? 'bg-jungle-500 text-white' : 'bg-gray-200 text-jungle-800'}`}
            aria-label={isPlaying ? "Pause rainforest sounds" : "Play rainforest sounds"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          
          <div className="flex-1">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div className="text-xs font-medium text-jungle-800">
            {isPlaying ? 'Rainforest Sounds' : 'Play Sounds'}
          </div>
          
          <button 
            onClick={toggleVisibility}
            className="p-1 text-gray-500 hover:text-jungle-800"
            aria-label={isVisible ? "Minimize sound controls" : "Expand sound controls"}
          >
            {isVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RainforestSounds;
