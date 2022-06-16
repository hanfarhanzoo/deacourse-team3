// declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")
const logoutForm = document.getElementById("logoutForm")
const startSection = document.getElementById("start")
//declare box level-easy
const boxE1 = document.getElementById("boxE1")
const boxE2 = document.getElementById("boxE2")
const boxE3 = document.getElementById("boxE3")
//declare box level-medium
const boxM1 = document.getElementById("boxM1")
const boxM2 = document.getElementById("boxM2")
const boxM3 = document.getElementById("boxM3")
const boxM4 = document.getElementById("boxM4")
//declare box level-hard
const boxH1 = document.getElementById("boxH1")
const boxH2 = document.getElementById("boxH2")
const boxH3 = document.getElementById("boxH3")
const boxH4 = document.getElementById("boxH4")
const boxH5 = document.getElementById("boxH5")

let difficulty = sessionStorage.getItem('keyDifficulty')

const rewardImage = document.getElementById("imgReward")
const title = document.getElementById("title")
const rewardSection = document.getElementById("reward")
const navbar = document.getElementById("navbar")
const levelEasy = document.getElementById("level-easy")
const levelMedium = document.getElementById("level-medium")
const levelHard = document.getElementById("level-hard")
const stopButton = document.getElementById("stop")
const nameAndToken = document.getElementById("nameAndToken")


const player = new Player()


let default_option = ['😍', '🤣', '😱']
boxE1.textContent = default_option[0]
boxE2.textContent = default_option[1]
boxE3.textContent = default_option[2]
boxM1.textContent = default_option[0]
boxM2.textContent = default_option[1]

function dice() {
  let gacha = []
  for (let i = 0; i < default_option.length; i++) {
    const roll = default_option[~~(Math.random() * default_option.length)]
    gacha.push(roll)
  }
  return gacha
}

function reward() {
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(x => x.json()).then(result => {

    //set nama hadiah reward
    let text = document.createElement('h1')
    text.textContent = result.name

    //set gambar hadiah
    let img = new Image(200, 200)
    img.src = result.image_link

    //set element
    rewardImage.appendChild(img)
    rewardImage.appendChild(text)
  })
}

function winner() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent) {
    location.href = "#reward"
    reward()
  } else {
    alert('Anda kalah! silakan coba lagi.')
    console.log('lose')
  }
}

function start() {
  
    //selama
    const rolling = setInterval(function () {
      const result = dice()
      box1.textContent = result[0]
      box2.textContent = result[1]
      box3.textContent = result[2]
    }, 100)

  //ketika
    setTimeout(function () {
      clearInterval(rolling)
      winner()
    }, 5000)
}

  function stop(){
    clearInterval(rolling)
    winner()
  }

onload = function () {
  const token = sessionStorage.getItem('keyToken')
  const username = sessionStorage.getItem('keyUsername')
  levelMedium.style.display = "none"
  levelHard.style.display = "none"

  if (token && token != null) {
    registerForm.style.display = "none"
    logoutForm.style.display = "block"
    startSection.style.display = "block"
    rewardSection.style.display = "block"
    navbar.style.display = "block"
    title.textContent = `Hello ${username} !`
    nameAndToken.textContent= `${username} (Session Token : ${token})`
  } else {
    registerForm.style.display = "block"
    logoutForm.style.display = "none"
    startSection.style.display = "none"
    rewardSection.style.display = "none"
    navbar.style.display = "none"
  }
}

function levelEasyButton(){
  sessionStorage.setItem('keyDifficulty', "easy")
  const difficulty = sessionStorage.getItem('keyDifficulty')
  console.log("levelnya " + difficulty)
  levelEasy.style.display = "flex"
  levelMedium.style.display = "none"
  levelHard.style.display = "none"
}
function levelMediumButton(){
  sessionStorage.setItem('keyDifficulty', "medium")
  const difficulty = sessionStorage.getItem('keyDifficulty')
  console.log("yang ini " + difficulty)
  levelEasy.style.display = "none"
  levelMedium.style.display = "flex"
  levelHard.style.display = "none"
}
function levelHardButton(){
  sessionStorage.setItem('keyDifficulty', "hard")
  const difficulty = sessionStorage.getItem('keyDifficulty')
  console.log("nah ini " + difficulty)
  levelEasy.style.display = "none"
  levelMedium.style.display = "none"
  levelHard.style.display = "flex"
}

function register() {
  player.username = username.value
  player.register
}

function logout() {
  player.logout
}
