---

title: "Customizando o terminal do MAC"
date: "2026-06-04"
summary: "Neste tutorial iremos instalar o ZSH, o Oh My Zsh e alguns plugins para ajudar no dia a dia."
cover: "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2023/12/macbook-terminal-list.jpg?w=1600&h=900&fit=crop"
---

# Customizando o terminal do MAC

![Terminal macOS](https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2023/12/macbook-terminal-list.jpg?w=1600&h=900&fit=crop)

O terminal é uma das ferramentas mais utilizadas por desenvolvedores. Pequenas melhorias podem aumentar significativamente a produtividade durante tarefas comuns como Git, SSH, Node.js, Flutter e gerenciamento de servidores.

Neste tutorial vamos configurar:

* ZSH
* Oh My Zsh
* Tema Dracula
* Fonte FiraCode
* Plugins de autocomplete
* Syntax Highlighting

---

## Instalando o ZSH

Caso ainda não possua o ZSH instalado:

```bash
brew install zsh
```

---

## Definindo o ZSH como shell padrão

### Apple Silicon (M1, M2, M3...)

```bash
chsh -s $(which zsh)
```

### Intel

```bash
chsh -s /usr/local/bin/zsh
```

Após executar o comando correspondente ao seu processador, feche e abra o terminal novamente.

---

## Instalando o Oh My Zsh

O Oh My Zsh é um framework open source que facilita a personalização do terminal através de temas, plugins e atalhos extremamente úteis para o dia a dia.

A partir deste momento, todas as configurações do terminal deverão ser realizadas no arquivo:

```txt
~/.zshrc
```

Instalação:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

---

## Baixe o tema Dracula (Opcional)

O Dracula é um dos temas mais populares entre desenvolvedores. Ele oferece uma paleta de cores agradável e reduz o cansaço visual durante longos períodos de uso.

Download:

```txt
https://github.com/dracula/terminal-app/archive/master.zip
```

Após baixar:

```txt
Terminal → Ajustes → Importar
```

Importe o arquivo e defina-o como tema padrão.

---

## Baixe a fonte FiraCode (Opcional)

A FiraCode é uma fonte criada especificamente para programação e possui ligaduras que tornam diversos operadores mais legíveis durante a leitura de código.

Download:

```txt
https://github.com/tonsky/FiraCode/releases
```

Após instalar:

```txt
Terminal → Ajustes → Perfis → Texto → Fonte
```

Selecione a fonte FiraCode.

---

## Plugins

Utilizo alguns plugins extremamente úteis que ajudam com autocomplete, sugestões automáticas e destaque de sintaxe.

Para gerenciar esses plugins vamos utilizar o ZInit.

Instalação:

```bash
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
```

---

## Configurando os Plugins

Abra:

```txt
~/.zshrc
```

Adicione as seguintes linhas:

```bash
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

O que cada plugin faz:

### fast-syntax-highlighting

Destaca comandos digitados em tempo real, facilitando a identificação de erros de sintaxe.

### zsh-autosuggestions

Sugere comandos com base no histórico de execução enquanto você digita.

### zsh-completions

Adiciona milhares de autocompletes para ferramentas populares como:

* Git
* Node.js
* Yarn
* NPM
* Homebrew
* Docker

Bastando pressionar `TAB` para completar comandos.

Após salvar o arquivo:

```bash
source ~/.zshrc
```

---

## VSCode (Opcional)

Caso o terminal integrado do VSCode não esteja utilizando o ZSH, adicione a seguinte configuração:

```json
"terminal.integrated.shell.osx": "/bin/zsh"
```

---

## Resultado Final

Ao concluir todas as etapas você terá:

* Terminal mais bonito.
* Tema Dracula.
* Fonte FiraCode.
* Sugestões automáticas.
* Autocomplete avançado.
* Destaque de sintaxe.
* Melhor experiência de desenvolvimento.

Uma configuração simples que melhora bastante a produtividade durante o desenvolvimento diário.
