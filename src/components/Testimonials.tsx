import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Proprietário',
      business: 'Lanchonete do Carlos',
      location: 'Joinville, SC',
      rating: 5,
      text: 'O MOTOROTAS transformou completamente nossa operação. Agora conseguimos atender muito mais clientes e nossos entregadores são muito mais eficientes. A satisfação dos clientes aumentou drasticamente!',
      avatar: 'CS',
      metrics: { deliveries: '+60%', satisfaction: '98%' }
    },
    {
      name: 'Maria Santos',
      role: 'Gerente',
      business: 'Burger Express',
      location: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'A plataforma é incrível! O rastreamento em tempo real fez toda a diferença. Nossos clientes adoram acompanhar suas entregas e isso reduziu drasticamente as reclamações.',
      avatar: 'MS',
      metrics: { deliveries: '+45%', satisfaction: '95%' }
    },
    {
      name: 'João Oliveira',
      role: 'Proprietário',
      business: 'Pizza do João',
      location: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Implementamos o MOTOROTAS há 6 meses e já vemos resultados incríveis. Nossa área de entrega aumentou 40% e os custos operacionais diminuíram 25%. Recomendo para qualquer lanchonete!',
      avatar: 'JO',
      metrics: { deliveries: '+40%', satisfaction: '97%' }
    },
    {
      name: 'Ana Costa',
      role: 'Proprietária',
      business: 'Café da Ana',
      location: 'Porto Alegre, RS',
      rating: 5,
      text: 'A interface é muito intuitiva e fácil de usar. Em poucos dias toda nossa equipe estava dominando o sistema. Os relatórios nos ajudam muito na tomada de decisões.',
      avatar: 'AC',
      metrics: { deliveries: '+35%', satisfaction: '96%' }
    },
    {
      name: 'Pedro Lima',
      role: 'Proprietário',
      business: 'Sanduíches do Pedro',
      location: 'Salvador, BA',
      rating: 5,
      text: 'O suporte ao cliente é excepcional! Sempre que precisamos de ajuda, eles respondem rapidamente. A plataforma é estável e nunca tivemos problemas técnicos.',
      avatar: 'PL',
      metrics: { deliveries: '+50%', satisfaction: '94%' }
    },
    {
      name: 'Lucia Ferreira',
      role: 'Gerente',
      business: 'Lanchonete da Lucia',
      location: 'Fortaleza, CE',
      rating: 5,
      text: 'Investir no MOTOROTAS foi a melhor decisão que tomamos. Em 3 meses já recuperamos o investimento com o aumento nas vendas. Nossos clientes ficaram muito mais satisfeitos.',
      avatar: 'LF',
      metrics: { deliveries: '+55%', satisfaction: '99%' }
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Lanchonetes Ativas' },
    { icon: TrendingUp, value: '40%', label: 'Aumento Médio nas Vendas' },
    { icon: Star, value: '4.9/5', label: 'Avaliação dos Clientes' },
    { icon: MapPin, value: '50+', label: 'Cidades Atendidas' }
  ];

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💬 Depoimentos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos clientes{' '}
            <span className="text-gradient">têm a dizer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 lanchonetes já transformaram suas operações com o MOTOROTAS. 
            Veja os resultados reais de quem já está usando nossa plataforma.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-orange-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-orange-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {testimonial.metrics.deliveries}
                    </div>
                    <div className="text-sm text-gray-600">Entregas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {testimonial.metrics.satisfaction}
                    </div>
                    <div className="text-sm text-gray-600">Satisfação</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-orange-600 font-medium">{testimonial.business}</div>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Junte-se a centenas de lanchonetes de sucesso
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Veja por que mais de 500 estabelecimentos já escolheram o MOTOROTAS 
              para revolucionar suas entregas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => navigate('/construction')}
              >
                Começar Teste Gratuito
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Falar com Especialista
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Sem compromisso • Setup em 15 minutos • Suporte 24/7
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;