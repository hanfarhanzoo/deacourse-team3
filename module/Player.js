class Player {
  constructor() {
    this._username = ""
  }

  generateToken() {
    const random = ~~[Math.random() * 10000]
    const token = this.username + random.toString()
    return token 
  }

  // setter method
  set username(_username) {
    return this._username = _username
  }

  // getter method
  get username() {
    return this._username
  }

  get register() {
    sessionStorage.setItem('keyToken', this.generateToken())
    sessionStorage.setItem('keyUsername', username.value)
    registerForm.style.display = "none"
    logoutForm.style.display = "block"
    startSection.style.display = "block"
    rewardSection.style.display = "block"
    navbar.style.display = "block"
    const userName = sessionStorage.getItem('keyUsername')
    title.textContent = `Hello ${userName} !`
    nameAndToken.textContent= `${userName} (Session Token : ${token})`  
    location.href="#start"
    // setTimeout(function() {
    //   location.href="#start"
    // }, 500)
  }

  get logout() {
    sessionStorage.removeItem('keyToken')
    sessionStorage.removeItem('keyUsername')
    location.reload()
  }

}