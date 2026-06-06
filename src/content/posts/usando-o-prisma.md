---

title: "Prisma ORM: Trabalhando com Banco de Dados de Forma Moderna"
date: "2026-06-04"
summary: "Aprenda a configurar e utilizar o Prisma ORM em aplicações Node.js e TypeScript, simplificando o acesso ao banco de dados com tipagem forte e excelente experiência para desenvolvedores."
cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
---
# Prisma ORM: Trabalhando com Banco de Dados de Forma Moderna

![Prisma ORM](https://images.unsplash.com/photo-1555949963-aa79dcee981c)

## Introdução

O Prisma é atualmente um dos ORMs mais populares do ecossistema Node.js. Ele oferece uma abordagem moderna para acesso a banco de dados, combinando produtividade, segurança de tipos e excelente experiência de desenvolvimento.

Diferente de ORMs tradicionais, o Prisma gera automaticamente tipos TypeScript com base na estrutura do banco de dados, reduzindo erros e aumentando a produtividade da equipe.

Neste artigo aprenderemos a configurar o Prisma do zero utilizando PostgreSQL.

---

## O que é um ORM?

ORM significa:

**Object Relational Mapping**

Sua função é permitir que tabelas do banco de dados sejam manipuladas através de objetos e métodos da linguagem de programação.

Sem ORM:

```sql
SELECT * FROM users;
```

Com Prisma:

```ts
const users = await prisma.user.findMany();
```

Essa abstração torna o código mais legível e fácil de manter.

---

## Criando o Projeto

Inicialize um projeto Node.js:

```bash
npm init -y
```

Instale o TypeScript:

```bash
npm install typescript tsx -D
```

Crie o arquivo de configuração:

```bash
npx tsc --init
```

---

## Instalando o Prisma

Instale as dependências necessárias:

```bash
npm install prisma
```

```bash
npm install @prisma/client
```

A primeira dependência contém as ferramentas de desenvolvimento.

A segunda será utilizada pela aplicação em tempo de execução.

---

## Inicializando o Prisma

Execute:

```bash
npx prisma init
```

O Prisma criará a estrutura:

```txt
prisma/
 └── schema.prisma

.env
```

---

## Configurando o Banco de Dados

No arquivo `.env`:

```env
DATABASE_URL="postgresql://postgres:senha@localhost:5432/app"
```

Substitua os valores conforme seu ambiente.

---

## Entendendo o Schema

O arquivo principal do Prisma é:

```txt
prisma/schema.prisma
```

Exemplo:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

---

## Criando a Primeira Tabela

Adicione o model:

```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}
```

Esse model representa a tabela de usuários.

---

## Criando a Migration

Após definir os models:

```bash
npx prisma migrate dev --name create_users
```

O Prisma irá:

* Criar a migration.
* Atualizar o banco.
* Gerar os tipos TypeScript.

---

## Gerando o Client

Caso necessário:

```bash
npx prisma generate
```

Esse comando gera o Prisma Client utilizado pela aplicação.

---

## Criando a Instância do Prisma

Crie:

```txt
src/lib/prisma.ts
```

```ts
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();
```

Agora toda a aplicação poderá reutilizar essa conexão.

---

## Inserindo Dados

Criar usuário:

```ts
const user = await prisma.user.create({
  data: {
    name: 'Weliton Sousa',
    email: 'weliton@email.com',
  },
});
```

Resultado:

```json
{
  "id": "uuid",
  "name": "Weliton Sousa",
  "email": "weliton@email.com"
}
```

---

## Buscando Dados

Buscar todos:

```ts
const users = await prisma.user.findMany();
```

Buscar apenas um:

```ts
const user = await prisma.user.findUnique({
  where: {
    email: 'weliton@email.com',
  },
});
```

---

## Atualizando Registros

```ts
await prisma.user.update({
  where: {
    id: userId,
  },
  data: {
    name: 'Novo Nome',
  },
});
```

---

## Removendo Registros

```ts
await prisma.user.delete({
  where: {
    id: userId,
  },
});
```

---

## Relacionamentos

Um usuário possui vários posts:

```prisma
model User {
  id    String @id @default(uuid())
  name  String
  posts Post[]
}

model Post {
  id       String @id @default(uuid())
  title    String
  userId   String

  user User @relation(fields: [userId], references: [id])
}
```

O Prisma gera automaticamente todos os tipos relacionados.

---

## Consultas com Relacionamentos

```ts
const users = await prisma.user.findMany({
  include: {
    posts: true,
  },
});
```

Resultado:

```json
[
  {
    "id": "1",
    "name": "Weliton",
    "posts": [...]
  }
]
```

---

## Boas Práticas

### Utilize migrations

Nunca altere tabelas manualmente em produção.

Sempre utilize:

```bash
npx prisma migrate dev
```

---

### Centralize a instância

Utilize apenas um Prisma Client para toda aplicação.

---

### Evite consultas desnecessárias

Utilize:

```ts
select
```

quando precisar de poucos campos.

Exemplo:

```ts
const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
  },
});
```

---

## Quando Utilizar Prisma?

O Prisma é excelente para:

* APIs REST
* Aplicações SaaS
* Backends em Node.js
* Sistemas corporativos
* Projetos TypeScript

Principalmente quando produtividade e segurança de tipos são prioridades.

---

## Conclusão

O Prisma transformou a forma como aplicações Node.js interagem com bancos de dados relacionais. Sua integração com TypeScript, sistema de migrations e geração automática de tipos tornam o desenvolvimento muito mais produtivo e seguro.

Para novos projetos Node.js, Prisma é atualmente uma das melhores opções disponíveis para acesso a dados, oferecendo uma excelente combinação entre simplicidade, performance e manutenibilidade.
