import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Star, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  const stats = [
    { icon: Users, value: '500+', label: 'Lanchonetes Ativas' },
    { icon: MapPin, value: '10K+', label: 'Entregas/Mês' },
    { icon: Star, value: '4.9', label: 'Avaliação Média' },
    { icon: Zap, value: '30%', label: 'Mais Eficiência' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Solução Completa para Entregas
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Gestão Inteligente de{' '}
                <span className="text-gradient">Entregas</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforme sua lanchonete com nossa plataforma de localização e gestão de entregas. 
                Aumente a eficiência, reduza custos e melhore a experiência do cliente.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                className="btn-primary flex items-center justify-center space-x-2"
                onClick={() => navigate('/construction')}
              >
                <span>Começar Gratuitamente</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <span>Ver Demonstração</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Mockup */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-white rounded-3xl shadow-2xl p-8"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <svg className="h-8 w-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 2 C25 2 10 22 10 45 C10 60 25 85 50 98 C75 85 90 60 90 45 C90 22 75 2 50 2 Z M30 70 L50 30 L70 70 H55 L50 60 L45 70 H30Z" fill="#F97316"/>
                      <path d="M25 50 Q 50 40 75 50" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round"/>
                    </svg>
                    <span className="text-xl font-bold text-gray-900">MOTOROTAS</span>
                  </div>
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Online
                  </div>
                </div>

                {/* Map Section */}
                <div className="bg-gray-100 rounded-2xl p-6 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 opacity-50"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                      <p className="text-gray-600 font-medium">Mapa de Entregas em Tempo Real</p>
                    </div>
                  </div>
                </div>

                {/* Delivery Cards */}
                <div className="space-y-3">
                  {[
                    { id: '#001', status: 'Em Trânsito', time: '15 min', color: 'bg-blue-500' },
                    { id: '#002', status: 'Entregue', time: '5 min', color: 'bg-green-500' },
                    { id: '#003', status: 'Preparando', time: '25 min', color: 'bg-orange-500' },
                  ].map((delivery, index) => (
                    <motion.div
                      key={delivery.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 ${delivery.color} rounded-full`}></div>
                        <span className="font-semibold text-gray-900">{delivery.id}</span>
                        <span className="text-gray-600">{delivery.status}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{delivery.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg"
            >
              <svg className="h-6 w-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 2 C25 2 10 22 10 45 C10 60 25 85 50 98 C75 85 90 60 90 45 C90 22 75 2 50 2 Z M30 70 L50 30 L70 70 H55 L50 60 L45 70 H30Z" fill="#F97316"/>
                <path d="M25 50 Q 50 40 75 50" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>
            </motion.div>

            <motion.div
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
            >
              <MapPin className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;