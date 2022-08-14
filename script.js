/*
  1 - condição vitoria, empate ou derrota
  2 - Ia começando as vezes
  3 - Placar
*/
var jogadas = 0;
var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
function play(pos){
  var img = document.getElementById(pos);
  img.src = "https://media.istockphoto.com/vectors/red-cross-mark-drawn-grunge-x-in-vector-vector-id1175729985?k=20&m=1175729985&s=612x612&w=0&h=EU-GGvapec1NzAncoH6GAN2Df2udxpk-z9Ch2aTCvSY=";
  img.removeAttribute("onclick");
  jogadas++;
  grid[ pos - 1 ] = 1;

  verificaVitoria();

  if(jogadas != 9){
    playIa();
  }
  console.log(grid);
}
function playIa(){
  var ia = Math.floor(Math.random() * 9 ) + 1; //[1, 9]
  var img = document.getElementById(ia);

  if(img.onclick){
    img.src = "https://2.bp.blogspot.com/-93FrtflL8LQ/V1Q2LebThhI/AAAAAAAAIK0/kK7jRO5NyPEPboZ_gttrM_mj_VRfJFPJgCLcB/s1600/Jogo%2Bda%2BVelha%2BB%25C3%258DBLICO_%2528O%2529.jpg";
    img.removeAttribute("onclick");
    jogadas++;
    grid[ ia - 1 ] = -1;
    verificaVitoria();
  }else{
    playIa();
  }
}

function verificaVitoria(){
  //Verificar as condições de vitoria do Jogador e da IA
  var linha1 = grid[0] + grid[1] + grid[2];
  var linha2 = grid[3] + grid[4] + grid[5];
  var linha3 = grid[6] + grid[7] + grid[8];

  var coluna1 = grid[0] + grid[3] + grid[6];
  var coluna2 = grid[1] + grid[4] + grid[7];
  var coluna3 = grid[2] + grid[5] + grid[8];

  var diagonal1 = grid[0] + grid[4] + grid[8];
  var diagonal2 = grid[2] + grid[4] + grid[6];

  if(
      linha1 == 3 || linha2 == 3 || linha3 == 3
      || coluna1 == 3 || coluna2 == 3 || coluna3 == 3
      || diagonal1 == 3 || diagonal2 == 3
    ){
    //Jogador ganhar
    endGame(1);
  }
  if(
      linha1 == -3 || linha2 == -3 || linha3 == -3
      || coluna1 == -3 || coluna2 == -3 || coluna3 == -3
      || diagonal1 == -3 || diagonal2 == -3
    ){
    //IA ganhar
    endGame(-1);
  }
}

function endGame(ganhador){
  var btn = document.getElementById("btnReset");
  btn.disabled = false;

  if(ganhador == 1){
    btn.innerText = "Parabens. Aceita uma Revanche?";
  }
  if(ganhador == -1){
    btn.innerText = "Perdeu neh? Quer tentar de novo?";
  }
  if(ganhador == 0){
    btn.innerText = "Empatou. Bora Outra?";
  }
}