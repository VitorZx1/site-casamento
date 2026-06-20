# Site de Casamento - Vitor & Laura

Site de casamento desenvolvido com **TanStack Start** e configurado para publicação na **Vercel**.

## 🚀 Início Rápido

### Instalação Local
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar o build
npm run preview
```

## 📁 Estrutura do Projeto

```
site-vercel/
├── src/
│   ├── assets/          # Imagens e mídia
│   ├── components/      # Componentes React
│   ├── routes/          # Páginas (roteamento automático)
│   ├── styles.css       # Estilos globais
│   ├── router.tsx       # Configuração do router
│   ├── start.ts         # Inicialização TanStack Start
│   └── server.ts        # Configuração do servidor
├── vite.config.ts       # Configuração do Vite
├── vercel.json          # Configuração da Vercel
├── package.json         # Dependências
└── README.md            # Este arquivo
```

## 🔧 Tecnologias

- **React 19** - Framework UI
- **TanStack Start** - Framework full-stack
- **TanStack Router** - Roteamento
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **TypeScript** - Type safety

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm
- Conta no GitHub
- Conta na Vercel

## 🌐 Publicar na Vercel

### Passo 1: Preparar o GitHub
1. Crie uma conta em https://github.com
2. Crie um novo repositório chamado `vitor-laura-wedding`
3. Faça push do código:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/vitor-laura-wedding.git
git push -u origin main
```

### Passo 2: Conectar à Vercel
1. Acesse https://vercel.com
2. Clique em "Sign up" → "Continue with GitHub"
3. Autorize a Vercel
4. Clique em "New Project"
5. Selecione seu repositório `vitor-laura-wedding`
6. Clique em "Import"
7. Clique em "Deploy"

### Passo 3: Pronto! 🎉
Seu site estará online em poucos minutos com uma URL como:
```
https://vitor-laura-wedding.vercel.app
```

## 🔄 Atualizar o Site

Sempre que você fizer mudanças:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

A Vercel vai automaticamente:
- Detectar as mudanças
- Fazer o rebuild
- Publicar a nova versão

## ✨ Recursos

- ✅ Totalmente responsivo
- ✅ Animações suaves
- ✅ Contador regressivo
- ✅ Galeria de fotos
- ✅ Formulários interativos
- ✅ Design elegante

## 📞 Suporte

- **Vercel Docs:** https://vercel.com/docs
- **TanStack Start:** https://tanstack.com/start
- **GitHub Docs:** https://docs.github.com

---

**Desenvolvido com ❤️ para o casamento de Vitor & Laura**
