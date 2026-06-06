---

title: "Guia Completo do Git para Desenvolvedores"
date: "2026-06-04"
summary: "Aprenda os principais conceitos e comandos do Git utilizados diariamente por equipes profissionais de desenvolvimento."
cover: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb"

---
# Guia Completo do Git para Desenvolvedores

![Git](https://images.unsplash.com/photo-1618401471353-b98afee0b2eb)

## Introdução

O Git é o sistema de controle de versão mais utilizado no mundo. Ele permite registrar alterações no código-fonte, trabalhar em equipe de forma organizada e manter um histórico completo das modificações realizadas em um projeto.

Atualmente praticamente todas as empresas de tecnologia utilizam Git em conjunto com plataformas como GitHub, GitLab ou Bitbucket.

Neste guia serão apresentados os principais conceitos e comandos utilizados diariamente por desenvolvedores.

---

## O que é Controle de Versão?

Controle de versão é o processo de registrar alterações em arquivos ao longo do tempo.

Com Git você consegue:

* Voltar para versões anteriores.
* Trabalhar em equipe.
* Criar funcionalidades isoladas.
* Corrigir bugs sem afetar produção.
* Manter histórico completo das alterações.

---

## O que é uma Branch?

Uma branch é uma linha independente de desenvolvimento.

Imagine que a branch `main` representa a versão estável do sistema.

Ao iniciar uma nova funcionalidade você pode criar uma branch separada:

```bash
git checkout -b feature/login
```

Dessa forma você desenvolve sem afetar a versão principal da aplicação.

Em equipes profissionais é comum existir:

```txt
main
develop
feature/*
hotfix/*
release/*
```

Essa organização reduz conflitos e facilita o fluxo de entrega.

---

# Configurando SSH

Uma das primeiras configurações recomendadas é a criação de uma chave SSH. Ela permite autenticar sua máquina sem precisar informar usuário e senha constantemente.

## Gerando a chave

```bash
ssh-keygen -t rsa
```

O terminal solicitará:

```txt
Enter file in which to save the key
Enter passphrase
Enter same passphrase again
```

Caso seja uma máquina pessoal, você pode simplesmente pressionar ENTER em todas as etapas.

---

## Obtendo a chave pública

Após a geração da chave:

```bash
cat ~/.ssh/id_rsa.pub
```

Copie todo o conteúdo retornado.

---

## Configurando no GitHub

Acesse:

```txt
Settings
→ SSH and GPG Keys
→ New SSH Key
```

Cole a chave copiada anteriormente.

A partir desse momento sua máquina poderá autenticar utilizando SSH.

---

# Configurando Usuário

Todo commit possui um autor.

Configure seu nome:

```bash
git config --global user.name "Seu Nome"
```

Configure seu e-mail:

```bash
git config --global user.email "seu@email.com"
```

Verifique:

```bash
git config --list
```

---

# Clonando um Repositório

Para baixar um projeto existente:

```bash
git clone git@github.com:usuario/repositorio.git
```

ou

```bash
git clone https://github.com/usuario/repositorio.git
```

Após o clone:

```bash
cd repositorio
```

---

# Verificando Alterações

Para visualizar o estado atual dos arquivos:

```bash
git status
```

Esse é provavelmente o comando mais utilizado do Git.

Ele mostra:

* Arquivos modificados
* Arquivos criados
* Arquivos removidos
* Arquivos preparados para commit

---

# Adicionando Arquivos

Adicionar todos os arquivos modificados:

```bash
git add .
```

Adicionar apenas um arquivo:

```bash
git add src/app.ts
```

O comando `add` move as alterações para a área de staging.

---

# Criando um Commit

Após selecionar os arquivos:

```bash
git commit -m "Adiciona tela de login"
```

Boas mensagens de commit:

```txt
feat: adiciona autenticação JWT
fix: corrige erro de validação
refactor: simplifica camada de serviços
docs: atualiza documentação
```

---

# Enviando Alterações

Enviar para o servidor remoto:

```bash
git push
```

Primeiro push de uma branch:

```bash
git push -u origin feature/login
```

---

# Atualizando o Projeto

Baixar alterações do servidor:

```bash
git pull
```

Buscar sem aplicar:

```bash
git fetch
```

---

# Mudando de Branch

Listar branches:

```bash
git branch
```

Trocar de branch:

```bash
git checkout develop
```

Criar e trocar simultaneamente:

```bash
git checkout -b feature/dashboard
```

Ou utilizando a sintaxe moderna:

```bash
git switch -c feature/dashboard
```

---

# Visualizando Histórico

```bash
git log
```

Versão resumida:

```bash
git log --oneline
```

Exemplo:

```txt
c0a12b4 feat: login social
9d1a32f fix: validação de formulário
7f2e4ab docs: atualiza README
```

---

# Desfazendo Alterações

Descartar alterações locais:

```bash
git restore .
```

Remover um arquivo do staging:

```bash
git restore --staged arquivo.ts
```

Voltar para um commit específico:

```bash
git reset --hard HASH
```

Utilize esse comando com cuidado.

---

# Fluxo Mais Comum do Dia a Dia

```bash
git pull

git checkout -b feature/nova-feature

# desenvolvimento...

git add .

git commit -m "feat: nova funcionalidade"

git push -u origin feature/nova-feature
```

Depois basta abrir um Pull Request para revisão.

---

# Conclusão

Dominar Git é obrigatório para qualquer desenvolvedor profissional. Embora existam dezenas de comandos avançados, a maior parte do trabalho diário pode ser realizada dominando os conceitos de branches, commits, pull, push e merge.

Quanto maior o projeto e a equipe, mais importante se torna uma boa estratégia de versionamento. Investir tempo aprendendo Git traz ganhos diretos em produtividade, colaboração e segurança durante o desenvolvimento.
