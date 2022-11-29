
let screen = document.querySelector('.count');
let miNutes = document.querySelector('.minutes');
let SeConds = document.querySelector('.seconds');
let teNs = document.querySelector('.tens');
let sTart = document.querySelector('#start');
let sTop = document.querySelector('#stop');
let reSet = document.querySelector('#reset');
let counterTen = 00;
let counterSecond = 00;
let counterMinute = 00;
let stopTimer;
sTart.addEventListener('click',() => {
  stopTimer = setInterval(reach,1)
})

sTop.addEventListener('click',() => {
  clearInterval(stopTimer);
})

reSet.addEventListener('click',() => {
counterTen = 00;
counterSecond = 00;
counterMinute = 00;
SeConds.textContent =  '0' + counterSecond;
miNutes.textContent = '0' + counterMinute;
teNs.innerHTML =  '0' + counterTen;
})
function reach(){
  counterTen++;
  if(counterTen <= 9){
    teNs.textContent = '0' + counterTen;
  }
  if(counterTen > 9){
     teNs.textContent = counterTen;
  }
  if(counterTen > 99){
    counterSecond++;
    SeConds.textContent = '0' + counterSecond;
    counterTen = 0;
    teNs.textContent = '0' + 0;
  }
  if(counterSecond <= 9){
    SeConds.textContent = '0' + counterSecond;
  }
  if(counterSecond > 9){
    SeConds.textContent = counterSecond;
  }
   if(counterSecond > 60){
    counterMinute++;
    miNutes.textContent = '0' + counterMinute;
    counterSecond = 0;
    SeConds.textContent = '0' + 0;
  }
  if(counterMinute <= 9){
    miNutes.textContent = '0' + counterMinute;
  }
  if(counterMinute > 9){
    miNutes.textContent =  counterMinute;
  }
}
