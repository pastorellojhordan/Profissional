import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    produto: [
      { name: 'Recursos', href: '#features' },
      { name: 'Como Funciona', href: '#how-it-works' },
      { name: 'Preços', href: '#pricing' },
      { name: 'Demonstração', href: '#demo' },
      { name: 'Integrações', href: '#integrations' }
    ],
    empresa: [
      { name: 'Sobre Nós', href: '#about' },
      { name: 'Carreiras', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Imprensa', href: '#press' },
      { name: 'Parceiros', href: '#partners' }
    ],
    suporte: [
      { name: 'Central de Ajuda', href: '#help' },
      { name: 'Documentação', href: '#docs' },
      { name: 'Status do Sistema', href: '#status' },
      { name: 'Contato', href: '#contact' },
      { name: 'Comunidade', href: '#community' }
    ],
    legal: [
      { name: 'Termos de Uso', href: '#terms' },
      { name: 'Política de Privacidade', href: '#privacy' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'LGPD', href: '#lgpd' },
      { name: 'Contratos', href: '#contracts' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-xl">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">MOTOROTAS</span>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-md">
                A plataforma completa de gestão de entregas que está transformando 
                lanchonetes em todo o Brasil. Mais eficiência, menos custos, 
                clientes mais satisfeitos.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>contato@motorotas.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Receba nossas novidades</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Seu melhor email"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Inscrever</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-400">
                  Sem spam. Cancele a qualquer momento.
                </p>
              </div>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-semibold capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 MOTOROTAS. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-orange-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Feito com ❤️ no Brasil</span>
              <span>•</span>
              <span>Seguro e Confiável</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;