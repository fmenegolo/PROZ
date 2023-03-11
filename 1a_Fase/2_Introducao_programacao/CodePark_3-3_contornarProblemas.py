#Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021.
#A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará,
#  no ano atual (2022).

#Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro
#  e continuará perguntando até que um valor correto seja preenchido.


def quatosAnos(anoNasc,anoAtual):
    anoAtual=2022
    if (anoNasc >= anoAtual):
        raise Exception("ano de nascimento maior qu o atual")
    elif (anoNasc >= 1922) and (anoNasc < anoAtual):
        idade=anoAtual-anoNasc
    else:
        raise Exception("teste erro")
    return idade
rodar = True
nome = input("insira seu nome: ")
while(rodar == True):
    
    nascidoEm = int(input("Digite o seu ano de nascimento: "))
    anoHoje = 0
    try:
        resp = quatosAnos(nascidoEm, anoHoje)
        print(f"O Sr. {nome} completou ou ira completar {resp} anos neste ano.")
        rodar = False
    except:
         print("Caracter inválido, por favor digite um número correto")
