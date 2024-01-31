Efood App (Em Construção)
Bem-vindo ao Efood App, um projeto fictício inspirado em aplicativos de delivery de comida, como iFood. Este aplicativo está atualmente em construção e faz parte do projeto final necessário para a conclusão de uma etapa do curso.

Funcionalidades
Listagem de Restaurantes: Explore uma variedade de restaurantes, cada um com seu cardápio exclusivo.

Detalhes do Prato: Descubra detalhes sobre cada prato oferecido, incluindo descrições, preços e avaliações.

Simulação de Pagamento: Experimente a funcionalidade de simulação de pagamento para tornar a experiência do usuário mais próxima da realidade.

Tecnologias Utilizadas
React: A biblioteca JavaScript para construção de interfaces de usuário, proporcionando uma experiência de usuário rápida e interativa.

Redux e Redux Toolkit Query: Gerenciamento de estado eficiente para controlar o fluxo de dados na aplicação e Redux Toolkit Query para integração fácil com APIs.

React Router Dom: Roteamento de página para uma navegação suave e dinâmica entre as seções do aplicativo.

API de Pagamento: Integração com uma API de pagamento simulada para proporcionar a experiência de simulação de pagamento.

Como Executar
Clone este repositório: git clone https://github.com/seu-usuario/efood-app.git
Instale as dependências: npm install
Inicie o aplicativo: npm start
Sinta-se à vontade para explorar e experimentar o Efood App!

Contribuições
Contribuições são bem-vindas! Se você tem sugestões de melhorias ou encontrou algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Nota: Este projeto está em construção e faz parte do projeto final avaliado pela equipe de tutores da EBAC como requisito para a aprovação em uma das etapas do curso.

Apreciamos o seu interesse no Efood App!



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
