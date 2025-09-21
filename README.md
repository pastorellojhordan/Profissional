# MOTOROTAS - Landing Page

Uma landing page moderna e responsiva para o serviço de localização e gestão de entregas para lanchonetes.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com foco na experiência do usuário
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações**: Efeitos visuais suaves com Framer Motion
- **Performance**: Otimizado para carregamento rápido
- **Acessibilidade**: Seguindo melhores práticas de acessibilidade web

## 🎨 Design

- **Paleta de Cores**: Laranja como cor principal (#f97316) com gradientes
- **Tipografia**: Inter font para melhor legibilidade
- **Componentes**: Cards, botões e elementos com hover effects
- **Layout**: Grid responsivo com espaçamento consistente

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd motorotas-landing
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Hero.tsx            # Seção principal
│   ├── Features.tsx        # Recursos do produto
│   ├── HowItWorks.tsx      # Como funciona
│   ├── Benefits.tsx        # Benefícios
│   ├── Testimonials.tsx    # Depoimentos
│   ├── Pricing.tsx         # Planos e preços
│   ├── CTA.tsx             # Call-to-action
│   └── Footer.tsx          # Rodapé
├── App.tsx                 # Componente principal
├── index.tsx               # Ponto de entrada
└── index.css               # Estilos globais
```

## 🎯 Seções da Landing Page

1. **Header** - Navegação fixa com logo e menu
2. **Hero** - Apresentação principal com CTA
3. **Features** - Recursos detalhados do produto
4. **How It Works** - Processo em 4 passos
5. **Benefits** - Benefícios e métricas
6. **Testimonials** - Depoimentos de clientes
7. **Pricing** - Planos e preços
8. **CTA** - Call-to-action final
9. **Footer** - Links e informações de contato

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  orange: {
    500: '#f97316', // Cor principal
    600: '#ea580c', // Cor hover
    // ... outras variações
  }
}
```

### Animações
As animações são configuradas usando Framer Motion. Você pode ajustar:
- Duração das transições
- Efeitos de hover
- Animações de entrada

### Conteúdo
Todo o conteúdo está nos componentes React e pode ser facilmente editado:
- Textos e títulos
- Preços e planos
- Depoimentos
- Recursos

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

Para fazer deploy do projeto:

1. Build de produção:
```bash
npm run build
```

2. Os arquivos estarão na pasta `build/` prontos para deploy

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

---

**MOTOROTAS** - Transformando entregas em experiências excepcionais! 🚚✨