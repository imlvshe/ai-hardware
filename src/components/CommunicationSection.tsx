import { Network, Zap, Settings, CalendarDays } from 'lucide-react';

export default function CommunicationSection() {
  return (
    <section className="py-20 relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">通信协议：设备间的交流规矩</h2>
            <p className="text-slate-400 text-lg mb-8">
              通信协议 = 设备之间约定好的「说话规矩」。相同的协议才能正常沟通，协议不匹配则无法互通。
            </p>
            
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Settings className="w-48 h-48" />
              </div>
              <h3 className="text-xl font-bold text-blue-200 mb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-blue-400" />
                WIFI Manager
              </h3>
              <p className="text-slate-400">
                以前配置网络需要程序员写一周的代码，现在通过调用 <code className="text-blue-300 font-mono text-sm bg-blue-950 px-1.5 py-0.5 rounded">WiFiManager</code> 库直接调用。
                请给 K10 开启临时 WiFi 热点设置网络。
              </p>
            </div>
          </div>

          <div>
             <div className="rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl bg-slate-800 min-h-[250px] flex justify-center items-center">
                 <img src="/esp_now_comm.jpeg.png" alt="ESP NOW Communication" className="w-full h-auto object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                 <div className="p-8 text-center text-slate-500 absolute -z-10 bg-slate-900 border border-slate-700 rounded-xl">ESP NOW Illustration</div>
             </div>
          </div>
        </div>

        <div className="border border-slate-800 bg-slate-900/50 rounded-3xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">ESP-NOW 数据传输</h3>
              <p className="text-slate-400">近距、极速、省电，仅发小消息的小宇宙电报</p>
            </div>
          </div>
          
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 font-mono text-sm text-slate-300 leading-relaxed max-w-3xl">
            <div className="flex items-center gap-2 mb-3 text-slate-500">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <p className="text-cyan-300 mb-2">// 实战挑战：ESPNOW 数据透传</p>
            我现在有 2 块行空板 K10，当我按 <span className="text-white font-bold bg-slate-800 px-2 py-0.5 rounded">A键</span> 的时候，<br/>
            把 <span className="text-white">K10-1</span> 的温湿度数据传给 <span className="text-white">K10-2</span>。<br/><br/>
            用 <span className="text-cyan-400">espnow</span> 功能，并且告诉我哪块是发射端 (打包含出)，哪块是接收端 (接收拆包)。
          </div>
        </div>

        <div className="mt-20 flex justify-center">
           <div className="inline-block bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm self-center">
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 h-24 w-24 flex items-center justify-center flex-shrink-0">
                  <CalendarDays className="w-10 h-10 text-slate-400" />
               </div>
               <div>
                  <h4 className="text-xl font-bold text-white mb-3">下周预告 (Next Week)</h4>
                  <ul className="flex flex-wrap gap-4">
                    <li className="bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 text-sm text-slate-300">使用库文件，espnow两个行空板连</li>
                    <li className="bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 text-sm text-slate-300">FFT 库</li>
                    <li className="bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 text-sm text-slate-300">Wifi Manager 库</li>
                    <li className="bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 text-sm text-slate-300">电脑和行空板之间数据传输</li>
                    <li className="bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800 text-sm text-slate-300">lovyanGFX 库</li>
                  </ul>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
