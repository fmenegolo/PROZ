#Instruções do projeto
#Desenvolva um código que utilize as seguintes características de um veículo:
#- Quantidade de rodas;
#- Peso bruto em quilogramas;
#- Quantidade de pessoas no veículo.

#Com essas informações, o programa mostrará qual é a melhor categoria de habilitação para o veículo informado a partir das condições:
#A: Veículos com duas ou três rodas;
#B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
#C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
#D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas; 
#E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

print("Olá, gostarimos de saber os dados do veiculo que pretende dirigui a fim de lhe informa a categoria de habilitação necessária. ")
quantidadeRodas = int(input("Quantas rodas possui o veículo?"))
quantidadePessoas = int(input("Qual a capacidade máxima de ocupantes possui o veículo?"))
pesoBruto = float(input("Qual o pesso bruto do veículo?"))

if(quantidadeRodas < 4):
    print("Para diriguir este veiculo é necessario ter habilitação para dirigir veiculos categoria 'a' ")
elif (pesoBruto > 6000) and (quantidadeRodas >= 4):
    print("Para diriguir este veiculo é necessario ter habilitação para dirigir veiculos categoria 'E' ")
elif (quantidadePessoas > 8) and (quantidadeRodas >= 4):
    print("Para diriguir este veiculo é necessario ter habilitação para dirigir veiculos categoria 'D' ")
elif ((pesoBruto >3500) or (pesoBruto<=6000)) and (quantidadeRodas >= 4):
    print("Para diriguir este veiculo é necessario ter habilitação para dirigir veiculos categoria 'C' ")
else:
    print("Para diriguir este veiculo é necessario ter habilitação para dirigir veiculos categoria 'B' ")
