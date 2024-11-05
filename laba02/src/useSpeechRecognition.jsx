import {useState, useEffect} from "react";

function useSpeechRecognition() {
    const [transcript, setTranscript] = useState("");
    const [isListening, setIsListening] = useState(false);


    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

        const recognition = new SpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'uk-UA'

        const handleResult = (event) => {
            const current = event.results[event.results.length - 1];
            if (current.isFinal) {
                setTranscript(transcript => `${transcript} - ${current[0].transcript}`)
            }
        }

        recognition.onresult = handleResult;
        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        if (isListening) {
            recognition.start();
        } else {
            recognition.stop();
        }

        return () => recognition.stop();
    }, [isListening]);



    return {
        transcript,
        isListening,
        startListening: () => {setIsListening(true)},
        stopListening: () => {setIsListening(false)}
    }
}



export default useSpeechRecognition;