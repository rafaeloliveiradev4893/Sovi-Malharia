# AGENTS.md — Landing page Sovi Malharia

Este arquivo define as regras do projeto para qualquer agente de código (Claude Code, Cursor, Codex ou similar). Leia antes de criar ou alterar qualquer arquivo.

## Contexto

Landing page de alta conversão para a **Sovi Malharia** (Boninal, BA). O objetivo é gerar contatos pelo WhatsApp e aparecer nas primeiras posições de buscas por camisetas personalizadas na Chapada Diamantina.

O briefing completo está em `PROMPT-sovi-malharia.md`. Siga-o como fonte de verdade para textos, seções e estrutura.

## Stack

- Next.js (App Router) com TypeScript
- Tailwind CSS
- Sem bibliotecas de UI pesadas. Componentes próprios são preferidos.
- Imagens com `next/image` em WebP

## Regras de conteúdo (obrigatórias)

- **Nunca** citar boné. A Sovi não fabrica boné.
- **Nunca** citar vinil. A Sovi não trabalha com vinil.
- Usar "serigrafia" como termo principal. "Silk" pode aparecer apenas em FAQ, entre aspas, como termo que o cliente usa.
- **Nunca** criar depoimentos, avaliações, notas, números de clientes ou selos de certificação. O negócio não tem avaliações ainda.
- **Nunca** inventar endereço, telefone ou CNPJ. Usar os placeholders `{{WHATSAPP}}` e `{{ENDERECO}}` até que sejam informados.
- Preço: apresentar como "a partir de R$ 36 por peça", com faixa de R$ 36 a R$ 46.
- Pedido mínimo: 10 peças. Prazo médio: 14 dias.
- Pagamento: Pix, cartão de crédito, cartão de débito (sem parcelamento) e dinheiro. Regra: 50% antes e 50% após a entrega.
- Horário: segunda a sexta, 8h às 18h; sábado, 8h às 12h.
- Tom corporativo: frases claras, sem gírias ou exageros.

## Regras de marca

- Cores: azul, vermelho e branco.
- Os tons devem ser **harmônicos e suaves**. Não usar cores fortes, saturadas ou neon.
- Fundo predominantemente branco.
- Azul e vermelho apenas em detalhes: botões, destaques, ícones, linhas e títulos de seção.
- Texto em preto.
- Definir as cores como variáveis CSS ou tokens no `tailwind.config`, em um único lugar.

## Regras de SEO

- Um único `<h1>` por página, com a palavra-chave principal.
- Hierarquia correta de `<h2>` e `<h3>`.
- `<title>`, `<meta description>`, Open Graph e Twitter Card preenchidos (ver briefing).
- JSON-LD do tipo `LocalBusiness` no layout ou na página inicial.
- `sitemap.xml` e `robots.txt` gerados.
- Todas as imagens com `alt` descritivo.
- Links internos com texto descritivo (evitar "clique aqui").

## Regras de conversão

- O botão de WhatsApp aparece no header, no hero, nos cards de produto, no bloco de preços e no CTA final.
- O link é gerado a partir de um único helper: `https://wa.me/{{WHATSAPP}}?text=` com a mensagem codificada com `encodeURIComponent`.
- No mobile, um botão de WhatsApp fixo fica visível no canto inferior.

## Dados centralizados

Todos os dados do negócio ficam em `src/config/business.ts`:
- nome, descrição, cidade, área de atendimento
- WhatsApp, endereço, horário
- Instagram e Google Maps
- produtos, técnicas, preços, prazos e formas de pagamento

Nenhum texto de negócio deve ficar fixo dentro dos componentes. Os componentes leem `business.ts`.

## Galeria

- As fotos ficam em `public/images/galeria/`.
- Enquanto não houver fotos, usar placeholders com a cor de fundo suave da paleta e a legenda "Foto em breve".
- O componente aceita um array de `{ src, alt, legenda }` em `src/config/galeria.ts`. Para adicionar fotos, basta editar esse arquivo.
- Lightbox simples, sem biblioteca externa, abrindo ao clicar.

## Acessibilidade e performance

- Contraste AA mínimo em todos os textos.
- Navegação por teclado funcional, com foco visível.
- `aria-label` nos botões que só têm ícone.
- Lighthouse: performance, acessibilidade, boas práticas e SEO acima de 90.
- Fontes com `next/font` e `display: swap`.
- Sem JavaScript desnecessário no carregamento inicial.

## Estrutura de pastas sugerida

```
src/
  app/
    layout.tsx
    page.tsx
    sitemap.ts
    robots.ts
  components/
    Header.tsx
    Hero.tsx
    TrustBar.tsx
    Produtos.tsx
    Tecnicas.tsx
    ComoFunciona.tsx
    Precos.tsx
    Galeria.tsx
    ParaQuem.tsx
    AreaAtendimento.tsx
    FAQ.tsx
    CTAFinal.tsx
    Footer.tsx
    WhatsAppButton.tsx
  config/
    business.ts
    galeria.ts
    whatsapp.ts
public/
  images/
    logo/
    galeria/
```

## Processo de trabalho

1. Ler `PROMPT-sovi-malharia.md` e este arquivo.
2. Criar a estrutura de pastas e os arquivos de configuração.
3. Implementar os componentes na ordem das seções do briefing.
4. Rodar `npm run build` e corrigir erros antes de terminar.
5. Entregar um resumo curto: o que foi feito, o que falta (placeholders, fotos, domínio) e como rodar o projeto.

## Não fazer

- Não adicionar páginas além da landing sem pedido explícito.
- Não criar sistema de login, carrinho ou pagamento online.
- Não adicionar analytics ou pixels sem pedido explícito.
- Não usar cores fora da paleta definida.
- Não usar linguagem de marketing exagerada ("o melhor do mundo", "garantia de primeiro lugar").

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
