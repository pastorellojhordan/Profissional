import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Users, 
  Zap, 
  Bell,
  TrendingUp,
  Globe,
  Smartphone as Mobile,
  Headphones
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Rastreamento em Tempo Real',
      description: 'Acompanhe todas as entregas em tempo real com precisão de localização GPS.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      icon: Clock,
      title: 'Gestão de Tempo',
      description: 'Otimize rotas e reduza tempo de entrega com algoritmos inteligentes.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      icon: Smartphone,
      title: 'App Mobile Completo',
      description: 'Interface intuitiva para entregadores e clientes com notificações push.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics Avançado',
      description: 'Relatórios detalhados e métricas de performance para tomada de decisão.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção de dados e transações com criptografia de ponta a ponta.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-500'
    },
    {
      icon: Users,
      title: 'Gestão de Equipe',
      description: 'Controle completo sobre entregadores, horários e performance individual.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-500'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Automatize processos repetitivos e aumente a eficiência operacional.',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-500'
    },
    {
      icon: Bell,
      title: 'Notificações Inteligentes',
      description: 'Sistema de alertas personalizado para clientes e equipe.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Escalável',
      description: 'Plataforma que cresce com seu negócio, suportando múltiplas filiais.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
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
            ✨ Recursos Avançados
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tudo que você precisa para{' '}
            <span className="text-gradient">gerenciar entregas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma oferece todas as ferramentas necessárias para transformar 
            sua operação de entregas em um processo eficiente e lucrativo.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`${feature.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-orange-200`}>
                <div className="space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Pronto para revolucionar suas entregas?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se a centenas de lanchonetes que já transformaram suas operações com o MOTOROTAS.
            </p>
            <button className="btn-primary">
              Começar Teste Gratuito
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;