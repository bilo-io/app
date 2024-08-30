// VideoPlayer.tsx

import React, { useRef, useState } from 'react';
import './VideoPlayer.scss';
import FontAwesome from 'react-fontawesome';
import { formatDuration } from '@vision/core';

interface VideoPlayerProps {
    videoUrl: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [videoTime, setVideoTime] = useState<number>(0);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [isHovered, setHovered] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const calculatedProgress = (currentTime / duration) * 100;

      setVideoTime(currentTime);
      setVideoDuration(duration);
      setProgress(calculatedProgress);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const newPosition = (clickPosition / progressBarWidth) * 100;
      videoRef.current.currentTime =
                (newPosition / 100) * videoRef.current.duration;
    }
  };

  const handleProgressBarHover = () => {
    setHovered(true);
  };

  const handleProgressBarLeave = () => {
    setHovered(false);
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="absolute inset-0 flex items-center justify-center" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-75">
        <div className="flex items-center justify-between">
          <FontAwesome
            name={isPlaying ? 'pause' : 'play'}
            onClick={handlePlayPause}
            style={{ color: '#FFF' }}
          />
          <div className="text-white">{progress.toFixed(2)}%</div>
          <div className="text-white">
            {
              videoTime && videoDuration
                ? formatDuration?.(videoTime, videoDuration)
                : null
            }
          </div>

        </div>
        <div
          className={`h-${isHovered ? '4' : '2'} bg-gray-600 mt-2 cursor-pointer relative`}
          onClick={handleProgressBarClick}
          onMouseEnter={handleProgressBarHover}
          onMouseLeave={handleProgressBarLeave}
        >
          <div
            className={'h-full bg-blue-500'}
            style={{ width: `${progress}%` }}
          />
          <div
            className={`absolute -left-2 rounded-full bg-blue-400 ${isHovered ? 'bg-white -top-1 h-6 w-6' : 'h-4 w-4 -top-1'}`}
            style={{ left: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
