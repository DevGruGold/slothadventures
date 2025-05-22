
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast'; // Fixed import path
import { Alert, AlertDescription } from '@/components/ui/alert';

const RainforestSounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3); // Default volume at 30%
  const [isVisible, setIsVisible] = useState(true);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [loadingAttempts, setLoadingAttempts] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const errorHandledRef = useRef(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Reset error handling on each mount
    errorHandledRef.current = false;
    
    // Create audio element with 1.fm Brazilian Birds stream
    const audio = new Audio();
    audio.src = 'https://strm112.1.fm/brazilianbirds_mobile_mp3';
    audio.crossOrigin = 'anonymous'; // Important for CORS
    audio.loop = true;
    audio.volume = volume;
    audio.preload = 'auto';
    
    // Add event listener to check when audio is loaded
    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
      errorHandledRef.current = false; // Reset error flag when audio can play
      console.log('Audio stream loaded successfully');
    });
    
    // Improved error handling
    audio.addEventListener('error', (e) => {
      // Prevent multiple error toasts
      if (errorHandledRef.current) return;
      
      console.error('Error loading audio stream:', e);
      errorHandledRef.current = true;
      setAudioLoaded(false);
      
      // Increment attempts counter
      setLoadingAttempts(prev => prev + 1);
      
      // Only show toast if we've had multiple failures
      if (loadingAttempts >= 1) {
        toast({
          title: "Audio Error",
          description: "Could not load the rainforest sounds. Please try again later.",
          variant: "destructive"
        });
      }
    });
    
    audioRef.current = audio;

    // Cleanup function
    return () => {
      audio.pause();
      audio.src = '';
      audio.removeEventListener('canplaythrough', () => {});
      audio.removeEventListener('error', () => {});
      audioRef.current = null;
    };
  }, [loadingAttempts, toast, volume]);
  
  // Separate effect for auto-play to avoid race conditions
  useEffect(() => {
    if (!audioRef.current || !audioLoaded) return;
    
    // Start playing with a delay to ensure better user experience
    const timer = setTimeout(() => {
      if (audioRef.current && audioLoaded && !isPlaying) {
        audioRef.current.play().catch(error => {
          // Browser might block autoplay, handle error silently
          console.log('Autoplay prevented due to browser policy:', error);
          setIsPlaying(false);
          toast({
            title: "Audio Blocked",
            description: "Please click play to hear rainforest sounds",
            duration: 5000,
          });
        });
        setIsPlaying(true);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [audioLoaded, isPlaying, toast]);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error('Error playing audio:', error);
            toast({
              title: "Audio Error",
              description: "Could not play the rainforest sounds. Please try again.",
              variant: "destructive"
            });
          });
      }
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
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
