// SpeechToText.tsx (Child Component)
import React, { useEffect, useState } from 'react';
import { BsFillStopFill } from 'react-icons/bs';
import { FaMicrophoneAlt } from 'react-icons/fa';
import Styles from "../../styles/Landingpagemodules/Hero.module.css";

interface SpeechToTextProps {
  setInputValue: (value: string) => void;
  isRecording: boolean;
  setIsRecording: (value: boolean) => void;
}

const SpeechToText: React.FC<SpeechToTextProps> = ({
  setInputValue,
  isRecording,
  setIsRecording,
}) => {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    let recognitionInstance: SpeechRecognition | null = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
  
    recognitionInstance.onstart = () => {
      setIsRecording(true);
    };
  
    recognitionInstance.onend = () => {
      setIsRecording(false);
    };
  
    recognitionInstance.onresult = (event) => {
      const result = event.results[event.results.length - 1];
      if (result.isFinal) {
        const transcript = result[0].transcript;
        setInputValue(transcript);
      }
    };
  
    setRecognition(recognitionInstance);
  
    return () => {
      if (recognitionInstance) {
        recognitionInstance.stop();
      }
    };
  }, [setInputValue, setIsRecording]);

  const toggleRecording = () => {
    if (recognition) {
      if (!isRecording) {
        recognition.start();
      } else {
        recognition.stop();
      }
    }
  };

  return (
    <div>
      <button className={Styles.VoiceSearchIconBg} onClick={toggleRecording}>
      {isRecording ? <span className='speaking-waves active'><BsFillStopFill color="#FFFFFF" size={16.48}  /> </span>  :  <FaMicrophoneAlt color="#FFFFFF" size={16.48} />}
      </button>
    </div>
  );
};

export default SpeechToText;



