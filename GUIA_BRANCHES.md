# Guia rapido de branches

Este projeto usa branches para separar versoes diferentes do mesmo codigo.

## Pasta do projeto

O codigo local fica em:

```powershell
C:\Users\Victor Hugo\Documents\Landin_Page_FastCell
```

Uma branch nao e uma pasta separada. Ela e uma versao do projeto dentro da mesma pasta.

Quando voce troca de branch, os arquivos dessa pasta mudam automaticamente para mostrar a versao daquela branch.

## Branch principal

A branch principal e:

```powershell
main
```

Use a `main` quando quiser mexer no projeto que ja esta em deploy.

Para entrar nela:

```powershell
cd "C:\Users\Victor Hugo\Documents\Landin_Page_FastCell"
git switch main
```

Para confirmar:

```powershell
git branch --show-current
```

Se aparecer `main`, voce esta mexendo no codigo principal.

## Branch de teste

A branch de teste criada para a nova versao e:

```powershell
codex/urgencia-prova-social
```

Use essa branch quando quiser mexer na versao nova, sem alterar diretamente o projeto em deploy.

Para entrar nela:

```powershell
cd "C:\Users\Victor Hugo\Documents\Landin_Page_FastCell"
git switch codex/urgencia-prova-social
```

Para confirmar:

```powershell
git branch --show-current
```

Se aparecer `codex/urgencia-prova-social`, voce esta mexendo na versao de teste.

## Antes de trocar de branch

Antes de trocar de branch, confira se existem alteracoes pendentes:

```powershell
git status
```

Se aparecer algo em vermelho ou verde, significa que existem arquivos modificados.

Nesse caso, voce pode salvar essas alteracoes com commit:

```powershell
git add .
git commit -m "Descreva aqui o que foi alterado"
```

Depois disso, pode trocar de branch com seguranca.

## Como visualizar o site localmente

Dentro da pasta do projeto, rode:

```powershell
python -m http.server 4187
```

Depois abra no navegador:

```text
http://localhost:4187
```

## Resumo rapido

```powershell
git switch main
```

Vai para o projeto principal/deploy.

```powershell
git switch codex/urgencia-prova-social
```

Vai para a versao nova/teste.

```powershell
git branch --show-current
```

Mostra em qual branch voce esta.
