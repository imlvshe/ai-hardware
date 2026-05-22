import { Cpu, Code2, Wifi } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[100px] opacity-50" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          创智实验室 (SparkMinds) 内部讲义
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI 硬件</span>玩编程
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          拥抱全新的 Vibe Coding 范式，通过自然语言操控 AI，结合 K10 智能硬件，体验编程的无限可能。无需深厚代码功底，用想象力创造应用。
        </p>
        
        <div className="flex items-center gap-4 text-slate-300">
          <div className="flex items-center gap-2 bg-slate-800/40 px-4 py-2 rounded-lg border border-slate-700/50">
            <Cpu className="w-5 h-5 text-blue-400" />
            <span>行空板 K10</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/40 px-4 py-2 rounded-lg border border-slate-700/50">
            <Code2 className="w-5 h-5 text-pink-400" />
            <span>Trae IDE</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/40 px-4 py-2 rounded-lg border border-slate-700/50">
            <Wifi className="w-5 h-5 text-cyan-400" />
            <span>ESP-NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}
