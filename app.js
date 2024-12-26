const input = document.getElementById('input').value;
const btn= document.getElementById('btn');
const p1 = document.getElementById('p1');
let lives = 3
btn.addEventListener('click', btnclick);
function btnclick(){
   let game = Math.floor(Math.random()*10)+1
   // alert(game)
   if(input == game){
      p1.textContent = 'You are winner'
   }
   else{
      lives--
      p1.textContent = 'Try again'
      document.getElementById('heart').textContent = '❤️'.repeat(lives)
      if(lives == 0){
         p1.textContent = 'Game Over'
         btn.disabled = true
      }
   }
   // p1.textContent =""
}