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
      sessionStorage.setItem('keyDifficulty', "easy")
      registerForm.style.display = "none"
      logoutForm.style.display = "block"
      startSection.style.display = "block"
      rewardSection.style.display = "block"
      navbar.style.display = "block"

      //declare variable untuk manggil username dan token
      const displayUsername = sessionStorage.getItem('keyUsername')
      const displayToken = sessionStorage.getItem('keyToken')

      title.textContent = `Hello ${displayUsername} !`
      nameAndToken.textContent= `${displayUsername}(Session Token : ${displayToken})`
      setTimeout(function() {
        location.href="#start"
      }, 500)
    }
  
    get logout() {
      sessionStorage.removeItem('keyToken')
      sessionStorage.removeItem('keyUsername')
      sessionStorage.removeItem('keyDifficulty')
      location.reload()
    }
  
  }