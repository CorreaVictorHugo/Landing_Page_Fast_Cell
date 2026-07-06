# Design System Fast Cell — Dark Precision Commerce

## 1. Visão geral

Este design system foi criado a partir da engenharia reversa visual de uma landing page premium dark tech. A referência original usa produto grande, fundo escuro, tipografia limpa, grid espaçado e uma cor de destaque ácida aplicada com economia. A proposta abaixo transforma essa lógica em uma identidade original para a marca **Fast Cell**, uma loja/assistência especializada em peças e reparos de celulares.

O objetivo não é copiar a referência, mas adaptar os princípios visuais para uma marca própria: técnica, moderna, confiável e comercial.

---

## 2. Direção visual

### Nome da direção

**Dark Precision Commerce**

### Sensação transmitida

- Tecnologia de bancada
- Precisão técnica
- Atendimento profissional
- Produto/serviço premium
- Loja moderna, sem aparência genérica
- Confiança antes da venda

### Por que combina com Fast Cell

A Fast Cell trabalha com peças, reparos e componentes. Esse universo combina naturalmente com uma estética escura, técnica e precisa. Em vez de parecer uma loja comum de assistência, a marca passa a parecer um centro técnico especializado, com processo, qualidade e organização.

---

## 3. Princípios visuais

1. **Fundo escuro como base**  
   Cria sofisticação e coloca os produtos/serviços em destaque.

2. **Cor de destaque usada com economia**  
   O verde elétrico aparece em botões, detalhes, ícones e pequenos brilhos. Não deve dominar a interface.

3. **Tipografia grande e precisa**  
   Títulos com impacto, frases curtas e hierarquia clara.

4. **Cards técnicos**  
   Blocos escuros com borda sutil, ícones pequenos e textos objetivos.

5. **Imagens com intenção**  
   Usar mockups de celulares, peças, conectores, ferramentas e detalhes de bancada. Evitar imagens genéricas de pessoas sorrindo ou ícones muito artificiais.

6. **Mobile-first**  
   A experiência deve funcionar primeiro no celular, com botões grandes, seções empilhadas e leitura rápida.

---

## 4. Paleta de cores

### Cores principais

| Token | Hex | Uso |
|---|---:|---|
| `--bg-main` | `#070909` | Fundo principal |
| `--bg-section` | `#0D1010` | Fundo de seções |
| `--bg-card` | `#141818` | Cards e superfícies |
| `--bg-elevated` | `#1B2020` | Ícones, badges e áreas elevadas |
| `--text-main` | `#F4F5F2` | Títulos e textos principais |
| `--text-muted` | `#A5ABA6` | Parágrafos e textos secundários |
| `--text-low` | `#646B66` | Eyebrows, labels e textos de baixo contraste |
| `--brand` | `#B7F13B` | Cor principal de destaque |
| `--brand-dark` | `#6EA51E` | Hover, detalhes escuros e gradientes |
| `--line` | `rgba(255,255,255,0.07)` | Bordas discretas |

### Distribuição recomendada

- **70%** preto/cinza escuro: fundos, cards e seções.
- **20%** cinza/texto secundário: descrições, linhas e elementos neutros.
- **10%** verde elétrico: CTA, estados ativos, ícones e detalhes técnicos.

---

## 5. Tipografia

### Fontes sugeridas

- **Display:** Space Grotesk
- **Texto:** Inter
- **Fallback:** system-ui, sans-serif

### Escala tipográfica

| Token | Valor | Uso |
|---|---:|---|
| `--text-xs` | `0.72rem` | Labels e links pequenos |
| `--text-sm` | `0.875rem` | Textos curtos |
| `--text-base` | `1rem` | Parágrafos |
| `--text-lg` | `1.25rem` | Destaques |
| `--text-xl` | `1.75rem` | Subtítulos |
| `--text-2xl` | `clamp(2rem, 6vw, 4.5rem)` | Títulos de seção |
| `--text-hero` | `clamp(3rem, 12vw, 6.8rem)` | Título principal |

### Regras de uso

- Títulos devem ter pouco peso visual, entre 500 e 600.
- Usar `letter-spacing` negativo nos títulos grandes.
- Evitar blocos longos de texto.
- Preferir frases curtas e comerciais.

---

## 6. Espaçamento

### Escala

| Token | Valor |
|---|---:|
| `--space-1` | `0.25rem` |
| `--space-2` | `0.5rem` |
| `--space-3` | `0.75rem` |
| `--space-4` | `1rem` |
| `--space-5` | `1.5rem` |
| `--space-6` | `2rem` |
| `--space-7` | `3rem` |
| `--space-8` | `5rem` |
| `--space-9` | `7rem` |
| `--space-10` | `10rem` |

### Regras

- Padding lateral mobile: 20px a 24px.
- Padding lateral desktop: 48px a 72px.
- Espaço entre seções: 96px a 160px.
- Cards: 24px a 32px de padding interno.
- Hero deve ocupar quase uma tela inteira.

---

## 7. Grid

### Mobile

- Layout em uma coluna.
- Botões em largura total.
- Cards empilhados.
- Imagens grandes, mas controladas.

### Tablet

- Cards em duas colunas quando houver espaço.
- Hero ainda pode permanecer em uma coluna se a imagem for grande.

### Desktop

- Grid de 12 colunas.
- Container máximo de 1180px.
- Hero em duas colunas: texto à esquerda, visual à direita.
- Seções técnicas alternando texto e imagem.

---

## 8. Botões

### Botão primário

Uso: orçamento, WhatsApp, compra, contato direto.

Características:

- Fundo verde elétrico.
- Texto escuro.
- Altura mínima de 46px.
- Cantos quase retos.
- Hover com leve elevação.

### Botão secundário

Uso: navegar para serviços, ver detalhes, conhecer processo.

Características:

- Fundo escuro.
- Borda sutil.
- Texto claro.
- Aparência técnica e discreta.

---

## 9. Cards

### Card técnico

Uso: benefícios, serviços, diferenciais.

Características:

- Fundo escuro com gradiente discreto.
- Borda quase invisível.
- Ícone pequeno no topo.
- Título curto.
- Parágrafo de 1 a 2 linhas.

### Card de serviço

Uso: troca de tela, bateria, conector, diagnóstico.

Características:

- Número ou tag técnica.
- Título objetivo.
- Lista curta.
- CTA discreto.

---

## 10. Bordas e sombras

### Bordas

- Usar borda fina: `1px solid rgba(255,255,255,0.07)`.
- Evitar bordas muito claras.
- Cantos pouco arredondados: 2px a 14px.

### Sombras

- Sombras profundas e escuras.
- Não usar sombra colorida forte.
- O brilho da marca deve aparecer apenas como atmosfera leve.

---

## 11. Imagens

### Estilo recomendado

- Celulares em manutenção.
- Peças internas.
- Ferramentas de bancada.
- Conectores, telas, baterias e módulos.
- Mockups 3D ou imagens recortadas.
- Fundo escuro com luz lateral.

### Evitar

- Banco de imagem genérico.
- Pessoas sorrindo com celular na mão.
- Ícones muito infantis.
- Excesso de neon.
- Gradientes coloridos sem propósito.

---

## 12. Animações

### Animações permitidas

- Fade-in ao entrar na tela.
- Cards subindo levemente.
- Hover discreto em botões.
- Imagem principal com flutuação leve.
- Parallax suave em elementos visuais.

### Animações a evitar

- Movimento exagerado.
- Muitos elementos piscando.
- Scroll pesado.
- Carrossel automático agressivo.
- Efeitos que prejudiquem performance mobile.

---

## 13. Estrutura recomendada da landing page

1. Header fixo minimalista
2. Hero com CTA para orçamento
3. Barra de confiança
4. Serviços principais
5. Seção técnica com imagem grande
6. Processo em etapas
7. Diferenciais
8. FAQ
9. CTA final
10. Footer

---

## 14. Copywriting base para Fast Cell

### Tom de voz

- Direto
- Técnico sem ser difícil
- Comercial sem exagero
- Confiável
- Local e humano

### Exemplos

**Hero:**  
“Reparo técnico para celulares com peças testadas e processo claro.”

**Subtexto:**  
“Troca de tela, bateria, conectores e diagnóstico com atendimento objetivo do orçamento à entrega.”

**CTA:**  
“Solicitar orçamento”

**Benefício:**  
“Você entende o problema antes de aprovar qualquer serviço.”

---

## 15. Checklist de uso

Antes de criar uma nova página com este design system, verifique:

- A cor verde está sendo usada com economia?
- O hero tem uma frase forte e específica?
- Os botões principais estão claros no mobile?
- Os cards têm textos curtos?
- Existe prova de confiança?
- A página evita frases genéricas?
- As imagens parecem técnicas e reais?
- O layout mantém respiro entre seções?
- O footer tem contato e navegação úteis?

---

## 16. Prompt reutilizável

Use este prompt sempre que quiser reaplicar o estilo:

```txt
Crie uma landing page original usando o design system Dark Precision Commerce para a marca Fast Cell.

A página deve ser mobile-first, escura, técnica, premium e comercial. Use fundo preto/cinza, verde elétrico como cor de destaque, tipografia Space Grotesk para títulos e Inter para textos.

A estrutura deve conter: header, hero, prova de confiança, serviços, seção técnica, processo, diferenciais, FAQ, CTA final e footer.

Evite aparência genérica de site criado por IA. Não use frases vagas como “soluções inovadoras”. Prefira textos específicos para assistência técnica, peças de celular, troca de tela, bateria, conectores e diagnóstico.

Não copie imagens, textos ou identidade de nenhuma referência. Use apenas a lógica visual: produto grande, grid espaçado, cards técnicos, botões retos, fundo escuro e detalhes em verde.
```
