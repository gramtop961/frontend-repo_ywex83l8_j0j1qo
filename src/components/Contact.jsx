import { useState } from 'react'

function Contact(){
  const [form, setForm] = useState({ name: '', phone: '', street_address: '', apartment: '', comment: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Отправка...' })
    try{
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/lead`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source: 'website' }) })
      if(!res.ok) throw new Error('Не удалось отправить заявку')
      setStatus({ state: 'success', message: 'Заявка отправлена! Мы свяжемся с вами.' })
      setForm({ name: '', phone: '', street_address: '', apartment: '', comment: '' })
    }catch(err){
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Подключить интернет</h2>
            <p className="text-blue-100/90">Оставьте контакты — перезвоним, уточним адрес и согласуем время подключения.</p>
            <div className="mt-6 text-blue-200/80 text-sm">Работаем по всему городу Невинномысск и ближайшим районам.</div>
          </div>
          <form onSubmit={submit} className="rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-200 mb-1">Имя</label>
                <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" placeholder="Иван"/>
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Телефон</label>
                <input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" placeholder="+7 9xx xxx-xx-xx"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-200 mb-1">Адрес</label>
                <input value={form.street_address} onChange={e=>setForm({...form,street_address:e.target.value})} className="w-full bg.white/10 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" placeholder="Улица, дом"/>
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Квартира/Офис</label>
                <input value={form.apartment} onChange={e=>setForm({...form,apartment:e.target.value})} className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" placeholder="Кв. 12"/>
              </div>
              <div>
                <label className="block text-sm text-blue-200 mb-1">Комментарий</label>
                <input value={form.comment} onChange={e=>setForm({...form,comment:e.target.value})} className="w-full bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-blue-200/60" placeholder="Удобное время"/>
              </div>
            </div>
            <button disabled={status.state==='loading'} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition">
              {status.state==='loading' ? 'Отправка...' : 'Оставить заявку'}
            </button>
            {status.message && (
              <div className={`mt-3 text-sm ${status.state==='error' ? 'text-rose-300' : 'text-emerald-300'}`}>{status.message}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
