import { motion } from 'framer-motion'

function Hero(){
  return (
    <section className="relative overflow-hidden">
      {/* Animated background: gradient mesh + grid + speed lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_10%_-20%,rgba(59,130,246,0.35),transparent),radial-gradient(900px_400px_at_90%_-20%,rgba(14,165,233,0.35),transparent),radial-gradient(600px_300px_at_50%_120%,rgba(99,102,241,0.25),transparent)]"/>
        <div className="absolute inset-0 hero-grid-mask"/>
        <div className="absolute inset-0 overflow-hidden">
          <div className="speed-lines"/>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_0_24px_rgba(59,130,246,0.25)]"
            >
              Быстрый и стабильный интернет в Невинномысске
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-blue-100/90 max-w-xl"
            >
              «Телетекст» — локальный провайдер с заботой о каждом доме. Подключим, настроим и поддержим 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#plans" className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-[0_10px_40px_-10px_rgba(14,165,233,0.6)] hover:shadow-[0_15px_60px_-15px_rgba(14,165,233,0.8)] transition">
                <span className="relative">
                  Выбрать тариф
                  <span className="absolute inset-0 -z-10 rounded-xl bg-white/10 blur-sm opacity-0 group-hover:opacity-100 transition"/>
                </span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:text-white hover:bg-white/10 backdrop-blur transition">
                Оставить заявку
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-blue-200/80 text-sm flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Подключение за 1 день</span>
              <span className="hidden sm:inline">•</span>
              <span>Поддержка рядом, в вашем городе</span>
            </motion.div>
          </div>

          <div className="relative">
            {/* Floating glowing orbs */}
            <motion.div
              className="absolute -top-10 -left-8 w-28 h-28 rounded-full bg-sky-500/25 blur-2xl"
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-8 -right-10 w-36 h-36 rounded-full bg-indigo-500/25 blur-2xl"
              animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-400/10 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl relative"
            >
              {/* Shimmer border */}
              <div className="absolute inset-0 rounded-2xl shimmer-mask pointer-events-none" />

              <div className="p-6 text-blue-50 relative z-10">
                <div className="flex items-center justify-between text-xs opacity-80">
                  <span>Телетекст • Пинг</span>
                  <span>Скорость</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <motion.div whileHover={{ y: -4 }} className="glass-tile p-4 text-center">
                    <div className="text-3xl font-bold">3 ms</div>
                    <div className="text-xs opacity-80">Ping</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} className="glass-tile p-4 text-center">
                    <div className="text-3xl font-bold">500</div>
                    <div className="text-xs opacity-80">Mbps</div>
                  </motion.div>
                  <motion.div whileHover={{ y: -4 }} className="glass-tile p-4 text-center">
                    <div className="text-3xl font-bold">Безлимит</div>
                    <div className="text-xs opacity-80">Трафик</div>
                  </motion.div>
                </div>
                <div className="mt-6 text-sm opacity-80">Стабильная связь для работы, учебы и игр.</div>
              </div>

              {/* Speed gauge deco */}
              <div className="absolute -right-6 -bottom-8 w-60 h-60 rounded-full border-2 border-white/10"/>
              <div className="absolute -right-10 -bottom-14 w-80 h-80 rounded-full border-2 border-white/5"/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
