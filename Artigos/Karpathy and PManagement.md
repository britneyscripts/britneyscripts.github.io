### **Aplicando Karpathy na Engenharia de Produto: Como criar um Cérebro Central e evitar a Dívida de Contexto**

**Karpathy e a Sobrevivência Cognitiva**

A primeira vez que vi o post original do Karpathy no X (que para mim
será sempre Twitter) sobre o uso de LLMs para construir Personal
Knowledge Bases fiquei muito entusiasmada com o uso de agentes para
gerir o conhecimento, porque se trata de gestão inteligente de fontes
vivas de conhecimento afinal, conhecimento, não é algo estático é um
ciclo contínuo (lembra dos infinitos posts sobre Lifelong learning?). Ao
compilar dados brutos em uma wiki, eu não estou apenas armazenando
informação, mas retroalimentando ativamente o sistema com novas
pesquisas e perguntas, enquanto a IA faz a manutenção desse emaranhado
de informação.

Porém, depois de montar minha stack no Obsidian, percebi que essa
estrutura era mais do que um laboratório de estudos: virou uma
arquitetura de sobrevivência cognitiva. Eu passei por uma mudança
internacional recente e não desejo a ninguém lidar com a carga mental da
burocracia entre dois países. Foi um alívio ter essa base viva atuando
como um \'segundo cérebro\' para que eu conseguisse organizar papers,
cruzar dados e não perder o foco nas aulas da USP no meio do caos.\"

Depois de ver meu stack funcionando surgiram duas questões, o famoso até
aí tudo bem. Primeiro esbarrei em um gargalo puramente estrutural: como
eu poderia lidar com o particionamento físico e a segunda que não era um
gargalo em si no momento: como poderia esta 'filosofia' ser aplicada em
um um contexto de engenharia de produto com diversas equipes em um
dia-a-dia com:

- O Paradoxo da Autonomia (Silos de Planejamento): Equipes de alta
  performance devem (deveriam) ter liberdade para escolher como
  organizam seu fluxo de trabalho (sprints fechadas vs. esteiras
  contínuas). O gargalo não está na engenharia já que pipelines de CI/CD
  são o padrão, mas na assimetria de visibilidade. Autonomia local
  otimiza a velocidade do time, mas fragmenta o contexto do negócio
  quando equipes com horizontes de planejamento diferentes precisam se
  integrar.

- Problemas de partição: (eu de novo fazendo valer meu MBA em engenharia
  de software): times com visões parciais do contexto global e do
  trabalho de outras equipes.

- Dívida de contexto: O preço (alto) pago pelo garbage in e pelo uso de
  ferramentas write-only.

Como deploys contínuos e QA automatizado já são a realidade (certo?), o
gargalo operacional não está mais na entrega do código. Portanto, vou
aplicar a visão do Karpathy em times onde a dor real não é o deploy, mas
a orquestração do caos, cito como exemplo: urgências transversais de
outras equipes, novas demandas sem transparência e pivots abruptos
ditados por análises de KPIs de negócio. O foco é evitar que essas
colisões invisíveis paralisem os entregáveis, assumindo que um roadmap
não é um \'sítio arqueológico\' engessado, mas um organismo vivo que
sofre mutações e precisa se comunicar ativamente com o resto da empresa.

Mas como construir essa ponte na prática? Curiosamente, a base
arquitetural para resolver esse caos corporativo nasceu de um gargalo
estritamente pessoal. Eu precisava resolver a \'quebra de contexto\'
dentro da minha própria casa. Como passo o dia no computador do
escritório, mas assisto às aulas da USP à noite no notebook no sofá, a
minha base de conhecimento não podia viver isolada em um único hardware.
A comunidade do Obsidian resolveu isso tratando a gestão de informação
pessoal como engenharia de software: usei o Obsidian Git para
transformar um repositório do GitHub na minha única Single Source of
Truth (SSOT). Foi ao ver essa sincronização fluida entre os meus
\'silos\' pessoais que a ficha caiu: se podemos descentralizar o
hardware e manter o contexto vivo para um único cérebro, podemos usar
agentes autônomos para fazer exatamente o mesmo entre equipes inteiras.

**Complexidade Matricial e a Ilusão da Região Homogênea**

Então.. como eu aplico isto na esteira de engenharia de produto? Pois no
meu caso pessoal é um micro problema. Para explicar isso vou usar o
exemplo de uma empresa onde fiz a gestão do produto e-commerce em 12
países na América Latina. O cenário era de complexidade matricial ou de
alta densidade operacional pois era a primeira vez que os 12 países
estariam convergindo em um mesmo produto digital - o e-commerce - tendo
ecossistemas de informação isolados, na sua maioria, e somado com
legislações de dados conflitantes e verticais locais independentes
(Marketing, Comercial, TI, Jurídico, etc). Tudo isso era tensionado por
uma diretriz estratégica em Miami e um centro logístico no Uruguai (olha
eu aqui). A ilusão, muitas vezes, é que a região é homogênea mas a
realidade destoa disto. A língua espanhola pode ser o tronco comum, mas
não unifica as nuances de negócios, a forma de pensar ou a interpretação
legal.

Naquela época, para evitar que o roadmap regional fosse devorado pelo
atrito, criei o que hoje eu chamaria de um \"linter de contexto humano\"
, mas na época chamava e ainda chamo Matriz País-Stakeholder. Construí
uma matriz, digamos monstruosa em tamanho, cruzando os países com as
equipes. Em cada uma das reuniões de alinhamento, eu extrai
palavras-chave e as injetava nesse documento. O meu trabalho era fazer o
parsing manual desses dados: analisar sinônimos, decodificar os atritos
culturais e alinhar termos para encontrar denominadores comuns - eu
podia passar horas executando esta tarefa porque eram 12 países com
todos as áreas envolvidas, cada gerente era um stakeholder e eu tinha
que ser transparente com TODAS as pessoas envolvidas respeitando cada
nuance cultural.

Quem atua em Product Ops sabe exatamente do que estou falando:
padronização, governança, consolidação de dados e gestão de ferramentas
para liberar o time focado na estratégia. O motivo da minha obsessão
pelo tema é que passei quase 5 anos no meio de duas realidades
matriciais diferentes, uma B2B e outra B2C. Se aplicarmos a lógica do
Karpathy em uma esteira de Product Ops, o que obtemos não é apenas
produtividade, mas uma gestão antecipada de necessidades.

**Ontologia: O Artefato Persistente**

Para chegar em um framework Karpathy-based vamos explicar essa matriz em
outros termos. Em AI e dados podemos chamar essa matriz de matriz
ontológica. Ontologia nada mais é do que um mapa de como as coisas se
relacionam no mundo real. Um banco de dados comum responde: A palavra
Uruguai aparece 10 vezes. Uma RAG comum (vector DB) responde: aqui estão
os textos que falam sobre Uruguai e logística. Uma ontologia responde: O
\"Uruguai\" \[É UM\] \"País\". O \"Uruguai\" \[CONTÉM O\] \"Centro
Logístico Regional\". O \"Centro Logístico\" \[IMPACTA\] o \"Prazo de
Entrega\" na Argentina\".

Então, uma ontologia são as regras de negócio estruturadas de uma forma
que a máquina entenda. Definir o que é marketing dentro do contexto da
empresa, tudo que envolva payments deve ser aprovado ou verificado por
um time de compliance por exemplo. E temos as variáveis idiomáticas para
definir que para um país "cancelar la factura" em espanhol pagar um
boleto e para outro país significa que alguém não pagou e o boleto
venceu. Guarda esta informação que vamos voltar a aplicação disto em um
framework.

Agora vamos imaginar essa matriz como um artefato persistente vivo onde
a IA ingere desde diversas fontes como chats do slack, teams, jira, faz
a leitura dos documentos estratégicos anuais ou semestrais regionais e
por país, faz a leitura de códigos de implementação e por exemplo faz a
detecção que a Argentina tem uma necessidade ou task de \"urgencia en
integración de pagos\" e o Brasil chama de \"priorizar gateway local\" e
atualiza a wiki automáticamente onde gera 2 referências cruzadas que
antes não tinham contato nenhum então neste caso eu poderia ler que não
temos essa necessidade somente em 1 país mais em dois ou até 4 se
fizermos outro check.

Aquela matriz se tornou o nosso primeiro artefato persistente. Foi ela
que reduziu o ruído, quebrou a fricção e permitiu uma priorização real
de produto baseada em interseções estratégicas claras. Mas o custo
humano e de tempo para manter essa engrenagem rodando era insano, eu que
o diga. Então porque eu acredito que o que karpathy fala é uma filosofia
que pode ser aplicada a engenharia de produto.

**A Dívida de Contexto e o Muro da Realidade**

Se você leu meu artigo anterior você deve lembrar que sou formada em
turismo o que não comentei é que eu amo história da arte e a forma como
as civilizações constroem e preservam seu conhecimento (hmmm construir e
preservar consistentemente no tempo, lembra algo?).

Na antropologia e na história, especificamente lendo Jacques Le Goff e
sua visão sobre a Idade Média (como em Por amor às cidades - um dos meus
livros favoritos), aprendemos que as estruturas que sobrevivem não são
um aglomerado de eventos isolados no tempo. Uma cidade é um organismo
vivo, feito de camadas de memória, ofícios e interações que se
sobrepõem. Ela é o artefato persistente definitivo. Paralelamente, a
semiótica de Umberto Eco nos ensina que o conhecimento humano é como uma
grande enciclopédia ou um labirinto, onde sinais soltos e fragmentados
precisam ser decodificados e conectados para formar um significado real.

Agora como juntar tudo isto em engenharia de produto? Falamos de memória
duas vezes uma com karpathy outra com Jacques Le Goff, na teoria ideal
de uma gestão de produto a memoria nao deveria ser um problema porque em
equipes maduras a rastreabilidade do código existe no esteira de CI/CD e
porque estratégico deveria (usei deveria a propósito) estar
religiosamente documentado na épica, sendo assim, uma história nem
deveria entrar em discovery sem o contexto de negócio e com KPIs, OKRs
alinhadas, estamos de acordo?

Agora um banho de realidade honesto vindo das melhores famílias de
produto onde a disciplina se quebra sobre a pressão de uma necessidade
de resolução urgente. Levanta a mão quem nunca abriu um ticket sem nada
dentro só com um título: Trocar a cor do botão. O corpo da tarefa está
em branco e o contexto ficou perdido em alguma thread do Slack (que
começou com: "você tem 5 minutinhos? Não posso entregar uma tarefa se
você não me entregar isto e recém verificamos essa necessidade") ou num
acordo verbal. O labirinto de ferramentas write-only se enche de Garbage
In seja por pressão, seja por políticas de boa vizinhança, não vamos
entrar nesta questão aqui.

Lembra que lá em cima falamos de RAG comum e Ontologia? Uma RAG comum
não poderia lidar com esta complexidade de limpeza de Garbage ou pelo
menos de regras para não aceitar o Garbage (uma história sem critérios
de aceitação ou KPIs/metas/impacto de negócio ainda não definidas). A AI
precisa de regras e de capacidade de roteamento (nosso controlador de
tráfego) que conecta o caos com as regras de negócio para decidir que
ação tomar, ou, não tomar.

E neste ponto que a filosofia do Karpathy colide com a engenharia de
produto pois, veja bem, o que ele propõe com o LLM Wiki não é um
buscador passivo mas uma arquitetura de agentes ativos que se aplicada a
esteira de produto a IA assume o papel de Linter de Contexto. Karpathy
mesmo fala isto:

**"Business/team: an internal wiki maintained by LLMs, fed by Slack
threads, meeting transcripts, project documents, customer calls.
Possibly with humans in the loop reviewing updates. The wiki stays
current because the LLM does the maintenance that no one on the team
wants to do."**

Ou seja, essa manutenção que ninguém quer fazer é a raiz da nossa tão
temida dívida de contexto. Em vez de lutar contra a natureza humana
exigindo que equipes sob pressão escrevam documentações perfeitas, o
Cérebro Central faz o trabalho sujo. Ele ingere o caos (o Slack, o Meet,
o repositório de código), aplica o linting de contexto e atualiza os
roadmaps - aqui, acredito firmemente, que entra o Human-in-the-Loop
porque continuo acreditando que: "Machines are not accountable". A
máquina faz a manutenção do labirinto, liberando o PM para fazer o que a
IA ainda não consegue: sentar com o cliente, analisar P&L e fazer
Discovery real.\"

**A Solução Agentiva: O Linter de Contexto e as 3 Capas**

Mas como funciona esse linting na prática? A AI ingere os dados brutos
que pode ser um ticket do jira com o título "trocar a cor do botão", uma
thread do slack onde alguém diz: "preciso disto urgente", ou verificar
se uma métrica de conversão caiu um 2% (o terror dos PMs). O linter
aplica as regras que você PM ensinou. Opa, mas aqui eu estou sendo
ingênua. Ou fui ingênua por alguns minutos, mas porque? Estamos falando
da filosofia aplicada a uma corporação, a um grupo de produtos, a macro
gestão de informação, então: quem é o dono do linting? Estamos falando
de informação corporativa e de decisões micro considerando o macro
contexto, portanto a resposta é simples: não é uma pessoa, é uma
hierarquia de capas.

Quantas capas o linting deveria ter? Vou responder usando minha
experiência trabalhando em uma corporação japonesa:

Capa 1: Corporativo (imutável - pelo menos para PMs e outros pontos
hierárquicos):

- \"Compliance LATAM é mandatory\"

- \"Deploys CI/CD precisam passar por QA automatizado\"

- OKRs globais

Capa 2: Regional (dependente do contexto):

- A Argentina ainda não aprovou uma nova lei de dados e antiga difere
  das regras da maioria dos países.

- O Uruguai tem um centro logístico que muda o inventory.

- Ciclos de venda por país diferem pois um país tem a maioria dos
  contratos estatais e outros a micro-empresas.

Capa 3: Equipes/Times locais ou de produto:

- \"Nosso time de payments vê urgência como high-priority\"

- \"Marketing precisa de dados 24h antes de launch\"

- Ritmo de sprint diferente

Um exemplo de como a AI resolveria um dos conflitos:

![](media/image1.png){width="5.078125546806649in"
height="4.992490157480315in"}

Neste caso a AI escalona o PM vê o conflito detectado e a decisão pode
ser: esperar aprovação enquanto paraleliza o discovery, o PM comunica a
equipe de payments: "Sabemos que é urgente, mas temos x dias de bloqueio
regulatório. Enquanto isso, vamos validar com clientes quais
funcionalidades vocês priorizam pós-compliance. Isto não é um não pelo
não simplesmente e um não agora, mas vamos seguir este caminho. Este
tipo de decisão onde temos o compliance de um lado e uma urgência que
pode estar gerando um bloqueio nas vendas não pode ser automatizado, não
porque a AI não consegue ver o conflito, ela consegue óbvio, mas porque
a solução envolve política: comunicar pressão, negociar timelines,
validar alternativas. Isto é nosso trabalho como PMs e isto nos leva ao
seguinte parágrafo.

O roteador entra justamente nesse ecossistema: temos os inputs, o
roteador (triagem) onde o agente entra. Acredito que existam duas formas
de ver essa relação roteador-agente, a primeira e o agente único que tem
a habilidade de roteamento em um sistema mais simples de AI e temos o
sistema multi-agentes onde o roteador e o maestro: onde temos um agente
supervisor ou orquestrador. E esse agente que fica ali recebendo o caos
semantico e consulta as 3 capas de linting.

Você deve ter percebido que eu não adicionei uma \'Capa de Product Ops\'
nessa arquitetura. Minha sensação é que Product Ops ainda é tratado como
o patinho feio da área de Produto, particularmente, defendo exatamente o
contrário. Ops geralmente gere ou desbloqueia o caos. Umberto Eco separa
beleza e feiura como Cosmos (ordem) e Caos (desordem). Parafraseando
Eco: a beleza tem limites claros, mas a feiura do caos é infinita.

A dura realidade do mercado é que muitas empresas não possuem uma área
de operações estruturada, e todo esse fardo de governança acaba caindo
no colo do PM, do Lead ou de quem quer que esteja na linha de frente,
dependendo da hierarquia. Mas você, lendo e acompanhando o raciocínio
até aqui: não sente falta de uma capa dedicada de Product Ops nesse
sistema?

Não vou entrar no mérito, já entrando, sobre Products Ops mas acredito
que por ter \'resultados dificilmente mensuráveis\' (ROI de governança)
se torna difícil as empresas darem o devido valor a essa cadeira porém
se tornarmos esse cérebro matricial uma ferramenta corporativa com uma
capa de Product Ops, você pelo menos poderia medir a produtividade desta
pessoa e/ou equipe? Uma capa de Product Ops gera telemetria do caos você
passaria a ter logs de quantos bloqueios transversais foram
interceptados, quantas horas foram salvas na engenharia entre outras
\'mensurações\'.

**O Conflito e o Human-in-the-Loop**

Mas porque eu insiro o Human-in-the-loop fora o motivo de
accountability? Vamos analisar o que a AI não faz bem...ainda:

- Ouvir um cliente reclamando, captar a real frustração por trás da
  reclamação, validar se é sinal de negócio ou edge case. Ouvir as
  reclamações todo mundo ouve mas a reclamação em si é a dor real?

- Ler o P&L de um país, correlacionar com roadmap, fazer a trade-off
  entre velocidade global e sensibilidade local.

- Sentar com um gerente de país e dizer: \'Entendi sua pressão, seu
  contexto e sua dor, mas aqui está por que estamos adiando\'.

Muito do que está encapsulado aqui tem a ver com política dentro de um
contexto de produto e a AI não faz escolhas políticas conscientemente
nem modulo o 'tom' do solução com o stakeholder.

Bom, com tudo isto podemos afirmar que a filosofia do Karpathy é
verdadeira em escala pessoal, porém a lógica é tão poderosa - compilação
uma vez, manutenção constante, contexto persistente - que deveria ser
escalada. Adicionando uma camada extra de governança de contexto o que
Karpathy faz para um indivíduo, transformar o caos em artefato
persistente no tempo com uma AI mantendo vivo e liberando, no nosso
caso, o PM para focar em decisões e política acredito que seja
exatamente o que organizações precisam fazer entre times.

Se eu tivesse uma wiki por país e não uma mega matriz que eu precisava
alimentar e revisar manualmente teria levado menos tempo em encontrar
soluções realmente agora vejo que eu era uma wiki ambulante. Se uma wiki
mantida por AÍ resolve cegueira individual, então uma wiki conectada
entre times e mantida por uma AI com as 3 capas de linting incorporadas
resolveria a cegueira organizacional ou melhor ainda wikis de diversos
times que conversam entre si com as capas de linting.

**Não Terceirize o seu Cérebro**

Ok Bettina, mas e agora? A teoria é linda, mas como implementamos isso
na prática sem que a conta de FinOps quebre a empresa rodando chamadas
de API a cada atualização de ticket? Ou pior: como fazemos isso sem
enviar o roadmap estratégico global e os dados confidenciais da operação
para os servidores de uma empresa terceira na nuvem? A resposta está em
tirar o Cérebro Central da nuvem pública e trazê-lo para casa. No
próximo artigo, vamos descer para a casa das máquinas e explorar como
utilizar Modelos Locais (SLMs - Small Language Models), rodando
in-house, para sustentar essa infraestrutura de inteligência de forma
segura, barata e proprietária. Afinal, a memória de uma empresa é o seu
maior ativo estratégico e você não terceiriza o seu cérebro e tampouco
deveria terceirizar onde ele vive.

Referências e inspirações:

- ECO, Umberto. Da Árvore ao Labirinto: estudos históricos sobre o signo
  e a interpretação. São Paulo: Record, 2010. (Conceito utilizado para a
  decodificação de sinais soltos no labirinto de contexto corporativo).

- ECO, Umberto. História da Feiura. São Paulo: Record, 2007. (Conceito
  filosófico utilizado para ilustrar a complexidade infinita e
  imprevisível do caos operacional em contraposição à rigidez limitadora
  da \"beleza\" estratégica, embasando a necessidade de estruturação em
  Product Ops).

- HARVARD BUSINESS REVIEW. [[Don\'t Let AI Reinforce Organizational
  Silos]{.underline}](https://hbr.org/2025/09/dont-let-ai-reinforce-organizational-silos).
  Setembro, 2025. (Validação de mercado sobre o risco de ferramentas de
  IA não integradas aprofundarem a dissonância e a cegueira entre
  departamentos).

- KARPATHY, Andrej. Personal Knowledge Base / LLM OS (GitHub Gist).
  Disponível em:
  [[https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f]{.underline}](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).
  (Inspiração técnica original sobre a arquitetura de uso de LLMs e
  agentes para a gestão inteligente e retroalimentação contínua de bases
  de conhecimento).

- LE GOFF, Jacques. Por amor às cidades. São Paulo: Editora Unesp, 1998.
  (Inspiração filosófica e metáfora estrutural sobre artefatos
  persistentes e a construção de organismos vivos baseados em camadas de
  memória).
