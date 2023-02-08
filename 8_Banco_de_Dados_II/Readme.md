1. Entender a importancia de junção entre tabela, utilizando as chaves primárias e estrangeiras implementadas em suas tabelas

    1.1. Chave primaria ou Primary Key (PK)
        determina exclusivamente o identificados unico de uma tabela
        Nao pode ser nulo, nem duplicado
            
            1.1.1. Chave simples
                Formada por um unico campo
                permanecer unicas
                simples, numericas e familiares
            1.1.2. Exemplo de chave primária simples
                tabela tem apenas um campo de chave primária, o CPF de cada pessoa. Portanto, é uma chave primária simples.
                
            1.1.3. Chave composta
                formada por mais de um campo,
                podem ser repetidos mas não combinados
            
            1.1.4. Exemplo de chave composta
                - A tabela tem dois campos de chave primária, sendo NUMERO_CONTA e NUMERO_AGENCIA. Dessa forma, ela tem chaves primárias compostas

                - Podemos ter mais de uma conta bancária com o mesmo saldo, mais de uma conta bancária com o mesmo número ou mais de uma conta bancária na mesma agência. O que não é possível é ter mais de uma conta com o mesmo número na mesma agência simultaneamente.
    
    1.2. Chave estrangeira ou foreign key (FK)
        - Recurso que serve para criar relacionamento entre tabelas
        otimização de consultas em Bd a partir de cruzamento de dados

        - Ela é chamada assim pois faz referência à chave primária de uma tabela que não é a dela. Em sua tabela, a chave estrangeira é a própria chave primária.

        - ela é uma chave primária em sua tabela de origem. Quando passa a ser referenciada em uma outra tabela, ela passa a ser chave estrangeira.
            
            1.2.1. Chave estrangeira composta
                formada por mais de uma coluna,
                tabela pode ter mais de uma chave estrangeiras
                
                1.2.2. Restrições para exclusão ou atualização
                    
                    1.2.2.1. Exclusão
                        
                        ON DELETE CASCADE
                            quando uma tabela referenciada foi apagada
                            gerando efeito cascata para as chaves estrangeiras correspondentes
                                ou seja ao excluir um registro relacionado em outra tabela é automaticamente excluido
                             
                        ON DELETE SET NULL
                            chaves estrangeiras relacionadas são definidas com valor nulo

                        ON DELETE DET DEFAULT
                            chaves estrangeiras relacionadas em outras tabelas são definidas com um valor padrão

                    1.2.2.2. Atualização
                        
                        ON UPDATE CASCADE
                            ao modificar um registro em uma tabela  que seja relacionado a uma coluna de chave estrangeira em outra tabela, as chaves estrangeiras tem seu valor automaticamente atualizado

                        ON UPDATE SET NULL
                            chaves estrangeiras relacionadas são definidas com um valor nulo
                            para que a achao tenha sucessso

                        ON UPDATE DET DEFAULT
                            chaves estrangeiras relacionadas em outras tabelas são definidas com um valor padrão

2. Compreender e aplicar todas as condições para execução de junções
    
    2.1.Junções
        tem relação com teoria dos conjuntos representadas por diagramas de Venn
        O objetivo das junções entre tabelas é relacioná-las a partir de regras específicas.
        A junção entre tabelas otimiza consultas básicas em um banco de dados.

    2.2. Conjuntos
        2.2.1. podem ou não possuir interseção
            - se existir os mesmo elementos fazem partes de ambos conjuntos
                - podemos contruir relaçoes entre eles
                
        2.2.2. Disjuntos
            nenhum deles possui algum tipo de interseção
        
        2.2.3. Inclusão
            observa se um conjunto está contido ou não em outro conjunto.
                se tratando de um subconjunto.
    
    2.3. Operação de União
        une dois conjuntos considerando seus elementos
    
    2.4. diferença entre dois conjuntos 
        Apresenta a distinção entre eles
    
    2.5. Criando o banco de dados
        
        - Para criar o banco de dados, usaremos o comando:
        create database <nome_da_base_de_dados>;

        - Para usá-lo, iremos executar:
        Use <nome_da_base_de_dados>;

    2.6. Criando Tabelas no Banco de dados
        
        -- Tabela 1 PK Simples
        CREATE TABLE <nome_da_tabela1> (
            id_nome_coluna1 int AUTO_INCREMENTO PRIMARY KEY,
            nome_coluna2 Varchar(50) NOT NULL,
            nome_coluna3 Varchar(50) NOT NULL
        );
        
        -- Tabela 2 PK Simples e 1 FK Simples referenciado tabela 1
        CREATE TABLE <nome_da_tabela2> (
            id_nome_coluna1 INT AUTO_INCREMENTO PRIMARY KEY,
            nome_coluna2 Varchar(50) NOT NULL,
            nome_coluna3_id Int,
            CONSTRAINT FOREIGN KEY (nome_coluna3_id)
                references <nome_da_tabela1> (id_nome_coluna1)
        );
    
    2.7. Inserindo dados nas tabelas
        insert into <nome_da_tabela1>(nome_coluna2, nome_coluna3) values ('dados_coluna2', 'dados_coluna3');
        insert into <nome_da_tabela2>(nome_coluna2, nome_coluna3_id) values ('dados_coluna2', 'dados_coluna3_id');
      
    2.8. Joins
        Inner Join
            -- Esse método retorna os registros que são comuns entre as tabelas.
            
            select nome_coluna2, nome_coluna3_id from <nome_da_tabela2>
            inner join <nome_da_tabela1>
            on <nome_da_tabela1>.id_nome_coluna1 = <nome_da_tabela2>.nome_coluna3_id;


        Left Join
            -- Esse método apresenta todos os registros que estão em uma tabela, mesmo que não tenham ligação com a outra. Além disso, ele apresenta os registros em comum entre as tabelas.
            -- Ao realizar uma consulta com o Left Join, todos os dados da tabela à esquerda serão mostrados.
            
            select <nome_coluna2_tabela2>, <nome_coluna2_tabela1>
            from
            <nome_da_tabela2> left join <nome_da_tabela1>
            on <nome_da_tabela1>.id_nome_coluna1 = <nome_da_tabela2>.nome_coluna3_id;

            -- Serão Apresentados dados da tabela2 e os dados da interseção entre as duas tabelas

        Right Join
            -- Esse método apresenta todos os registros que estão em uma tabela, mesmo que não tenham ligação com a outra. Além disso, ele mostra os registros em comum entre as tabela
            -- Ao realizar uma consulta com o Right Join, todos os dados da tabela à direita serão mostrados.

            select <nome_coluna2_tabela2>, <nome_coluna2_tabela1> from
            <nome_da_tabela2> right join <nome_da_tabela1>
            on <nome_da_tabela1>.id_nome_coluna1 = <nome_da_tabela2>.nome_coluna3_id;

             -- Serão Apresentados dados da tabela1 e os dados da interseção entre as duas tabelas

        Full Join (Outer Join, Full Outer Join)
            -- Esse método apresenta todos os registros que estão nas duas tabelas.
            -- Esse método pode não existir nas consultas de alguns Sistemas de Gerenciamento de Banco de Dados, como o MySQL. Assim, para apresentar os dados da tabela, precisamos informar que queremos os dados da tabela à esquerda, ou seja, da tabela que está em Left Join. Depois, juntamos os dados desta tabela com os dados da tabela Right Join. Por isso, temos o comando union, que une os dados de ambas as tabelas e os apresenta como resultado

            select <nome_coluna2_tabela2>, <nome_coluna2_tabela1>
            from
            <nome_da_tabela2> left join <nome_da_tabela1>
            on <nome_da_tabela1>.id_nome_coluna1 = <nome_da_tabela2>.nome_coluna3_id;
            union
            select <nome_coluna2_tabela2>, <nome_coluna2_tabela1> from
            <nome_da_tabela2> right join <nome_da_tabela1>
            on <nome_da_tabela1>.id_nome_coluna1 = <nome_da_tabela2>.nome_coluna3_id;

3. Desenvolvimento
    Instruções do projeto
        Desenvolva um banco de dados e relacione tabelas através de chaves estrangeiras ou nomes de colunas iguais. Siga as instruções:
        crie uma base de dados; 
        crie tabelas nessa base de dados;
        em cada tabela, adicione atributos;
        insira dados em cada tabela;
        utilize os comandos Joins para realizar consultas nas tabelas. 
    
    Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.




