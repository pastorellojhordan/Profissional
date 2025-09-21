import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Users, Zap } from 'lucide-react';

const CTA: React.FC = () => {
  const benefits = [
    { icon: Clock, text: 'Setup em 15 minutos' },
    { icon: Users, text: 'Suporte especializado' },
    { icon: Zap, text: 'Resultados imediatos' },
    { icon: CheckCircle, text: 'Sem compromisso' }
  ];

  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-orange-200/30 to-orange-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-100/40 to-orange-200/40 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}
              <span className="inline-block bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold">
                🚀 Oferta Especial de Lançamento
              </span>

              {/* Main Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Pronto para{' '}
                  <span className="text-gradient">revolucionar</span>{' '}
                  suas entregas?
                </h2>
                <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Junte-se a centenas de lanchonetes que já transformaram suas operações 
                  e aumentaram suas vendas em até 40% com o MOTOROTAS.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-xl px-12 py-5 flex items-center justify-center space-x-3"
                  >
                    <span>Começar Teste Gratuito</span>
                    <ArrowRight className="h-6 w-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary text-xl px-12 py-5 flex items-center justify-center space-x-3"
                  >
                    <span>Agendar Demonstração</span>
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-4">
                  <p className="text-gray-500 text-sm">
                    ✅ 14 dias grátis • ✅ Sem cartão de crédito • ✅ Cancelamento a qualquer momento
                  </p>
                  
                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>500+ lanchonetes ativas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Suporte 24/7</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Setup em 15 min</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 mb-4">
                <strong className="text-gray-900">Última semana:</strong> 23 novas lanchonetes se juntaram ao MOTOROTAS
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>⭐⭐⭐⭐⭐</span>
                <span>4.9/5 baseado em 500+ avaliações</span>
                <span>•</span>
                <span>98% dos clientes recomendam</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;