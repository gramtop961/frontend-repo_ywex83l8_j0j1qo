import { motion } from 'framer-motion'

function Benefits(){
  const items = [
    { title: 'Локальная поддержка', desc: 'Живые специалисты из Невинномысска на связи 24/7.' },
    { title: 'Быстрое подключение', desc: 'Приезжаем в удобное время. Часто — в день обращения.' },
    { title: 'Честные тарифы', desc: 'Без скрытых платежей и навязанных услуг.' },
    { title: 'Оборудование', desc: 'Поможем подобрать и настроить роутер под ваши задачи.' },
  ]
  return (
    <section id="benefits" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .6 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Почему «Телетекст»
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * 0.05 }}
              className="rounded-2xl p-5 border border-white/10 bg-white/5 text-blue-100 hover:bg-white/10 transition"
            >
              <div className="text-xl text-white font-semibold">{it.title}</div>
              <div className="mt-2 text-blue-100/90">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
