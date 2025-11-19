function Benefits(){
  const items = [
    { title: 'Локальная поддержка', desc: 'Живые специалисты из Невинномысска на связи 24/7.' },
    { title: 'Быстрое подключение', desc: 'Приезжаем в удобное время. Часто — в день обращения.' },
    { title: 'Честные тарифы', desc: 'Без скрытых платежей и навязанных услуг.' },
    { title: 'Оборудование', desc: 'Поможем подобрать и настроить роутер под ваши задачи.' },
  ]
  return (
    <section id="benefits" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Почему «Телетекст»</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl p-5 border border-white/10 bg-white/5 text-blue-100">
              <div className="text-xl text-white font-semibold">{it.title}</div>
              <div className="mt-2 text-blue-100/90">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits