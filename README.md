[English](#hero-battle) / [Português](#batalha-de-heróis)

---

# Hero Battle

This project is a React application created with Vite that allows you to search and compare heroes. The project uses Tailwind CSS for styling and Material-UI for UI components such as modals.

## Features

- Search for heroes by name.
- Display a list of filtered heroes.
- Select heroes for a battle.
- Determine the winning hero based on power stats.
- Display the winning hero in a modal.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/xLucasSA/heroes-battle.git
    ```

2. Navigate to the project directory:

    ```bash
    cd hero-battle
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

## Running the Project

1. Start the development server:

    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:5173` to see the application running.

## Project Structure

- `src/`
  - `components/`: Contains all the React components used in the project.
    - `HeroCard.jsx`: Component to display hero information.
    - `HeroList.jsx`: Component to list the filtered heroes.
    - `SearchBar.jsx`: Component for the search bar.
    - `WinnerModal.jsx`: Component to display the winning hero.
  - `hooks/`: Contains custom hooks.
    - `useFetchHeroes.js`: Hook to fetch the list of heroes.
    - `useDebounce.js`: Hook to debounce the rendering of components.
  - `utils/`: Contains utility functions.
    - `determineWinner.js`: Function to determine the winning hero.
  - `App.jsx`: Main application component.
  - `index.css`: Global styles for the application.
  - `main.jsx`: Entry point for React.

## Customization

- **Tailwind CSS**: You can customize the styles by modifying the `tailwind.config.js` file and adding Tailwind CSS classes to your components.
- **Material-UI**: To customize Material-UI components, you can use the theming system provided by the library.

## Contribution

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

<br />
<br />

---

<br />
<br />

# Batalha de Heróis

Este projeto é uma aplicação React criada com Vite que permite buscar e comparar heróis. O projeto utiliza Tailwind CSS para o estilo e Material-UI para componentes de interface como modais.

## Funcionalidades

- Busca de heróis por nome.
- Exibição de uma lista de heróis filtrados.
- Seleção de heróis para uma batalha.
- Determinação do herói vencedor com base nos atributos de poder.
- Exibição do herói vencedor em um modal.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/xLucasSA/heroes-battle.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd hero-battle
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```

2. Abra o navegador e navegue até `http://localhost:5173` para ver a aplicação em execução.

## Estrutura do Projeto

- `src/`
  - `components/`: Contém todos os componentes React utilizados no projeto.
    - `HeroCard.jsx`: Componente para exibir informações de um herói.
    - `HeroList.jsx`: Componente para listar os heróis filtrados.
    - `SearchBar.jsx`: Componente para a barra de busca.
    - `WinnerModal.jsx`: Componente para exibir o herói vencedor.
  - `hooks/`: Contém hooks customizados.
    - `useDebounce.js`: Hook para atrasar a renderização dos componentes
    - `useFetchHeroes.js`: Hook para buscar a lista de heróis.
  - `utils/`: Contém funções utilitárias.
    - `determineWinner.js`: Função para determinar o herói vencedor.
  - `App.jsx`: Componente principal da aplicação.
  - `index.css`: Estilos globais da aplicação.
  - `main.jsx`: Ponto de entrada do React.

## Personalização

- **Tailwind CSS**: Você pode personalizar os estilos modificando o arquivo `tailwind.config.js` e adicionando classes Tailwind CSS aos seus componentes.
- **Material-UI**: Para customizar os componentes Material-UI, você pode utilizar o sistema de temas fornecido pela biblioteca.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
