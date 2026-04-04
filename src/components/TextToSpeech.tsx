import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Square } from "lucide-react";
import { getAudioUrl } from "@/lib/audioUtils";

interface TextToSpeechProps {
  text: string;
  audioFile?: string;
  lang?: string;
  labelPlay?: string;
  labelStop?: string;
}

function hasProvidedAudioFile(audioFile?: string): boolean {
  return Boolean(audioFile?.trim());
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
  const audioFailedRef = useRef(false);

  const speakWithBrowserTts = useCallback(() => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices();
    const targetLangPrefix = lang.split("-")[0].toLowerCase();

    let preferredVoice =
      voices.find(
        (v) =>
          v.lang.toLowerCase().startsWith(targetLangPrefix) &&
          v.name.toLowerCase().includes("male") &&
          !v.name.toLowerCase().includes("female")
      ) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(targetLangPrefix));

    if (targetLangPrefix === "en") {
      const maleUkVoice = voices.find(
        (v) =>
          (v.lang === "en-GB" || v.name.includes("UK")) &&
          v.name.toLowerCase().includes("male") &&
          !v.name.toLowerCase().includes("female")
      );
      const knownMaleVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.includes("Daniel") ||
            v.name.includes("David") ||
            v.name.includes("Mark") ||
            v.name.includes("Arthur"))
      );
      const maleEnglishVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          v.name.toLowerCase().includes("male") &&
          !v.name.toLowerCase().includes("female")
      );
      const ukVoice = voices.find(
        (v) =>
          v.lang === "en-GB" ||
          v.name.includes("UK") ||
          v.name.includes("Great Britain")
      );

      if (maleUkVoice) preferredVoice = maleUkVoice;
      else if (knownMaleVoice) preferredVoice = knownMaleVoice;
      else if (maleEnglishVoice) preferredVoice = maleEnglishVoice;
      else if (ukVoice) preferredVoice = ukVoice;
    }

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 0.95;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  }, [text, lang]);

  useEffect(() => {
    audioFailedRef.current = false;
    const path = audioFile?.trim();

    if (!path) {
      audioRef.current = null;
      return () => {
        window.speechSynthesis.cancel();
      };
    }

    const audioUrl = getAudioUrl(path);
    if (!audioUrl) return;

    const audio = new window.Audio(audioUrl);
    audio.onended = () => setIsPlaying(false);
    audio.onerror = () => {
      audioFailedRef.current = true;
      setIsPlaying(false);
    };
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      window.speechSynthesis.cancel();
    };
  }, [audioFile]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      if (hasProvidedAudioFile(audioFile) && audioRef.current && !audioFailedRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } else {
        window.speechSynthesis.cancel();
      }
      setIsPlaying(false);
    } else {
      const useTts =
        !hasProvidedAudioFile(audioFile) || audioFailedRef.current || !audioRef.current;

      if (useTts) {
        speakWithBrowserTts();
        return;
      }

      const el = audioRef.current;
      el.currentTime = 0;
      el.play()
        .then(() => setIsPlaying(true))
        .catch((e) => {
          console.error("Audio playback failed:", e);
          audioFailedRef.current = true;
          speakWithBrowserTts();
        });
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
