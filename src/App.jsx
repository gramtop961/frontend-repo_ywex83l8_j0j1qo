import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Benefits from './components/Benefits'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Plans />
      <Benefits />
      <Contact />
      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-4 py-8 text-blue-200/80 text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Телетекст, г. Невинномысск</div>
          <div className="opacity-80">Поддержка: +7 (000) 000-00-00 • info@teletekst.ru</div>
        </div>
      </footer>
    </div>
  )
}

export default App