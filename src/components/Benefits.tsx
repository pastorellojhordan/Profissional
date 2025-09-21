import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Shield, 
  BarChart3,
  ArrowUp,
  ArrowDown,
  Target,
  Zap
} from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumente suas Vendas',
      description: 'Expanda seu raio de entrega e atenda mais clientes',
      metric: '+40%',
      metricLabel: 'Aumento nas vendas',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: DollarSign,
      title: 'Reduza Custos',
      description: 'Otimize rotas e reduza gastos com combustível',
      metric: '-25%',
      metricLabel: 'Redução de custos',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Clock,
      title: 'Economize Tempo',
      description: 'Automatize processos e foque no que importa',
      metric: '2h',
      metricLabel: 'Economizadas por dia',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Users,
      title: 'Clientes Satisfeitos',
      description: 'Melhore a experiência com rastreamento em tempo real',
      metric: '95%',
      metricLabel: 'Satisfação dos clientes',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Seus dados protegidos com criptografia de ponta a ponta'
    },
    {
      icon: BarChart3,
      title: 'Relatórios Detalhados',
      description: 'Analytics completos para otimizar sua operação'
    },
    {
      icon: Target,
      title: 'Precisão Total',
      description: 'Rastreamento GPS com precisão de metros'
    },
    {
      icon: Zap,
      title: 'Performance Máxima',
      description: 'Sistema otimizado para alta performance'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
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
            📈 Benefícios Comprovados
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resultados que{' '}
            <span className="text-gradient">transformam seu negócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o MOTOROTAS está ajudando lanchonetes a crescer e se destacar no mercado.
          </p>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`${benefit.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-orange-200`}>
                <div className="space-y-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.color} shadow-lg`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Metric */}
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-gray-900">
                      {benefit.metric}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {benefit.metricLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 lg:p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Antes vs Depois do MOTOROTAS
            </h3>
            <p className="text-lg text-gray-600">
              Veja a diferença que nossa plataforma faz na sua operação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowDown className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Antes</h4>
                <p className="text-gray-600">Sem sistema de gestão</p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Entregas perdidas ou atrasadas',
                  'Cliente insatisfeito com falta de informação',
                  'Rotas ineficientes e custos altos',
                  'Gestão manual e propensa a erros',
                  'Sem dados para análise'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowUp className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Depois</h4>
                <p className="text-gray-600">Com MOTOROTAS</p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Entregas pontuais e rastreadas',
                  'Clientes satisfeitos e bem informados',
                  'Rotas otimizadas e custos reduzidos',
                  'Automação completa e sem erros',
                  'Dados detalhados para crescimento'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Recursos que fazem a diferença
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-200"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;