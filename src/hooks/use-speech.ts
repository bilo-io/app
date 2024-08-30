import { useRef } from 'react';

export const useSpeech = (): Function => {
  const speechRef = useRef<SpeechSynthesisUtterance>(null);

  const handleReadSummary = (text: string) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      // @ts-ignore
      speechRef.current = utterance;

      // check gender etc. here
      if (true) {
        // @ts-ignore
        utterance.voice = synth
          .getVoices()
          .find((voice) => voice.name.includes('Nicky' as string));
        utterance.lang = 'en';
      }

      console.log(utterance);
      if (synth) {
        synth.cancel();
        synth.speak(utterance);
      }

      // eslint-disable-next-line no-var
      var readInterval = setInterval(() => {
        console.log({ speaking: synth.speaking, voice: utterance.voice });
        if (!synth.speaking) {
          clearInterval(readInterval);
        }
        else {
          console.log('resuming');
          synth.resume();
        }
      }, 14000);
    }
  };

  return handleReadSummary;
};