Banco de Dados I

Modelagem de BDs relacionais

    Fases de um projeto de banco de dados
        

        Para entender as fases de um projeto de banco de dados, imagine um ciclo com várias etapas, em que cada uma delas é criada a partir da anterior.

 

        A primeira etapa desse projeto consiste em reunir dados e regras relevantes para a concepção do minimundo, que se trata da apresentação abstrata de uma pequena parte do mundo real. Depois, inicia-se a engenharia de requisitos.

 

        Já a modelagem de dados, etapa também usada no desenvolvimento de um banco de dados, consiste em projeto conceitual, mapeamento  dos conceitos, projeto lógico e projeto físico, que é a fase estrutural do banco de dados.
    
    Análise de requisitos
        
        A análise de requisitos é a fase inicial do desenvolvimento do projeto. Nela, é realizada a identificação dos requisitos que constam em um banco de dados. Entrevistas são feitas e o minimundo é desenvolvido com a descrição textual geral do projeto. 

        As regras de negócios desse documento devem ser identificadas para que as informações sejam bem executadas, pois informações erradas afetam todo o projeto.

    Projeto Conceitual
        
        O projeto conceitual tem base nas informações coletadas pela análise de requisitos. Assim, um esquema é gerado, utilizando um modelo de dados conceitual de alto nível, o Modelo Entidade-Relacionamento (MER). Esse modelo é simplificado para aproximar a composição dos bancos de dados aos usuários, facilitando a compreensão das informações. Por isso, a representação dos dados armazenados não é tão relevante.

        

        O MER é representado através de diagramas. As entidades são retângulos, os atributos são elipses e os relacionamentos são losangos. Nesta etapa, os três tipos de relacionamentos de entidades são fundamentais, sendo delas:

            um para um (1, 1);

            um para muitos (1, n) ou muitos para um ou (n, 1);

            muitos para muitos (n, n).

    Entidades e atributos

        A entidade pode ser definida como um objeto do mundo real, concreto ou abstrato, com existência independente.
        
        Os atributos compõem um conjunto particular de propriedades atreladas à entidade.

        Atributos

            Eles podem ser classificados como:

                Atributo simples - não pode ser subdividido;

                Atributo composto - pode ser dividido em diversas partes, com significados independentes entre si;

                Atributo monovalorado - ou simplesmente valorado, só assume um valor em uma determinada instância;

                Atributo multivalorado - pode assumir diversos valores em uma mesma instância;
                
                Atributo derivado - é gerado a partir de outro atributo.
    
    
    Exemplo de projeto conceitual (n, n)
        
        Representação de um banco de dados com duas tabelas e um relacionamento. Neste exemplo, está sendo utilizado o relacionamento de entidades muitos para muitos, pois temos (n, n) do lado direito da vírgula de cada entidade.

        Toda tabela possui uma chave primária, que se trata de um identificador único e não pode ter mais de um valor.

        Neste caso, as chaves primárias são os atributos referenciais, que são o CPF do aluno e o código da disciplina. Isso porque cada aluno tem seu próprio CPF e cada disciplina tem um código para representá-la.

    Exemplo de projeto conceitual (1, n)

        Neste exemplo, está sendo utilizado o relacionamento de entidades um para muitos, pois temos (1, n) do lado direito da vírgula de cada entidade.

        Neste exemplo, está sendo utilizado o  relacionamento de entidades um para um, pois temos (1, 1) do lado direito da vírgula de cada entidade.

    Projeto lógico

        O projeto lógico é uma etapa do processo do MER. Nele, o mapeamento do projeto conceitual é elaborado.

        A construção dos modelos internos é realizada detalhando tabelas, regras, relacionamentos, dados das colunas (tamanho e tipo), entre outros.

        O projeto lógico tem como resultado o esquema detalhado do banco de dados.

        Exemplo de projeto lógico
      
            Aqui, temos a conversão do modelo conceitual um para muitos (1, n) para o modelo lógico. Neste modelo, cada entidade se torna uma tabela e seus atributos, os dados de cada tabela.

            Aqui, temos a conversão do modelo conceitual muitos para muitos (n, n) para o modelo lógico. Neste modelo, cada entidade se torna uma tabela, seus atributos se tornam os dados de cada tabela e o relacionamento se torna uma nova tabela.

            Uma nova tabela é criada para que ocorra o relacionamento entre as outras tabelas. Por isso, ela possui apenas as chaves estrangeiras.




    Normalização de esquemas de bancos de dados e formas normais
    
        
        A normalização de dados é um processo que foi criado em 1970, logo após o reconhecimento das formas normais, que são passos descritivos sobre a organização dos dados no banco de dados.

        Em relação a normalizar um banco de dados, se pensa em um aumento de tabela, porque elas são desmembradas em outras mais específicas. Porém, isso pode aumentar o custo de manutenção e comprometer a performance inicial.

        Portanto, a normalização deve ser realizada com bom senso, pois ela apresenta melhorias no banco a médio e longo prazo.
      
        Aqui, temos a conversão do modelo conceitual um para um (1,1) para o modelo lógico. Neste modelo, todas as entidades se tornam uma única tabela, ou seja, ocorre uma união dos dados.

        Não existe chave estrangeira nesse tipo de tabela. Por isso, ela é considerada a mais simples.

    
    Projeto físico

        O projeto físico está no nível mais baixo em relação ao usuário final. Nessa etapa, são definidas as estruturas de armazenamento, os índices e a organização de arquivos do banco de dados.

        Ela é considerada a parte final do projeto, pois apresenta a forma de armazenamento, as permissões de acesso ao usuário e os scripts para criação dos objetos, tabelas, colunas, visões, funções e entre outros

        Exemplo de projeto físico
        
            A seguir veremos a conversão do modelo lógico um para muitos (1, n) para o modelo físico. Neste modelo, os dados são representados em linhas de código SQL, que são utilizadas para a criação das tabelas em um banco de dados.
            
            Cada tabela é criada através do comando create table e os seus atributos são descritos juntamente com a descrição do seu respectivo tipo. Neste exemplo, temos dados do tipo varchar, que guardam textos. Também há o número de caracteres que esse dado pode guardar, neste caso, varchar default 30.

            Quando temos uma chave estrangeira, é necessário descrever qual é a sua origem.
    
    Banco de dados
        
        Existem ferramentas on-line destinadas à criação de cada um desses modelos vistos. Uma dessas é o brModelo, que é simples e de fácil uso. 
_______________________________________________________________________________________________

Normalização de esquemas de bancos de dados e formas normais
    
    Normalização de dados
        
        A normalização de dados é um processo que foi criado em 1970, logo após o reconhecimento das formas normais, que são passos descritivos sobre a organização dos dados no banco de dados.

        Em relação a normalizar um banco de dados, se pensa em um aumento de tabela, porque elas são desmembradas em outras mais específicas. Porém, isso pode aumentar o custo de manutenção e comprometer a performance inicial.

        Portanto, a normalização deve ser realizada com bom senso, pois ela apresenta melhorias no banco a médio e longo prazo.

    Primeira Forma Normal
 
        A normalização tem o objetivo de evitar anomalias nas tabelas. Ela é dividida em três formas normais.

        Na Primeira Forma Normal (1FN), não existem grupos de atributos repetidos e as suas relações não possuem atributos multivalorados ou relações aninhadas. 

        Para que uma tabela esteja na 1FN, cada linha deve representar um registro e cada célula deve conter um valor único.

        Uma tabela 1FN deve estar de acordo com as seguintes informações:

            os dados devem estar em valores atômicos, ou seja, indivisíveis;

            ter apenas um dado por coluna;

            deve existir pelo menos uma chave primária;

            se existirem atributos multivalorados, uma nova tabela será criada;

            se existirem atributos compostos, eles serão desmembrados em novas colunas de dados.

        Exemplo da 1FN
            
            Para que essa tabela esteja na 1FN, precisamos organizar alguns dados. Percebemos que nela existem atributos multivalorados, que são aqueles que podem ter mais de um valor, como o Contato, e atributos compostos, que são aqueles que podem ser divididos em atributos menores, como o Endereço. Então, é preciso modificar isso, pois não é permitido nesse tipo de forma normal.

            Nos atributos compostos ocorre a decomposição dos dados, em que cada dado é adicionado em uma coluna. Assim, o atributo endereço será subdividido em atributos menores.

            No caso dos atributos multivalorados, criamos uma nova tabela com os dados. Na nova tabela Contato, a chave primária é o identificador e a chave estrangeira é o CPF correspondente da tabela Pessoa. Se um CPF possuir dois contatos, eles devem ser apresentados em linhas diferentes na tabela Contato, como é o caso dos CPFs dos identificadores 4 e 5.

    Segunda Forma Normal

        A Segunda Forma Normal (2FN) tem que estar, obrigatoriamente, na 1FN. Sendo assim, não deve ter atributos compostos ou multivalorados e nem dependências parciais. 

        No caso das chaves primárias compostas, a 2FN exige que todas as relações tenham dependência total. Ou seja, uma chave primária composta determina funcionalmente os atributos, não podendo existir um atributo que depende apenas de uma parte dessa chave.

        Portanto, na 2FN, os dados:

            já estão na 1FN;

            a chave primária precisa ser simples.

        Exemplo da 2FN

            Essa tabela está na 1FN, não possuindo dados multivalorados e nem atributos compostos. Portanto, como não está na 2FN, ela precisa de ajustes.

            Nesta tabela, temos chaves primárias compostas, o IDENTIFICADOR e o IDENTIFICADOR_FUNÇÃO. Com o atributo NOME, conseguimos saber qual é o nome da pessoa, sendo um atributo que depende parcialmente da chave primária.

            Também conseguimos saber qual é a função da pessoa pelo número do identificador e a descrição pelo identificador da função. Com isso, podemos ter duas tabelas ao invés de apenas uma.

            Para transformar essa tabela na 2FN, será necessário desmembrar alguns dados e construir outra tabela. Assim, nenhuma coluna depende parcialmente de outra.

            Para construir a outra tabela, é interessante montar o modelo conceitual para entendermos quais atributos ficarão em cada uma das tabelas.

            Para que a tabela original fique na 2FN, ela precisa ser dividida em duas. Com esse diagrama, temos a organização de como as duas tabelas seriam criadas com os seus devidos atributos para que não haja chave primária composta. No relacionamento das entidades, uma pessoa pode possuir uma ou várias funções e uma função pode ter uma ou várias pessoas envolvidas.

    Terceira Forma Normal
    
        A Terceira Forma Normal (3FN) tem que estar, obrigatoriamente, na 2FN e possuir dependência exclusiva da chave primária da tabela. 

        Todos os seus atributos  devem ser funcionalmente independentes.

        Na 3FN, os dados:

            devem estar na 2FN;

            Os atributos não podem depender de outros que não são chaves.

        Exemplo da 3NF
       
            Essa tabela não está na 3FN, pois os seus atributos não são todos dependentes. A Nota_fiscal é a chave primária e sabemos o Nome_vendedor através do Identificador_vendedor. Com isso, temos uma dependência. 

            Para resolver isso, precisamos criar uma nova tabela com esses atributos que são dependentes.

            Agora, temos uma tabela Vendedor com a sua chave primária Identificador_vendedor e os nomes de cada vendedor. 

            Os nomes dos vendedores são excluídos desta tabela, porém ela continua com o Identificador_vendedor, que se torna uma chave estrangeira nesta tabela, pois esse atributo é uma chave primária na tabela Vendedor.

    Forma Normal de Boyce-Codd (FNBC)

        Cada forma normal é estritamente mais forte do que a anterior, então: 

            toda relação da 2FN encontra-se na 1FN; e

            toda  relação na 3FN encontra-se na 2FN.

        O mesmo acontece  com a Forma Normal de Boyce-Codd (FNBC). Toda relação FNBC está na 3FN.

        Ela é uma melhoria da 3FN utilizada em casos onde a tabela apresenta mais de uma chave candidata.

        A FNBC serve para separar, em novas tabelas, valores que ainda estejam redundantes do seu banco de dados.       

        Analisando essa tabela, conseguimos entender que:

            descobrimos o professor se soubermos quem é o aluno e qual é a disciplina;

            descobrimos qual é a disciplina se soubermos quem é o professor;

        Assim, existem dependentes entre os atributos.

        Para transformar essa tabela na FNBC, é necessário decompor as relações que são dependentes. Neste caso, essa tabela é decomposta da seguinte forma:

            Professor, Disciplina;

            Aluno, Professor.  

        Após a decomposição, temos uma tabela com a chave primária Professor e sua respectiva Disciplina.
        
        Após a decomposição, temos outra tabela com a chave primária Aluno e Professor como chave estrangeira, pois, a partir do professor, podemos saber qual disciplina o aluno irá cursar.

        Vimos no exemplo anterior como transformar uma tabela para a FNBC, utilizando a função de decompor os atributos, construindo novas tabelas para eliminar as dependências.
________________________________________________________________________________________________________

Linguagens formais de consulta a bancos de dados
- Álgebra relacional
- Cálculo relacional

    Linguagens formais de consulta
        
        Na criação de um banco de dados, o  principal objetivo é o armazenamento. Os dados devem ser persistentes e íntegros, pois as suas informações serão trabalhadas.
        
        Usando as consultas que são implementadas na linguagem SQL, esses dados podem ser recuperados para o usuário ou para a aplicação do banco de dados.

        Essa linguagem foi desenvolvida com base em outras de consultas formais como a álgebra relacional. 
    
    Álgebra relacional

        A álgebra relacional é uma linguagem de consulta, onde os usuários passam instruções para o sistema executar e o mesmo executa o conjunto de instruções a fim de se obter um resultado desejado pelo usuário. O objetivo das instruções é acessar o banco de dados e coletar a informação que o usuário deseja.       

        A álgebra relacional é composta por uma série de operadores e as suas operações fundamentais.
 
        Ela é a base formal para a implementação da linguagem SQL, que é uma linguagem comercial usada para aplicar estratégias disponíveis  no módulo de processamento de consultas interno dos Sistemas de Gerenciamento de Banco de Dados (SGBDs).

        Esses módulos  incluem a funcionalidade da otimização de consultas, as quais são realizadas com o SGBD para extrair os dados que estão no banco.

        Nomenclaturas encontradas na Algebra Relacional
            Tuplas => Linhas de Tabela
            
            Atributos => Colunas

            Relação => A tabela

        A operação select
            
            Sigma é o símbolo que representa a operação select.

            O operador select, ou a operação de seleção, seleciona tuplas das tabelas para atender a uma solicitação e extrair informações. Observe a representação:

            IMG

            No exemplo, podemos entender que em uma tabela de nome EMPREGADO, serão selecionadas as tuplas que possuem o valor de salário maior que dois mil.
