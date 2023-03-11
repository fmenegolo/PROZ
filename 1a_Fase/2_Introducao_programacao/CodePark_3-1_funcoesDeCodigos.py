#Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação
# e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
#1. Soma
#2. Subtração
#3. Multiplicação
#4. Divisão

#Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

def calculadora(num1,num2,op):
    if (op == "+"):
        res=num1+num2
    elif (op == "-"):
        res=num1-num2
    elif (op == "*"):
        res=num1*num2
    elif (op == "/"):
        res=num1/num2
    return res

n1=eval(input("insira o primeiro número: \n"))
n2=eval(input("insira o segundo número: \n"))
op=(input("insira o qual operação matemática \n '+' Soma \n '-' Subtração \n '*' Multiplicação \n '/' Divisão \n"))
res = calculadora(n1,n2,op)
print(f"{n1} {op} {n2} = {res}")
