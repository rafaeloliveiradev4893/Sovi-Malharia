<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Sovi Malharia

- Dados do negócio ficam em `src/config/business.ts`. WhatsApp, endereço, preços, produtos, FAQ e galeria saem desse arquivo.
- Tom corporativo, em português. Sem gírias e sem números inventados.
- Não citar vinil. A única menção a boné é a pergunta do FAQ, respondida dizendo que a malharia não faz boné.
- Não criar depoimentos, notas ou quantidade de clientes.
- A galeria só lista arquivos que existam em `public/images/galeria`.
- Os botões de orçamento usam `whatsappHref` em `src/lib/whatsapp.ts`.
