import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Smartphone, 
  MapPin, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Truck,
  Star
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: '1. Cadastre-se',
      description: 'Crie sua conta em minutos e configure sua lanchonete',
      details: 'Processo simples e rápido, sem complicações',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Smartphone,
      title: '2. Configure o App',
      description: 'Baixe nosso app e configure entregadores',
      details: 'Interface intuitiva para toda sua equipe',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      title: '3. Comece a Entregar',
      description: 'Receba pedidos e gerencie entregas em tempo real',
      details: 'Rastreamento completo e notificações automáticas',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: CheckCircle,
      title: '4. Cresça seu Negócio',
      description: 'Analise dados e otimize suas operações',
      details: 'Relatórios detalhados para tomada de decisão',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const benefits = [
    { icon: Clock, text: 'Setup em menos de 15 minutos' },
    { icon: Truck, text: 'Suporte a múltiplos entregadores' },
    { icon: Star, text: 'Interface amigável e intuitiva' },
    { icon: CheckCircle, text: 'Sem necessidade de conhecimento técnico' }
  ];

  return (
    <section id="how-it-works" className="py-20 gradient-bg">
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
            🚀 Como Funciona
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comece a usar em{' '}
            <span className="text-gradient">4 passos simples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma foi desenvolvida para ser simples e eficiente. 
            Em poucos minutos você estará gerenciando entregas como um profissional.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl shadow-lg mb-6 relative z-10`}
                  >
                    <step.icon className="h-8 w-8" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`${step.bgColor} rounded-2xl p-6 border border-transparent hover:border-orange-200 transition-all duration-300 hover:shadow-lg`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 font-medium mb-2">
                      {step.description}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {step.details}
                    </p>
                  </motion.div>

                  {/* Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 z-20">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-orange-500 text-white p-2 rounded-full shadow-lg"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Por que escolher o MOTOROTAS?
              </h3>
              <p className="text-lg text-gray-600">
                Descubra os benefícios que fazem a diferença no seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button className="btn-primary text-lg px-12 py-4">
                Começar Agora - É Grátis!
              </button>
              <p className="text-gray-500 text-sm mt-4">
                Sem cartão de crédito • Sem compromisso • Setup em minutos
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;