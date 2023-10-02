//let notas = new Array(3);
let notas = [];
for (let count = 0; count < 3; count ++){
    notas[count] = parseFloat(prompt((count+1) + "ª. nota do aluno: "))
}
    
//const notas = [5,6,7];
let soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}
const media = soma / notas.length;

if(media <= 4){
    alert('A média é: ' + media);
    alert('O aluno está REPROVADO.');
}
            
else if(media > 4 && media < 7){
    alert('A média do aluno é: ' + media);
    alert('Aluno está em RECUPERAÇÃO.');
    nota_recuperacao = parseInt(prompt('Digite a nota da recuperação do aluno: '));
    media_recuperacao = (nota_recuperacao + media) / 2;
    if(media_recuperacao >= 5){
        alert('O aluno está APROVADO com a média de: ' + media_recuperacao);
    }else{
        alert('O aluno está REPROVADO com a média de: ' + media_recuperacao);
    }
}

else {
    alert('A média do aluno é: ' + media);
    alert('Aluno está APROVADO.');
}
    
            
        