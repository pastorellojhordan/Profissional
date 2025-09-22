import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Clock, CheckCircle, Users, Zap } from 'lucide-react';

const Construction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio do email (aqui você pode integrar com sua API)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  const benefits = [
    { icon: Clock, text: 'Acesso antecipado quando lançarmos' },
    { icon: Users, text: 'Suporte prioritário' },
    { icon: Zap, text: 'Desconto especial de lançamento' },
    { icon: CheckCircle, text: 'Notificações sobre novidades' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar ao início</span>
          </button>
          
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <svg className="h-16 w-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 2 C25 2 10 22 10 45 C10 60 25 85 50 98 C75 85 90 60 90 45 C90 22 75 2 50 2 Z M30 70 L50 30 L70 70 H55 L50 60 L45 70 H30Z" fill="#F97316"/>
              <path d="M25 50 Q 50 40 75 50" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Em <span className="text-gradient">Construção</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos trabalhando duro para trazer a melhor plataforma de gestão de entregas para você!
          </p>
        </motion.div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-orange-100"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-900">Lançamento Previsto</h2>
              <p className="text-gray-600">novembro de 2025</p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">Progresso do Desenvolvimento</span>
              <span className="text-sm font-bold text-orange-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ duration: 2, delay: 0.5 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Email Registration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-orange-100"
        >
          {!isSubmitted ? (
            <>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Mail className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-gray-900">Seja o Primeiro a Saber!</h2>
                  <p className="text-gray-600">Cadastre-se para receber notificações</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    required
                    className="flex-1 px-6 py-4 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Cadastrar</span>
                        <Mail className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Cadastrado!</h3>
              <p className="text-gray-600 mb-4">
                Você receberá notificações sobre o lançamento da plataforma.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                Cadastrar outro email
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <benefit.icon className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-gray-700 font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">
            Desenvolvido com ❤️ em Joinville, SC
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>contato@motorotas.com.br</span>
            <span>•</span>
            <span>(47) 99130-6846</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Construction;