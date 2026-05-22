import HeroSection from './HeroSection';
import VibeCodingSection from './VibeCodingSection';
import UseCasesSection from './UseCasesSection';
import HardwareSection from './HardwareSection';
import CommunicationSection from './CommunicationSection';

export default function CourseContent({ accessKey }: { accessKey: string }) {
  // Simple check again strictly for the component prop
  const verify = (code: string) => {
    const target = [122, 130, 128, 117, 127, 124, 124, 122]; 
    if (!code || code.length !== target.length) return false;
    for (let i = 0; i < code.length; i++) {
      if (code.charCodeAt(i) + 13 !== target[i]) return false;
    }
    return true;
  };

  if (!verify(accessKey)) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-red-500">Access Denied: Invalid Key Structure.</div>;
  }

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans">
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <img src="/logo.png" alt="SparkMinds Logo" className="h-8 w-auto object-contain" onError={(e) => {
               (e.target as HTMLImageElement).style.display = 'none';
               (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
             }} />
             <span className="hidden font-bold text-white tracking-wide">SparkMinds 创智实验室</span>
          </div>
          <div className="text-sm text-slate-400 font-medium bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
            教师专用版 (Teacher Edition)
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <VibeCodingSection />
        <UseCasesSection />
        <HardwareSection />
        <CommunicationSection />
      </main>
      
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© 2026 SparkMinds 创智实验室. 保留所有权利. [访问码已验证保护]</p>
      </footer>
    </div>
  );
}
