function Calculaimc (peso, altura){
    imc = peso / (altura**2); 
    return imc;
}

function valorImc( imc ){
var situacao  = null;
if (imc < 18.5){
    situacao = "Magreza";
}else if(imc < 24.9){
    situacao = "Normal";
}else if(imc < 30){
    situacao = "Sobrepeso";
}else{
    situacao="obesidade";
}
return situacao;
}

function MostraPaciente(paciente){
    var imc = Calculaimc(paciente.peso, paciente.altura);
    var situacao = valorImc(imc);

    var nome = document.getElementById("ElNome").value = paciente.nome;
    nome.innerHTML = paciente.nome; 
    var Peso = document.getElementById("ElPeso").value = paciente.peso;
    Peso.innerHTML = paciente.peso;
    var Altura = document.getElementById("ElAltura").value = paciente.altura;
    Altura.innerHTML = paciente.altura;
    var idade = document.getElementById("Elidade").value = paciente.idade;
    idade.innerHTML = paciente.idade;  
    var valor = document.getElementById("ElSituacao").value = situacao;
    valor.innerHTML = situacao;
}


function lerPaciente(){ 
    var inputNome = document.getElementById("txtNome");
    var inputIdade = document.getElementById("txtidade")
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");

    var paciente={
        nome:inputNome.value,
        idade:inputIdade.value,
        peso:inputPeso.value,
        altura:inputAltura.value
    }
    return paciente;
}   

function GeraRelatorio(pacientes){
    var Relatorio = document.getElementById("lista");
    var indice = 0;
    if(pacientes.length > 0 ){
    Relatorio.innerHTML = ` <thead>
                                <th class='tabela'>ID</th>
                                <th class='tabela'>Nome</th>
                                <th class='tabela'>Idade</th>
                                <th class='tabela'>IMC</th'>
                                <th class='tabela'>Situação</th>
                            </thead> `
    }
    pacientes.forEach((paciente) => {
        var imc = Calculaimc(paciente.peso, paciente.altura).toFixed(2);
        var situacao = valorImc(imc); 
        
        Relatorio.innerHTML += `<tr>
                                    <td class='tabela'>${indice += 1}</td>
                                    <td class='tabela'>${paciente.nome}</td>
                                    <td class='tabela'>${paciente.idade}</td>
                                    <td class='tabela'>${imc}</td>
                                    <td class='tabela'>${situacao}</td>
                                </tr>`;
    });
}

function LimparLista(lista){
    var Relatorio = document.getElementById("lista");
    Relatorio.innerHTML= null;
} 

function limpadados(){
    var nome = document.getElementById("txtNome").value =""; 
    var Peso = document.getElementById("numPeso").value ="";
    var Altura = document.getElementById("numAltura").value="";
    var idade = document.getElementById("txtidade").value="";
}

function ArrayLimpo(paciente){

    while(paciente.length > 0){
     paciente.pop();
    }
    

    return paciente
}