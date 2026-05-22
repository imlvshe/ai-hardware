import { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

interface LoginProps {
  onUnlock: (key: string) => void;
}

export default function Login({ onUnlock }: LoginProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      onUnlock(input);
      // Wait a tick to show error if component still mounted (meaning invalid key)
      setTimeout(() => setError(true), 100);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-blue-500/50">
          <Lock className="w-8 h-8" />
        </div>
        
        <h1 className="text-2xl font-semibold text-white mb-2 tracking-tight">内部资料访问</h1>
        <p className="text-slate-400 text-center mb-8 text-sm">
          《AI硬件玩编程》讲义为创智实验室内部课件，请输入访问码解锁。
        </p>

        <form onSubmit={handleSubmit} className="w-full relative">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="输入访问码 (Access Code)"
            className={`w-full bg-slate-950/50 border ${error ? 'border-red-500/50 ring-1 ring-red-500/20' : 'border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'} rounded-xl px-5 py-4 text-white placeholder-slate-500 outline-none transition-all`}
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg p-2 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-sm mt-4 animate-in fade-in slide-in-from-top-1">
            访问码不正确，请重试
          </p>
        )}
      </div>
    </div>
  );
}
