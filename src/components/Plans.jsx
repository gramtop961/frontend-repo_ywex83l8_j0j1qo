import { useEffect, useState } from 'react'

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
    <section id="plans" className="relative py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Тарифные планы</h2>
        {loading ? (
          <div className="text-blue-200">Загрузка...</div>
        ) : error ? (
          <div className="text-red-300">{error}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((p, idx) => (
              <div key={idx} className={`rounded-2xl p-5 border ${p.featured ? 'border-blue-400 bg-blue-500/10' : 'border-white/10 bg-white/5'} backdrop-blur` }>
                <div className="text-blue-200 text-sm">до {p.speed_mbps} Мбит/с</div>
                <div className="text-2xl font-bold text-white mt-1">{p.name}</div>
                <div className="mt-3 text-blue-100/90 min-h-[48px]">{p.description || 'Быстрый и стабильный интернет'}</div>
                <div className="mt-4 text-3xl font-extrabold text-white">{p.price_rub}<span className="text-base font-medium text-blue-200"> ₽/мес</span></div>
                <div className="mt-4">
                  <a href="#contact" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">Подключить</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Plans
