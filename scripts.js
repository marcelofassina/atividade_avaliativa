function ex_01(){
    var num1 = Number(window.prompt("Informe primeiro número: "));
    var num2 = Number(window.prompt("Informe segundo número: "));

    if(num1 < num2){
        document.getElementById("resultado").innerHTML = "Números em ordem crescente: " + num1 + ", " + num2 + ".";
    }
    else{
        document.getElementById("resultado").innerHTML = "Números em ordem crescente: " + num2 + ", " + num1 + ".";
    }
}

function ex_02(){
    var genero = window.prompt("Informe o gênero: ");
    var altura = window.prompt("Informe a altura: ");
    var peso_ideal;

    if(genero = "M"){
        peso_ideal = 72.7 * altura - 58;
    }
    else{
        peso_ideal = 62.1 * altura - 44.7;
    }

    document.getElementById("resultado").innerHTML = "Seu peso ideal é: " + peso_ideal.toFixed(1) + " kg.";
}

function ex_03(){
    var num1 = window.prompt("Informe primero número: ");
    var num2 = window.prompt("Informe segundo número: ");
    var num3 = window.prompt("Informe terceiro número: ");

    var menor = num1;

    if(num2 < menor){
        menor = num2;
    }

    if(num3 < menor){
        menor = num2;
    }

    document.getElementById("resultado").innerHTML = "O menor número é: " + menor + ".";
}

function ex_04(){
    var num = window.prompt("Informe número: ");
    
    if(num > 0){
        if(num % 2 == 0){
            document.getElementById("resultado").innerHTML = "É um número par.";
        }
        else{
            document.getElementById("resultado").innerHTML = "É um número ímpar.";
        }
    }
    else{
        document.getElementById("resultado").innerHTML = "O valor absoluto do número é: " + num * -1 + ".";
    }
}

function ex_05(){
    var num = window.prompt("Informe número: ");
    
    if(num % 2 == 0 && num % 3 == 0){
        document.getElementById("resultado").innerHTML = "O número é divisível por 2 e por 3.";
    }
    else{
        document.getElementById("resultado").innerHTML = "O número não é divisível por 2 e por 3.";
    }
}

function ex_06(){
    var num = window.prompt("Informe número: ");
    
    if(num % 2 == 0 || num % 7 == 0){
        document.getElementById("resultado").innerHTML = "O número é divisível por 2 ou por 7.";
    }
    else{
        document.getElementById("resultado").innerHTML = "O número não é divisível por 2 ou por 7.";
    }
}

function ex_07(){
    var num = Number(window.prompt("Informe número: "));
    var dia_semana;
    
    switch (num){
        case 1:
            dia_semana = "Domingo";
            break;
        case 2:
            dia_semana = "Segunda-feira";
            break;
        case 3:
            dia_semana = "Terça-feira";
            break;
        case 4:
            dia_semana = "Quarta-feira";
            break;
        case 5:
            dia_semana = "Quinta-feira";
            break;
        case 6:
            dia_semana = "Sexta-feira";
            break;
        case 7:
            dia_semana = "Sábado";
            break;
    }

    document.getElementById("resultado").innerHTML = "O dia da semana é " + dia_semana + ".";
}

function ex_08(){
    var i, soma_pares;
    
    soma_pares = 0;
    
    for(i = 1; i <= 20; i++){
        if(i % 2 == 0){
            soma_pares += i;
        }
    }

    document.getElementById("resultado").innerHTML = "A soma dos números pares entre 1 e 20 é " + soma_pares + ".";
}

function ex_09(){
    var num = Number(window.prompt("Informe número: "));
    var i;
    var resultado = "";

    for(i = 1; i <= 10; i++){
        resultado += num + " x " + i + " = " + num * i + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function ex_10(){
    var num = window.prompt("Informe número: ");
    var i, fatorial;

    fatorial = 1;
    
    for (i = num; i >= 1; i--){
        fatorial *= i;
    }

    document.getElementById("resultado").innerHTML = "O fatorial de " + num + "! é " + fatorial + ".";
}
