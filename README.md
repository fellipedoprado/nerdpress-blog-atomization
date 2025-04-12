# 📰 Atomized NerdPress

NerdPress é um projeto de blog desenvolvido em Angular, inspirado em um layout do Dribbble. Ele foi pensado com foco em **atomização de componentes**, **modularização**, **responsividade** e **boas práticas de código** para escalar facilmente.

## 🔧 Melhorias e Evoluções

Este projeto teve como base o repositório [`felipeAguiarCode/angular-blog`](https://github.com/felipeAguiarCode/angular-blog) e foi o resultado de um laboratório anterior feito por mim e presente [aqui](https://github.com/fellipedoprado/nerdpress-blog). Ele foi significativamente aprimorado com:

- 📦 **Estrutura de dados expandida**:
  - Inclusão de campos como autor, data de publicação, corpo do artigo.
- 🧱 **Componentes atomizados**:
  - Separação de partes da UI em pequenos componentes reutilizáveis (`BigCard`, `SmallCard`, `ArticleInfoList`, `NewsSnippet`, `ReadMore`, etc).
- 🗂 **Organização modular**:
  - Uso de `SharedModule`, rotas bem definidas e divisão clara entre `pages` e `components`.
- 🧠 **Responsividade aprimorada**:
  - Uso de `clamp()` e `vw` para fontes fluidas e layout adaptativo.
- 🧭 **Tratamento de erros e dados ausentes**:
  - Fallbacks amigáveis para ausência de conteúdo e estrutura defensiva.
- ⚡ **Performance**:
  - Lazy loading de rotas e otimização de assets.

## 🚀 Tecnologias Utilizadas

- Angular 19
- TypeScript
- HTML + CSS
- Angular Router

## ✅ Funcionalidades Implementadas

- **Listagem dinâmica de artigos** com:
  - Título, descrição, autor, data, imagem e categoria.
- **Página de detalhe do artigo**:
  - Conteúdo completo com formatação.
- **Componentes reutilizáveis e atomizados**:
  - Visuais modulares e reutilizáveis.
- **Design Responsivo**:
  - Adaptável para desktop, tablet e mobile.

## 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── big-card/
│   │   ├── small-card/
│   │   ├── article-info-list/
│   │   ├── read-more/
│   │   └── news-snippet/
│   ├── pages/              # Páginas (home e detalhe)
│   │   ├── home/
│   │   └── content/
│   ├── shared/             # SharedModule, pipes e helpers
│   └── models/             # Interfaces de dados (Article, Commentary)
├── assets/                 # Imagens e estilos
└── environments/           # Variáveis de ambiente
```

## ▶️ Como rodar localmente

```bash
git clone https://github.com/fellipedoprado/nerdpress-blog-atomization.git
cd nerdpress-blog-atomization
npm install
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## 📄 Licença

MIT © [Fellipe do Prado Arruda](https://github.com/fellipedoprado)
