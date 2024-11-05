import useSpeechRecognition from "./useSpeechRecognition.jsx";

function SpeechRecognitionComponent () {

    const {
        transcript,
        isListening,
        startListening,
        stopListening
    } = useSpeechRecognition();

    return (
        <div>
            <h1>recognition speech in Ukrainian</h1>
            <button  onClick={startListening} disabled={isListening}>start </button>
            <button  onClick={stopListening} disabled={!isListening}>stop </button>
        <p>Recognition text: {transcript}</p>
        </div>
    )
}



export default SpeechRecognitionComponent