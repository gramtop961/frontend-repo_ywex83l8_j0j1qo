import { useState } from 'react'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">ТТ</div>
          <div>
            <div className="text-white font-semibold leading-tight">Телетекст</div>
            <div className="text-xs text-blue-200/80">Интернет • Невинномысск</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-blue-100">
          <a href="#plans" className="hover:text-white transition-colors">Тарифы</a>
          <a href="#benefits" className="hover:text-white transition-colors">Преимущества</a>
          <a href="#contact" className="hover:text-white transition-colors">Подключение</a>
          <a href="/test" className="text-blue-300 hover:text-white transition-colors">Проверка</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-blue-100">
            <a onClick={() => setOpen(false)} href="#plans" className="py-1">Тарифы</a>
            <a onClick={() => setOpen(false)} href="#benefits" className="py-1">Преимущества</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-1">Подключение</a>
            <a onClick={() => setOpen(false)} href="/test" className="py-1">Проверка</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
