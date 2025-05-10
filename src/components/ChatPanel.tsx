import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  ArrowLeft,
  Image,
  ThumbsUp,
  ThumbsDown,
  Settings,
  Mic,
  Loader2,
} from "lucide-react";
import ChatMessage from "./ChatMessage";
import { callHuggingFace } from "../lib/huggingface";

interface ChatPanelProps {
  onBackClick: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onBackClick }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Got any creative ideas for a 6-year old's birthday?",
      isUser: true,
      timestamp: "9:35 AM",
    },
    {
      id: 2,
      text: "Of course! Here are some creative ideas for a 6-year old's birthday:\n\n1. Outdoor Adventure Party: Organize a scavenger hunt or treasure hunt in a nearby park or garden.\n\n2. Art Party: Set up an art station where the children can create their own masterpieces using materials such as paints, brushes, and canvases, and let their creativity flow.",
      isUser: false,
      timestamp: "9:36 AM",
    },
    { id: 3, text: "Thank you 💜", isUser: true, timestamp: "9:38 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: newMessage,
        isUser: true,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage("");
      setIsGenerating(true);

      try {
        const response = await callHuggingFace("text-generation", newMessage);
        
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: response.generated_text || "I couldn't generate a response. Please try again.",
          isUser: false,
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        }]);
      } catch (error) {
        console.error("Error generating response:", error);
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "I apologize, but I encountered an error while processing your request. Please try again.",
          isUser: false,
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        }]);
      } finally {
        setIsGenerating(false);
      }
    }
  };

  // Speech Recognition setup
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      setNewMessage(finalTranscript + interimTranscript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error", event.error);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleVoiceInput = () => {
    if (recognitionRef.current) {
      setIsRecording(true);
      recognitionRef.current.start();
    } else {
      alert("Voice recognition not supported in this browser.");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type.startsWith("image/")) {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: `📎 Analyzing image: ${file.name}`,
        isUser: true,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      }]);

      try {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const base64Image = event.target?.result as string;
          const response = await callHuggingFace("image-classification", base64Image);
          
          setMessages(prev => [...prev, {
            id: prev.length + 1,
            text: `I analyzed the image and found: ${JSON.stringify(response, null, 2)}`,
            isUser: false,
            timestamp: new Date().toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            }),
          }]);
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("Error analyzing image:", error);
      }
    } else {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: `📎 Uploaded file: ${file.name}`,
        isUser: true,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      }]);
    }
  };

  return (
    <div className="flex h-full bg-[#0c0920] text-white animate-fadeIn">
      <div className="flex-1 flex flex-col max-w-5xl mx-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#1d1d42]">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackClick}
              className="p-2 rounded-lg hover:bg-[#1d1d42] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <div>
              <h2 className="text-xl font-semibold">Miki bot</h2>
              <span className="text-gray-400">AI Assistant</span>
            </div>
          </div>
          <button className="p-2 rounded-lg hover:bg-[#1d1d42] transition-colors">
            <Settings size={24} className="text-gray-400" />
          </button>
        </div>

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                text={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            {isGenerating && (
              <div className="flex items-center gap-2 text-purple-400 mb-4">
                <Loader2 className="animate-spin" size={18} />
                <span>Generating response...</span>
              </div>
            )}
            {!messages[messages.length - 1].isUser && (
              <div className="flex gap-2 mb-6">
                <button className="p-3 rounded-lg bg-[#2d2d50] hover:bg-[#393975] transition-colors">
                  <ThumbsUp size={20} className="text-gray-400" />
                </button>
                <button className="p-3 rounded-lg bg-[#2d2d50] hover:bg-[#393975] transition-colors">
                  <ThumbsDown size={20} className="text-gray-400" />
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="p-6 border-t border-[#1d1d42]">
          <div className="max-w-3xl mx-auto flex items-center gap-3 p-2 bg-[#1a1a2e] rounded-lg">
            <button
              onClick={handleVoiceInput}
              className={`p-3 text-gray-400 transition-colors relative ${
                isRecording
                  ? "text-red-500 animate-pulse"
                  : "hover:text-gray-300"
              }`}
            >
              <Mic size={20} />
              {isRecording && (
                <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
              )}
            </button>

            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Send a message"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
            />
            <span className="relative">
              <input
                type="file"
                id="file-upload"
                style={{ display: "none" }}
                onChange={handleFileUpload}
                accept="image/*, .pdf, .zip"
              />
              <label
                htmlFor="file-upload"
                className="p-1 rounded-lg text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
              >
                <Image size={20} />
              </label>
            </span>
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isGenerating}
              className={`p-3 rounded-lg ${
                newMessage.trim() && !isGenerating
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-[#2d2d50] text-gray-500"
              } transition-colors`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;