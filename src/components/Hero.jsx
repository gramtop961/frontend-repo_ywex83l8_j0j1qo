function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_-10%,rgba(59,130,246,0.35),transparent),radial-gradient(600px_300px_at_90%_-10%,rgba(14,165,233,0.35),transparent)]"/>
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Быстрый и стабильный интернет в Невинномысске
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-xl">
              «Телетекст» — локальный провайдер с заботой о каждом доме. Подключим, настроим и поддержим 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#plans" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition">Выбрать тариф</a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">Оставить заявку</a>
            </div>
            <div className="mt-6 text-blue-200/80 text-sm flex items-center gap-3">
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Подключение за 1 день</span>
              <span className="hidden sm:inline">•</span>
              <span>Поддержка рядом, в вашем городе</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/30 to-sky-400/20 border border-white/10 shadow-2xl overflow-hidden">
              <div className="p-6 text-blue-50">
                <div className="flex items-center justify-between text-xs opacity-80">
                  <span>Телетекст • Пинг</span>
                  <span>Скорость</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">3 ms</div>
                    <div className="text-xs opacity-80">Ping</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">500</div>
                    <div className="text-xs opacity-80">Mbps</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">Безлимит</div>
                    <div className="text-xs opacity-80">Трафик</div>
                  </div>
                </div>
                <div className="mt-6 text-sm opacity-80">Стабильная связь для работы, учебы и игр.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero