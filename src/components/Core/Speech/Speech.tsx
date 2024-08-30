import { useAppTheme } from 'hooks';
import React, { useEffect, useState } from 'react';
import FontAwesome from 'react-fontawesome';
import { ReactMic } from 'react-mic';

const SpeechRecognition =
    // @ts-ignore
    window.SpeechRecognition || window.webkitSpeechRecognition;

interface SpeechProps {
    onChange: (text: string) => void
}

export const Speech: React.FC<SpeechProps> = ({
  onChange
}) => {
  // #region HOOKS
  const { theme } = useAppTheme();
  // const inputRef = useRef(null)
  // const { language } = useAppLanguage();;
  // #endregion

  // #region SPEECH
  const [listening, setListening] = useState<boolean>(false);
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (e: any) => {
    const result = e?.results?.[0]?.[0]?.transcript;
    console.log('Speech.result', { e, result });
    setListening(false);
    onChange(result);
  };
  // #endregion SPEECH

  // #region LIFECYCLE
  useEffect(() => {
    if (listening) {
      console.log('start speech recognition');
      recognition.start();
    } else {
      console.log('stop speech recognition');
      recognition.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listening]);
  // #endregion

  return (
    <div className="w-full flex flex-col items-center">
      <ReactMic
        record={listening}
        onStop={(data: any) => {
          // console.log('Speech.onChange', data)
          // onChange(data)
        }}
        visualSetting="frequencyBars"
        strokeColor={theme?.PRIMARY} // sound wave color
        backgroundColor={theme?.APP_BACKGROUND} // background color
        className='w-1/2 my-6'
      />
      <div
        onClick={() => setListening(prevState => !prevState)}
        className="w-6 h-6 m-auto p-4 rounded-full cursor-pointer flex items-center justify-center"
        style={{
          backgroundColor: listening ? '#F00' : '#FFF',

        }}>
        <FontAwesome
          name="microphone"
          style={{
            color: listening ? '#FFF' : '#F00'
          }} />
      </div>
    </div>
  );
};

export default Speech;