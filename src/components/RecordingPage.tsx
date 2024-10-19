import React, { useState } from 'react';
import { Mic, StopCircle } from 'lucide-react';
import { useMemoirContext } from '../contexts/MemoirContext';

const RecordingPage: React.FC = () => {
  const { setIsRecording, setCurrentPage } = useMemoirContext();
  const [transcription, setTranscription] = useState('');

  const startRecording = () => {
    setIsRecording(true);
    // 模拟录音和转录
    setTimeout(() => {
      setTranscription('这是一个模拟的语音转文字结果。在实际应用中，这里会集成真实的语音识别 API。');
      setIsRecording(false);
    }, 3000);
  };

  const saveTranscription = () => {
    setCurrentPage('edit');
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">录制您的回忆</h2>
      <div className="flex justify-center mb-10">
        {!transcription ? (
          <button
            onClick={startRecording}
            className="btn btn-primary flex items-center space-x-4 text-2xl"
          >
            <Mic size={32} />
            <span>开始录音</span>
          </button>
        ) : (
          <button
            onClick={() => setTranscription('')}
            className="btn btn-secondary flex items-center space-x-4 text-2xl"
          >
            <StopCircle size={32} />
            <span>重新录音</span>
          </button>
        )}
      </div>
      {transcription && (
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">转录结果：</h3>
          <p className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-xl leading-relaxed">{transcription}</p>
        </div>
      )}
      {transcription && (
        <div className="flex justify-center">
          <button onClick={saveTranscription} className="btn btn-primary text-2xl">
            保存并编辑回忆
          </button>
        </div>
      )}
    </div>
  );
};

export default RecordingPage;