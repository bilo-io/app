import { useAppTheme } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import FontAwesome from 'react-fontawesome';

interface AudioPlayerProps {
    data: string;
    autoPlay?: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ data, autoPlay }) => {
  const { theme } = useAppTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error('Error playing audio:', error);
          });
      } else {
        audioRef.current.pause();
      }
    }
  }, [data, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  useEffect(() => {
    if (data && audioRef.current !== null) {
      audioRef.current.src = data;
      audioRef.current.load();
      setIsPlaying(autoPlay as boolean);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  return (
    <div className="flex flex-row items-center">
      <button
        onClick={togglePlay}
        style={{ border: `1px solid ${theme?.TEXT}88` }}
        className="px-2 py-0 rounded-full flex justify-center items-center"
      >
        {isPlaying
          ? <FontAwesome
            name="pause"
            style={{
              color: `${theme?.TEXT}88`,
              fontSize: '0.7rem',
              marginLeft: '0.1rem',
              marginRight: '0.1rem',
            }} />
          : <FontAwesome
            name="play"
            style={{
              color: `${theme?.TEXT}88`,
              fontSize: '0.7rem',
              marginLeft: '0.2rem',
            }}
          />
        }
      </button>
      <button onClick={toggleVolumeSlider}>
        <FontAwesome name="volume" />
      </button>
      {showVolumeSlider && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      )}
      <audio ref={audioRef} controls={false} autoPlay={autoPlay} />
    </div>
  );
};

export default AudioPlayer;
