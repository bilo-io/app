// WaveformVisualizer.tsx

import { useAppTheme } from 'hooks';
import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WaveformVisualizerProps {
    audioFileUrl: string;
}

export const WaveFormVisualizer: React.FC<WaveformVisualizerProps> = ({ audioFileUrl }) => {
  const waveformRef = useRef<WaveSurfer | null>(null);
  const { theme } = useAppTheme();

  useEffect(() => {
    if (waveformRef.current) {
      waveformRef.current.destroy();
    }

    const wavesurfer = WaveSurfer.create({
      container: '#waveform-container',
      cursorColor: 'white',
      progressColor: 'purple',
      waveColor: `${theme?.PRIMARY}66`,
    });

    wavesurfer.load(audioFileUrl);

    waveformRef.current = wavesurfer;

    return () => {
      if (waveformRef.current) {
        waveformRef.current.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioFileUrl]);

  return (
    <div>
      <div id="waveform-container" style={{
        height: 'auto'
      }} />
    </div>
  );
};

export default WaveFormVisualizer;
