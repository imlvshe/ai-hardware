import { CheckCircle2, MessageSquareCode } from 'lucide-react';

const prompts = [
  { title: "硬件选型与清单", prompt: "我要给同济大学创意设计学院电子实验室提供一个硬件清单，请你查一下同济大学创意设计学院的专业设置。给我提供10款传感器，10款主控，10款执行器，输出一个CSV文件。要有货号、品名、价格、推荐理由。请在 dfrobot.com.cn 上搜索" },
  { title: "图像批量处理", prompt: "要将照片批量剪切成K10屏幕大小的图片。" },
  { title: "简易网页计算器", prompt: "帮我做一个好看的网页版计算器，能加减乘除、清零，界面简洁适合电脑端使用。" },
  { title: "个人名片小网页", prompt: "给我做一个极简个人介绍名片网页，包含头像、姓名、一句话简介、联系方式，风格简约干净。" },
  { title: "每日励志语录", prompt: "做一个励志语录随机生成小网页，点按钮就换一句文案，界面简单好看。" },
  { title: "倒计时小工具", prompt: "做一个自定义倒计时网页，可以输入时分秒，开始、暂停、重置，适合办公用。" },
  { title: "年会抽奖装置", prompt: "做一年抽奖装置，要有名字、工号。" }
];

export default function UseCasesSection() {
  return (
    <section className="py-20 relative bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">自然语言实战指令</h2>
          <p className="text-slate-400 text-lg">在 AI IDE 中新建项目，输入以下指令即可瞬间完成开发工作</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prompts.map((item, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors rounded-2xl p-6 group flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-200">{item.title}</h3>
              </div>
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/50 flex-1 relative group-hover:border-blue-500/30 transition-colors">
                <p className="text-slate-400 font-mono text-sm leading-relaxed">&ldquo;{item.prompt}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
