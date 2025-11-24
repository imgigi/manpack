import React, { useEffect, useRef, useState } from 'react';
import { X, Mic, PhoneOff, MicOff, Loader2 } from 'lucide-react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { createPcmBlob, base64Decode, decodeAudioData } from '../utils/audioUtils';

interface LiveDemoModalProps {
  onClose: () => void;
}

const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ onClose }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [audioPermission, setAudioPermission] = useState(false);

  // Audio Context Refs
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const inputNodeRef = useRef<GainNode | null>(null);
  const outputNodeRef = useRef<GainNode | null>(null);
  const sessionRef = useRef<any>(null); // To hold the active session
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Initialize Connection
  const startCall = async () => {
    try {
      setError(null);
      // 1. Request Mic Permissions first
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioPermission(true);

      // 2. Setup Audio Contexts
      const InputContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const inputCtx = new InputContextClass({ sampleRate: 16000 });
      const outputCtx = new InputContextClass({ sampleRate: 24000 });
      
      inputAudioContextRef.current = inputCtx;
      outputAudioContextRef.current = outputCtx;

      const inputNode = inputCtx.createGain();
      const outputNode = outputCtx.createGain();
      inputNodeRef.current = inputNode;
      outputNodeRef.current = outputNode;
      outputNode.connect(outputCtx.destination);

      // 3. Initialize Gemini
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }
      const ai = new GoogleGenAI({ apiKey });

      // 4. Connect
      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            console.log("Connection Opened");
            setIsConnected(true);
            
            // Setup Input Stream
            const source = inputCtx.createMediaStreamSource(stream);
            // Using ScriptProcessor as per guidelines (though deprecated in modern web, it's used in the examples)
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createPcmBlob(inputData);
              sessionPromise.then(session => {
                  session.sendRealtimeInput({ media: pcmBlob });
              });
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            // Handle Audio Output
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && outputAudioContextRef.current && outputNodeRef.current) {
                setIsTalking(true);
                const ctx = outputAudioContextRef.current;
                
                // Sync start time
                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);

                try {
                  const audioBytes = base64Decode(base64Audio);
                  const audioBuffer = await decodeAudioData(audioBytes, ctx);
                  
                  const source = ctx.createBufferSource();
                  source.buffer = audioBuffer;
                  source.connect(outputNodeRef.current);
                  
                  source.addEventListener('ended', () => {
                      sourcesRef.current.delete(source);
                      if (sourcesRef.current.size === 0) {
                          setIsTalking(false);
                      }
                  });

                  source.start(nextStartTimeRef.current);
                  nextStartTimeRef.current += audioBuffer.duration;
                  sourcesRef.current.add(source);
                } catch (e) {
                   console.error("Error decoding audio", e);
                }
            }

            // Handle Interruption
            if (message.serverContent?.interrupted) {
                sourcesRef.current.forEach(source => source.stop());
                sourcesRef.current.clear();
                nextStartTimeRef.current = 0;
                setIsTalking(false);
            }
          },
          onclose: () => {
             console.log("Connection Closed");
             setIsConnected(false);
          },
          onerror: (err) => {
             console.error("Connection Error", err);
             setError("Connection failed. Please try again.");
             setIsConnected(false);
          }
        },
        config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } 
            },
            systemInstruction: "You are Crystal, a professional and friendly sales representative for Manpack, an AI cold calling solution. Speak with a warm, slightly localized Singaporean English flair (professional, but natural). Keep your responses concise and sales-oriented. Your goal is to book a meeting.",
        }
      });
      
      sessionRef.current = sessionPromise;

    } catch (err: any) {
       console.error(err);
       setError(err.message || "Failed to start call");
    }
  };

  const endCall = () => {
      // Close session
      if (sessionRef.current) {
         sessionRef.current.then((session: any) => session.close());
      }
      // Close Audio Contexts
      inputAudioContextRef.current?.close();
      outputAudioContextRef.current?.close();
      
      setIsConnected(false);
      onClose();
  };

  // Cleanup on unmount
  useEffect(() => {
     return () => {
         if (isConnected) {
             endCall();
         }
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={endCall}></div>
      
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex justify-between items-center text-white">
          <div>
              <h3 className="font-bold text-lg">Live Demo</h3>
              <p className="text-white/70 text-sm">Experience the AI Voice</p>
          </div>
          <button onClick={endCall} className="hover:bg-white/20 p-2 rounded-full transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col items-center gap-8 min-h-[400px] justify-center">
            
            {/* Avatar Visualization */}
            <div className="relative">
                {/* Ripple Effect when talking */}
                {isTalking && (
                    <>
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping delay-75"></div>
                    </>
                )}
                
                <div className={`w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden relative z-10 transition-transform ${isTalking ? 'scale-105' : 'scale-100'}`}>
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
                        alt="Crystal" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md z-20 whitespace-nowrap">
                   <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                       <span className="text-xs font-bold text-gray-700">Crystal</span>
                   </div>
                </div>
            </div>

            {/* Status Text */}
            <div className="text-center space-y-2">
                {!isConnected ? (
                   <p className="text-gray-600">Ready to start the call?</p>
                ) : (
                   <div className="flex flex-col items-center">
                       <p className="text-gray-800 font-semibold text-lg">{isTalking ? "Crystal is speaking..." : "Listening..."}</p>
                       <p className="text-gray-500 text-sm">Say "Hello" to begin</p>
                   </div>
                )}
                {error && <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</p>}
            </div>

            {/* Controls */}
            <div className="w-full flex justify-center gap-6">
               {!isConnected ? (
                   <button 
                     onClick={startCall}
                     className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
                   >
                     <Mic className="w-6 h-6" />
                     Start Call
                   </button>
               ) : (
                   <button 
                     onClick={endCall}
                     className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-1"
                   >
                     <PhoneOff className="w-6 h-6" />
                     End Call
                   </button>
               )}
            </div>
            
            <p className="text-xs text-gray-400 max-w-xs text-center">
               Microphone permission required. Demo uses Gemini 2.5 Live API.
            </p>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoModal;