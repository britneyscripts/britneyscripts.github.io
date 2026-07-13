Como a lógica que o Google construiu por décadas se tornou o substrato
invisível dos agentes de IA; e o que isso significa para o seu catálogo.

Mar 25, 2026

No artigo anterior, contei a história da demo que rankeou a
concorrência. Um agente bem construído, uma tarefa que parecia simples,
um resultado que ninguém esperava. A reação imediata considerou somente
o aspecto técnico: *bloqueiem os outros domínios.* Mas a pergunta que
ficou comigo era outra: como, exatamente, o agente enxergou esses
produtos da concorrência? O que ele leu? O que ele ignorou? *E que
hipótese ou variáveis temos para medir este comportamento*? (base da
minha pesquisa na USP).

Thanks for reading! Subscribe for free to receive new posts and support
my work.

Para responder isso, voltei um pouco no tempo e nas minhas experiências
com SEO. A IA não está inventando uma nova forma de ler a internet. Ela
herdou o que já existia e está usando esse legado para obrigar empresas
a repensarem desde estratégias de discovery e monetização até os
próprios modelos de negócio.

Uma nota antes de começar: o título que anunciei no artigo anterior era
outro. Mudei porque, ao escrever, percebi que o argumento central não
era sobre como os agentes funcionam hoje, e sim, sobre *por que* eles
funcionam assim. A resposta estava em 25 anos de decisões do Google que
eu não via ninguém conectando. Então conectei. O título seguiu o
argumento.

*A foto usada no post é do [[Igor
Omilaev]{.underline}](https://unsplash.com/es/@omilaev) disponível no
Unsplash.*

A lógica que o Google passou décadas construindo

Quem se lembra da famosa *meta tag keywords*? Antes de 2011, quando
quase tudo isso aqui era mato, você saturava suas páginas de termos e o
Google simplesmente lia a tag e associava seu site com elas. A repetição
contava. A compra de links contava, e muito. Na época eu trabalhava em
um grande site de apostas e a estratégia era de SEO de guerrilha: 85% do
esforço era compra de links e conteúdo gerado para robôs. Funcionava
porque tinha fit muito grande com o público de gaming mas não dizia nada
de útil para ninguém.

![Angry Kung Fu Panda
GIF](media/image2.gif){width="3.3333333333333335in"
height="2.3194444444444446in"}

Em 2011, o Google Panda mudou as regras. Não foi uma atualização de
ranking, foi uma mudança de filosofia. O algoritmo passou a penalizar
conteúdo criado para manipular o sistema. No mesmo período, o Yoast SEO
popularizou as famosas bolinhas de legibilidade e densidade como uma
forma de gamificar, visualmente, a qualidade do conteúdo para quem
produzia no WordPress. Foi a vitória da qualidade sobre o volume.

> *O storytelling que salvou as marcas em 2011 é o mesmo fluff que cega
> os agentes de IA em 2026?*

Em 2013, o Hummingbird transformou o Google de um dicionário de termos a
um motor de respostas. Se antes o buscador apenas casava palavras
isoladas: *tênis + barato*, ele passou a entender a intenção por trás da
busca. Uma query como *"qual tênis comprar para correr na chuva sem
gastar muito"* passou a ser interpretada pelo contexto completo. Era o
embrião da *busca conversacional*. Lembra a primeira vez que você abriu
o Answer the Public? E como era bonito olhar as perguntas surgindo ali?
Pois bem são da mesma época.

> **Nota técnica:** Houve muita confusão entre *busca semântica* e
> *conversacional* nessa época. Elas operam em camadas diferentes: a
> semântica foca no significado via *embeddings* (vetores que
> representam conceitos em espaço n-dimensional), enquanto a
> conversacional é a camada de interface de fluxo. Evoluímos de vetores
> de termos estáticos para representações que, nos agentes de hoje,
> capturam múltiplos turnos de fala.

Em 2015, o RankBrain introduziu machine learning no algoritmo; em vez de
regras fixas escritas por engenheiros, o sistema passou a aprender com o
comportamento dos usuários. Em 2017, o paper *"Attention Is All You
Need"* de Vaswani et al. introduziu a *arquitetura Transformer* e o
*Mecanismo de Atenção*. A ideia de que cada palavra de uma frase pode
olhar para todas as outras simultaneamente e decidir o quanto cada uma
importa para entendê-la. Em 2019, o BERT do Google aplicou essa
arquitetura à busca, permitindo distinguir *"viagem para o Brasil"* de
*"viagem do Brasil"* com precisão clínica.

![](media/image4.gif){width="3.4583333333333335in"
height="2.5277777777777777in"}

Os Simpsons visionários

> **Dica de PM:** O Mecanismo de Atenção é um dos motivos pelos quais
> agentes de IA processam tabelas técnicas com mais eficiência do que
> parágrafos de marketing. Dados estruturados reduzem ambiguidade
> semântica e criam relações mais claras entre atributo e valor do que o
> texto corrido de uma descrição de produto.

A cada atualização, o padrão que emergia era o mesmo: dados verificáveis
valem mais do que texto de marketing bem escrito. O que os agentes de IA
herdam hoje não é outra coisa senão essa hierarquia que foi construída
pelo Google ao longo de 25 anos e absorvida via Common Crawl no
treinamento dos grandes modelos de linguagem. **Spoiler**: *Mais sobre
isso no próximo artigo.*

O instrumento que mudou o jogo: CrUX e performance real

Em 2017, o Google lançou o Chrome User Experience Report, o famoso CrUX
❤️. Era a confirmação que o Google parou de confiar no que os sites
diziam sobre si mesmos e passou a medir a experiência real: LCP, INP,
CLS, TTFB. *Não com dados de laboratório*: e sim no celular de uma
pessoa em Porto Alegre com 4G ruim, às 18hs de uma segunda-feira com um
temporal caindo.

> *O CrUX foi o momento em que o Google disse: não me importa o quanto
> você otimizou. Importa o que o seu usuário viveu.*

Em 2021, os Core Web Vitals viraram sinal oficial de ranking.
Performance técnica deixou de ser responsabilidade exclusiva de
engenharia e virou métrica de Produto. Um site lento passou a custar
caro no Google Ads e a converter menos. O Google Search Console e o
Google Analytics passaram a expor esses dados de forma acessível, mas a
maioria dos times não sabia o que fazer com eles, ainda.

A virada silenciosa: quando o Google parou de mandar tráfego

Você lembra a última vez que fez uma pergunta ao Google e a resposta não
era de uma Overview? No dia 14 de maio faz dois anos do anuncio do
surgimento dessa revolução quase silenciosa. Porque silenciosa? O
anuncio nesse dia foi do produto mas não da consequência. *O Google
nunca perde*. Hoje, as AI Overviews aparecem em mais de 50% de todas as
buscas. O CTR orgânico caiu 61% (artigo nas referências). O usuário
pergunta; o Google responde usando os dados do seu site, mas não manda o
usuário até ele.

Mas há uma separação cirúrgica que poucos estão discutindo. Para buscas
transacionais, aquelas onde o usuário tem intenção clara de comprar, os
AI Overviews simplesmente não aparecem. O Google cedeu as respostas
informacionais para a IA, onde nunca houve monetização direta, e
preservou o espaço transacional integralmente para o Google Shopping e
os anúncios pagos. Quem pagava por clique continua pagando. Quem
dependia de tráfego orgânico de conteúdo perdeu. Não é acidente: é a
separação mais lucrativa da história do search, executada sem nenhum
comunicado oficial.

![angry bart simpson GIF](media/image3.gif){width="3.3333333333333335in"
height="2.5in"}

E óbvio teve briga.

Não falta quem esteja documentando isso com processos antitruste,
investigações da União Europeia, publishers perdendo entre 50% e 90% do
tráfego. A acusação central é sempre a mesma: o Google usou o conteúdo
da web aberta para treinar os modelos que agora respondem às perguntas
sem mandar o usuário para a web aberta. E preservou o espaço onde o
dinheiro está para os anúncios pagos. É o mesmo negócio de sempre, só
que agora ele não precisa mais te mandar tráfego para lucrar com você.

> *O Google não está te mandando menos tráfego porque seu SEO piorou.
> Está porque ele aprendeu a responder sem você.*

O que o agente realmente lê quando acessa seu site

Um agente de Level 1 (o tipo que analisei no artigo anterior, que faz
curadoria e comparação de produtos sem executar transações) não navega
como um usuário. Ele acessa o HTML renderizado, interpreta os dados
estruturados e avalia a completude das informações disponíveis.

Em testes via Playwright com e-commerces de beleza brasileiros, o padrão
foi claro. Analisei um gigante do setor operando sobre VTEX IO, AWS e
SAP S/4HANA. Para o Google clássico, a autoridade de marca e volume de
buscas diretas ainda garantem a página 1, mas não a primeira posição.
Para um agente, a arquitetura técnica cria três problemas em cascata:

- **Latência de renderização:** o site faz centenas de chamadas de API
  via Client-side Rendering para montar a página. O agente dá timeout
  antes da centésima chamada terminar.

- **Dado preso no ERP:** atributos técnicos como ml, ativos, tipo de
  pele ficam no SAP e não fluem até o Schema.org. O que sobra para o
  agente é o texto de marketing: *"efeito lifting imediato"; "94%
  firmeza e elasticidade"*, que é impossível de usar em uma comparação
  objetiva.

- **O que chamo de invisibilidade semântica¹:** sem atributos técnicos
  estruturados, o agente não consegue incluir o produto em uma tabela
  comparativa. O site é tecnicamente rico em conteúdo mas não em
  informação para máquinas.

> **¹ Terminologia própria:** uso 'invisibilidade semântica' para
> descrever a condição em que um produto existe no servidor mas não
> possui dados estruturados suficientes para ser localizado e comparado
> por um sistema de recuperação automatizado. Não é um termo
> estabelecido na literatura: é a hipótese central que estou testando
> empiricamente na minha pesquisa no ICMC/USP.

![](media/image1.gif){width="2.9166666666666665in"
height="2.1944444444444446in"}

No e-commerce tradicional otimizamos a arquitetura de informação para o
olhar humano: categorias, coleções, breadcrumbs. Proponho que no Agentic
Commerce essa arquitetura precisa ser repensada para o que chamo de
*legibilidade por agentes*: a capacidade de um sistema automatizado
localizar, interpretar e comparar um produto sem ambiguidade. O
Schema.org funciona, nesse contexto, como âncora factual que separa o
que é dado determinístico do que é inferência probabilística do modelo.

Cada atributo estruturado é, tecnicamente, uma coordenada no espaço de
embeddings do produto: volume, ativo, tipo de pele, fator de proteção.
Com esses atributos presentes, o agente localiza o produto com precisão.
Sem eles, o agente estima o que não sabe e estimativa errada vira
recomendação errada.

> **Dica de PM para PM (e seu Tech Lead):** Se você está tentando
> resolver a legibilidade para agentes criando 'resumos de IA' ou caches
> semânticos para cada PDP, cuidado: você está prestes a herdar um
> pesadelo de sincronização e custo de tokens. Use o Schema.org como seu
> cache factual nativo. Deixe o conteúdo emocional para o humano e
> garanta que os *atributos determinísticos*(dados que não requerem
> inferência do modelo para serem interpretados) estejam no JSON-LD. É a
> forma mais barata e escalável de abrir caminho para o agente sem
> quebrar o orçamento de infraestrutura. Se testou me conta!

Como um product manager mede o impacto real

A pergunta que mais ouço de PMs que entendem o problema: *"tudo bem, mas
como eu meço isso?"* A resposta tem três camadas e começa com dados que
você provavelmente já tem.

- **Camada 1 - Search Console e Analytics:** a aba de Core Web Vitals
  mostra o status das suas páginas agrupadas por performance. O problema
  real é que a maioria dos times não abre esses grupos para entender
  quais páginas específicas estão puxando o resultado para baixo. A
  métrica que mais importa como portão de entrada para agentes é o TTFB;
  um servidor lento é descartado antes de qualquer análise de conteúdo.

- **Camada 2 - CrUX API:** com acesso programático à API pública do
  Google você compara seus números com os da concorrência sem precisar
  do servidor deles. LCP de 6 segundos contra 2 segundos do concorrente
  não é diferença de engenharia agora é diferença de visibilidade para
  agentes.

- **Camada 3 - Rich Results Test:** valida se seu Schema.org está
  correto e completo. Mas mais importante que presença é completude:
  quantos dos campos esperados para uma PDP de produto estão
  preenchidos? Nome e preço são o mínimo. Tipo de pele, ingredientes,
  volume, avaliações agregadas, esses são os atributos que um agente usa
  para comparar produtos de verdade.

> *Se você consegue medir a performance de uma campanha de CPC centavo a
> centavo, você consegue medir a visibilidade do seu catálogo para
> agentes. Os dados estão públicos e gratuitos. A maioria não olha.*

O que muda agora

A lógica que o Google construiu ao longo de décadas: indexação, dados
estruturados, performance técnica, conteúdo verificável não foi
substituída pelos agentes de IA. Foi amplificada por eles.

O Googlebot lia seu site para ranquear em links azuis, lembra? Os AI
Overviews leem seu site para responder diretamente. Os agentes de Level
1 leem seu site para decidir se seu produto entra na curadoria que o
consumidor vai ver antes de qualquer decisão de compra.

Em todos os casos, o critério é o mesmo: estrutura, velocidade e
completude. O que mudou é o custo de não estar lá. Antes, você perdia
uma posição no ranking. Agora, você não existe na resposta.

Preços mudam. Promoções vencem. Estoques esgotam. Se o Schema.org não
foi atualizado desde ontem, o agente recomenda com confiança um produto
que custa R\$89 quando o preço real hoje é R\$136. Um falso positivo de
legibilidade: o site passou em todos os critérios técnicos, mas a
recomendação estava errada. Esse é o limite do Level 1 e é o ponto de
partida para entender por que os protocolos de integração mais profunda
existem.

E há uma consequência que vai além do produto. Se o agente media a
descoberta e a consideração antes de o usuário chegar ao site, ou se o
usuário nunca chega, toda a infraestrutura de martech construída para
capturar essa jornada fica cega. Um exemplo é o uso de UTMs pelas LLMs:
o ChatGPT passou a adicionar UTMs em junho de 2025, mas o Gemini não
passa consistentemente, o Google AI Mode aparece como tráfego orgânico
comum, e o app mobile do ChatGPT ainda chega como direct.

O modelo de atribuição last-click não está sendo desafiado, ele está
sendo tornado irrelevante. E plataformas inteiras de automação de
marketing foram construídas para capturar uma jornada que acontece cada
vez menos dentro do site.

![](media/image5.gif){width="3.486111111111111in"
height="2.1527777777777777in"}

Ufa...chegamos ao fim. No próximo artigo, mergulho no Common Crawl e na
Harmonic Centrality para entender por que o substrato de conhecimento
dos LLMs de hoje é um reflexo direto do que o Google considerou
relevante por 25 anos.

**No próximo artigo:**

*A internet que os agentes aprenderam: Common Crawl, teoria dos grafos e
por que o substrato de conhecimento dos LLMs é um reflexo direto do que
o Google validou por décadas.*

**Referências**

*Vaswani et al. (2017) -"[[Attention Is All You
Need]{.underline}](https://arxiv.org/abs/1706.03762)".
arXiv:1706.03762.*

*Google Search Central - História completinha de atualizações do
algoritmo de SEO nerds para SEO nerds:
[[searchengineland.com/library/platforms/google/google-algorithm-updates]{.underline}](https://searchengineland.com/library/platforms/google/google-algorithm-updates)*

*Pew Research Center (2025) - "[[Google users are less likely to click
on links when an AI summary appears in the
results]{.underline}](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/?gad_source=1&gad_campaignid=22378837192&gbraid=0AAAAA-ddO9EYXeU6haYXvq9E3muH25f9N&gclid=Cj0KCQjw7IjOBhDyARIsAFzrWQzLCs4YBgXqXPqYSQEhRGUQ8K7TBaJyR02I0IM4RwMGWJf3wlhgkQkaAiJBEALw_wcB)".*

*Semrush (2025) -"[[AI Overviews Study: Inside Google's New Search
Reality]{.underline}](https://www.demandsphere.com/2024-aio-report/)".
Tem que deixar os dados para acessar o arquivo.*

*Seer Interactive (2025) -"[[AIO Impact on Google
CTR]{.underline}](https://www.seerinteractive.com/insights/aio-impact-on-google-ctr-september-2025-update)".*

*Google Chrome Developers - "CrUX Tools \| Chrome UX Report".
[[developer.chrome.com/docs/crux/methodology/tools]{.underline}](https://developer.chrome.com/docs/crux/methodology/tools?hl=pt-br).
Volta antigo Dash* 😭

*Mozilla Foundation (2024) - "[[Training Data for the Price of a
Sandwich: Common Crawl's Impact on Generative
AI]{.underline}](https://www.mozillafoundation.org/en/research/library/generative-ai-training-data/)".*

*Penske Media Corporation, Chegg Inc. - Processos antitruste contra
Google (2025). Documentação pública disponível nos tribunais federais
dos EUA (leia somente se estiver interessado na parte legal ou para
entender o que o Google está fazendo:*

*Chegg, Inc. v. Google LLC and Alphabet Inc., No. 1:25-cv-00543 (D.D.C.,
fev. 2025).
[[courtlistener.com/docket/69668109/chegg-inc-v-google-llc]{.underline}](https://www.courtlistener.com/docket/69668109/chegg-inc-v-google-llc/)*

*Penske Media Corporation v. Google LLC, U.S. District Court, D.C. (set.
2025).
[[axios.com/2025/09/14/penske-media-sues-google-ai]{.underline}](https://www.axios.com/2025/09/14/penske-media-sues-google-ai)*

*Comissão Europeia --- Coima de €2,95 mil milhões à Google por práticas
abusivas em adtech, setembro 2025.
[[portugal.representation.ec.europa.eu/news/comissao-europeia-aplica-coima-de-295-mil-milhoes-de-euros-google-por-praticas-abusivas-na-2025-09-05_pt]{.underline}](https://portugal.representation.ec.europa.eu/news/comissao-europeia-aplica-coima-de-295-mil-milhoes-de-euros-google-por-praticas-abusivas-na-2025-09-05_pt#:~:text=A%20Comiss%C3%A3o%20Europeia%20aplicou%20%C3%A0,publicit%C3%A1rias%20(%C2%ABadtech%C2%BB).)*

*Dados de testes próprios com PDPs de e-commerces de beleza brasileiros,
coletados via Playwright + Schema.org parser, março 2026. Dados
públicos, ok?* 😉

*Este artigo é o segundo de uma série sobre agentic commerce e a
pesquisa de MBA em Ciência de Dados da autora no ICMC/USP. Os artigos
constroem o contexto da pesquisa eles não descrevem sua metodologia ou
resultados.*
