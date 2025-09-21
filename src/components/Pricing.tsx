import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Users, Truck, BarChart3, Shield, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfeito para lanchonetes pequenas',
      price: { monthly: 97, annual: 79 },
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      popular: false,
      features: [
        'Até 2 entregadores',
        'Rastreamento em tempo real',
        'App mobile básico',
        'Relatórios básicos',
        'Suporte por email',
        'Até 100 entregas/mês'
      ],
      limitations: [
        'Sem integração com sistemas',
        'Relatórios limitados'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal para lanchonetes em crescimento',
      price: { monthly: 197, annual: 159 },
      icon: Zap,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      popular: true,
      features: [
        'Até 10 entregadores',
        'Rastreamento avançado',
        'App mobile completo',
        'Relatórios detalhados',
        'Suporte prioritário',
        'Entregas ilimitadas',
        'Integração com sistemas',
        'Notificações personalizadas',
        'Gestão de equipe'
      ],
      limitations: []
    },
    {
      name: 'Enterprise',
      description: 'Para grandes operações',
      price: { monthly: 397, annual: 319 },
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      popular: false,
      features: [
        'Entregadores ilimitados',
        'Rastreamento premium',
        'Apps customizados',
        'Analytics avançado',
        'Suporte dedicado 24/7',
        'Entregas ilimitadas',
        'Integrações ilimitadas',
        'API personalizada',
        'Gestão multi-filiais',
        'Treinamento personalizado',
        'SLA garantido'
      ],
      limitations: []
    }
  ];

  const features = [
    { icon: Truck, text: 'Rastreamento GPS em tempo real' },
    { icon: BarChart3, text: 'Relatórios e analytics completos' },
    { icon: Shield, text: 'Segurança e backup de dados' },
    { icon: Clock, text: 'Suporte técnico especializado' }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
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
            💰 Preços Simples
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Escolha o plano{' '}
            <span className="text-gradient">perfeito para você</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Planos flexíveis que crescem com seu negócio. 
            Comece grátis e evolua conforme sua necessidade.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-gray-100 rounded-full p-1"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isAnnual
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isAnnual
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anual
              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="inline h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className={`${plan.bgColor} rounded-3xl p-8 h-full border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-orange-500 shadow-2xl' 
                  : 'border-transparent hover:border-orange-200 hover:shadow-xl'
              }`}>
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} shadow-lg mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        R$ {isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600">/mês</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-green-600 font-medium">
                        Economize R$ {(plan.price.monthly - plan.price.annual) * 12}/ano
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center space-x-3 opacity-60">
                        <div className="h-5 w-5 flex-shrink-0"></div>
                        <span className="text-gray-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg'
                        : 'bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-500 hover:text-white'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Todos os planos incluem
            </h3>
            <p className="text-lg text-gray-600">
              Recursos essenciais para fazer sua lanchonete crescer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Perguntas Frequentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Posso mudar de plano a qualquer momento?',
                answer: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente.'
              },
              {
                question: 'Há período de teste gratuito?',
                answer: 'Oferecemos 14 dias de teste gratuito para todos os planos. Sem cartão de crédito necessário.'
              },
              {
                question: 'O que acontece se eu exceder os limites?',
                answer: 'Entraremos em contato para discutir um upgrade. Nunca interromperemos seu serviço sem aviso prévio.'
              },
              {
                question: 'Há suporte técnico disponível?',
                answer: 'Sim! Oferecemos suporte por email, chat e telefone. Planos superiores incluem suporte prioritário.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-left"
              >
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;