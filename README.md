# Desafio - Frontend

Este projeto é o **frontend** da aplicação de integração com LLMs, desenvolvido em **Next.js**. Ele consome diretamente a API do backend, que está hospedada no **Koyeb**.

## Como Executar Localmente

### **Pré-requisitos**
- **Node.js** instalado (recomenda-se a versão LTS)
- **NPM** ou **Yarn** para gerenciar pacotes

### **Passos para Rodar o Projeto**

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/frontend-desafio.git
   cd frontend-desafio
   ```

2. Instale as dependências do projeto:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

4. O projeto estará acessível em:
   ```
   http://localhost:3000
   ```

## API do Backend
O frontend se comunica com o backend, que está disponível em:
```
https://hon-aleen-marcos-paulo-453ea20b.koyeb.app
```
Basta adicionar a rota desejada ao final do link.

Exemplo:
```
https://hon-aleen-marcos-paulo-453ea20b.koyeb.app/api/poema-nordeste
```

## Deploy
O projeto está atualmente hospedado no **Vercel** e pode ser acessado em:
```
https://front-desafio-delta.vercel.app/
```

## Estrutura do Projeto
O projeto foi inicialmente gerado com **bolt.new**, seguindo a estrutura padrão do **Next.js**.

```
frontend-desafio/
│── public/              # Arquivos estáticos
│── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas principais
│   ├── styles/          # Estilos globais
│   ├── utils/           # Funções auxiliares
│── .gitignore
│── package.json
│── README.md
```

## Tecnologias Utilizadas
- **Next.js** (React Framework)
- **Styled Components** ou Tailwind (se aplicável)
- **Axios** para requisições HTTP
- **Vercel** para deploy

## Contato
Caso tenha dúvidas ou precise de suporte, entre em contato via [marcos.paulo.s.m.filho@gmail.com].
