---

title: "Personalizando o Windows Terminal com Oh My Posh"
date: "2026-06-04"
summary: "Transforme o Windows Terminal em um ambiente moderno e produtivo utilizando PowerShell, Oh My Posh, Nerd Fonts e integração com Git."
cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"

---

# Personalizando o Windows Terminal com Oh My Posh

![Windows Terminal](https://images.unsplash.com/photo-1515879218367-8466d910aaa4)

## Introdução

O terminal é uma das ferramentas mais utilizadas por desenvolvedores no dia a dia.

Apesar disso, a instalação padrão do Windows oferece uma experiência bastante limitada quando comparada ao ambiente encontrado em distribuições Linux ou no macOS.

Felizmente, com algumas ferramentas gratuitas, é possível transformar completamente a aparência e a produtividade do terminal.

Neste artigo vamos configurar:

* Windows Terminal
* PowerShell
* Oh My Posh
* Nerd Fonts
* Integração com Git
* Temas modernos

O resultado será um terminal profissional, semelhante ao utilizado por desenvolvedores que trabalham diariamente com DevOps, Backend, Flutter, Node.js e outras tecnologias modernas.

---

## Instalando o Windows Terminal

O primeiro passo é instalar o Windows Terminal.

Através do Winget:

```bash
winget install Microsoft.WindowsTerminal
```

Ou diretamente pela Microsoft Store.

Após a instalação, defina o Windows Terminal como terminal padrão do sistema.

---

## Atualizando o PowerShell

Verifique a versão instalada:

```powershell
$PSVersionTable
```

Caso esteja utilizando uma versão antiga, atualize:

```bash
winget install Microsoft.PowerShell
```

Feche e abra o terminal novamente.

Verifique a instalação:

```powershell
pwsh
```

---

## Instalando o Oh My Posh

O Oh My Posh é responsável por toda a personalização visual do terminal.

Instale utilizando:

```bash
winget install JanDeDobbeleer.OhMyPosh
```

Após a instalação:

```powershell
oh-my-posh version
```

Se o comando retornar a versão instalada, tudo está funcionando corretamente.

---

## Instalando uma Nerd Font

Os temas do Oh My Posh utilizam diversos ícones especiais.

Para que esses ícones sejam exibidos corretamente é necessário instalar uma Nerd Font.

Uma das mais utilizadas atualmente é:

```txt
MesloLGS Nerd Font
```

Faça o download:

```txt
https://www.nerdfonts.com/font-downloads
```

Instale a fonte normalmente no Windows.

---

## Configurando a Fonte

Abra:

```txt
Windows Terminal
→ Settings
→ Profiles
→ Defaults
→ Appearance
```

Selecione:

```txt
MesloLGS Nerd Font
```

ou qualquer outra Nerd Font instalada.

Após essa configuração os ícones dos temas serão exibidos corretamente.

---

## Configurando o Perfil do PowerShell

Localize o arquivo de perfil:

```powershell
$PROFILE
```

Caso ele não exista:

```powershell
New-Item -Path $PROFILE -Type File -Force
```

Abra o arquivo:

```powershell
notepad $PROFILE
```

---

## Ativando o Oh My Posh

Adicione ao perfil:

```powershell
oh-my-posh init pwsh | Invoke-Expression
```

Salve o arquivo.

Reinicie o terminal.

Você já perceberá alterações visuais.

---

## Escolhendo um Tema

Listar temas disponíveis:

```powershell
Get-PoshThemes
```

O retorno será semelhante a:

```txt
jandedobbeleer.omp.json
atomic.omp.json
paradox.omp.json
powerlevel10k_rainbow.omp.json
```

---

## Aplicando um Tema

Exemplo utilizando o tema Atomic:

```powershell
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\atomic.omp.json" | Invoke-Expression
```

Adicione essa linha ao arquivo:

```txt
$PROFILE
```

para manter a configuração permanente.

---

## Tema Recomendado

Meu favorito para desenvolvimento é:

```txt
powerlevel10k_rainbow
```

Configuração:

```powershell
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json" | Invoke-Expression
```

Esse tema exibe:

* Branch Git
* Status do repositório
* Linguagem atual
* Diretório atual
* Tempo de execução
* Status do comando anterior

Tudo de forma extremamente organizada.

---

## Instalando Git

Caso ainda não possua Git:

```bash
winget install Git.Git
```

Verifique:

```bash
git --version
```

---

## Integração com Git

O Oh My Posh detecta automaticamente:

* Branch atual
* Alterações pendentes
* Commits não enviados
* Estado do repositório

Exemplo:

```txt
 feature/login
```

Isso facilita muito o trabalho diário.

---

## Instalando Ícones Extras

Para melhorar ainda mais a experiência:

```powershell
Install-Module -Name Terminal-Icons -Repository PSGallery
```

Importe no perfil:

```powershell
Import-Module Terminal-Icons
```

Agora o comando:

```powershell
ls
```

exibirá ícones personalizados.

---

## Melhorando o Autocomplete

Instale o módulo:

```powershell
Install-Module PSReadLine
```

Adicione ao perfil:

```powershell
Set-PSReadLineOption -PredictionSource History
```

Agora sugestões aparecerão automaticamente conforme você digita.

---

## Exemplo Completo de Perfil

Arquivo:

```txt
$PROFILE
```

Conteúdo:

```powershell
Import-Module Terminal-Icons

Set-PSReadLineOption -PredictionSource History

oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\powerlevel10k_rainbow.omp.json" | Invoke-Expression
```

---

## Resultado Final

Após concluir todas as etapas você terá:

* Terminal moderno.
* Ícones personalizados.
* Integração com Git.
* Autocomplete inteligente.
* Temas profissionais.
* Melhor experiência de desenvolvimento.

Tudo isso sem custo e utilizando ferramentas amplamente adotadas pela comunidade.

---

## Boas Práticas

### Mantenha os módulos atualizados

Atualizar módulos:

```powershell
Update-Module
```

---

### Faça backup do perfil

Salve uma cópia do:

```txt
$PROFILE
```

em um repositório Git.

---

### Utilize Nerd Fonts

Grande parte dos problemas visuais ocorre porque a fonte correta não está instalada.

---

## Conclusão

Uma boa configuração de terminal impacta diretamente na produtividade do desenvolvedor. O conjunto Windows Terminal + PowerShell + Oh My Posh oferece uma experiência moderna, agradável e extremamente eficiente para o desenvolvimento de aplicações, administração de servidores e automação de tarefas.

Investir alguns minutos nessa configuração é algo que você utilizará diariamente durante toda sua carreira como desenvolvedor.
