import { Terminal, Sparkles, Layout } from 'lucide-react';

export default function VibeCodingSection() {
  return (
    <section className="py-20 relative border-t border-slate-800/50 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">现在比较流行的 Vibe Coding 工具</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Vibe Coding 是全新的编程范式，开发者不再需要逐行手敲代码，而是通过自然语言描述产品意图，AI 助手自动完成构建。
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['Trae', 'Claude Code', 'Codex', 'Antigravity', 'Cursor', 'Windsurf', 'Replit'].map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-md text-slate-300 font-mono text-sm shadow-sm">{tool}</span>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Layout className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Trae IDE - 字节旗下 AI 代码助手
              </h3>
              <p className="text-blue-100/70 mb-4 block">编程、写网页、插件、查报价库存、制作表格都能实现！编程更高效！</p>
              <a href="https://www.trae.cn/ide/download" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-mono bg-blue-500/10 px-3 py-1.5 rounded transition-colors group">
                <Terminal className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                www.trae.cn/ide/download
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full">
            <div className="rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl bg-slate-800">
              <img src="/ai_vibe_coding.jpeg" alt="AI Vibe Coding" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
              <div className="p-4 bg-slate-900/80 border-t border-slate-700/50 backdrop-blur-md">
                <p className="text-xs text-slate-400 font-mono items-center flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> AI Agent Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
