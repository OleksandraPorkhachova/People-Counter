const passNum = document.getElementById("count-el")
const addPax = document.getElementById("newPax")

addPax.addEventListener("click", function(){
  let paxNum = parseInt (passNum.innerHTML) + 1;
  document.getElementById("count-el").innerHTML = paxNum
})

const delPax = document.getElementById("delPax")

delPax.addEventListener("click", function(){
  let paxDelNum = parseInt (passNum.innerHTML) - 1;
  if (paxDelNum < 0) {
    document.getElementById("count-el").innerHTML = 0;
  } else{
  document.getElementById("count-el").innerHTML = paxDelNum
  }
})

const savePax = document.getElementById("Save")
const paxSaveLog = document.getElementById("paxSaveLog")

savePax.addEventListener ("click", function(){
  let savePass = document.createElement("span")
  savePass.innerHTML = parseInt (passNum.innerHTML)
  paxSaveLog.appendChild(savePass)
})

const restartPax = document.getElementById("restart")

restartPax.addEventListener("click", function(){
  let restartNum = 0;
  document.getElementById("count-el").innerHTML = restartNum
})