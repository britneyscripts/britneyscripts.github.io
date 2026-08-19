---
title: "SOV sempre foi sobre estar presente. No Gemini, é sobre continuar presente."
description: "Por dentro do mecanismo que recalcula sua marca a cada pergunta seguinte."
date: 2026-08-19T19:00:00-03:00
draft: false
tags: ["gemini", "seo", "sov", "share-of-model", "usp", "knowledge-graph", "llm"]
author: "Bê Acosta"
---

*Por dentro do mecanismo que recalcula sua marca a cada pergunta seguinte.*

Este artigo é vinculado com o projeto de MBA em Ciência de Dados da USP vinculado a citações no Gemini sem ser parte central do mesmo, mas como território adjacente ao meu foco de estudo.
A base para este artigo é o Gemini instanciado no app e não nas AI Overviews. É importante delimitar o espaço deste artigo dada a diferença, por exemplo, nas possibilidades de medição de resultados das instâncias do Gemini. 

No e-commerce clássico a maior trincheira defensiva, o Moat, de uma marca nativa digital (D2C) , era o investimento em Branded Keywords. Você tinha que garantir sua marca no topo da página número 1 da SERP, fosse organicamente ou fosse pagando por awareness e proteção de marca no Ads. Na era da IA Generativa, essa estratégia ligada à marca continua ou é ainda mais importante se tratando de reputação, confiabilidade e do espaço que a marca ocupa dentro do Knowledge Graph. 

Essas informações, como vamos ver mais adiante, vivem dentro do, já mencionado, knowledge Graph do Google. Tratar a marca como um grafo 360 desde a estratégia de branding pode alavancar a citação da marca em LLMs porém, para este artigo vou focar somente no Gemini. Essa pequena introdução sobre reputação, confiabilidade e “ocupação de espaço” se faz necessária porque toda a citação passa por algum tipo de checagem contra o Knowledge Graph, porém para este artigo vamos falar da query situacional. 

O Situational Prompting, aquele onde o cliente descreve sua situação para encontrar um produto que resolva seu problema, torna a dependência do Knowledge Graph mais crítica para uma marca. Se o cliente ali não informar preferência por marca e/ou produto o Gemini nao tem um atalho “Opa, a Márcia quer um sérum O Boticário e quer comparar com Sallve e Principia”, ele precisa inferir candidatos a partir da situação descrita e só depois checar a confiabilidade de cada um no Grafo. 

Então, podemos dizer que a LLM entra neste processo com o papel de curadoria, balanceando, sobretudo, a exatitude entre o match da query e as informações do seu produto ou serviço no seu e-commerce ou marketplace com as informações de reputação e confiabilidade no Knowledge Graph. Quando a Marcia escreve uma query situacional como: “tenho pele mista a oleosa com manchas e preciso de um sérum de uso diário e outro noturno, o que você recomenda?”, a disputa comercial orgânica, por enquanto, não ocorre mais na SERP tradicional e sim pela geometria de espaço vetorial do modelo de linguagem. 

---

## A Lógica do Espaço Vetorial: Como o Gemini Decide Onde Sua Marca Existe

Mas como o Gemini faz o balanceamento dentro do processamento de um Situational Prompting para executar uma curadoria que responda a essa query? Para responder a essa pergunta vamos falar de uma lógica de triagem em camadas onde o Gemini decide sequencialmente se sua marca vai ser citada ou não. 

Antes vamos revisar como funciona uma arquitetura de Fan-Out de queries de forma simplificada. Você pode ver todo o material dessa engrenagem detalhadamente na [patente norte-americana US11663201B2](https://patents.google.com/patent/US11663201B2/en) do Google e em alguns papers como o [Self-Ask (Press et al.)](https://arxiv.org/abs/2210.03350) e [Decomposed Prompting (Khot et al.)](https://arxiv.org/abs/2210.02406). O Gemini não realiza uma busca direta no espaço vetorial utilizando o prompt do usuário. Antes de qualquer outro processo, de gerar uma palavra ou acessar os pesos neurais do seu motor, o sistema de Query Fan-Out é acionado. 

As queries situacionais, assim como qualquer outra query, são desmembradas em uma árvore de sub-queries paralelas focadas em entidades estruturadas, no caso de skincare podemos citar ativos químicos, sintomas de pele e marcas. Antes do Gemini responder sua query, essas sub-queries passam por um funil de confiabilidade contra o Knowledge Graph do Google. Bom, mas quais são os problemas que podem derivar para uma marca, serviço ou produto novo nesta etapa? 

Se você não construiu autoridade externa, trabalhou sua marca, produto ou serviço você fica preso no Cold Start Problem simplesmente marcas que nao tem densidade vetorial neste espaço são limpas e descartadas nesta triagem inicial. O modelo somente busca informações no espaço vetorial dentro da uma vizinhança semântica que já passou, previamente, por essa seleção de segurança prévia. Se sua marca não sobrevive a este processo de fan-out, ela é potencialmente elegível a um incrível número de zero branches da árvore de resposta porque ela não é considerada para o fase de ancoragem vetorial (grounding).

Mas o que isso tem a ver com o hype das estratégias de citações de IA e investimento em branding e reputação de marca? A construção de branding para produtos novos e a manutenção e/ou melhora de reputação nunca foi tão importante. Você precisa ter sinais de confiança validados para ser citado. Esse grafo de sinais de confiança positivos é chamado de âncora de consenso. Segundo o artigo [How Large Language Models Source Brand Reputation Across Languages and Markets](https://arxiv.org/abs/2606.25787), 85.7% do peso vetorial de uma LLM provém de terceiros nao do seu site. Justamente consenso são sinais externos em canais que você não controla mas pode moderar como Reclame aqui, convergindo para um consenso sobre sua marca. 

Side Note: Em julho de 2024, o Google oficializou a integração das avaliações do Reclame Aqui ao Google Shopping no Brasil. É a prova mais concreta de que o Google trata o Reclame Aqui como fonte de reputação confiável suficiente para integrar oficialmente ao seu ecossistema de Shopping Graph, que nada mais é que a ramificação do Knowledge Graph dedicada a produtos. Se essa mesma trilha de dados também alimenta o grounding do Gemini app é algo que a documentação pública do Google não detalha, mas dado que ambos vivem no mesmo ecossistema, não seria surpresa.

Passamos pela primeira etapa para responder a Márcia, a etapa do fan-out. A segunda é ter sinais de confiança suficientes para formar essa âncora de consenso. Porém mesmo passando pelas duas etapas, isso não quer dizer que você será citado. 

Mas digamos que sua marca foi citada, mas o usuário que mais informação sobre algum ativo do produto, marca ou outra informação. Vamos voltar à query da Márcia: “tenho pele mista a oleosa com manchas e preciso de um sérum de uso diário e outro noturno, o que você recomenda?”. O Gemini responde e ato seguido a próxima query é: “quais destas opções podem ser usadas de dia e de noite?”. A query busca complementar uma informação anterior já verificada pelo usuário, não vou entrar em detalhe sobre o que pode gerar a query complementar, talvez o preço, talvez outra motivação. 

---

### Segunda leva de Grounding

Para profundizar neste conceito de citações sequenciais vamos olhar para outra patente do Google: [Contextual Estimation of Link information Gain (US20200349181A1)](https://patents.google.com/patent/US20200349181A1/en). Está patente, se você procurar informação no próprio Google, muitas vezes foi reduzida a “crie conteúdo único e com dados próprios”, isto porque a patente menciona redundância diversas vezes, mas vamos olhar a engenharia por trás da patente da Google porque temos algo muito mais específico, dinâmico e contextual.

A patente divide o mecanismo de busca em dois conjuntos: Set 1 e Set 2. No documento também é descrito o delta de conhecimento que funciona como um filtro de redundância aplicada aplicado ao set 2 para não repetir as informações do set 1. O Set 1 são as informações que o usuário já viu, a sua primeira resposta. O set 2 vai ser conformado com os documentos que passaram não só pelos processos que vimos anteriormente mas também pelo Contextual Estimation of Link information Gain. 

Então podemos dizer que o IGS é uma métrica estritamente relacional porque a relevância algorítmica do set não é intrínseca ao novo documento (a nova informação) mas sim proporcional a sua capacidade de expandir o repertório informacional já delimitado e consumido (set 1) pelo usuário no estágio anterior. 

Ah Bettina, mas se são dois sets então o score ele só é applied a resposta imediatamente anterior? Não, e aqui entra o context window da AI. O Set 1 ele vai engolindo o Set 2 como um PacMan, pense que o Set 2 é fruto do mesmo mecanismo o de buscar novos candidatos utilizando o delta de de conhecimento adquirido inédito para completar o Set 1 que já a esta altura engoliu sequencialmente os Sets 2 que já foram consumidos pelo usuário. 

Aqui fica claro a dependência do histórico do usuário ou uma sessão contínua. O score não funciona como um selo estático, ele é calculated em tempo de execução baseado no que aquele usuário específico consumiu nos minutos anteriores. Se a Márcia já leu a informação do site X, o site Y ganha score de ganho de informação para a Márcia somente se trouxer algo inédito. 

É razoável supor, lendo o documento do Google, que para manter uma boa experiência de usuário a resposta imediatamente anterior tem um peso maior no cálculo da redundância do que um documento lido pelo usuário anteriormente. Somado a isso, se o usuário mudar a direção da pesquisa o processo de fan-out sobre um reset parcial para se adequar ao context. Em contextos longos isso gera respostas ultra-específicas porque o algoritmo eliminou todo o consenso acumulado no Set 1 ao longo da sessão. 

Essa dinâmica algorítmica redefine as estratégias de SOV e awareness de marca, vamos falar disso logo, logo. Voltando ao estudo que aponta que 85.7% das citações dão maior peso a fontes externas, se sua estratégia for por volume de mensagens, o tradicional e já clássico buzz de assessoria de imprensa ou campanhas de conteúdo massificadas em 300 fontes externas que repetem a mesma narrativa sobre um produto e/ou marca o algoritmo procede a calcular um delta de conhecimento igual a 0 sobre o set 1 já absorvido. O IGS aplicaria uma punição a redundância, e retiraria essas fontes na segunda leva de grounding. 

Na SERP tradicional o algoritmo tenta ser justo se você usar sinônimos ele entende que a intenção é parecida mas não é a mesma, portanto existe uma tolerância semântica. Também tem o efeito da página dois ou seja visibilidade e existência diminuem, você existe mas é um pouco mais difícil de um usuário encontrar você. No ecossistema do Gemini, o marketing de influência e conteúdo precisa migrar de volume bruto para uma orquestração de informações incrementais e multifacetada. 

O mecanismo na SERP é de rankeamento, no Gemini app ou qualquer outra LLM o mecanismo é de exclusão sumária mas também existem outros fatores que ajudam na invisibilidade e que ajudam a pensar sobre esta mudança de paradigma: 

1. O espaço na interface do Gemini nao comporta, e nem é seu objetivo, 10 links azuis por tela, ele tem parágrafo(s) de resposta e no máximo 3 a 4 cartões de citação de fontes (grounding inline), ou você está presente nesse espaço ou não está. 
2. O IGS é binário: Se o robô lê uma fonte 1 e extrai o fato básico ele preenche o espaço da resposta, quando ele lê as outras 299 ele não pensa: “Que bacana, sinônimos!”. Ele calcula o ganho marginal de informação que no caso da informação repetida com sinônimos é igual a 0. 
3. O total descarte: essas 299 fontes são descartadas, não ranqueadas mas abaixo do documento que preenche o espaço de resposta, elas não existem para aquela sessão do usuário. 

Falamos de preenchimento do espaço vetorial e de SOV vamos detalhar isso na próxima seção. 

---

## De SOV para SOM™

Podemos falar que a fatia que a marca ocupa no espaço vetorial é o share of voice dentro da estratégia de Brand Awareness. No SOV digital você pode medir este SOV através da % de impressões (mídia paga), quanto sua marca ocupa de espaço nos resultados orgânicos (mídia orgânica) e volume de menções, hashtags e conversa sobre sua marca em redes sociais incluindo fóruns (Social & Earned Media). Em outras palavras o Moat de atencionalidade se ganha através do SOV digital apontando para o Share of Model (SOM)™. 

O SOM™ não existe sem o SOV. Você ainda precisa construir e manter o SOV mas em um espaço de visibilidade muito mais reduzido que antes. Se a marca tiver alto SOV digital significa possuir alta densidade no Grafo, a marca provavelmente passe no filtro de Fan-Out e gera alto SOM™ no Gemini. A AI precisa de matéria-prima para construir a resposta, 85.7% dessa matéria é externa aos próprios canais da marca. Se sua marca adiciona: “Somos o melhor site para efetuar compras” você adiciona uma informação considerada não factual e redundante. 

Quando o mecanismo de Query Fan-out, patenteado pelo Google, entra em campo ele busca no Knowledge Graph sinais de autoridade construídos no SOV Digital histórico da marca o que garante passar nessa barreira. Se você tem poucos sinais ou simplesmente ainda não construiu sinais você estará, infelizmente, dentro do Cold Start Problem. Dito isto, não pare de investir em branding tradicional e digital, o que este novo canal implica numa mudança nas estratégias e no foco de investimento para manter, melhorar ou criar o SOV. 

Uma proposta que surge de cara a essa mudança de paradigma é uma mudança de estratégia de Share of Voice estático para um Share of Voice Sequencial™ (SOV Sequencial™) e incremental. No ecossistema de buscas generativas e assistidas por IA, a visibilidade de uma marca não pode ser medida de forma agregada ou isolada no primeiro turno da consulta. O SOV sequencial™ mede a capacidade de resiliência e permanência de uma marca ao longo de um jornada conversacional ramificada (Fan-Out). Como o algoritmo do Google calcula dinamicamente a relevância com base no delta de conhecimento adquirido a cada clique ou resposta anterior, o SOV sequencial™ pune campanhas baseadas em saturação repetitiva. 

Ele coroa as marcas que planejam sua presença digital com um ecossistema de informações progressivas capazes de alimentar continuamente o grounding das IAs à medida que o usuário aprofunda sua jornada. Você pode pensar nessa sequencialidade no SOV como uma sequencialidade de conteúdo respondendo a etapas do funil de conversão desta vez voltadas para a IA e com uma estratégia de distribuição num ponto exato de manutenção ou crescimento do SOV sem saturação/repetição de informações. 

Se a marca tiver alto SOV digital significa possuir alta densidade no Grafo e o mecanismo técnico exato por tras dessa densidade, e de onde ele realmente vem, é assunto para o próximo artigo desta série. 

© 2026 Bettina Acosta de Paula. Todos os direitos reservados. 
Este artigo integra a linha de pesquisa em Ciência de Dados (USP MBA). 
Citações e reproduções parciais são permitidas mediante atribuição direta do nome da autora e link para o documento original.

---

## Notas de Rodapé e Referências

1. **Google Patent US11663201B2**: [Generating query variations — Google Patents](https://patents.google.com/patent/US11663201B2/en)
2. **Press et al. (2022)**: [Measuring and Narrowing the Compositionality Gap in Language Models (Self-Ask) — arXiv:2210.03350](https://arxiv.org/abs/2210.03350)
3. **Khot et al. (2022)**: [Decomposed Prompting: A Modular Approach for Solving Complex Tasks — arXiv:2210.02406](https://arxiv.org/abs/2210.02406)
4. **Dmitrij Żatuchin (2026)**: [How Large Language Models Source Brand Reputation Across Languages and Markets — arXiv:2606.25787](https://arxiv.org/abs/2606.25787)
5. **Google Patent US20200349181A1**: [Contextual Estimation of Link Information Gain — Google Patents](https://patents.google.com/patent/US20200349181A1/en)
