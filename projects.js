let Proj = {
"1": { 'name': 'Controle de Processos', 
       'resumo': ' Desenvolvi um produto para unificar as interfaces de controle de processos de clientes, de modo a auditar as ações, segregar e tarifar os clientes e implementar features de interesse da empresa. Ambiente implementado em kubernetes com CICD do GitLab',
       'image': 'proj-MV.png',
       'infra': 'kubernetes',
       'cicd': 'Service NOW, Ansible e StackStorm',
       'comp': 'ServiceNOW, Ansible, StackStorm, Prometheus, CortexMetrics, Grafana, Loki, MinIO, GoFlow2, ClickHouse, kafka',
       'detalhes': "<p> Desenvolvi um produto para complementar o portifólio de serviços da empresa, desde a concepção e planejamento até o  MVP (produto básico para lançamento), com o propósito de unificar as interfaces de controle de processos de clientes, e integrar as funções de exibição e manupulação da interface do produto Control-M, da BMC, de modo a centralizar e auditar as ações dos clientes, de modo seguro e segregado, permitindo implementar tarifação da utilização pelos clientes e outras features (Resumo Analítico de Jobs, Analise de Paralelismo, Relatórios Gerenciais, e outras) </p>",
       'ajuste': 2 },

"2": { 'name': 'Monitoração / SRE', 
       'resumo': ' Implementei um sistema completo de monitoração e escalonamento baseado em Prometheus para coletar métricas, NetXMS para snmp e traps, Loki para coletar e agregar logs e GoFlow para coletar fluxo netflow. Ambiente implementado em kubernetes com CICD utilizando Service NOW e StackStorm',
       'image': 'proj-MO.png',
       'infra': 'kubernetes',
       'comp': 'Ansible, ClickHouse, kafka',
       'detalhes': `<p> Desenvolvi uma solução de Monitoramento integrado, totalmente automatizada, com provisionamento realizado por formulário / workflow do Service Now, para um cluster de alta performance de Prometheus (para métricas), Loki (para logs), NetXMS (para SNMP/IPFix) e GoFlow2 (para NetFlow), com longa retenção de dados, armazenados em um banco de objetos (MinIO), com armazenamento S3.  </p>
              <p> Esta plataforma inclue controle de SLA, escalonamento, integração com gerenciamento de chamados (ServiceNow), ações preditivas e reativas (com webhooks e acionamento do StackStorm para execução de scripts e automações do Ansible)</p>`,
       'ajuste': 1 },

"3": { 'name': 'AWS ECS', 
       'resumo': 'Criei a infraesturura e pipelines para migração de serviços do EC2 para um Cluster ECS, com orígem no BitBucket',
       'image': 'aws.png',
       'cicd': 'BitBucket',
       'comp': 'BitBucket, EC2, S3, ECR, ECS, AMQ',
       'infra': 'AWS',
       'detalhes': "Provisionei a infraestrutura, configurei os serviços e criei um pipeline para a cada commit com tag para atualizar, gerar e armazenar os containers, fazer deploy de novos serviços, provisionar os recursos necessarios e atualizar as monitorações e logs ",
       'ajuste': 1 },

"4": { 'name': 'Plataforma Netflow', 
       'resumo': 'Implementei uma plataforma open source de monitoração, analise e visualização de fluxos de rede (netflow), em substituição ao produto NFA',
       'image': 'netflow.svg',
       'infra': 'Kubernetes',
       'cicd': 'Ansible',
       'comp': 'Akvorado, kafka, ClickHouse, Ansible',
       'detalhes': "Implementei uma plataforma para solucionar a necessidade de ferramenta de analise de fluxos de rede, tanto para Netflow e IPFix (Cisco e Juniper), quanto para sFlow (firewalls, WAF, e outros gateways da rede), de forma a auxiliar em troubleshoots, relatórios de consumo e tarifação, e identificar comportamento de tráfego de aplicações",
       'ajuste': 1 },

"5": { 'name': 'Provisionamento Completo', 
       'resumo': 'Desenvolvi uma esteira de provisionamento de infraestrutura e aplicações completa em ansible, para prover plataformas de atendimento a callcenters',
       'infra': 'GNS, Docker, Cloudflare',
       'image': 'gns3.png',
       'cicd': 'Jenkins, Ansible',
       'comp': 'Jenkins, Ansible, GNS3, Docker, Vagrant, FreeSwitch',
       'detalhes': "Desenvolvi uma esteira de provisionamento automático de infraestrutura e aplicações utilizando Jenkins e Ansible, para implementar plataformas de atendimento voip completas (com roteamento, regras de acesso externo (Firewall/Nat) e DNS (Cloudflare), em ambiente virtual, para homologação de clientes, e em produção (vagrant, remoto, baremetal)",
       'ajuste': 1 },

"6": { 'name': 'DMP em BigData', 
       'resumo': 'Sistema de DMP (gerenciamento de identidade e dados de usuário) em Cluster BigData',
       'infra': 'Hortonworks',
       'cicd': 'Ambari',
       'comp': 'Ambari, Hadoop, Pig, Spark, Hive, HBase, Solr, MongoDB, Python, Flask',
       'image': 'bigdata.png?1',
       'detalhes': "Implementei um sistema de gerenciamento de identidade e dados do usuário, para gerar perfil de consumo e características diversas que se tornou um valoroso serviço da empresa, instalei um Cluster Hortonworks, com batchs em pig e spark (mapreduce) para importar e formatar dados dos diversos sistemas da empresa e de parceiros, armazenar em estrutura HQL no hadoop utilizando o Hive, e exportando os dados (utilizando Solr e HBase) para um cluster MongoDB. com uma interface para consulta api Rest.",
       'ajuste': 1 },

"7": { 'name': 'Chatbot de Negociação', 
       'resumo': 'Desenvolvi uma plataforma de negociação com interface de conversação por chat, email, sms, e web',
       'infra': 'Docker',
       'comp': 'Python, Django, MyCroft Adapt, MongoDB',
       'image': 'negociacao.png?1',
       'detalhes': "Desenvolvi uma plataforma de negociação via chat, com entendimento de intenções (NLU), que valida o usuário (pela rede da operadora de celular ou pela confirmação de mensagem enviada ao celular) e oferece opções de parcelamento e resolução de pendências, com ramo alternativo para sujestão de empréstimos, emissão de boletos e registro da negociação na instituição financeira.",
       'ajuste': 1 },

"8": { 'name': 'Estrutura de Automação', 
       'resumo': 'Implementação de Plataforma Corporativa, integrada para Automação com SaltStack, MicroSoft Automator, Redis, ElasticSearch, Kong',
       'infra': 'BareMetal, Docker',
       'comp': 'SaltStack, MicroSoft Power Automate, Redis, ElasticSearch, Kong',
       'image': 'saltstack.png?1',
       'detalhes': "Implementei uma Plataforma de execução de automações, baseada no SaltStack, com mais de 15 mil nós monitorados em mais de 600 localidades. Em cada nó remoto é instalado um minion (client) que provisiona os aplicativos condizentes com o ambiente operacional e as necessidades do cliente, cada localidade possue um processo Sindic (instalado em docker), para gerenciar a comunicação com os minions.<br> A fila de execução das automações é gerenciada pelo Redis, e as variáveis coletadas, e a saída em tela das automações são salvas em uma base elasticsearch<br>O controle de acesso às automações e resultados é feito por um gateway Kong, que autoriza usuários de acordo com ldap / AD do cliente<br>A execução de manutenções / atualização de patches e automações no ambiente microsoft é feita pelo Microsoft Power Automator",
       'ajuste': 1 },

"9": { 'name': 'Analise de Sentimento', 
       'resumo': 'Aplicação que recebe feedbacks de survays e NPS e gera score de sentimento do usuário',
       'infra': 'Docker, Azure',
       'cicd': 'GitLab',
       'comp': 'GitLab, Docker, Azure LUIS, Python, Django, Celery',
       'image': 'sentimento.png',
       'detalhes': "Desenvolvimento de API Rest que recebe feed de opniões de usuários e/ou respostas de pesquisas NPS, enfilera estas mensagens na fila do cliente no RabbitMQ, e consumers enviam à API do Azure LUIS (NLU), e retornam o score de sentimento",
       'ajuste': 1 }
}
