var Pacientes = []; 

var botao = document.getElementById("btn-calcular");
botao.addEventListener('click', function(){
var paciente = lerPaciente();
Pacientes.push(paciente); 
MostraPaciente(paciente);
});

var botaoRelatorio = document.getElementById("btn-relatorios");
botaoRelatorio.addEventListener('click', function(){
GeraRelatorio(Pacientes); 
});

var botaolimparlista = document.getElementById("btn-limpar");
botaolimparlista.addEventListener('click', function(){
LimparLista(Pacientes);
});

var botaolimparlista = document.getElementById("btn-limpar2");
botaolimparlista.addEventListener('click', function(){
    ArrayLimpo(Pacientes);
    LimparLista(Pacientes);
});
