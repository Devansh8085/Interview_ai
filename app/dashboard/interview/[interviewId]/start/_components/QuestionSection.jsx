import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const [voices, setVoices] = useState([]);

  // Load available voices when the component mounts
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Function to handle text-to-speech
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel(); // Stop any ongoing speech

      if (!text) return; // Prevent errors if the text is empty or undefined

      const speech = new SpeechSynthesisUtterance(text);
      
      // Set a default voice (Google's voice preferred)
      speech.voice = voices.find((v) => v.name.includes("Google")) || voices[0];

      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text to speech.");
    }
  };


   // Automatically speak when the active question changes
   useEffect(() => {
    if (mockInterviewQuestion?.[activeQuestionIndex]?.Question) {
      textToSpeech(mockInterviewQuestion[activeQuestionIndex].Question);
    }
  }, [activeQuestionIndex, mockInterviewQuestion]);

  return (
    mockInterviewQuestion && (
      <div className="bg-teal-50 border-2 border-teal-100 rounded-xl shadow-md p-6 space-y-4">
        {/* Question Number Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {mockInterviewQuestion?.map((question, index) => (
            <h2
              key={index}
              className={`p-2 rounded-full text-center text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeQuestionIndex === index
                  ? "bg-teal-800 text-white scale-105"
                  : "bg-teal-100 text-teal-800 hover:bg-teal-200"
              }`}
            >
              Question #{index + 1}
            </h2>
          ))}
        </div>

        {/* Current Question */}
        <div className="bg-white border border-teal-100 rounded-lg p-4 shadow-sm">
          <h2 className="text-teal-900 text-md md:text-lg font-semibold">
            {mockInterviewQuestion[activeQuestionIndex]?.Question || "No question available"}
          </h2>
        </div>

        {/* Text-to-Speech Icon */}
        <div className="flex items-center justify-start">
          <Volume2
            className="text-teal-700 hover:text-teal-900 cursor-pointer transition-colors duration-300 hover:scale-110"
            size={24}
            onClick={() =>
              textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.Question)
            }
          />
        </div>

        {/* Note Section */}
        <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2">
            <Lightbulb className="text-teal-800 w-5 h-5" />
            <strong className="text-teal-900 text-sm">Note:</strong>
          </div>
          <p className="text-xs text-teal-700">
            {process.env.NEXT_PUBLIC_QUESTION_NOTE || "No note available"}
          </p>
        </div>
      </div>
    )
  );
};

export default QuestionSection;
