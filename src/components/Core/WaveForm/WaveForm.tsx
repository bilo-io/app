import { useAppTheme } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import WaveSurfer from 'wavesurfer.js';

// @ts-ignore
const formWaveSurferOptions = ref => ({
  barRadius: 1,
  barWidth: 0,
  container: ref,
  cursorColor: '#0067FF',
  height: 100,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true,
  progressColor: '#0067FF',
  responsive: true,
  waveColor: '#aaaaaa'
});

export const WaveForm = ({ url }: { url: string }) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const { theme } = useAppTheme();

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    // @ts-ignore
    wavesurfer.current = WaveSurfer.create(options);

    // @ts-ignore
    wavesurfer.current.load(url);

    // @ts-ignore
    wavesurfer.current.on('ready', () => {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        // @ts-ignore
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    // @ts-ignore
    return () => wavesurfer.current.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, volume]);

  const handlePlayPause = () => {
    setPlay(!playing);
    // @ts-ignore
    wavesurfer.current.playPause();
  };

  // @ts-ignore
  // const onVolumeChange = e => {
  //   const { target } = e;
  //   const newVolume = +target.value;

  //   if (newVolume) {
  //     setVolume(newVolume);
  //     // @ts-ignore
  //     wavesurfer.current.setVolume(newVolume || 1);
  //   }
  // };

  return (
    <div className="relative flex flex-row items-center">

      <div className="w-1/12">
        <div onClick={handlePlayPause}>
          <div className="mx-8 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer" style={{
            backgroundColor: playing ? theme?.TEXT + '33' : theme?.PRIMARY
          }}>
            {!playing
              ? <FontAwesome name="play" style={{ color: '#FFFFFF', fontSize: '0.8rem' }} />
              : <FontAwesome name="pause" style={{ color: '#FFFFFF', fontSize: '0.8rem' }} />
            }
          </div>
        </div>
        {/* <input
                    type="range"
                    id="volume"
                    name="volume"
                    // waveSurfer recognize value of `0` same as `1`
                    //  so we need to set some zero-ish value for silence
                    min="0.01"
                    max="1"
                    step=".025"
                    onChange={onVolumeChange}
                    defaultValue={volume}
                />
                <label htmlFor="volume">Volume</label> */}
      </div>
      <div id="waveform" ref={waveformRef} className={'w-11/12'} />
    </div>
  );
};

export default WaveForm;