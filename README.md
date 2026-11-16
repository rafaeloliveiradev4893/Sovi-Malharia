# Sovi Malharia

Landing page da Sovi Malharia, malharia e estamparia em Boninal (BA), com atendimento na Chapada Diamantina. O visitante pede orçamento pelo WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

O servidor de desenvolvimento sobe na porta **3847**. Produção:

```bash
npm run build
npm start
```

## Onde alterar os dados

Tudo que muda com o tempo está em [`src/config/business.ts`](src/config/business.ts): nome, telefone, endereço, horário, preços, produtos, técnicas, passos, FAQ e galeria.

### WhatsApp

O número usado no site é o que está em `phone`:

```ts
phone: {
  country: "55",
  area: "75",
  local: "92420483",
  display: "(75) 9242-0483",
}
```

O link é montado como `https://wa.me/557592420483?text=...`. Para trocar o número, altere `area`, `local` e `display`. Não é preciso procurar o número nos componentes.

A mensagem padrão do hero, do meio da página, do final e do botão fixo é `messages.default`. Cada produto usa `Olá! Quero orçamento de [peça].`, com a concordância em `products[].orderName`.

O número foi registrado como informado: 75 9242-0483. Se o WhatsApp não abrir, confira se o celular usa o nono dígito (`local: "992420483"`) e atualize o `display`.

### Logo

O arquivo atual é um marcador em [`public/images/logo/logo.svg`](public/images/logo/logo.svg). Para usar a logo oficial, substitua esse arquivo ou troque `logo.src`, `logo.width` e `logo.height` no config. O favicon está em [`src/app/icon.svg`](src/app/icon.svg).

### Fotos da galeria

1. Coloque a foto em `public/images/galeria/`. JPG, PNG ou WebP servem. O Next entrega WebP ou AVIF para o navegador.
2. Inclua o item em `business.gallery` só se o arquivo existir:

```ts
{
  src: "/images/galeria/camisa-resenha.webp",
  alt: "Camisa de time preta e amarela com o número 3, produzida em Boninal",
  caption: "Camisa de time",
  width: 1200,
  height: 1500,
}
```

`alt` descreve a peça. `caption` é a legenda curta do lightbox. `width` e `height` são os pixels reais do arquivo.

As fotos enviadas no briefing não estavam na pasta do projeto. Sugestão de nomes, quando os arquivos forem salvos:

| Arquivo | Legenda |
| --- | --- |
| `camisa-resenha-bfl.webp` | Camisa de time preta e amarela, número 3 |
| `primeira-eucaristia.webp` | Camisa de ciclismo e camiseta de Primeira Eucaristia |
| `crisma-e-terco.webp` | Camisetas de Crisma e Terço dos Homens |
| `camiseta-dragao.webp` | Camiseta com dragão |
| `moletom-grupo-boninalense.webp` | Moletom do Grupo Boninalense |
| `camisetas-turma.webp` | Camisetas de turma com ilustração |

Enquanto a lista estiver vazia, a seção explica que as fotos entram ali e mantém o botão de orçamento.

## Domínio e SEO

Defina a URL pública quando o domínio existir:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

Há um modelo em [`.env.example`](.env.example). Com essa variável, o site publica a URL canônica, o `sitemap.xml` e o endereço no JSON-LD. Sem ela, a página funciona, o sitemap fica vazio de propósito e a imagem de compartilhamento usa o endereço que está servindo a página. Não use um domínio que ainda não seja da malharia.

Depois do domínio:

1. Gere de novo o site com `NEXT_PUBLIC_SITE_URL` definido.
2. Cadastre a propriedade no Google Search Console e envie `https://seu-dominio/sitemap.xml`.
3. Atualize o perfil do Google Meu Negócio com fotos, categoria, horário e a descrição local.

## Checklist de SEO

- [x] Title: `Camisetas Personalizadas na Chapada Diamantina | Sovi Malharia`
- [x] Meta description com Boninal, serigrafia, sublimação e Chapada Diamantina
- [x] Um único H1 com a palavra-chave principal
- [x] H2 com camisetas personalizadas, serigrafia, sublimação, malharia, estamparia e Chapada Diamantina
- [x] `alt` nas imagens
- [x] JSON-LD `LocalBusiness` com nome, endereço, telefone, horário, área de atendimento, Instagram e Google Maps
- [x] JSON-LD `FAQPage` com as mesmas respostas visíveis na página
- [x] `sitemap.ts` e `robots.ts`
- [x] Open Graph e Twitter Card, com imagem 1200×630
- [x] Favicon com a marca
- [x] `lang="pt-BR"`
- [ ] URL canônica e sitemap com o domínio real (`NEXT_PUBLIC_SITE_URL`)
- [ ] Google Search Console
- [ ] Google Meu Negócio

## Checklist de performance e acesso

- [x] Layout mobile first, com botão de WhatsApp fixo no celular
- [x] Fonte Source Sans 3 via `next/font`, com `font-display: swap` e arquivo local
- [x] Galeria com `next/image`, tamanho declarado e carregamento adiado
- [x] Sem biblioteca de interface extra; menu, FAQ e lightbox usam HTML nativo
- [x] Contraste do azul `#1f4460` e do texto sobre o fundo branco
- [x] Alvo de toque dos botões com 44px ou mais
- [x] Link “Ir para o conteúdo”, menu com Escape e lightbox com fechar, setas e clique fora
- [x] Lighthouse na build local: performance 97, acessibilidade 100, boas práticas 100, SEO 100
- [ ] Repetir a medição no domínio publicado

## Regras de conteúdo

- Não citar vinil.
- A única menção a boné é a pergunta do FAQ. A resposta diz que o trabalho é com camisetas, regatas, moletons, uniformes e sacolas.
- Não inventar depoimentos, notas ou quantidade de clientes.

## Pendências fora do código

- [x] WhatsApp e endereço completo, preenchidos com os dados recebidos. Vale confirmar o nono dígito do celular.
- [ ] Arquivo oficial da logo, no lugar do marcador
- [ ] Fotos reais da galeria
- [ ] Domínio próprio
- [ ] Se a hospedagem for na Vercel, conferir o plano adequado para uso comercial
- [ ] Search Console e sitemap
- [ ] Perfil do Google Meu Negócio
