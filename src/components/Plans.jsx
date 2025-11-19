import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Plans(){
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/plans`)
        if(!res.ok) throw new Error('Не удалось загрузить тарифы')
        const data = await res.json()
        setPlans(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="plans" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_200px_at_20%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(500px_200px_at_80%_0%,rgba(99,102,241,0.15),transparent)]"/>
      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .6 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Тарифные планы
        </motion.h2>
        {loading ? (
          <div className="text-blue-200">Загрузка...</div>
        ) : error ? (
          <div className="text-rose-300">{error}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: idx * 0.05 }}
                className={`group rounded-2xl p-5 border ${p.featured ? 'border-sky-300/60 bg-sky-400/10' : 'border-white/10 bg-white/5'} backdrop-blur relative overflow-hidden`}
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-sky-400/10 group-hover:bg-sky-400/20 transition"/>
                <div className="text-blue-200 text-sm">до {p.speed_mbps} Мбит/с</div>
                <div className="text-2xl font-bold text-white mt-1">{p.name}</div>
                <div className="mt-3 text-blue-100/90 min-h-[48px]">{p.description || 'Быстрый и стабильный интернет'}</div>
                <div className="mt-4 text-3xl font-extrabold text-white">{p.price_rub}<span className="text-base font-medium text-blue-200"> ₽/мес</span></div>
                <div className="mt-4">
                  <a href="#contact" className="block w-full text-center bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-95 text-white font-semibold py-2 rounded-lg transition">Подключить</a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Plans
