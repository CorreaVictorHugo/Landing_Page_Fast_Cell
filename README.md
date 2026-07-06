# Fast Cell — Landing Page 1.0

Pacote reutilizável com design system Dark Precision Commerce aplicado a uma landing page original da Fast Cell.

## Arquivos principais

- `index.html` — landing page mobile-first pronta para abrir no navegador.
- `css/02_design-system-fast-cell.css` — tokens visuais e componentes base.
- `css/04_style-fast-cell.css` — estilos específicos da landing page 1.0.
- `js/05_script-fast-cell.js` — menu mobile, header no scroll e reveal animations.
- `tokens/03_design-tokens-fast-cell.json` — design tokens estruturados.
- `docs/01_design-system-fast-cell.md` — documentação do design system.

## Direção visual

Dark Precision Commerce: visual escuro, técnico, premium e direto, com verde elétrico como cor de ação.

## Objetivo da página

Levar o visitante a consultar peças pelo WhatsApp da Fast Cell.

## WhatsApp configurado

Telefone usado no projeto: (21) 99692-9998.

## Seções incluídas

1. Header fixo
2. Hero com CTA para WhatsApp
3. Faixa de confiança
4. Catálogo de peças e acessórios
5. Seção para técnicos e assistências
6. Processo de compra
7. Benefícios
8. FAQ
9. CTA final
10. Footer
11. Botão flutuante de WhatsApp

## Como testar

Abra o arquivo `index.html` em um navegador ou suba a pasta completa para Netlify/Vercel.


## Atualização v1.1 — Otimização mobile

Esta versão recebeu uma camada de refinamento mobile-first para melhorar a experiência em celulares, especialmente em telas de 360px a 414px.

Principais ajustes:

- hero mais compacto no celular;
- títulos com quebra mais controlada;
- botões maiores e full-width;
- WhatsApp flutuante em formato de barra inferior no mobile;
- menu mobile com áreas de toque maiores;
- cards em uma coluna com espaçamentos menores;
- FAQ com melhor área de toque;
- proteção contra overflow horizontal;
- ajustes para safe-area em celulares modernos;
- layout revisado para mobile, tablet e desktop.

Teste recomendado no Chrome DevTools:

- iPhone SE;
- iPhone 12/13/14;
- iPhone 14 Pro Max;
- Galaxy S20/S21;
- iPad Mini.


## Atualização v1.2 — foco mobile e catálogo sem consulta por card

- Removidos os links individuais de consulta dos cards de produtos.
- O catálogo agora funciona como vitrine visual das categorias.
- A consulta fica concentrada nos CTAs principais e no botão flutuante do WhatsApp.
- Mantida a estrutura mobile-first com boa abertura também no desktop.
