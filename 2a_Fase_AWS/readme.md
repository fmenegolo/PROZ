Aula _1

    Planos de suporte
        obter plano com menor SLA (Service Level Agreement) ou Acordo de Nivel de Serviço.

        faturados mensalmente baseado na porcentagem de uso dos serviços AWS

        entender a diferença de cada plano

            1.Basic (conhecendo)
                Grátis
                Serviços de nivel gratuito validade de 12 Meses
                Suporte limitado
                Forum da comunidade AWS
            
            2.developer (experimentando)
                29 USD/mes ou % do uso mensal(o que for maior)
                SLA: até 24 hora inativo
                AWS Trust Advisor: 7 verificações principais
                Suporte por 
                    e-mail em
                        horario comercial
                    contato primario
                        que pode abrir multiplos tickets
                Orientação arquitetura: geral
            
            3.bussiner (Trabalhos a nível de Produção)
                + 100USD/mes ou % do uso mensal(o que for maior)
                AWS Trust Advisor: Completo
                Suporte por
                    Telefone, email e chat
                        24x7
                    Nº CTT limitados,
                        que pode abrir multiplos tickets
                Orientação arquitetura: Contextual ao seus casos de uso
                SLA: até 1 hora inativo
                API no AWS Support
                Software de 3os: orientações de interoperabilidade

            4.entrerprise on-ramp (cargas de trabalhos essenciais)
                 + 5.000 USD/mes ou % do uso mensal(o que for maior)
                SLA: até 30 min inativo
                Orientação arquitetura: revisão consultiva
                        *não é TAM: é um gurpo de gerentes  AWS:
                            analisam o caso e indicam programas ou parceiros especialistas AWS
                        Concierge: Auxilia análise das contas e faturas

            
            5.entrerprise (cargas de trabalhos Missão Crítica)
                + 15.000 USD/mes ou % do uso mensal(o que for maior)
                SLA: até 15 min inativo
                
                Orientação arquitetura:
                    TAM - Tecnical Account Manager
                        Gerente técnico orientações da melhores práticas no desenvolvimento e execução de soluçções AWS, pode direcionar para especialistas
                    CONCIERGE
                        Ajuda a reduzir custos, ao analizar as contas e cobranças do cliente
                    Acesso a laboratórias autoguiados online
    
    Computação em nuvem:
        Entrega de recursos de TI sob demanda (on Demand) via internet e cobraqnçças conforme o uso.
        
        Vantagens:
            - Despesas de capital (CapEx) por variavéis (OpEx)
            - Grandes economias de escala - (oferta e damanda)
            - Sem suposições sobre capacidade:
                reduzir a ociosidade e utilizar eficazmente a escabilidade
            - Velocidade e Agilidade - alta disponibilidade
            - redução em custo de administração de datacenters (on premisses)
            - capacidade de alcançe global
        
        Tipos de Computação em nuvem
            IAAS
            PAAS
            SAAS

        Modelos de Implantação
            Public Cloud
                AWS
                GCP
                Azure
            Private Cloud
                On-premises
            Hibrid Cloud

    Principios Básicos da AWS (Well-Architected Framework)
        Segurança
            responsabilidade compartilhada entre o cliente(conf. serv.) e AWS(resp. pela nuvem)
            Modelo de confiaça zero (minimo privilegio)
            - IAM
            - Segurança da rede
            - Criptografia dos dados

        Eficiência de performace
            escolhar os serviços considerando a escalabilidade
            Alta disponibilidade de servidores

        Confiabilidade
            Serviços resilientes a interrupções
            Persistência de dados
            Redundância de dados

            -isolamento de falhas
            -Limites

        Excelêcia operacional
            Melhoria continua em termos de automação(Também por Scripts)
            que podem ser repetidas se aplicadas em demais organizações.
            - Infraestrutura como código
            -Observabilidade

        Otimização de custos
            alcançar o mesmo resutado com menor custo
            CapEx x OpEx
            Trocar altos custos fixos antecipados por pequenos gastos variáveis e contínuos.
            mudando os seguintes processos:
            -Pagamento pelo uso
            -Ciclo de vida da otimização de custos
    
    AWS Serveless
        o servidor na verdade nao deixa de existir porém a necessidade de gerencia-los é abstraida.
        e contam com escabilidade automática e alta disponibilidade integrada.
    
    Infraestrutura AWS
        REGIÃO
            São isoladas entre si, a fim de se tornar mais tolerante a falhas
            disponibilização de recursos em uma localização geografica
            composto por um conjunto de zonas de disponibilidade
            
        ZONA DE DISPONIBILIDADE
            representada por um id de letra ( ex.: us-east-1a)
            no minimo cada região terá duas e até três zonas de disponibilidade

        LOCAL ZONES
            é uma extenção da de uma região AWS, que está proxima ao usuários
            podendo extender qq VPC da região para zona local
            não pode ser incluida em uma implantação Multi-AZ

        LOCAIS DE PRESENÇA (PoP)
            Endpoints da AWS usado para armazenar caches e como a rede entrega o conteudo (CDN)
            com menor latência
