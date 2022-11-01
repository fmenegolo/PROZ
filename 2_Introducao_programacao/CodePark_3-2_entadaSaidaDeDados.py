#Faça uma função calculadora que os números e as operações serão feitas pelo usuário. 
# O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. 
# No início, o programa mostrará a seguinte lista de operações:

#1: Soma
#2: Subtração
#3: Multiplicação
#4: Divisão
#0: Sair

# Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, 
# o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

# Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada.
# Depois precisa executar a operação e mostrar o resultado na tela.
# Quando o usuário escolher a opção “Sair”, o sistema irá parar.

# É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

def calculadora2(num1,num2,op):
    if (op == "1"):
        res=num1+num2
    elif (op == "2"):
        res=num1-num2
    elif (op == "3"):
        res=num1*num2
    elif (op == "4"):
        res=num1/num2
    return res

operador = ""
lista=("1","2","3","4")

while operador not in "0":
    operador=str(input("escolha a opção da operação matemática: \n 1 = Soma \n 2 = Subtração \n 3 = Multiplicação \n 4 = Divisão \n 0 = Sair \n"))
    while operador not in lista:
        print("Essa opção não existe!\n")
        operador=str(input("escolha a opção da operação matemática: \n 1 = Soma \n 2 = Subtração \n 3 = Multiplicação \n 4 = Divisão \n 0 = Sair \n"))
    
    if (operador != "0"):
        n1=eval(input("insira o primeiro número: \n"))
        n2=eval(input("insira o segundo número: \n"))
        res = calculadora2(n1,n2,operador)
        print(f"Resultado é = {res}")
    else:
        break
print("Operação encerrada")

