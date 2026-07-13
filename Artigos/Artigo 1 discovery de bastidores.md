Como sair do \"enlatado\" e usar a Árvore de Oportunidades para
orquestrar o caos cultural e estratégico.

Feb 26, 2026

[Samy Bersi](https://substack.com/@samybersi/note/c-206695138)Jan 28

O texto ruim pode ser revisado. O texto inexistente não.

*(notas para ler depois e me lembrar)*

Inspirada pela Samy Bersi, escrevo meu primeiro post. E mesmo com a
síndrome de impostora apitando, decidi que esta história de bastidores
precisava ser contada.

![](media/image1.gif){width="3.3333333333333335in"
height="2.3194444444444446in"}

Este post não é uma receita de bolo. A minha resposta, como PM, para 'o
que fazer na situação X para conseguir X resultado' quase sempre será:
**depende**.

p.s.: A linda foto do link do post é do [[Roberto
Huczek]{.underline}](https://unsplash.com/es/@tamoio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
no
[[Unsplash]{.underline}](https://unsplash.com/es/fotos/mantel-floral-azul-y-blanco-qS8BH24w7mk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Thanks for reading Bettina! Subscribe for free to receive new posts and
support my work.

Contexto

![](media/image2.gif){width="3.0in" height="1.6944444444444444in"}

Ao assumir a gestão de um e-commerce para 12 países, que estava na etapa
de rollout para os últimos 3 países, dentro de uma empresa tradicional
B2B, minha maior preocupação era entender em que contexto eu estava
entrando e que valor eu poderia gerar já de entrada. Portanto, o uso
engessado de frameworks tradicionais não nos salvaria. Mais do que qual
template usar, o principal era:

- Entender a raíz dos problemas que estavam surgindo nos países que já
  haviam finalizado a fase de implementação.

- Mapear a maturidade das equipes internas e externas para uma segunda
  fase.

- Simplificar o que fosse possível para clientes internos nesta primeira
  iteração pós rollout.

- Documentar e dar transparência a todo este processo.

Diante dessas necessidades, percebi que o desafio técnico era o menor
dos problemas. O verdadeiro *Problem Space* (e o frame do meu desafio)
era voltado para dentro: vitalmente humano: como orquestrar squads de
culturas distintas e traduzir necessidades locais em uma operação
digital escalável? O foco não era apenas melhorar a implementação de uma
ferramenta, mas realizar a alfabetização digital de uma estrutura
tradicional.

Eu precisava preparar o terreno interno; isto permitiria, de fato, fazer
a gestão do produto digital propriamente dito. Meu primeiro produto era
a viabilidade da operação interna.

Aqui falo de educar para o digital e alinhar processos. Neste contexto,
era muito importante que a nossa primeira abordagem fosse leve,
transparente e simples. Precisávamos reduzir a carga cognitiva e a
fricção operacional. Afinal, essa era a primeira vez que a empresa, as
squads e as pessoas trabalhavam com processos voltados para o
e-commerce.

Mas Eva...porque? Estratégia regional nova, equipe nova, linguagem
técnica nova, necessidades novas\... era muita novidade para que as
equipes fizessem a gestão de mudança e nossa equipe a gestão de
expectativas. Eram muitos pontos de atrito a serem resolvidos mesmo
antes de pensar em mudar uma linha de código ou fazer alguma
implementação.

Para dar um passo atrás: a implementação inicial era uma solução de
e-commerce 'out-of-the-box' para 12 países. A ideia era ter um botão de
comprar genérico com um rollout faseado para ganhar velocidade de
mercado. Mas a realidade nos cobrou o preço: entre o clique e a
conversão, as regras de negócio locais criaram um abismo.

Identificando aliados

![](media/image4.gif){width="3.0277777777777777in"
height="3.0277777777777777in"}

¿Y ahora quién podrá defendernos?

Em um ecossistema com mais de 150 pessoas, o mapeamento de *Early
Adopters* e *Change Agents* foi crucial. Com a ajuda de quem já estava
no projeto, foram identificados nossos entusiastas e os influenciadores
em cada país. Eles foram meus pontos de apoio para vencer a inércia
cultural e facilitar a adesão das equipes locais a este novo modelo
operacional.

*(Daria para escrever um post inteiro dedicado apenas ao que mudava
operacionalmente, incluindo a logística para os países, mas o foco aqui
era o alinhamento).*

Primeiros descobrimentos

O primeiro choque de realidade veio ao analisarmos os dados da jornada
de checkout: porque quase 90% dos clientes chegava até a página de
pagamento e desistia ou voltava ao canal tradicional?

Começamos com as perguntas fundamentais: era o perfil do cliente? A
experiência de uso? Ou a oferta dos meios de pagamento?

![](media/image5.gif){width="3.486111111111111in"
height="2.6527777777777777in"}

O botão de comprar existia, mas entre o clique e a conversão, as regras
de negócio locais criaram um abismo. Para a maioria dos países, havia
apenas uma forma de pagamento disponível; em um caso específico, a única
opção era o pagamento offline.

Não entrarei no mérito do porquê foi escolhido apenas um método para 12
países. Em empresas tradicionais, quando surge a oportunidade de um
*go-to-market* acelerado, o foco no *speed-to-market* costuma ditar o
ritmo. Estrategicamente, isso gera custos que, em teoria, seriam
minimizados nas iterações seguintes.

Para entender esse cenário, cruzamos os dados iniciais do
recém-instalado Google Analytics (que apontou o sintoma) com dados
históricos de países que já executavam uma *Digital Migration Strategy*
(que nos ajudou a entender a causa). O veredito? O comportamento
histórico era puramente tradicional. Mas o buraco era mais embaixo e
surgiram perguntas complexas para definir as ações que seriam tomadas:

- Havia necessidade de filtros de Compliance/PLD (Prevenção à Lavagem de
  Dinheiro)?

- Quais eram as regras de parcelamento específicas de cada país?

- O custo-benefício de integrar um método X valia a pena para um único
  mercado?

- Como oferecer a venda digital sem canibalizar a comissão do vendedor
  tradicional?

Multiplique essas complexidades regulatórias e logísticas por 12. O
cenário parecia caótico e desconectado. Minha principal pergunta como PM
era: *como simplificar este discovery para 12 países, otimizando
recursos que, neste caso, eram muito mais humanos do que técnicos*?

Pausa para falar de Stakeholders

A ansiedade dos stakeholders era constante e compreensível. Para eles,
que legitimamente tinham o foco (e as metas pessoais e regionais) na
ponta final da experiência (a venda), e não na complexa teia de regras
do backstage, o problema era quase sempre pragmático e visual.

O pedido pelo famoso "botão verde" ou por mudanças estéticas imediatas
mascarava a necessidade de entender o que estava acontecendo trás
bambalinas.

Identificar essa dor foi fundamental para definir a transparência como
prioridade máxima. Precisávamos garantir confiança e, principalmente, o
apoio deles para as decisões de produto que viriam a seguir.

Era essencial esse alinhamento porque algumas decisões críticas eram
tomadas em escalões mais altos e *o que não é visto pode ser
negligenciado*. Portanto, como falado, evitar os *blinds spots (pontos
cegos)* na comunicação não era apenas uma escolha, era uma estratégia de
sobrevivência para o produto.

Como Simplificar e acelerar?

Para evitar a paralisia por análise e o excesso de reuniões táticas,
adotamos a *Opportunity Solution Tree (OST)* (que eu amo ❤️) conectada a
um Roadmap Regional. Quanto mais sênior o PM, mais ele entende que o
framework deve simplificar processos e não comprometer a agilidade. A
OST deu visibilidade ao invisível, permitindo identificar padrões de
comportamento entre países (como Colômbia e Peru por exemplo) e tratar
exceções regulatórias de forma isolada.

![](media/image6.gif){width="3.125in" height="3.125in"}

A árvore de oportunidades ajudou, e muito!, a gerenciar as expectativas,
já que o framework foi utilizado para criar uma gestão com total
transparência. Isto ajudou a olhar para dentro de suas equipes e a
melhorar processos que, no início, pareciam não ter relação com o
e-commerce.

A invisibilidade não era apenas geográfica; era também entre
departamentos. Ao evidenciar as nuances culturais e legais, foi
gratificante encontrar soluções que pareciam impossíveis para um
determinado país simplesmente observando o vizinho.

Através dessa documentação, transformamos o abstrato em uma ferramenta
visual: percebemos, por exemplo, que Colômbia e Peru compartilhavam 80%
das mesmas dores, embora a Colômbia tivesse a camada adicional de
complexidade dos registros de Prevenção à Lavagem de Dinheiro (PLD).

O espelhamento entre países utilizando as árvores de oportunidades foi o
ponto de partida ideal neste contexto.

Mas o "ideal" tem matizes culturais: desde o natural apego à segurança
dos processos já conhecidos, até a insegurança genuína de lidar com
ferramentas e configurações técnicas totalmente novas.

*(Afinal, somos todos humanos, e compreender que o receio diante do
desconhecido é um comportamento inerente à nossa natureza é fundamental
para qualquer liderança.)*

Em alguns mercados, a cultura organizacional valoriza muito a estrutura
hierárquica, o que pode fazer com que contribuições valiosas ou alertas
críticos não surjam de forma espontânea em reuniões de grandes grupos.

Perceber essa nuance foi fundamental. Em vez de forçar um modelo único
de feedback, adaptamos nossa escuta: passamos a utilizar canais internos
e conversas individuais para garantir que todos se sentissem
confortáveis em contribuir. Dar visibilidade ao que estava sendo
construído através das árvores de oportunidades ajudou a criar essa
segurança psicológica, quebrando silos e permitindo que as vozes locais
chegassem até nós de forma segura e produtiva.

Dar visibilidade ao que estava sendo construído ajudou a quebrar esses
silos. Sempre encontrávamos pontos de apoio nos Early Adopters e Change
Agents que mencionei anteriormente.

E o roadmap adiantou ser unificado? Sim. Com uma média de 3 reuniões por
país para tomar a decisão dos meios de pagamento e muita negociação, o
roadmap junto com a documentação das árvores de oportunidades se tornou
a maior e melhor ferramenta de comunicação e gestão das expectativas dos
stakeholders.

Esta visibilidade facilitou muito no momento de responder as perguntas
que comentamos anteriormente.

A Metodologia e o "Discovery de Bastidores"

Porque Discovery de Bastidores? Porque foi literalmente executado no
meio do fogo cruzado entre rollout, primeira iteração, legado técnico
batendo na porta, stakeholder já cobrando resultado. Tempo? Laboratório?
Cenário Ideal? Não, nada disso.

Então...

A árvore de oportunidades foi a ponta do iceberg para trabalharmos com
*Continuous Discovery* ❤️. Mas aqui houve uma adaptação importante: o
foco inicial não era o usuário final, mas o nosso cliente interno.

Era um risco? Sim. Mas, para adaptar qualquer solução, precisávamos
primeiro enfrentar as características duras do contexto da organização:

- Silos organizacionais: Áreas que não se comunicavam e desconheciam os
  processos umas das outras.

- Transição Cultural: Uma força comercial analógica entrando no digital.

- Curva de Aprendizado: Equipes inteiras que nunca haviam operado um
  e-commerce.

- A "Solução Enlatada": Uma plataforma out-of-the-box com baixa
  aderência às necessidades e legislações locais (localizations).

Esse esforço de alinhamento para quebrar os silos foi o que nos preparou
para lidar com os gargalos e as fricções futuras da jornada do cliente.
Foi essa base estratégica, suada e, por vezes, sofrida, que pavimentou o
caminho para que pudéssemos, de fato, gerenciar o produto na prática.

Mas aí vem a pergunta: e os dados nisso tudo? As decisões foram tomadas
às cegas?

Dados

Os dados que existiam eram da venda tradicional. A migração para o canal
digital exigia conhecer regras legais, financeiras, custos e estratégia
digital destes países e prever resultados/números do canal digital. Os
dados neste caso ajudaram a responder ou dar embasamento à algumas
perguntas que surgiram no caminho:

- Qual a melhor estratégia: focar na migração digital (Digital Migration
  Strategy) dos clientes atuais para reduzir o custo de servir (Cost to
  Serve) e enxugar a operação, ou priorizar somente a captura de novos
  leads? (Neste caso novos meios de pagamento poderiam esperar).

- Como B2B era possível capturar novos clientes sem o filtro do registro
  do comercial? (Se a resposta fosse negativa, os países optavam por uma
  implementação mais cautelosa dos meios de pagamento, priorizando a
  segurança do fluxo de caixa sobre a velocidade de lançamento).

- O fluxo de lead a cliente iria passar pelo canal digital? (Se sim,
  urgentemente revisar novos meios de pagamento).

Em épocas onde ainda não existiam as IAs, filtrar essas perguntas foi um
trabalho hercúleo, porém muito satisfatório e certeiro. As perguntas
acima só mostram uns 2% do total trabalhado? Sim.

Os dados foram usados conforme:

- Disponibilidade (respeitando a normativa legal de cada país)

- Maturidade (precisava gerar features? os dados estavam tratados?
  normalizados? etc...)

- Entendimento (alguém nas equipes poderia ajudar a entender os dados na
  sua totalidade?).

Não adianta forçar equipes inteiras a engolir dados que nem elas sabiam
que existiam, ou que recém estavam sendo gerados, como os do Google
Analytics, Search Console, etc. Muito do falado anteriormente era
questão de decisões estratégicas, implementações mínimas com Adobe
Commerce e entendimento prévio do cliente e do processo de compra.

A cultura de dados, ou melhor dito o data-driven, ainda estava muito
embrionário, porém o entendimento dos dados que tínhamos em mãos foi
utilizado apenas o suficiente para mostrar que a estratégia deve, sim,
ser guiada por dados, e não somente agir baseada no *antes era así y
siempre fue así*.

Conclusão

Neste contexto, a metodologia foi nosso hábito de navegação e, como tudo
depende, às vezes estávamos sem vento para navegar e tínhamos que soprar
as velas, às vezes o mar estava tempestuoso e tínhamos que saber navegar
no caos.

A árvore de decisão se transformou na nossa bússola indicando o caminho,
porém com a flexibilidade suficiente para aceitar mudanças caso fossem
necessárias (e foram), e o roadmap, na mesma toada de flexibilidade, era
nosso mapa.

Com as árvores de decisão e o conhecimento da ferramenta que tínhamos em
mãos, percebemos que nem todas as soluções encontradas precisavam de uma
linha sequer de código novo. Muitas vezes em gestão de produtos
esquecemos que nem tudo é desenvolvimento. Isso foi fundamental para
liberar o tempo da equipe de desenvolvimento para pequenas correções ou
implementações que realmente importavam na plataforma para os países que
ainda estavam na saída à produção.

Resumindo, uma solução one-size-fits-all pode ajudar a um go-to-market
rápido e enxuto e funcionar como a base de um discovery posterior, mas
pode abrir a caixa de pandora em equipes, processos, dados,
oportunidades e muito mais. O relato acima se trata mais de gestão de
stakeholders, discovery interno, entendimento do contexto cultural,
econômico, legal e de maturidade de cada país para, só então, escalar
uma solução digital mais robusta.

![](media/image3.gif){width="2.986111111111111in"
height="2.486111111111111in"}

**Referências**:

Um livro - Torres, Teresa. [*[Continuous Discovery
Habits]{.underline}*](https://www.estantevirtual.com.br/livro/livro-continuous-discovery-habits-FVQ-7222-000-BK):
A bíblia para quem quer usar a Árvore de Oportunidades (OST) para dar
sentido ao caos (Lembra que adaptamos tudo ao nosso contexto, o
aprendido no livro foi uma guia).

Um artigo - Digital Transformation Is Not About Technology (HBR - por
Gerald C. Kane et al.): Muita leitura sobre foco nas pessoas, não tanto
nas ferramentas.

Uma metodologia - Change Management 101: Essencial para PMs que, como
eu, descobriram que gerir um produto é, na verdade, gerir pessoas.

O que vem por aí\...

Depois deste texto gigante (prometo que os seguintes vão ser mais
curtinhos) vou começar a escrever sobre meu projeto para o MBA da USP.

Resolvi juntar meu amor ou obsessão (o tempo dirá) sobre performance
(CWV) e dados e transformá-los em uma linda (espero) tese: *Por que o
Agentic Commerce vai ignorar o seu e-commerce (e o que a performance tem
a ver com isso)*.

Esta idéia surgiu na prática trabalhando com a API do relatório CRUX do
Google, BigQuery, SQL e GA, quando timidamente as LLMs começaram a
surgir nos relatórios de tráfego. Se a IA é o novo "consumidor", como a
saúde técnica do seu site influencia a decisão dela? É isso que estou
investigando.

Nos vemos lá? 😉

Eva de Paula
