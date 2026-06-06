---

title: "Montando uma API com Fastify e TypeScript"
date: "2026-06-04"
summary: "Aprenda a criar uma API moderna utilizando Fastify e TypeScript, configurando o ambiente do zero e entendendo os conceitos fundamentais para aplicações escaláveis."
cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
---

# Montando uma API com Fastify e TypeScript

![Servidor Node.js](https://images.unsplash.com/photo-1558494949-ef010cbdcc31)

## Introdução

O Fastify é um framework para Node.js focado em performance, baixo consumo de recursos e excelente experiência para desenvolvedores. Sua arquitetura baseada em plugins facilita a criação de aplicações escaláveis e organizadas. O projeto possui suporte nativo ao TypeScript e utiliza o logger Pino por padrão.

Neste tutorial construiremos uma API simples utilizando TypeScript e Fastify, preparando uma base sólida para aplicações REST modernas.

---

## Criando o projeto

Crie uma pasta para o projeto e inicialize o Node.js:

```bash
npm init -y
```

Esse comando gera o arquivo `package.json`, responsável pelo gerenciamento das dependências e scripts da aplicação.

---

## Instalando o TypeScript

Instale o TypeScript como dependência de desenvolvimento:

```bash
npm i typescript -D
```

O TypeScript adiciona tipagem estática ao JavaScript, aumentando a produtividade e reduzindo erros durante o desenvolvimento.

---

## Instalando o TSX

Para executar arquivos TypeScript sem precisar compilá-los manualmente:

```bash
npm i tsx -D
```

O TSX oferece recarregamento automático e simplifica o fluxo de desenvolvimento.

---

## Instalando o Fastify

Agora instale o framework principal:

```bash
npm i fastify
```

O Fastify é reconhecido por sua alta performance, arquitetura baseada em plugins e excelente integração com TypeScript.

---

## Habilitando CORS

Para permitir requisições de aplicações frontend:

```bash
npm i @fastify/cors
```

O plugin de CORS permite controlar quais origens podem acessar sua API.

---

## Configurando o TypeScript

Inicialize o arquivo de configuração:

```bash
npx tsc --init
```

Depois altere o `tsconfig.json`:

```json
{
  "target": "ES2022"
}
```

Utilizar versões mais recentes do JavaScript garante acesso a recursos modernos da linguagem.

---

## Criando o script de desenvolvimento

No arquivo `package.json`, adicione:

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts"
  }
}
```

Esse script ficará observando alterações no código e reiniciará automaticamente o servidor.

---

## Estrutura do projeto

```txt
src/
└── server.ts
```

Crie o arquivo:

```bash
mkdir src
touch src/server.ts
```

---

## Criando o servidor

No arquivo `src/server.ts`:

```ts
import Fastify from 'fastify';
import cors from '@fastify/cors';

async function main() {
  const server = Fastify({
    logger: true,
  });

  await server.register(cors, {
    origin: true,
  });

  server.get('/', async () => {
    return {
      hello: 'world',
    };
  });

  await server.listen({
    port: 3000,
  });
}

main();
```

### O que esse código faz?

* Cria uma instância do Fastify.
* Habilita logs automáticos.
* Registra o plugin de CORS.
* Cria uma rota GET.
* Inicializa o servidor na porta 3000.

---

## Executando a aplicação

Inicie o servidor:

```bash
npm run dev
```

Você verá algo semelhante a:

```txt
Server listening at http://127.0.0.1:3000
```

---

## Testando a API

Abra:

```txt
http://localhost:3000
```

Resposta:

```json
{
  "hello": "world"
}
```

---

## Próximos passos

Agora que a API está funcionando, você pode evoluir o projeto adicionando:

* Prisma ORM
* PostgreSQL
* Validação com Zod
* Swagger/OpenAPI
* Autenticação JWT
* Testes automatizados

Esses recursos transformam uma API simples em uma aplicação pronta para produção.

---

## Conclusão

O Fastify é uma excelente alternativa para projetos Node.js que exigem alta performance, organização e escalabilidade. Com poucas dependências já é possível construir APIs modernas, seguras e preparadas para crescer conforme a necessidade do projeto.
