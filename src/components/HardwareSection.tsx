import { Camera, Eye, Activity, Rainbow } from 'lucide-react';

export default function HardwareSection() {
  return (
    <section className="py-20 relative border-t border-slate-800/50 bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-center">行空板 K10: 即刻开始图像检测</h2>
          <p className="text-slate-400 text-lg text-center max-w-2xl mx-auto">
            板载屏幕、麦克风、温湿度传感器、环境光传感器、RGB灯、摄像头、WiFi/蓝牙等多种外设。集成 AI 能力，轻松进行计算机视觉开发。
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
             <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl bg-slate-800 flex items-center justify-center min-h-[300px]">
                {/* Fallback image if generated one is missing */}
                <img src="/k10_board.jpeg.png" alt="K10 Board" className="w-full h-auto object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="p-8 text-center text-slate-500 absolute -z-10">K10 Board Hardware Photo</div>
             </div>
          </div>
          
          <div className="flex-1 space-y-8 w-full">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Camera className="text-pink-400 w-6 h-6" />
              离线视觉检测
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center"><Eye size={18}/></div>
                <span className="text-slate-300 font-medium text-sm">离线人脸检测</span>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center"><Eye size={18}/></div>
                <span className="text-slate-300 font-medium text-sm">猫/狗检测</span>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center"><Eye size={18}/></div>
                <span className="text-slate-300 font-medium text-sm">二维码识别</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-4">
              <h4 className="text-white font-semibold text-lg mb-4">体验小任务</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs border border-slate-600">1</span>
                  <span>现在试一下，在行空板 K10 上画一只猫</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs border border-slate-600">2</span>
                  <span>当摄像头看到人脸的时候，在屏幕上出现一个 <span className="text-pink-400 font-bold">❤</span> 爱心</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs border border-slate-600">3</span>
                  <span>当我晃动 K10 的时候，采集陀螺仪的数据，LED灯会亮，当不晃了LED就暗了</span>
                </li>
                <li className="flex items-start gap-3 text-slate-400">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs border border-slate-600">4</span>
                  <span>在 K10 上显示现在的温度，湿度，和光照亮度</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
