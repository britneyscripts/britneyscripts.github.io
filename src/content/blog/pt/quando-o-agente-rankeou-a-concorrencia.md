---
title: "Quando o Agente Rankeou a Concorrência"
description: "Como dois episódios desconectados viraram uma pergunta de pesquisa sobre agentic commerce na USP."
date: 2026-05-10T10:00:00-03:00
draft: false
tags: ["agentic-commerce", "pesquisa", "usp", "seo", "sem"]
author: "Bê Acosta"
---

*Como dois episódios desconectados viraram uma pergunta de pesquisa*

**por Bê Acosta — Lead Product Manager Senior | MBA em Ciência de Dados, ICMC/USP**

Este é o primeiro artigo de uma série sobre agentic commerce e a pesquisa que estou desenvolvendo no MBA em Ciência de Dados do ICMC/USP. Não vou falar sobre a metodologia nem sobre os resultados; vou construir, peça por peça, o contexto que me trouxe até ela.

## **A experiência ou como cheguei à minha pequena obsessão**

Tenho quase uma década gerenciando operações de e-commerce e produto digital: varejo, turismo, B2B. Passei por ciclos de SEM, SEO técnico e textual, gestão de catálogo, CRM, ERP, e o caos organizado de coordenar quatro equipes subindo PR pro mesmo front ao mesmo tempo.

Sei o que é ver orçamento de performance evaporar em disputas de CPC no Google Ads enquanto um ajuste técnico de três dias no servidor teria dobrado o tráfego orgânico e reduzido o custo por clique, porque performance ruim penaliza tanto o SEO quanto o Quality Score dos anúncios pagos. É o duplo castigo que ninguém coloca na planilha de ROI.

Essas experiências diversas sempre tinham algo em comum: me ensinaram a ler documentação, a usar o console do navegador, a falar com engenheiros, a entender o ecossistema do Google desde a indexação até o tráfego pago, a lógica dos e-commerces, as integrações. E no centro de tudo isso, sempre estava a performance. Ela está envolvida no tráfego orgânico, no pago, na experiência do usuário — em toda a jornada pré-venda do cliente. Era isso que me fascinava. E foi a performance que me trouxe até a USP.

Mas como surgiu o estalo final para a pesquisa?

## **Todo mundo quer. Quase ninguém sabe o que pede.**

Todo mundo quer usar IA. Para automatizar, para ganhar produtividade, para cobrir os pontos cegos que o time humano não escala. O problema não está na intenção — está na ausência de uma pergunta simples, que deveria vir antes de qualquer linha de código:

> *Qual é o resultado concreto que esse agente precisa entregar para o negócio?*

Essa pergunta parece óbvia. É exatamente por isso que quase ninguém a faz.

O tema que hoje o mercado chama de agentic commerce não chegou até mim pela academia. Eu já o perseguia no campo, sem esse nome — nas APIs, nos dashboards, nos benchmarkings que ninguém pedia, mas eu fazia assim mesmo. O MBA em Ciência de Dados no ICMC/USP surgiu como o casamento ideal entre a prática e o rigor metodológico que as perguntas já mereciam — e que eu ainda não tinha como sustentar com consistência. Decidi entrar para ter as ferramentas certas para as perguntas que já estavam formuladas.

Foi justamente nessa interseção entre prática e pesquisa que dois episódios aparentemente desconectados se cruzaram — e criaram a pergunta que virou minha tese.

## **A demo que ninguém esquece**

Recebi o relato de uma situação que ilustra o problema melhor do que qualquer framework. Um time construía um bot de recomendação — o termo *agentic commerce* ainda não havia se consolidado dentro dessa empresa, mas a arquitetura já era de agente: input livre, raciocínio autônomo, output dinâmico. A proposta era elegante: a partir do histórico de compras do cliente logado, o sistema processava um input simples — produto, faixa de preço, cor — e devolvia os três melhores matches rankeados, com os cards dos produtos. Curadoria automatizada, dentro do próprio site.

A demo rodou. O agente funcionou. Entregou exatamente o que foi pedido.

**Os três produtos rankeados eram da concorrência.**

> *O agente não bugou. Ele não se rebelou. Ele fez exatamente o que foi pedido — encontrar o melhor match para o cliente. Ninguém tinha dito a ele onde procurar.*

Na sala, o diagnóstico foi imediato: *"bloqueiem os outros domínios."* Simples, rápido, cirúrgico. Reunião encerrada.

Mas será que foi só uma questão de contexto mal definido — uma fronteira ausente no prompt? Ou havia algo mais profundo acontecendo, algo que tem a ver com como os agentes enxergam, interpretam e escolhem produtos no mundo real? Essa pergunta ficou comigo. E se conectou com outro episódio que eu vivia em paralelo.

## **O projeto que surgiu da letra miúda**

Ao mesmo tempo, eu coordenava um levantamento regional do front de todas as marcas de uma companhia. Dezenas de sites, auditoria completa. No fim da lista de next steps, adicionado pela consultoria externa, quase escondido — como a letra miúda de um contrato — havia um item: *benchmarking de performance de todas as webs.*

Decidi executar. Integrei a API do CrUX, o Search Console e o Google Analytics.

Com o esqueleto pronto, comecei a experimentar com marcas externas. O que encontrei não foi surpresa — *disappointed but not surprised*: sites de marcas conhecidas, com investimento real em marketing, com produto de qualidade — completamente fora dos parâmetros mínimos de performance técnica. Lentos. Com dados estruturados incompletos. Com conteúdo que um humano entendia mas uma máquina simplesmente não conseguia processar.

Eram sites invisíveis para qualquer sistema automatizado de curadoria.

E aí as duas histórias se conectaram.

## **O que o agente realmente vê**

Quando um agente de IA recebe a tarefa *"compare os melhores séruns faciais para pele oleosa até R$150"*, ele não abre o Chrome. Não lê texto corrido como você lê. Ele acessa estruturas de dados — e quando essas estruturas não existem ou estão incompletas, ele descarta, penaliza ou simplesmente ignora.

O McKinsey descreve esse nível de atuação como Level 1 da curva de automação do agentic commerce — o *"cognitive sidekick"*: o agente que analisa, compara e sintetiza opções, mas deixa a decisão final com o humano. A implicação para varejistas é direta: *verifiable data beats marketing gloss*. Agentes não leem *"fórmula exclusiva premiada"*. Eles leem *tipo_pele: oleosa, ingrediente_ativo: niacinamida_10%, tamanho_ml: 30*.

Protocolos para comunicação entre sistemas não são novidade. Schema.org existe desde 2011. Feeds de produto, APIs de catálogo, sitemaps — a infraestrutura para tornar dados legíveis por máquinas já estava sendo construída há décadas, inicialmente para motores de busca. O que muda agora é o consumidor dessas estruturas. Não é mais só o Googlebot indexando para rankeamento — são agentes que leem, comparam, decidem e, em níveis mais avançados de autonomia, executam transações.

É nesse contexto que o Universal Commerce Protocol — UCP — entra como uma camada nova: uma tentativa de padronizar como agentes de IA acessam e interagem com dados de e-commerce de forma consistente entre plataformas. Ainda emergente, ainda em construção — mas já suficientemente real para estar no radar de quem pensa em infraestrutura de produto.

Minha pesquisa foca justamente no que o McKinsey cataloga como Level 1 de autonomia. O agente não vai efetuar a compra no Level 1 — mas vai decidir se o cliente vai sequer conhecer o produto. E isso acontece na etapa mais cara do funil.

## **Um problema de funil — e de budget**

Quem gerencia e-commerce sabe onde dói: discovery e consideration são as etapas mais caras do funil. É onde o custo de aquisição de um novo cliente é mais alto — especialmente em mercados disputados como o de beleza no Brasil, onde SEM virou uma guerra de lances.

Gerenciando SEM e SEO ao longo da minha trajetória — da parte técnica à textual — aprendi que otimização orgânica bem executada frequentemente supera o retorno do pago. SEO não é leilão. É estrutura que acumula com manutenção contínua. E performance ruim penaliza os dois lados ao mesmo tempo: derruba o ranking orgânico e aumenta o custo dos anúncios pagos via Quality Score. É o duplo castigo que raramente aparece na planilha de ROI.

O mesmo raciocínio se aplica ao que está emergindo agora. Se existe um custo para otimizar seu site para motores de busca (SEO) e um custo para aparecer via anúncios (SEM), faz sentido começar a pensar em um terceiro eixo: *AEO — Agent Engine Optimization*. O custo de tornar seu e-commerce legível e preferível para agentes de IA versus o custo recorrente de disputar leilões em plataformas de mídia paga. Essa comparação ainda não tem benchmark consolidado — mas é exatamente uma das hipóteses que minha pesquisa pretende iluminar.

## **O problema de produto que ninguém quer admitir**

Há ainda uma camada que vai além da infraestrutura técnica — e que conheço bem por ter vivido.

Uma nota antes de continuar: minha pesquisa foca no Level 1, que é onde a maioria do e-commerce brasileiro opera hoje. Nesse nível, os agentes chegam pelo front — fazem o que um crawler faz, leem o HTML renderizado, interpretam os dados estruturados e avaliam a completude das informações. Performance importa porque uma página que não carrega completamente é uma página que o agente não lê completamente. No Level 2+ com protocolos como MCP e UCP, o front deixa de ser o ponto de entrada — o agente acessa os dados diretamente via API. Mas esse é o próximo capítulo.

Imagine quatro equipes de desenvolvimento com backlogs independentes, cada uma com suas prioridades, seus sprints, suas entregas — todas subindo PR pro mesmo front de e-commerce. É uma situação mais comum do que parece. E é uma receita para Core Web Vitals degradados: LCP lento, CLS instável, INP comprometido — métricas que o Google usa como sinal de ranking e que agentes de IA usam como proxy de confiabilidade técnica.

Mas nem tudo está nas mãos do time de produto. Quem já operou e-commerce em plataformas SaaS sabe que o TTFB — Time to First Byte — frequentemente é o maior vilão do LCP. E é também o indicador sobre o qual você tem menos controle: quando a infraestrutura não é sua, o teto de otimização é definido pelo contrato, não pela técnica.

A solução para o que está dentro do seu alcance não é glamourosa. É gestão de produto aplicada com rigor: dashboards conectados, visibilidade cruzada entre times, épicos compartilhados que garantem que o investimento de uma equipe não seja silenciosamente sabotado pela entrega da outra.

Esse é o problema que ninguém quer admitir: parte da invisibilidade técnica não é negligência — é consequência de arquiteturas que limitam a autonomia operacional. E quando um agente de IA escaneia seu site, ele não sabe disso. Ele só registra que o site foi lento.

## **A pergunta que não consigo largar**

A convergência dessas histórias — o agente que rankeou a concorrência, o benchmarking que revelou sites invisíveis, os anos operando e-commerce onde infraestrutura técnica e decisão de negócio raramente falam a mesma língua — criou uma pergunta que não consigo largar:

> *Se agentes de Level 1 já definem o que entra na etapa de descoberta e consideração de produtos, quais variáveis técnicas determinam se um e-commerce entra ou sai da curadoria? E qual o peso relativo de cada uma?*

Saber o peso relativo não é questão acadêmica. É questão de alocação de recursos. Se a performance técnica pesa mais que dados estruturados, o investimento vai para infraestrutura. Se Schema.org pesa mais que conteúdo, um dev resolve em semanas. Se conteúdo parseável é o diferencial, o problem é editorial — possivelmente o mais custoso de resolver, dado o volume e a recorrência que catálogos de beleza exigem.

Mas isso ainda é hipótese. É o que a pesquisa vai responder.

Os próximos artigos desta série vão construir, peça por peça, o raciocínio que me trouxe até essa pergunta — e o que pretendo fazer com a resposta.

**No próximo artigo:**

*Da web indexável à web acionável — como 30 anos de infraestrutura digital criaram os trilhos pelos quais os agentes agora correm, e o que isso significa para o seu site.*

**Referências**

*McKinsey & Company — "The automation curve in agentic commerce", QuantumBlack, janeiro 2026. Disponível em: mckinsey.com/capabilities/quantumblack/our-insights/the-automation-curve-in-agentic-commerce*

*McKinsey & Company — "The agentic commerce opportunity: How AI agents are ushering in a new era for consumers and merchants", outubro 2025.*

*Google Cloud Blog — "A new era of agentic commerce is here", janeiro 2026. Disponível em: cloud.google.com/transform/a-new-era-agentic-commerce-retail-ai*

*Conversion / Diego Ivo — "Agentic Commerce: o que é, como funciona e por que vai mudar o varejo", janeiro 2026. Disponível em: conversion.com.br/blog/agentic-commerce*

*E-Commerce Brasil / Leandro Furlan — "Agentic commerce: a nova arquitetura da influência digital", janeiro 2026. Disponível em: ecommercebrasil.com.br/artigos/agentic-commerce-a-nova-arquitetura-da-influencia-digital*

*Google Developers — "Universal Commerce Protocol (UCP) Guide". Disponível em: developers.google.com/merchant/ucp*

*Russell, S. & Norvig, P. — Artificial Intelligence: A Modern Approach (4ª ed.). Pearson, 2020.*

*Este artigo é o primeiro de uma série sobre agentic commerce e a pesquisa de MBA em Ciência de Dados da autora no ICMC/USP. Os artigos não descrevem a metodologia ou os resultados da pesquisa — eles constroem o contexto que a motivou.*
