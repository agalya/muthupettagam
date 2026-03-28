import { useState, useEffect, useRef } from "react";
import { Play, Square } from "lucide-react";

interface TextToSpeechProps {
  text: string;
  audioFile?: string;
  lang?: string;
  labelPlay?: string;
  labelStop?: string;
}

const TextToSpeech = ({ 
  text, 
  audioFile,
  lang = "ta-IN",
  labelPlay = "கேட்க",
  labelStop = "நிறுத்து"
}: TextToSpeechProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioFile) {
      const audio = new window.Audio(audioFile);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => setIsPlaying(false);
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      window.speechSynthesis.cancel();
    };
  }, [audioFile]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (audioFile && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      if (audioFile && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => {
          console.error("Audio playback failed:", e);
          setIsPlaying(false);
        });
        setIsPlaying(true);
      } else {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        const voices = window.speechSynthesis.getVoices();
        const targetLangPrefix = lang.split('-')[0].toLowerCase();
        
        let preferredVoice = voices.find(
          (v) => v.lang.toLowerCase().startsWith(targetLangPrefix) && (v.name.toLowerCase().includes('male') && !v.name.toLowerCase().includes('female'))
        ) || voices.find(
          (v) => v.lang.toLowerCase().startsWith(targetLangPrefix)
        );
        
        if (targetLangPrefix === "en") {
          const maleUkVoice = voices.find(v => (v.lang === 'en-GB' || v.name.includes('UK')) && (v.name.toLowerCase().includes('male') && !v.name.toLowerCase().includes('female')));
          const knownMaleVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Daniel') || v.name.includes('David') || v.name.includes('Mark') || v.name.includes('Arthur')));
          const maleEnglishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.toLowerCase().includes('male') && !v.name.toLowerCase().includes('female')));
          const ukVoice = voices.find(v => v.lang === 'en-GB' || v.name.includes('UK') || v.name.includes('Great Britain'));
          
          if (maleUkVoice) preferredVoice = maleUkVoice;
          else if (knownMaleVoice) preferredVoice = knownMaleVoice;
          else if (maleEnglishVoice) preferredVoice = maleEnglishVoice;
          else if (ukVoice) preferredVoice = ukVoice;
        }
        
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }
        
        utterance.lang = lang;
        utterance.rate = 0.85; // Slower, poetic pacing
        utterance.pitch = 0.95; // Slightly deeper, calming tone
        
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    }
  };

  return (
    <button
      onClick={handleTogglePlay}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isPlaying 
          ? "bg-destructive/10 text-destructive hover:bg-destructive/20" 
          : "bg-primary/10 text-primary hover:bg-primary/20"
      }`}
      title={isPlaying ? labelStop : labelPlay}
    >
      {isPlaying ? (
        <>
          <Square className="w-4 h-4" />
          <span>{labelStop}</span>
        </>
      ) : (
        <>
          <Play className="w-4 h-4 ml-0.5" />
          <span>{labelPlay}</span>
        </>
      )}
    </button>
  );
};

export default TextToSpeech;
