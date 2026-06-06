---

title: "Gerenciando Múltiplas Versões do Flutter com FVM"
date: "2026-06-04"
summary: "Aprenda a utilizar o Flutter Version Management (FVM) para gerenciar múltiplas versões do Flutter em seus projetos, evitando conflitos entre equipes e garantindo ambientes de desenvolvimento consistentes."
cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"

---

# Gerenciando Múltiplas Versões do Flutter com FVM

![Flutter Development](https://images.unsplash.com/photo-1555949963-aa79dcee981c)

## Introdução

Quem trabalha com Flutter há algum tempo inevitavelmente encontra um problema comum: diferentes projetos exigem versões diferentes do SDK.

Imagine o seguinte cenário:

* Projeto A utiliza Flutter 3.35
* Projeto B utiliza Flutter 3.29
* Projeto C ainda está preso em uma versão mais antiga

Sem uma ferramenta de gerenciamento de versões, você precisaria atualizar e fazer downgrade do Flutter constantemente, o que gera perda de produtividade e diversos problemas de compatibilidade.

É exatamente para resolver esse problema que existe o **FVM (Flutter Version Management)**.

O FVM permite instalar múltiplas versões do Flutter na mesma máquina e definir qual versão cada projeto deve utilizar.

---

## O que é o FVM?

O FVM é uma ferramenta de gerenciamento de versões semelhante ao:

* NVM para Node.js
* SDKMAN para Java
* Pyenv para Python

Seu objetivo é permitir que cada projeto utilize sua própria versão do Flutter sem interferir nos demais.

Benefícios:

* Evita conflitos de versão.
* Facilita trabalho em equipe.
* Simplifica upgrades.
* Permite testar novas versões com segurança.
* Garante ambientes reproduzíveis.

---

## Instalando o FVM

A forma mais simples é utilizando o Dart:

```bash
dart pub global activate fvm
```

Após a instalação, adicione o diretório global ao PATH.

No macOS ou Linux:

```bash
export PATH="$PATH:$HOME/.pub-cache/bin"
```

Adicione essa linha ao:

```txt
~/.zshrc
```

ou

```txt
~/.bashrc
```

Após isso:

```bash
source ~/.zshrc
```

ou

```bash
source ~/.bashrc
```

---

## Verificando a Instalação

Confirme que tudo está funcionando:

```bash
fvm --version
```

Resultado esperado:

```txt
3.x.x
```

---

## Instalando uma Versão do Flutter

Instalar uma versão específica:

```bash
fvm install 3.35.0
```

Instalar a versão estável mais recente:

```bash
fvm install stable
```

Instalar uma versão beta:

```bash
fvm install beta
```

O FVM fará o download do SDK e armazenará localmente.

---

## Listando Versões Instaladas

```bash
fvm list
```

Exemplo:

```txt
Cache Directory: ~/.fvm

Flutter SDKs:

3.29.0
3.35.0
stable
```

---

## Configurando um Projeto

Dentro do projeto:

```bash
cd meu-projeto
```

Defina a versão desejada:

```bash
fvm use 3.35.0
```

Será criado:

```txt
.fvm/
```

e

```txt
.fvmrc
```

Esses arquivos identificam qual versão do Flutter aquele projeto utiliza.

---

## Executando Comandos Flutter

Em vez de:

```bash
flutter run
```

Utilize:

```bash
fvm flutter run
```

Da mesma forma:

```bash
fvm flutter pub get
```

```bash
fvm flutter test
```

```bash
fvm flutter build apk
```

```bash
fvm flutter build ios
```

Isso garante que o comando será executado usando a versão correta.

---

## Criando Novos Projetos

Criar projeto utilizando uma versão específica:

```bash
fvm flutter create meu_app
```

ou

```bash
fvm use stable

fvm flutter create meu_app
```

O projeto já nascerá configurado para utilizar o FVM.

---

## Configurando VSCode

Abra:

```txt
.vscode/settings.json
```

Adicione:

```json
{
  "dart.flutterSdkPath": ".fvm/flutter_sdk"
}
```

Agora o VSCode utilizará automaticamente a versão correta.

---

## Configurando Android Studio

Abra:

```txt
Settings
→ Languages & Frameworks
→ Flutter
```

Defina:

```txt
.fvm/flutter_sdk
```

como SDK do Flutter.

---

## Compartilhando com a Equipe

Versione:

```txt
.fvmrc
```

Exemplo:

```json
{
  "flutter": "3.35.0"
}
```

Quando outro desenvolvedor clonar o projeto:

```bash
fvm install
```

O SDK correto será instalado automaticamente.

---

## Atualizando Versões

Instale uma nova versão:

```bash
fvm install 3.36.0
```

Atualize o projeto:

```bash
fvm use 3.36.0
```

Verifique se tudo continua funcionando:

```bash
fvm flutter test
```

```bash
fvm flutter analyze
```

---

## Removendo Versões

Listar versões:

```bash
fvm list
```

Remover:

```bash
fvm remove 3.29.0
```

Isso libera espaço em disco.

---

## Boas Práticas

### Sempre versione o .fvmrc

Isso garante que todos os membros da equipe utilizem exatamente a mesma versão.

---

### Nunca utilize Flutter global em projetos FVM

Prefira sempre:

```bash
fvm flutter
```

em vez de:

```bash
flutter
```

---

### Automatize no CI/CD

Em pipelines:

```bash
fvm install

fvm flutter pub get

fvm flutter test
```

Isso garante consistência entre ambiente local e produção.

---

## Quando Utilizar FVM?

O FVM é recomendado para:

* Qualquer projeto Flutter profissional.
* Equipes com múltiplos desenvolvedores.
* Aplicações legadas.
* Projetos que precisam de estabilidade.
* Empresas que mantêm vários aplicativos simultaneamente.

Na prática, após começar a utilizar FVM, torna-se difícil voltar ao gerenciamento manual de versões.

---

## Conclusão

O FVM é uma das ferramentas mais importantes para quem trabalha profissionalmente com Flutter. Ele elimina conflitos entre versões do SDK, melhora a colaboração em equipe e garante que cada projeto utilize exatamente a versão para a qual foi desenvolvido.

Se você trabalha com mais de um projeto Flutter, utilizar FVM deixa de ser uma conveniência e passa a ser uma necessidade.
