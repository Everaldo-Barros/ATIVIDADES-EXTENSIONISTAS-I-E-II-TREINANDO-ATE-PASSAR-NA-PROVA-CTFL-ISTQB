const modules = [
  {
    id: "fundamentos",
    name: "Fundamentos de Teste",
    description: "Motivos, princípios e processos",
    source: "ISTQB CTFL Syllabus v4.0.1, capítulo 1",
    additionalWrongOptions: [
      "Comprovar matematicamente que não existem defeitos no software",
      "Substituir a depuração e a correção de defeitos",
      "Garantir que todas as entradas possíveis foram executadas",
      "Eliminar a necessidade de avaliar riscos",
      "Certificar a qualidade apenas pela quantidade de testes"
    ],
    questions: [
      ["Qual é o principal objetivo do teste de software?", ["Demonstrar que o software não possui defeitos", "Avaliar a qualidade e reduzir riscos", "Substituir a revisão de requisitos", "Eliminar a necessidade de depuração"], 1, "O teste busca fornecer informação sobre qualidade e apoiar a identificação e redução de riscos."],
      ["Por que o teste não consegue provar a ausência de defeitos?", ["O teste não usa ferramentas", "É impossível testar todas as combinações possíveis", "Os testes sempre contêm erros", "A documentação nunca é correta"], 1, "Com sistemas complexos, o número de entradas e caminhos pode ser impraticável para cobrir completamente."],
      ["Qual princípio afirma que testes tendem a encontrar menos defeitos após muitas execuções?", ["Testar cedo", "Paradoxo do pesticida", "Agrupamento de defeitos", "Ausência de erros"], 1, "O paradoxo do pesticida indica a necessidade de atualizar regularmente os testes para continuar encontrando defeitos."],
      ["Qual atividade confirma se os defeitos encontrados foram corrigidos?", ["Reteste", "Planejamento", "Revisão", "Análise estática"], 0, "Reteste verifica especificamente se uma correção resolveu o defeito para o qual o produto foi alterado."],
      ["Qual princípio relaciona defeitos a concentrações em áreas específicas?", ["Agrupamento de defeitos", "Ausência de erros", "Testes dependentes de contexto", "Paradoxo do pesticida"], 0, "O princípio do agrupamento afirma que defeitos tendem a estar concentrados em poucas áreas do sistema."],
      ["Qual afirmação diferencia teste de depuração?", ["Teste pode revelar falhas; depuração investiga e corrige as causas", "Teste corrige o código e depuração aprova requisitos", "Ambos significam exclusivamente executar casos", "Depuração acontece sempre antes das falhas", "Teste e depuração são sinônimos"], 0, "Teste pode revelar falhas; depuração analisa a causa e corrige o defeito que as provocou."],
      ["O que é um erro humano no contexto de teste?", ["Uma ação que pode introduzir um defeito", "O resultado observável de uma falha", "Uma ferramenta que executa um caso", "Uma condição de sucesso definida no plano", "Um requisito aprovado sem revisão"], 0, "Uma pessoa pode cometer um erro, introduzindo um defeito que, ao ser executado, pode causar uma falha."],
      ["Qual é um benefício de iniciar os testes cedo?", ["Encontrar defeitos quando são menos custosos de corrigir", "Eliminar a necessidade de testar o produto final", "Garantir que os requisitos nunca mudarão", "Substituir a comunicação entre equipes", "Evitar que o software precise de manutenção"], 0, "A detecção precoce geralmente reduz o custo e o esforço para corrigir defeitos."],
      ["O que significa que o teste depende do contexto?", ["A abordagem deve considerar o produto e seu uso", "Todo projeto deve usar os mesmos testes", "Somente sistemas críticos precisam de teste", "A técnica escolhida independe dos riscos", "Os testes devem ocorrer apenas em produção"], 0, "O contexto do produto, dos riscos e do projeto influencia a abordagem de teste adequada."],
      ["O que caracteriza uma falha?", ["O sistema não executa como esperado durante a execução", "Uma ação humana que introduz um defeito", "Uma imperfeição que nunca é executada", "Uma previsão de risco sem evidência", "Um caso sem resultado esperado"], 0, "Falha é um evento no qual o produto apresenta comportamento diferente do esperado durante a execução."],
      ["Qual é um objetivo comum do teste?", ["Fornecer informação para decisões sobre qualidade e risco", "Provar que todos os defeitos foram removidos", "Substituir as decisões de negócio", "Garantir que o produto nunca falhará", "Evitar que o software seja alterado"], 0, "Os objetivos de teste variam conforme o contexto e incluem fornecer informação para decisões sobre qualidade e risco."],
      ["Qual descrição diferencia melhor garantia da qualidade e teste?", ["Garantia da qualidade foca processos; teste avalia produtos de trabalho", "Garantia da qualidade executa apenas testes; teste define políticas organizacionais", "Ambas significam somente corrigir código", "Teste substitui toda atividade de garantia da qualidade", "Garantia da qualidade é sempre feita após a liberação"], 0, "A garantia da qualidade é predominantemente orientada a processos, enquanto o teste avalia produtos de trabalho."],
      ["O que é um produto de trabalho de teste (testware)?", ["Artefato produzido ou usado nas atividades de teste", "Somente o executável final do sistema", "Apenas uma ferramenta comercial", "Um defeito já corrigido", "Um relatório financeiro do projeto"], 0, "Testware inclui artefatos como planos, condições, casos, dados e resultados de teste."],
      ["Qual atividade ocorre durante a análise de teste?", ["Analisar a base de teste e identificar condições de teste", "Corrigir diretamente o código de produção", "Liberar o produto sem avaliar resultados", "Comprar ferramentas antes de definir necessidades", "Arquivar resultados de uma execução futura"], 0, "A análise de teste examina a base de teste para identificar o que deve ser testado."],
      ["Qual atividade transforma condições de teste em casos e dados?", ["Projeto de teste", "Encerramento de teste", "Depuração", "Gestão de configuração", "Revisão de código"], 0, "No projeto de teste, condições são detalhadas em casos, dados e resultados esperados."],
      ["Qual habilidade é importante para um testador?", ["Comunicar achados de forma construtiva e clara", "Evitar compartilhar riscos com a equipe", "Substituir conhecimento do domínio por suposições", "Priorizar quantidade de testes sobre resultados", "Impedir colaboração com desenvolvedores"], 0, "Comunicação clara e colaboração ajudam a equipe a compreender defeitos, riscos e resultados."],
      ["Qual é um benefício da independência de teste?", ["Uma perspectiva diferente pode identificar defeitos que o autor não percebeu", "Elimina a necessidade de comunicação", "Garante que nenhum defeito será encontrado após a liberação", "Dispensa conhecimento do produto", "Torna desnecessário definir critérios de teste"], 0, "Uma perspectiva independente pode reduzir vieses, embora a independência também exija boa colaboração."],
      ["O que caracteriza a abordagem de equipe integrada (whole team)?", ["Pessoas com competências diferentes compartilham responsabilidade pela qualidade", "Somente testadores são responsáveis pela qualidade", "Desenvolvedores não participam de atividades de teste", "A equipe de teste trabalha sem contato com o produto", "A qualidade é verificada apenas após a entrega"], 0, "Na abordagem de equipe integrada, diferentes integrantes colaboram para alcançar a qualidade."],
      ["O que é a base de teste?", ["Informação usada como referência para análise e projeto dos testes", "Apenas o resultado final de uma execução", "A lista de ferramentas compradas", "O conjunto de defeitos já encerrados", "Um ambiente de produção sem requisitos"], 0, "A base de teste pode incluir requisitos, histórias, modelos e outros artefatos usados para derivar testes."],
      ["Por que a rastreabilidade entre base de teste e testware é útil?", ["Ajuda a avaliar cobertura e analisar o impacto de mudanças", "Garante que não haverá defeitos", "Substitui a revisão de requisitos", "Impede alterações na base de teste", "Torna desnecessários os resultados esperados"], 0, "Rastreabilidade relaciona requisitos, riscos, casos e resultados, apoiando cobertura e análise de impacto."]
    ]
  },
  {
    id: "ciclo",
    name: "Ciclo de Vida do Teste",
    description: "SDLC, tipos e manutenção",
    source: "ISTQB CTFL Syllabus v4.0.1, capítulo 2",
    additionalWrongOptions: [
      "Executar todos os níveis exclusivamente depois da entrega",
      "Substituir os testes de componente por testes de aceitação",
      "Avaliar desempenho apenas por inspeção estática",
      "Dispensar o reteste após qualquer correção",
      "Impedir mudanças no produto após a primeira versão"
    ],
    questions: [
      ["Em qual modelo o teste é iniciado nas fases iniciais do desenvolvimento?", ["Ágil apenas", "Teste em cascata tardio", "Abordagem shift-left", "Teste exclusivamente final"], 2, "Shift-left consiste em realizar atividades de teste o mais cedo possível no ciclo de vida."],
      ["Qual tipo de teste verifica se componentes integrados funcionam em conjunto?", ["Teste unitário", "Teste de integração", "Teste de instalação", "Teste de usabilidade"], 1, "O teste de integração verifica interfaces e interações entre componentes ou sistemas."],
      ["O que caracteriza teste de manutenção?", ["Apenas testes executados por usuários", "Testes após correções ou alterações", "Testes antes da análise de requisitos", "Testes que não possuem casos documentados"], 1, "Testes de manutenção validam alterações e procuram regressões causadas por manutenção ou evolução."],
      ["Qual teste verifica que uma alteração não prejudicou comportamentos existentes?", ["Teste alfa", "Teste de regressão", "Teste de carga", "Teste de compatibilidade"], 1, "O teste de regressão busca detectar efeitos negativos não intencionais em comportamento já existente."],
      ["Qual teste avalia uma versão com usuários representativos antes da liberação?", ["Teste beta", "Teste unitário", "Teste estático", "Teste de componentes"], 0, "O teste beta coloca uma versão nas mãos de usuários externos ou representativos para avaliação real."],
      ["Qual é o foco principal do teste de sistema?", ["Avaliar o sistema completo em relação aos seus requisitos", "Testar apenas funções isoladas", "Verificar somente a interação entre dois componentes", "Revisar código sem executá-lo", "Validar exclusivamente a facilidade de instalação"], 0, "O teste de sistema avalia o comportamento e as capacidades do sistema como um todo."],
      ["Qual nível de teste se concentra nas interações entre componentes?", ["Teste de integração de componentes", "Teste de aceitação", "Teste de sistema", "Teste de manutenção", "Teste de usabilidade"], 0, "O teste de integração de componentes examina interfaces e interações entre componentes integrados."],
      ["Qual é o objetivo do teste de confirmação?", ["Verificar que um defeito relatado foi corrigido", "Encontrar efeitos colaterais em áreas não alteradas", "Medir somente o tempo de resposta", "Aprovar o sistema sem executar testes", "Verificar componentes não relacionados"], 0, "O teste de confirmação, ou reteste, verifica se a correção resolveu o defeito específico."],
      ["Qual tipo de teste avalia características como desempenho e usabilidade?", ["Teste não funcional", "Teste de componente", "Teste de confirmação", "Teste estático", "Teste de integração contínua"], 0, "Testes não funcionais avaliam atributos de qualidade, por exemplo desempenho, usabilidade e segurança."],
      ["Quando o teste de manutenção pode ser necessário?", ["Após uma mudança, migração ou retirada do sistema", "Somente antes de escrever requisitos", "Apenas durante a primeira compilação", "Exclusivamente quando não há alterações", "Somente em componentes nunca liberados"], 0, "Manutenção pode exigir testes após alterações, migrações, atualizações ou descontinuação do sistema."],
      ["Como o ciclo de vida de desenvolvimento influencia o teste?", ["Determina como e quando as atividades de teste são organizadas", "Elimina a necessidade de testar em ciclos iterativos", "Define que todo teste deve ocorrer após a codificação", "Substitui os objetivos de teste por datas", "Impede atividades de teste em produção"], 0, "As atividades de teste são adaptadas ao ciclo de vida, às suas práticas e ao contexto do projeto."],
      ["O que caracteriza um ciclo de desenvolvimento iterativo e incremental?", ["O produto cresce por incrementos avaliados ao longo de iterações", "Todo o teste é adiado até um único lançamento final", "Cada incremento dispensa integração", "Requisitos nunca são revisados entre iterações", "Somente documentação é produzida em cada ciclo"], 0, "Em ciclos iterativos e incrementais, funcionalidades são construídas e avaliadas em incrementos sucessivos."],
      ["Qual é uma contribuição de integração contínua para o teste?", ["Executar verificações frequentes após mudanças integradas", "Evitar a necessidade de testes de regressão", "Executar testes apenas uma vez antes do lançamento", "Substituir resultados esperados por compilações", "Impedir que código seja integrado"], 0, "Integração contínua pode executar testes automatizados frequentemente para fornecer feedback rápido."],
      ["O que é teste funcional?", ["Avaliação das funções e comportamentos que o sistema deve fornecer", "Avaliação exclusiva da velocidade", "Verificação apenas de padrões de código", "Avaliação exclusiva da facilidade de instalação", "Análise de custos de licenciamento"], 0, "O teste funcional verifica o que o sistema faz em relação aos requisitos funcionais."],
      ["O que diferencia teste de caixa-preta de teste de caixa-branca?", ["Caixa-preta deriva testes do comportamento; caixa-branca considera a estrutura interna", "Caixa-preta exige acesso ao código e caixa-branca não", "Ambos ignoram requisitos e estrutura", "Caixa-branca testa apenas usabilidade", "Caixa-preta é sempre manual"], 0, "Técnicas de caixa-preta consideram comportamento especificado; técnicas de caixa-branca consideram a estrutura interna."],
      ["Qual é o foco típico do teste de aceitação?", ["Verificar se o sistema atende às necessidades e critérios dos interessados", "Testar apenas funções isoladas", "Medir somente cobertura de instruções", "Substituir todos os testes de sistema", "Avaliar exclusivamente o estilo do código"], 0, "O teste de aceitação ajuda a avaliar se o produto está pronto para uso e atende às necessidades acordadas."],
      ["Qual benefício é associado ao teste antecipado em um SDLC?", ["Defeitos podem ser identificados antes de se propagarem para etapas posteriores", "A equipe deixa de precisar revisar requisitos", "Todos os riscos são eliminados antes do desenvolvimento", "Testes dinâmicos tornam-se impossíveis", "A entrega ocorre sem validação"], 0, "Encontrar defeitos cedo reduz o custo de retrabalho e evita que problemas se propaguem."],
      ["Qual é uma diferença entre teste de confirmação e teste de regressão?", ["Confirmação verifica a correção específica; regressão procura efeitos colaterais", "Confirmação mede desempenho; regressão revisa requisitos", "Ambos verificam apenas a instalação", "Regressão só ocorre antes de uma correção", "Confirmação sempre cobre todo o sistema"], 0, "O teste de confirmação verifica a correção; a regressão procura impactos não intencionais da mudança."],
      ["Por que alterações de ambiente podem motivar testes de manutenção?", ["A mudança pode afetar o comportamento do sistema existente", "O ambiente garante ausência de falhas", "Testes de manutenção ocorrem somente quando o código é apagado", "Uma migração dispensa verificar compatibilidade", "A configuração não influencia o produto"], 0, "Migrações e alterações de ambiente podem introduzir riscos que precisam ser avaliados por testes."],
      ["Qual atividade de teste é importante após uma mudança significativa no sistema?", ["Analisar o impacto da mudança e selecionar testes pertinentes", "Repetir todos os testes sem considerar o impacto", "Ignorar componentes relacionados", "Remover casos existentes antes da análise", "Encerrar o teste sem revisar riscos"], 0, "A análise de impacto ajuda a identificar áreas afetadas e a selecionar testes de manutenção adequados."]
    ]
  },
  {
    id: "estatico",
    name: "Teste Estático",
    description: "Revisões e análise estática",
    source: "ISTQB CTFL Syllabus v4.0.1, capítulo 3",
    additionalWrongOptions: [
      "Executar cada caminho do código em ambiente de produção",
      "Substituir a análise de requisitos pela compilação",
      "Garantir todas as entradas apenas por inspeção visual",
      "Encontrar exclusivamente falhas de desempenho em execução",
      "Validar comportamento sem avaliar nenhum artefato"
    ],
    questions: [
      ["Qual produto pode ser avaliado por teste estático?", ["Somente código compilado", "Documentos e código sem execução", "Apenas interfaces gráficas", "Exclusivamente sistemas em produção"], 1, "Teste estático analisa artefatos como requisitos, código e planos sem executar o software."],
      ["Qual característica é mais associada a uma revisão formal?", ["Não necessita de objetivos", "Possui papéis e registro de resultados", "Sempre exige execução do software", "É realizada apenas pelo desenvolvedor"], 1, "Revisões formais possuem regras, participantes definidos, objetivos e registros dos resultados."],
      ["Qual é uma vantagem do teste estático realizado cedo?", ["Eliminar todas as fases posteriores", "Detectar defeitos antes da compilação ou execução", "Tornar o teste dinâmico desnecessário", "Garantir que não haverá falhas"], 1, "A detecção precoce de defeitos pode reduzir retrabalho e facilitar correções."],
      ["Qual elemento é comum em uma revisão informal?", ["Autoridade de aprovação", "Feedback simples sobre um documento", "Execução do software", "Cobertura de código"], 1, "Uma revisão informal pode ser uma leitura ou comentário sem processo formal completo."],
      ["Qual técnica estática tenta encontrar padrões e erros em código?", ["Análise estática", "Teste de carga", "Teste exploratório", "Teste de aceitação"], 0, "Análise estática examina o código ou outros artefatos sem executá-los."],
      ["Qual papel é normalmente responsável por conduzir uma revisão?", ["Facilitador", "Operador de produção", "Cliente final", "Autor do requisito exclusivamente", "Patrocinador do produto"], 0, "O facilitador organiza e conduz a revisão, ajudando a manter o processo produtivo."],
      ["Qual é uma característica de uma inspeção formal?", ["Uso de processo definido, papéis e registro de achados", "Execução obrigatória do sistema em produção", "Ausência de preparação dos revisores", "Participação exclusiva do autor", "Foco apenas em medir desempenho"], 0, "A inspeção é um tipo formal de revisão com processo, papéis e registro de achados."],
      ["Qual é uma prática recomendada antes de uma revisão?", ["Preparar-se individualmente com base no objetivo", "Alterar o artefato sem registrar defeitos", "Ignorar os critérios de entrada", "Evitar que revisores conheçam o escopo", "Executar o produto para substituir a leitura"], 0, "A preparação individual ajuda revisores a identificar defeitos relevantes durante a sessão."],
      ["Qual artefato pode ser submetido a uma revisão?", ["Um requisito ou plano de teste", "Somente código executável em produção", "Apenas resultados automatizados", "Exclusivamente uma interface compilada", "Somente um relatório de falhas de hardware"], 0, "Requisitos, planos, casos de teste e código são exemplos de produtos que podem ser revisados."],
      ["Qual resultado é esperado da análise estática de código?", ["Identificar possíveis defeitos sem executar o código", "Comprovar o comportamento em todas as entradas", "Medir a aceitação dos usuários", "Confirmar a correção de falha em produção", "Substituir o teste dinâmico em todas as situações"], 0, "Analisadores estáticos podem sinalizar defeitos e desvios de padrões examinando o código sem executá-lo."],
      ["Qual é uma vantagem comum das revisões?", ["Encontrar defeitos em produtos de trabalho antes da execução", "Garantir que todo teste dinâmico seja desnecessário", "Demonstrar que o produto não terá falhas", "Verificar somente o desempenho em produção", "Substituir toda comunicação da equipe"], 0, "Revisões podem detectar defeitos em documentos e código antes de o software ser executado."],
      ["Qual atividade normalmente inicia o processo de revisão?", ["Planejar a revisão e definir seu escopo", "Corrigir todos os defeitos sem registrá-los", "Executar o sistema em produção", "Publicar o resultado antes de selecionar revisores", "Encerrar a revisão sem preparar materiais"], 0, "O processo de revisão começa com planejamento, incluindo escopo, participantes e objetivos."],
      ["Qual é o papel do autor em uma revisão?", ["Criar ou manter o produto de trabalho revisado", "Conduzir obrigatoriamente toda inspeção", "Aprovar o software em nome dos usuários", "Executar todas as ferramentas de análise", "Definir sozinho os critérios de conclusão"], 0, "O autor é responsável por criar e atualizar o produto de trabalho submetido à revisão."],
      ["Qual tipo de revisão costuma ser conduzida pelo autor para explicar o material?", ["Passo a passo (walkthrough)", "Inspeção", "Análise estática automatizada", "Teste de regressão", "Teste de aceitação"], 0, "No walkthrough, o autor normalmente conduz os participantes pelo produto de trabalho."],
      ["Qual tipo de revisão busca consenso e identificação de defeitos por especialistas?", ["Revisão técnica", "Teste de sistema", "Teste de carga", "Depuração", "Teste de confirmação"], 0, "A revisão técnica é realizada por pessoas tecnicamente qualificadas para discutir e avaliar o produto."],
      ["Qual é uma responsabilidade do moderador ou facilitador?", ["Ajudar a conduzir a revisão e manter o processo eficaz", "Escrever sozinho o produto revisado", "Decidir todos os requisitos de negócio", "Corrigir o sistema durante a execução", "Garantir que a revisão encontre todos os defeitos"], 0, "O moderador facilita a revisão e apoia o cumprimento do processo definido."],
      ["Por que revisões podem usar checklists?", ["Para orientar a atenção a defeitos e critérios conhecidos", "Para substituir toda preparação dos revisores", "Para garantir que nenhum defeito exista", "Para eliminar o registro dos achados", "Para medir apenas a velocidade do produto"], 0, "Checklists ajudam revisores a verificar sistematicamente aspectos importantes do produto."],
      ["Qual é uma limitação de ferramentas de análise estática?", ["Podem produzir falsos positivos e não identificar todo tipo de defeito", "Executam e validam todos os cenários de uso", "Substituem automaticamente revisões e testes dinâmicos", "Garantem que todos os requisitos estão corretos", "Não precisam ser configuradas para linguagens"], 0, "Análise estática pode gerar falsos positivos e não substitui todas as outras atividades de teste."],
      ["O que deve ocorrer após a identificação de achados em uma revisão?", ["Analisar e comunicar os achados e acompanhar ações acordadas", "Apagar os achados para evitar retrabalho", "Alterar o artefato sem avisar o autor", "Encerrar o projeto automaticamente", "Substituir o registro por uma nova execução"], 0, "Após a revisão, achados são analisados, comunicados e tratados conforme o processo acordado."],
      ["Quando uma revisão de produto de trabalho tende a ser mais eficaz?", ["Quando o material está pronto para revisão e seu escopo pode ser tratado pelos participantes", "Somente depois do encerramento do projeto", "Antes de existir qualquer artefato para avaliar", "Quando não há objetivo nem preparação", "Apenas após a implantação em produção"], 0, "A revisão deve ser planejada para um produto disponível e um escopo manejável, com participantes preparados."]
    ]
  },
  {
    id: "tecnicas",
    name: "Técnicas de Teste",
    description: "Caixa-preta, caixa-branca e experiente",
    source: "ISTQB CTFL Syllabus v4.0.1, capítulo 4",
    additionalWrongOptions: [
      "Aplicar a mesma técnica sem considerar o objetivo ou contexto",
      "Selecionar dados de produção sem critérios de teste",
      "Tratar cobertura estrutural como prova de ausência de defeitos",
      "Escolher casos sem considerar entradas ou resultados esperados",
      "Substituir resultados esperados pela opinião pessoal"
    ],
    questions: [
      ["Qual técnica divide dados de entrada em grupos com comportamento semelhante?", ["Partição de equivalência", "Cobertura de decisão", "Teste exploratório", "Análise de causa raiz"], 0, "Partição de equivalência organiza entradas em classes que deveriam produzir comportamento semelhante."],
      ["Qual técnica deriva casos de transições entre estados?", ["Tabela de decisão", "Teste baseado em estados", "Partição de equivalência", "Teste aleatório"], 1, "O teste baseado em estados usa modelos de estados e transições válidas ou inválidas."],
      ["O que mede a cobertura de instruções?", ["Porcentagem de requisitos revisados", "Porcentagem de instruções executadas", "Número de defeitos encontrados", "Quantidade de casos aprovados"], 1, "Cobertura de instruções indica quais instruções executáveis foram alcançadas pelos testes."],
      ["Qual técnica usa combinações de condições e ações em linhas e colunas?", ["Tabela de decisão", "Teste exploratório", "Análise de causa raiz", "Teste de afirmações"], 0, "Tabelas de decisão representam combinações de condições e ações esperadas."],
      ["Qual técnica é mais baseada na experiência e conhecimento do tester?", ["Teste baseado na experiência", "Cobertura de instruções", "Partição de equivalência", "Tabela de decisão"], 0, "Técnicas baseadas na experiência exploram conhecimento, intuição e domínio do testador."],
      ["Como são selecionados os valores de fronteira na análise de valor limite?", ["Nos limites e nas proximidades das partições ordenadas", "Apenas no centro de cada classe", "Somente entre requisitos não relacionados", "Exclusivamente por seleção aleatória", "Apenas em valores que não podem ser inseridos"], 0, "A análise de valor limite concentra casos nos limites das partições e em valores próximos a eles."],
      ["O que a cobertura de decisão avalia?", ["Se os resultados de cada decisão foram exercitados", "Se cada requisito foi escrito por duas pessoas", "Se todos os defeitos foram removidos", "Se cada tela foi revisada visualmente", "Se todas as combinações possíveis foram testadas"], 0, "Cobertura de decisão verifica se cada resultado de uma decisão, como verdadeiro e falso, foi exercitado."],
      ["Qual técnica é útil quando combinações de condições determinam ações?", ["Teste baseado em tabela de decisão", "Análise de valor limite", "Teste de transição de estados", "Estimativa de teste", "Revisão informal"], 0, "Tabelas de decisão ajudam a derivar testes de combinações de condições e ações resultantes."],
      ["Qual técnica pode ajudar a testar regras descritas por cenários?", ["Teste baseado em caso de uso", "Cobertura de instruções", "Análise estática", "Teste de confirmação", "Revisão técnica"], 0, "Casos de uso descrevem interações e podem ser usados para derivar cenários de teste."],
      ["O que é teste exploratório?", ["Projeto e execução simultâneos guiados por aprendizado e objetivos", "Execução repetida sem analisar resultados", "Teste sem propósito ou registro", "Revisão formal com papéis definidos", "Execução exclusiva de casos gerados por ferramenta"], 0, "No teste exploratório, aprendizado, projeto e execução dos testes ocorrem de forma integrada."],
      ["Como partições de equivalência apoiam o projeto de testes?", ["Agrupam valores que devem ser tratados de maneira semelhante", "Garantem que todos os valores possíveis sejam executados", "Medem o resultado verdadeiro e falso de decisões", "Representam exclusivamente sequências de estados", "Eliminam a necessidade de resultados esperados"], 0, "A partição de equivalência reduz o conjunto de testes ao selecionar representantes de classes de comportamento semelhante."],
      ["Como classes de equivalência inválidas devem ser consideradas?", ["Devem ser testadas para verificar o tratamento de entradas inválidas", "Devem ser sempre ignoradas", "Devem ser convertidas em classes válidas sem teste", "Só podem ser usadas em testes estruturais", "Garantem a cobertura de todas as instruções"], 0, "Classes inválidas ajudam a verificar como o sistema responde a entradas não permitidas."],
      ["Qual é uma regra para valores de fronteira de uma partição válida?", ["Selecionar valores no limite e imediatamente ao redor dele", "Selecionar apenas valores muito distantes dos limites", "Selecionar somente entradas aleatórias", "Escolher apenas valores inválidos", "Evitar testar limites definidos nos requisitos"], 0, "A análise de valor limite concentra testes nos limites das partições, onde defeitos são comuns."],
      ["O que uma tabela de decisão representa?", ["Combinações de condições e ações resultantes", "A ordem temporal de estados do sistema", "Instruções executadas por um programa", "Papéis de uma revisão formal", "Riscos de cronograma do projeto"], 0, "Uma tabela de decisão representa regras de negócio por meio de combinações de condições e ações."],
      ["O que é uma transição inválida em um modelo de estados?", ["Uma mudança de estado não permitida pelo modelo", "Qualquer entrada que produza um estado válido", "Uma partição válida de dados", "Uma condição verdadeira em uma tabela", "Uma instrução executada durante o teste"], 0, "Testes baseados em estados podem verificar que transições não permitidas são tratadas adequadamente."],
      ["Qual diferença existe entre cobertura de instruções e cobertura de decisão?", ["Instruções mede execução de instruções; decisão mede resultados de decisões", "Instruções mede requisitos; decisão mede defeitos corrigidos", "Ambas medem apenas a quantidade de casos", "Decisão garante teste de todas as entradas possíveis", "Instruções é técnica baseada somente em experiência"], 0, "As métricas representam objetivos estruturais diferentes e uma cobertura não implica automaticamente a outra."],
      ["O que é teste baseado em checklist?", ["Uso de uma lista de verificações para orientar a execução", "Execução obrigatória de todos os estados", "Teste que não registra resultados", "Revisão que substitui critérios de aceitação", "Medição de cobertura de decisão"], 0, "Checklists podem apoiar testes baseados na experiência, organizando verificações relevantes."],
      ["Qual atividade caracteriza uma abordagem de desenvolvimento orientada a testes de aceitação?", ["Definir critérios de aceitação antes ou junto da implementação", "Escrever testes apenas após a liberação", "Ignorar exemplos de comportamento", "Medir exclusivamente cobertura de instruções", "Substituir a colaboração por aprovações formais"], 0, "Abordagens colaborativas usam critérios e exemplos de aceitação para alinhar entendimento e derivar testes."],
      ["Por que técnicas diferentes podem ser combinadas em um projeto?", ["Cada técnica pode revelar tipos diferentes de defeitos", "Uma técnica sempre encontra todos os defeitos", "A combinação elimina a necessidade de avaliar riscos", "Técnicas são intercambiáveis em qualquer contexto", "Combinar técnicas impede medir cobertura"], 0, "Técnicas complementares apoiam diferentes objetivos e podem aumentar a eficácia do conjunto de testes."],
      ["Como uma partição de equivalência é usada para reduzir casos redundantes?", ["Selecionando representantes de classes de comportamento semelhante", "Executando cada valor possível das classes", "Ignorando resultados esperados", "Substituindo testes por revisão de código", "Selecionando apenas valores fora das partições"], 0, "Um ou poucos representantes por classe podem reduzir redundância, considerando os riscos e os limites."]
    ]
  },
  {
    id: "gerenciamento",
    name: "Gerenciamento de Testes",
    description: "Planejamento, riscos e defeitos",
    source: "ISTQB CTFL Syllabus v4.0.1, capítulo 5",
    additionalWrongOptions: [
      "Eliminar todos os riscos apenas registrando-os",
      "Definir cronograma sem considerar escopo ou recursos",
      "Encerrar os testes sem analisar critérios de conclusão",
      "Omitir resultados e defeitos dos relatórios",
      "Priorizar todos os riscos igualmente sem avaliação"
    ],
    questions: [
      ["Qual é o objetivo principal do planejamento de testes?", ["Escrever todo o código", "Definir abordagem, recursos e atividades", "Eliminar riscos do projeto", "Executar apenas testes automatizados"], 1, "Planejamento estabelece o escopo, abordagem, recursos, cronograma e critérios do teste."],
      ["O que representa um risco baseado em produto?", ["A falta de um analista", "Possibilidade de falha de qualidade no produto", "Atraso na entrega da infraestrutura", "Mudança no orçamento"], 1, "Riscos de produto estão ligados a características de qualidade que podem não ser atendidas."],
      ["Qual item descreve melhor um defeito?", ["Uma ação realizada pelo usuário", "Uma imperfeição que pode causar uma falha", "Apenas um crash em produção", "Um caso de teste aprovado"], 1, "Defeito é uma imperfeição em um produto que pode resultar em comportamento incorreto."],
      ["Qual relatório mostra o progresso e os resultados recentes dos testes?", ["Relatório de incidente", "Resumo de status de teste", "Plano de projeto", "Especificação técnica"], 1, "Relatórios de status comunicam progresso, resultados, riscos e impedimentos aos interessados."],
      ["Quando um defeito é confirmado como não causado pelo desenvolvimento atual, que status pode ser usado?", ["Invalidez ou não reproduzível", "Aprovado", "Coberto", "Pendente de requisitos"], 0, "Após análise, um relatório pode ser encerrado como inválido, não reproduzível ou outro status adequado."],
      ["Como o nível de risco de produto é normalmente estimado?", ["Considerando probabilidade e impacto da falha", "Contando somente o número de testadores", "Somando as horas de reunião", "Considerando apenas o custo das ferramentas", "Usando a ordem alfabética dos requisitos"], 0, "A análise de risco de produto considera a probabilidade de ocorrência e o impacto associado."],
      ["O que são critérios de conclusão de teste?", ["Condições usadas para decidir quando a atividade de teste está concluída", "Metas de vendas definidas após o lançamento", "Etapas para instalar ferramentas", "Lista de todos os requisitos de negócio", "Regras para selecionar integrantes"], 0, "Critérios de conclusão apoiam a decisão de encerrar ou reduzir uma atividade de teste."],
      ["O que deve conter um relatório de defeito útil?", ["Informações suficientes para reproduzir e analisar o problema", "Somente o nome do autor do código", "Apenas a data de início do projeto", "Uma opinião sem passos ou evidências", "Somente a quantidade de casos aprovados"], 0, "Um relato claro inclui informações como passos, resultado esperado e observado e contexto relevante."],
      ["Qual é uma finalidade do monitoramento de teste?", ["Comparar o progresso real com o planejado e apoiar ações", "Garantir que nenhum risco exista", "Substituir o planejamento por resultados finais", "Contar apenas casos automatizados", "Impedir alterações nos objetivos do projeto"], 0, "Monitoramento acompanha progresso e resultados para que a equipe possa ajustar suas ações."],
      ["Qual atividade é típica do encerramento de teste?", ["Registrar lições aprendidas e arquivar testware relevante", "Apagar todos os resultados e evidências", "Iniciar a execução sem critérios", "Ignorar defeitos ainda conhecidos", "Alterar requisitos sem comunicar interessados"], 0, "No encerramento, resultados são consolidados, testware pode ser arquivado e lições aprendidas registradas."],
      ["Qual é uma entrada importante para estimar o esforço de teste?", ["Escopo, características do produto, riscos e recursos", "Somente a quantidade de pessoas na empresa", "A cor da interface do sistema", "O número de ferramentas instaladas", "A data de lançamento de uma versão anterior"], 0, "Estimativas devem considerar escopo, contexto, riscos, abordagem, recursos e dados históricos disponíveis."],
      ["Qual técnica de estimativa usa avaliação de pessoas experientes?", ["Estimativa baseada em julgamento especializado", "Partição de equivalência", "Análise estática", "Teste de transição de estados", "Cobertura de instruções"], 0, "Julgamento especializado usa experiência e conhecimento para estimar esforço ou duração."],
      ["O que representa uma dependência no cronograma de teste?", ["Uma atividade precisa de outra para começar ou terminar", "Uma classe de equivalência inválida", "Um defeito sem passos de reprodução", "Uma decisão de aprovação automática", "Uma métrica de cobertura de código"], 0, "Dependências influenciam a sequência e o planejamento das atividades de teste."],
      ["Como os riscos de produto podem orientar os testes?", ["Ajudam a priorizar testes segundo probabilidade e impacto", "Eliminam a necessidade de definir escopo", "Garantem que toda falha será encontrada", "Definem que todos os casos têm prioridade igual", "Substituem a comunicação de progresso"], 0, "Testes baseados em risco priorizam esforço nas áreas de maior exposição e impacto."],
      ["Qual é a diferença entre monitoramento e controle de teste?", ["Monitoramento coleta e avalia informações; controle aplica ações corretivas", "Monitoramento corrige defeitos; controle escreve requisitos", "Ambos são sinônimos de execução de teste", "Controle ocorre somente após o encerramento", "Monitoramento substitui o plano de teste"], 0, "Monitoramento acompanha o estado; controle usa essa informação para orientar ajustes e ações."],
      ["Qual é um propósito da gestão de configuração no teste?", ["Identificar e controlar versões de itens e testware", "Eliminar a necessidade de ambientes de teste", "Corrigir automaticamente todos os defeitos", "Substituir a rastreabilidade", "Definir resultados esperados durante a execução"], 0, "Gestão de configuração mantém identificáveis e controlados os itens e versões usados no teste."],
      ["Por que registrar a versão do produto em um relatório de defeito?", ["Ajuda a reproduzir e analisar o problema no contexto correto", "Garante que o defeito será corrigido imediatamente", "Substitui a descrição dos passos", "Evita a necessidade de priorização", "Confirma que o produto não mudou"], 0, "A versão e o ambiente ajudam a contextualizar e reproduzir o defeito reportado."],
      ["Qual informação contribui para priorizar um defeito?", ["Impacto, urgência e contexto do problema", "A ordem alfabética do nome do arquivo", "A preferência pessoal de quem reportou", "A quantidade de ferramentas instaladas", "A data do primeiro requisito"], 0, "Prioridade considera fatores como impacto, urgência, risco e necessidades dos interessados."],
      ["O que é uma métrica de teste?", ["Uma medida usada para acompanhar aspectos do processo ou produto", "Uma garantia de ausência de defeitos", "Uma técnica exclusiva para revisar documentos", "Um requisito que não pode ser alterado", "Uma ferramenta obrigatória de automação"], 0, "Métricas fornecem medidas para monitorar progresso, resultados e aspectos de qualidade."],
      ["O que deve ser comunicado em um relatório de progresso de teste?", ["Estado, resultados, riscos e desvios relevantes", "Somente os casos que passaram", "Apenas o nome dos testadores", "Dados sem contexto ou período", "Somente uma previsão de custo"], 0, "Relatórios de progresso devem ser claros para os interessados e incluir resultados e desvios relevantes."]
    ]
  },
  {
    id: "ferramentas",
    name: "Ferramentas de Teste",
    description: "Automação e apoio ao processo",
    source: "ISTQB CTFL Syllabus v4.0.1, capítulo 6",
    additionalWrongOptions: [
      "Automatizar todos os testes sem avaliar custos e riscos",
      "Assumir que uma ferramenta elimina toda manutenção",
      "Usar uma ferramenta sem validar sua adequação",
      "Considerar resultados automáticos infalíveis sem revisão",
      "Substituir toda atividade humana por scripts sem supervisão"
    ],
    questions: [
      ["Qual benefício a automação pode proporcionar?", ["Garantir a qualidade sem teste manual", "Execução repetível e rápida de testes", "Eliminar a necessidade de manutenção", "Criar automaticamente requisitos corretos"], 1, "Ferramentas de automação permitem execuções frequentes, repetíveis e rápidas, embora exijam manutenção."],
      ["Qual atividade deve ser realizada antes de automatizar um teste?", ["Comprar todas as ferramentas disponíveis", "Avaliar viabilidade e necessidade", "Eliminar o processo manual", "Entregar o software antes do teste"], 1, "Antes da automação, o contexto, estabilidade e custo-benefício devem ser avaliados."],
      ["Qual é um risco frequente da automação?", ["Falta de scripts gerados pelo cliente", "Manutenção e falsos resultados", "Ausência de requisitos", "Execução apenas por pessoas externas"], 1, "Mudanças no produto ou nos scripts podem causar falhas falsas ou impedir a detecção de defeitos."],
      ["Qual ferramenta auxilia na execução e geração de resultados repetíveis?", ["Ferramenta de teste", "Editor de documentos", "Rede social", "Calculadora financeira"], 0, "Ferramentas de teste podem executar casos, comparar resultados e produzir evidências."],
      ["Por que o piloto de uma ferramenta é recomendado?", ["Para confirmar ajuste ao processo em pequena escala", "Para dispensar treinamento", "Para substituir todas as pessoas", "Para não registrar riscos"], 0, "Um piloto permite avaliar adequação, custo, integração e pontos de atenção em contexto real."],
      ["Qual tipo de ferramenta ajuda a registrar casos, execução e defeitos?", ["Ferramenta de gerenciamento de teste", "Compilador de código", "Editor de imagens", "Monitor de rede social", "Gerenciador de arquivos pessoais"], 0, "Ferramentas de gerenciamento de teste apoiam a gestão de casos, execuções, defeitos e relatórios."],
      ["Qual fator deve ser considerado ao selecionar uma ferramenta?", ["Compatibilidade com o contexto, processo e equipe", "A quantidade de recursos que nunca serão usados", "A promessa de remover todos os defeitos", "A ausência de necessidade de treinamento", "A popularidade sem avaliação técnica"], 0, "A seleção deve considerar adequação ao contexto, integração, custos, habilidades e necessidades."],
      ["Por que ferramentas de teste precisam ser mantidas?", ["Mudanças nos produtos e processos podem afetar scripts e configurações", "A automação se atualiza sempre sem intervenção", "Os requisitos deixam de existir quando há scripts", "A manutenção impede qualquer regressão", "As ferramentas não guardam dados de execução"], 0, "Scripts, dados e configurações podem precisar de atualização quando o sistema ou o processo muda."],
      ["Qual é uma consideração importante ao automatizar casos de teste?", ["Estabilidade e custo de manutenção dos casos automatizados", "A possibilidade de dispensar todos os resultados esperados", "A garantia de encontrar qualquer defeito", "A ausência de necessidade de revisão humana", "A execução sem dados ou ambiente de teste"], 0, "Casos estáveis e repetitivos tendem a ser bons candidatos, considerando custo e esforço de manutenção."],
      ["O que é uma prova de conceito de ferramenta?", ["Uma avaliação limitada para verificar viabilidade técnica", "A garantia de sucesso em todos os projetos", "A implantação obrigatória para toda a organização", "Um substituto para treinamento de usuários", "Uma execução final de aceitação do produto"], 0, "Uma prova de conceito investiga se uma ferramenta é tecnicamente viável para necessidades selecionadas."],
      ["Qual é um exemplo de suporte de ferramenta ao teste?", ["Gerenciar casos, dados, execução ou defeitos", "Decidir automaticamente todos os critérios de negócio", "Garantir que requisitos estejam completos", "Eliminar a necessidade de interpretar resultados", "Substituir comunicação entre os interessados"], 0, "Ferramentas podem apoiar diferentes atividades, incluindo gerenciamento, execução e análise de resultados."],
      ["Qual é um benefício potencial da automação de teste?", ["Reduzir o tempo de execução de verificações repetitivas", "Eliminar todos os custos de teste", "Garantir que scripts nunca falhem", "Evitar qualquer manutenção futura", "Provar que não existem defeitos"], 0, "Automação pode acelerar tarefas repetitivas, mas requer investimento, manutenção e avaliação dos resultados."],
      ["Qual é um risco de depender excessivamente de testes automatizados?", ["A equipe pode confiar em resultados sem revisar sua relevância e qualidade", "Os testes passam a ser executados mais rapidamente", "As ferramentas precisam de instalação", "A execução repetida gera resultados", "Os scripts registram evidências"], 0, "Automação não garante qualidade por si só; scripts e resultados precisam ser mantidos e avaliados."],
      ["Por que treinamento é relevante na introdução de uma ferramenta?", ["Usuários precisam saber aplicá-la e interpretar seus resultados", "Treinamento elimina custos de licenciamento", "A ferramenta passa a dispensar configuração", "Treinamento garante ausência de falhas", "A ferramenta substitui conhecimento de teste"], 0, "Treinamento e suporte ajudam a equipe a usar a ferramenta de forma eficaz e adequada."],
      ["Qual custo deve ser considerado ao avaliar uma ferramenta?", ["Licença, implantação, treinamento, integração e manutenção", "Somente o custo inicial de compra", "Apenas o número de telas do produto", "Somente a duração do primeiro teste", "O custo de requisitos já aprovados"], 0, "O custo total inclui aquisição e atividades contínuas como implantação, treinamento, integração e manutenção."],
      ["Por que ferramentas devem ser avaliadas em contexto antes da adoção?", ["Para verificar adequação aos processos, tecnologia e necessidades reais", "Para evitar definir critérios de sucesso", "Para garantir que toda ferramenta tenha os mesmos resultados", "Para dispensar a análise de riscos", "Para substituir a participação dos usuários"], 0, "A adequação depende do contexto, dos objetivos, da integração e das habilidades da equipe."],
      ["O que pode ajudar a avaliar o sucesso da implantação de uma ferramenta?", ["Critérios definidos, piloto e acompanhamento de benefícios e riscos", "Número de recursos anunciados pelo fornecedor", "A ausência de qualquer treinamento", "A adoção imediata sem feedback", "A quantidade de testes removidos"], 0, "Uma implantação pode ser avaliada contra objetivos, critérios e resultados observados em um piloto."],
      ["Qual tarefa pode ser automatizada com benefício quando é repetida frequentemente?", ["Execução de testes de regressão estáveis", "Avaliação subjetiva sem critérios", "Aprovação final de requisitos por interessados", "Decisão de prioridade sem contexto", "Revisão de usabilidade com usuários reais"], 0, "Testes frequentes e estáveis podem ser candidatos à automação, mantendo a avaliação humana onde necessária."],
      ["Qual princípio deve orientar a escolha de uma ferramenta?", ["A ferramenta deve apoiar objetivos e necessidades de teste definidos", "Uma ferramenta popular serve igualmente para todo projeto", "A automação deve ser maximizada independentemente do custo", "A ferramenta define a estratégia sem participação da equipe", "Resultados automatizados dispensam análise"], 0, "A seleção deve partir das necessidades e objetivos, considerando também custos, riscos e contexto."],
      ["Qual fator pode dificultar a manutenção de uma ferramenta de automação?", ["Mudanças frequentes no sistema ou em seus ambientes", "A existência de critérios de teste", "O registro de resultados", "A execução repetível de scripts", "A disponibilidade de documentação"], 0, "Mudanças frequentes no produto e no ambiente podem exigir atualizações contínuas dos scripts e da configuração."]
    ]
  }
];

const state = {
  answered: JSON.parse(localStorage.getItem("ctflAnswered") || "{}"),
  correct: JSON.parse(localStorage.getItem("ctflCorrect") || "{}"),
  lastAnswerPositions: JSON.parse(localStorage.getItem("ctflAnswerPositions") || "{}"),
  currentQuestions: [],
  currentIndex: 0,
  currentModule: null,
  evaluation: false,
  sessionCorrect: 0,
  remainingSeconds: 60 * 60,
  timerInterval: null,
  timeExpired: false
};

const $ = (id) => document.getElementById(id);
const SIMULATION_QUESTION_COUNT = 40;
const SIMULATION_DURATION_SECONDS = 60 * 60;
const SIMULATION_PASSING_SCORE = 26;

function allQuestions() {
  return modules.flatMap((module) =>
    module.questions.map((question, index) => ({
      moduleId: module.id,
      moduleName: module.name,
      source: module.source,
      question: normalizeQuestion(question, module, index),
      key: `${module.id}-${index}`
    }))
  );
}

function normalizeQuestion(question, module, index) {
  const [text, answers, correctIndex, explanation] = question;
  const allAnswers = answers.length === 4
    ? [...answers, module.additionalWrongOptions[index % module.additionalWrongOptions.length]]
    : answers;

  if (allAnswers.length !== 5 || !Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex >= allAnswers.length) {
    throw new Error(`Questão inválida no módulo "${module.name}", posição ${index + 1}.`);
  }

  return [text, allAnswers, correctIndex, explanation];
}

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function saveProgress() {
  localStorage.setItem("ctflAnswered", JSON.stringify(state.answered));
  localStorage.setItem("ctflCorrect", JSON.stringify(state.correct));
  updateProgress();
}

function updateProgress() {
  const total = allQuestions().length;
  const answered = Object.keys(state.answered).length;
  const percent = Math.round((answered / total) * 100);
  $("progressPercent").textContent = `${percent}%`;
  $("progressBar").style.width = `${percent}%`;
  $("progressRing").style.setProperty("--progress", `${percent * 3.6}deg`);
  $("ringValue").textContent = percent;
  $("completedCount").textContent = answered;
  $("totalCount").textContent = total;
  $("questionCount").textContent = total;
  $("moduleCount").textContent = modules.length;

  modules.forEach((module) => {
    const count = module.questions.filter((_, index) => state.answered[`${module.id}-${index}`]).length;
    const status = $(`status-${module.id}`);
    if (status) status.textContent = count ? `${count}/${module.questions.length} respondidas` : "Novo";
  });
}

function renderModules() {
  $("moduleGrid").innerHTML = modules.map((module, index) => `
    <button class="module-card" type="button" data-module="${module.id}">
      <div class="module-card-head">
        <span class="module-number">MÓDULO ${String(index + 1).padStart(2, "0")}</span>
        <span class="module-status" id="status-${module.id}">Novo</span>
      </div>
      <h3>${module.name}</h3>
      <p>${module.description} • ${module.questions.length} questões</p>
    </button>
  `).join("");

  document.querySelectorAll(".module-card").forEach((card) => {
    card.addEventListener("click", () => startModule(card.dataset.module));
  });
  updateProgress();
}

function showView(view) {
  ["homeView", "modulesView", "quizView", "resultView"].forEach((id) => $(id).classList.add("hidden"));
  if (view === "home") {
    $("homeView").classList.remove("hidden");
    $("modulesView").classList.remove("hidden");
  } else {
    $(view).classList.remove("hidden");
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startModule(moduleId) {
  const module = modules.find((item) => item.id === moduleId);
  clearSimulationTimer();
  state.currentModule = module;
  state.evaluation = false;
  state.timeExpired = false;
  state.currentQuestions = allQuestions().filter((item) => item.moduleId === module.id);
  state.currentIndex = 0;
  state.sessionCorrect = 0;
  showQuiz();
}

function startEvaluation() {
  clearSimulationTimer();
  state.currentModule = null;
  state.evaluation = true;
  const bank = allQuestions();
  if (bank.length < SIMULATION_QUESTION_COUNT) {
    throw new Error(`O banco precisa ter pelo menos ${SIMULATION_QUESTION_COUNT} questões para iniciar o simulado.`);
  }
  const shuffledBank = shuffle(bank);
  state.currentQuestions = shuffledBank.slice(0, SIMULATION_QUESTION_COUNT);
  const previousKeys = JSON.parse(localStorage.getItem("ctflLastSimulationQuestions") || "[]");
  const previousSet = new Set(previousKeys);
  const sameQuestionSet = previousKeys.length === SIMULATION_QUESTION_COUNT
    && state.currentQuestions.every((item) => previousSet.has(item.key));
  if (sameQuestionSet) {
    state.currentQuestions[SIMULATION_QUESTION_COUNT - 1] = shuffledBank[SIMULATION_QUESTION_COUNT];
  }
  state.currentQuestions = shuffle(state.currentQuestions);
  localStorage.setItem("ctflLastSimulationQuestions", JSON.stringify(state.currentQuestions.map((item) => item.key)));
  state.currentIndex = 0;
  state.sessionCorrect = 0;
  state.remainingSeconds = SIMULATION_DURATION_SECONDS;
  state.timeExpired = false;
  showQuiz();
  startSimulationTimer();
}

function showQuiz() {
  showView("quizView");
  renderQuestion();
}

function renderQuestion() {
  const item = state.currentQuestions[state.currentIndex];
  const [text, answers, correctIndex, explanation] = item.question;
  $("quizModuleName").textContent = item.moduleName;
  $("quizCounter").textContent = `${state.currentIndex + 1} / ${state.currentQuestions.length}`;
  $("quizProgressBar").style.width = `${((state.currentIndex + 1) / state.currentQuestions.length) * 100}%`;
  $("questionLabel").textContent = state.evaluation ? "Avaliação final" : `Questão ${state.currentIndex + 1}`;
  $("questionText").textContent = text;
  $("feedback").classList.add("hidden");
  $("nextButton").classList.add("hidden");

  const indexedAnswers = answers.map((answer, index) => ({ answer, index }));
  const shuffledAnswers = shuffle(indexedAnswers);
  const correctPosition = shuffledAnswers.findIndex((entry) => entry.index === correctIndex);
  const lastCorrectPosition = state.lastAnswerPositions[item.key];
  if (lastCorrectPosition !== undefined && correctPosition === lastCorrectPosition) {
    const newPosition = (correctPosition + 1 + Math.floor(Math.random() * (shuffledAnswers.length - 1))) % shuffledAnswers.length;
    [shuffledAnswers[correctPosition], shuffledAnswers[newPosition]] = [shuffledAnswers[newPosition], shuffledAnswers[correctPosition]];
  }
  state.lastAnswerPositions[item.key] = shuffledAnswers.findIndex((entry) => entry.index === correctIndex);
  localStorage.setItem("ctflAnswerPositions", JSON.stringify(state.lastAnswerPositions));
  $("answers").innerHTML = shuffledAnswers.map(({ answer, index }, position) => `
    <button class="answer-button" type="button" data-index="${index}">
      <span class="answer-letter">${String.fromCharCode(65 + position)}</span>
      <span>${answer}</span>
    </button>
  `).join("");

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => answerQuestion(button, Number(button.dataset.index), correctIndex, explanation, item.source));
  });
}

function answerQuestion(selectedButton, selectedIndex, correctIndex, explanation, source) {
  const item = state.currentQuestions[state.currentIndex];
  const buttons = [...document.querySelectorAll(".answer-button")];
  const isCorrect = selectedIndex === correctIndex;

  buttons.forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.index) === correctIndex) button.classList.add("correct");
  });
  if (!isCorrect) selectedButton.classList.add("wrong");

  state.answered[item.key] = true;
  state.correct[item.key] = isCorrect;
  if (isCorrect) state.sessionCorrect++;
  saveProgress();

  $("feedback").classList.remove("hidden");
  $("feedback").classList.toggle("wrong-feedback", !isCorrect);
  $("feedbackTitle").textContent = isCorrect ? "Resposta correta!" : "Resposta incorreta";
  $("feedbackText").textContent = `${explanation}\nFonte: ${source}.`;
  $("nextButton").textContent = state.currentIndex === state.currentQuestions.length - 1 ? "Ver resultado →" : "Próxima questão →";
  $("nextButton").classList.remove("hidden");
}

function nextQuestion() {
  if (state.currentIndex < state.currentQuestions.length - 1) {
    state.currentIndex++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearSimulationTimer();
  showView("resultView");
  const score = Math.round((state.sessionCorrect / state.currentQuestions.length) * 100);
  $("scoreValue").textContent = `${score}%`;
  $("correctCount").textContent = `${state.sessionCorrect} / ${state.currentQuestions.length} corretas`;
  $("certificateButton").classList.toggle("hidden", score < 90);

  if (score >= 90) {
    $("resultIcon").className = "result-icon";
    $("resultIcon").textContent = "✓";
    $("resultKicker").textContent = "Excelente resultado";
    $("resultTitle").textContent = "Você atingiu o certificado!";
    $("resultMessage").textContent = "Ótimo desempenho. Continue revisando os módulos para fortalecer o conhecimento.";
  } else if (state.evaluation && state.sessionCorrect >= SIMULATION_PASSING_SCORE) {
    $("resultIcon").className = "result-icon";
    $("resultIcon").textContent = "✓";
    $("resultKicker").textContent = "Nota de aprovação atingida";
    $("resultTitle").textContent = "Você alcançou a nota do CTFL!";
    $("resultMessage").textContent = `A referência oficial exige ${SIMULATION_PASSING_SCORE} acertos em 40. O certificado simbólico do CTFL Quest requer 90%.`;
  } else {
    $("resultIcon").className = "result-icon fail";
    $("resultIcon").textContent = "!";
    $("resultKicker").textContent = "Continue praticando";
    $("resultTitle").textContent = "Quase lá";
    $("resultMessage").textContent = state.timeExpired
      ? "O tempo de 60 minutos acabou. Questões não respondidas contam como incorretas; revise os módulos e tente novamente."
      : "Revise os módulos e tente novamente. A aprovação simbólica começa a partir de 90%.";
  }
  $("retryButton").textContent = state.evaluation ? "Nova avaliação" : "Repetir módulo";
  state.lastScore = score;
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.remainingSeconds / 60).toString().padStart(2, "0");
  const seconds = (state.remainingSeconds % 60).toString().padStart(2, "0");
  $("timerDisplay").textContent = `${minutes}:${seconds}`;
  $("quizTimer").classList.toggle("urgent", state.remainingSeconds <= 5 * 60);
}

function startSimulationTimer() {
  $("quizTimer").classList.remove("hidden");
  updateTimerDisplay();
  state.timerInterval = window.setInterval(() => {
    state.remainingSeconds--;
    updateTimerDisplay();
    if (state.remainingSeconds <= 0) {
      clearSimulationTimer();
      state.timeExpired = true;
      showResult();
    }
  }, 1000);
}

function clearSimulationTimer() {
  if (state.timerInterval !== null) {
    window.clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  $("quizTimer").classList.add("hidden");
}

function openStats() {
  const answeredKeys = Object.keys(state.answered);
  const correctCount = answeredKeys.filter((key) => state.correct[key]).length;
  const accuracy = answeredKeys.length ? Math.round((correctCount / answeredKeys.length) * 100) : 0;
  $("dialogAnswered").textContent = answeredKeys.length;
  $("dialogCorrect").textContent = correctCount;
  $("dialogAccuracy").textContent = `${accuracy}%`;
  $("statsDialog").showModal();
}

function openCertificate() {
  $("certificateName").textContent = "Treinamento CTFL ISTQB";
  $("certificateScore").textContent = `${state.lastScore}%`;
  $("certificateDate").textContent = new Intl.DateTimeFormat("pt-BR").format(new Date());
  $("certificateDialog").showModal();
}

$("startButton").addEventListener("click", () => document.getElementById("modulesView").scrollIntoView({ behavior: "smooth" }));
$("continueButton").addEventListener("click", () => document.getElementById("modulesView").scrollIntoView({ behavior: "smooth" }));
$("evaluationButton").addEventListener("click", startEvaluation);
$("backButton").addEventListener("click", () => {
  clearSimulationTimer();
  showView("home");
});
$("brandLink").addEventListener("click", (event) => {
  event.preventDefault();
  clearSimulationTimer();
  showView("home");
});
$("nextButton").addEventListener("click", nextQuestion);
$("retryButton").addEventListener("click", () => state.evaluation ? startEvaluation() : startModule(state.currentModule.id));
$("statsButton").addEventListener("click", openStats);
$("closeStats").addEventListener("click", () => $("statsDialog").close());
$("closeCertificate").addEventListener("click", () => $("certificateDialog").close());
$("certificateButton").addEventListener("click", openCertificate);
$("printCertificate").addEventListener("click", () => window.print());
$("resetProgress").addEventListener("click", () => {
  state.answered = {};
  state.correct = {};
  localStorage.removeItem("ctflAnswered");
  localStorage.removeItem("ctflCorrect");
  updateProgress();
  $("statsDialog").close();
});

renderModules();
