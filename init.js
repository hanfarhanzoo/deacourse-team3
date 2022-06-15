// declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")
const logoutForm = document.getElementById("logoutForm")
const startSection = document.getElementById("start")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
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
box1.textContent = default_option[0]
box2.textContent = default_option[1]
box3.textContent = default_option[2]
box4.textContent = default_option[0]
box5.textContent = default_option[1]

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
  
  rolling

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
    title.textContent = `Hello ${username.value} !`
    nameAndToken.textContent= "Test"
  } else {
    registerForm.style.display = "block"
    logoutForm.style.display = "none"
    startSection.style.display = "none"
    rewardSection.style.display = "none"
    navbar.style.display = "none"
  }
}

function levelEasyButton(){
  levelEasy.style.display = "flex"
  levelMedium.style.display = "none"
  levelHard.style.display = "none"
}
function levelMediumButton(){
  levelEasy.style.display = "none"
  levelMedium.style.display = "flex"
  levelHard.style.display = "none"
}
function levelHardButton(){
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
