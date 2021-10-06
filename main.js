//criar um array para as respostas corretas
let corretas = []
//apresentação do jogo
alert("Olá! Este é o jogo dos primeiros nomes. Queres jogar?");

//criação da variável nome, indicada pelo utilizador
let nome = prompt("Antes de continuar diz-me qual é o teu primeiro nome");

//questionamento usando o nome indicado pelo utilizador
alert("Vamos a isto. Estás pronto/a " + nome + " ?");

//explicação das regras
alert("Quando acertares numa resposta, terás acesso a um facto interessante relativo a cada personalidade. Quando errares...bem, estudasses!");

//P1
  //surge a pergunta no ecrã. Recebe-se a resposta
   let resposta1 = prompt("Qual o primeiro nome da 'princesa do povo'?");
  //se a resposta estiver correta (ou seja, = Diana)....
   if( resposta1 == "Diana" ){
      //surge um alerta com uma curiosidade sobre a personalidade
      alert("Diana Spencer, também conhecida como Lady Di, perdeu a vida num acidente de viação em 1997.");
      //acrescenta-se a resposta ao array das respostas corretas
      corretas.push('Diana');
   //se não estiver correta ou não fôr respondida
   }else{
      //aparece um alerta com a resposta correta
      alert("DIANA...Princesa Diana. Esta era fácil!");
   }
   //passa-se para a pergunta seguinte
//P2
   let resposta2 = prompt("Qual era o primeiro nome do navegador português que comandou a viagem que culminou descoberta do caminho marítimo para a índia?");
   if( resposta2 == "Vasco" ){
      alert("Exatamente! Em 1498 foi Vasco da Gama quem comandou a frota que abriu o caminho marítimo dos Europeus para a Índia.");
      corretas.push('Vasco');
   }else{
      alert("Nope! Foi VASCO da Gama! Não fizeste o 5º ano?");
   }
//P3
   let resposta3 = prompt("Qual o primeiro nome do pintor de 'Guernica'?");
   if( resposta3 == "Pablo" ){
      alert("Pablo Picasso, exatamente! 'Guernica' foi uma declaração contra a guerra e um manifesto contra a violência.");
      corretas.push('Pablo');
   }else{
      alert("PABLO Picasso. Devias conhecer um dos principais artistas plásticos do século XX...");
   }
//P4
   let resposta4 = prompt("Qual era o primeiro nome do físico que publicou a teoria da relatividade geral?");
   if( resposta4 == "Albert" ){
      alert("A teoria da relatividade foi publicada por Albert Einstein e defende que a força da gravidade é interpretada como um efeito da curvatura do espaço-tempo.");
      corretas.push('Albert');
   }else{
      alert("ALBERT Einstein. E=mc2 não te diz nada?");
   }
//P5
   let resposta5 = prompt("Qual o primeiro nome da jovem vítima do nazismo conhecida por escrever um diário?");
   if( resposta5 == "Anne" ){
      alert("Das pessoas escondidas com ela, a única que sobreviveu foi o seu pai. Este encontrou os escritos da filha e publicou o livro 'diário de Anne Frank' em 1947, um dos mais verdadeiros e emocionantes testemunhos deste período.");
      corretas.push('Anne');
   }else{
      alert("ANNE Frank, conhecida por ser uma das mulheres mais fortes da Segunda Guerra Mundial.");
   }
//P6
   let resposta6 = prompt("Qual o primeiro nomeda jovem ativista sueca que ficou conhecida em 2018 por realizar protestos contra os danos climáticos junto ao parlamento?");
   if( resposta6 == "Greta" ){
      alert("Greta Thunberg tornou-se uma inspiração para milhares de estudantes que passaram a exigir medidas de proteção à natureza e a fazer manifestações pelo clima");
      corretas.push('Greta');
   }else{
      alert("GRETA Thunberg tem sido tão importante que já esteve nomeada duas vezes ao Nobel da paz. Devias andar mais atento/a....");
   }
//Resultados
alert("E assim chegamos ao fim! Vamos aos resultados:");

if (corretas.length > 4){
   document.querySelector("h2").innerText = corretas.length + "/6";
   document.querySelector("p").innerText = "Incrível! Muitos parabéns!";
} else if (corretas.length > 2 && corretas.length <= 4) {
   document.querySelector("h2").innerText = corretas.length + "/6";
   document.querySelector("p").innerText = "Foi bom... mas podia ter sido melhor.";
} else{
   document.querySelector("h2").innerText = corretas.length + "/6";
   document.querySelector("p").innerText = "Só? Espero que para a próxima seja melhor!";
}
