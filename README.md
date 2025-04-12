# 📰 NerdPress

Um projeto de blog desenvolvido em Angular, inspirado em um layout do Dribbble. Ideal para exibir notícias, artigos e conteúdos com foco em responsividade e organização.

## 🔧 Melhorias e Evoluções

Este projeto foi originalmente baseado no repositório [`felipeAguiarCode/angular-blog`](https://github.com/felipeAguiarCode/angular-blog), e a partir dele foram feitas as seguintes melhorias:

- Expansão da estrutura de dados com:
  - Autor, data de publicação, conteúdo completo e comentários
- Organização modular das rotas e componentes
- Suporte a categorias (Filmes, Séries, Quadrinhos, Games)
- Tratamento de erro

## 🚀 Tecnologias Utilizadas

- Angular 19
- TypeScript
- HTML + CSS

## ✅ Funcionalidades Implementadas

- Listagem dinâmica de notícias com:
  - Título, descrição, imagem, autor e data de publicação
  - Texto completo formatado em HTML
  - Categoria (Filmes, Séries, Quadrinhos, Games)
- Página de detalhe da notícia

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/         → componentes reutilizáveis
│   ├── pages/              → páginas de listagem e detalhe
│   └── models/             → interfaces de dados (Article, Comentary)
├── assets/                 → imagens e estilos
└── environments/           → variáveis de ambiente
```

## ▶️ Como rodar localmente

```bash
git clone https://github.com/fellipedoprado/angular-blog.git
cd angular-blog
npm install
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

## 📄 Licença

MIT © [Fellipe do Prado Arruda](https://github.com/fellipedoprado)
