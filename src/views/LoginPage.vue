<template>
  <div style="background: teal; height: 100vh; padding-top: 5rem">
    <div class="container" id="container">
      <div class="toggle-container">
        <div class="toggle">
          <div class="box">
            <div>
              <span style="--i: 1"></span>
              <span style="--i: 2"></span>
              <span style="--i: 3"></span>
              <span style="--i: 4"></span>
              <span style="--i: 5"></span>
              <span style="--i: 6"></span>
              <span style="--i: 7"></span>
              <span style="--i: 8"></span>
              <span style="--i: 9"></span>
              <span style="--i: 10"></span>
              <span style="--i: 11"></span>
              <span style="--i: 12"></span>
              <span style="--i: 13"></span>
              <span style="--i: 14"></span>
              <span style="--i: 15"></span>
              <span style="--i: 16"></span>
              <span style="--i: 17"></span>
              <span style="--i: 18"></span>
              <span style="--i: 19"></span>
              <span style="--i: 20"></span>
              <span style="--i: 21"></span>
              <span style="--i: 22"></span>
              <span style="--i: 23"></span>
              <span style="--i: 24"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="form-container sign-in">
        <form @submit.prevent="handleLogin">
          <h1>Login</h1>
          <span></span>
          <input type="text" placeholder="Noreg" v-model="username" required />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
          <button type="submit">Login</button>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </div>

  <!-- <div class="login">
    <h1>Login</h1>
      <div>
        <label for="username">Username:</label>
      </div>
      <div>
        <label for="password">Password:</label>
      </div>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div> -->
</template>

<script>
import { gsap } from 'gsap'
import TweenMax from 'gsap/gsap-core'
import Expo from 'gsap/gsap-core'
import Quad from 'gsap/gsap-core'

export default {
  name: 'login',
  components: {},
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    handleLogin() {
      // Simulasi login, ganti dengan logika autentikasi yang sesuai
      const validUsername = 'toyota'
      const validPassword = 'admin123'

      if (this.username === validUsername && this.password === validPassword) {
        // Simpan user ID ke local storage (ganti dengan ID yang sesuai)
        localStorage.setItem('userId', '12345')
        this.$router.push({ name: 'home', params: { id: validUsername } }) // Redirect ke halaman Home
      } else {
        this.errorMessage = 'Username atau password salah!'
      }
    },
  },
}
</script>

<style scoped>
/* colors */
/* #217093: #217093;
#4eb8dd: #4eb8dd;
$lightBlue: #ddf1fa;
#f3fafd: #f3fafd; */

html {
  width: 100%;
  height: 100%;
}
body {
  background-color: #eff3f4;
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px transparent;
  border-radius: 0.5em;
  font-family: 'Source Sans Pro', sans-serif;
  .svgContainer {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 1em;
    border-radius: 50%;
    background: none;
    border: solid 2.5px transparent;
    overflow: hidden;
    pointer-events: none;
    div {
      position: relative;
      width: 100%;
      height: 0;
      overflow: hidden;
      padding-bottom: 100%;
    }
    .mySVG {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
  .inputGroup {
    margin: 0 0 2em;
    padding: 0;
    position: relative;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  label {
    margin: 0 0 12px;
    display: block;
    font-size: 1.25em;
    color: #217093;
    font-weight: 700;
    font-family: inherit;
  }
  input[type='email'],
  input[type='text'],
  input[type='password'] {
    display: block;
    margin: 0;
    padding: 0 1em 0;
    background-color: #f3fafd;
    border: solid 2px #217093;
    border-radius: 4px;
    /* -webkit-appearance: none; */
    box-sizing: border-box;
    width: 100%;
    height: 65px;
    font-size: 1.55em;
    color: #353538;
    font-weight: 600;
    font-family: inherit;
    transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
    &:focus {
      outline: none;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      border: solid 2px #4eb8dd;
    }
  }
  input[type='email'],
  input[type='text'] {
    padding: 14px 1em 0px;
  }
  button {
    display: block;
    margin: 0;
    padding: 0.65em 1em 1em;
    background-color: #4eb8dd;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: none;
    width: 100%;
    height: 65px;
    font-size: 1.55em;
    color: #fff;
    font-weight: 600;
    font-family: inherit;
    transition: background-color 0.2s ease-out;
    &:hover,
    &:active {
      background-color: #217093;
    }
  }

  .inputGroup1 {
    .helper {
      position: absolute;
      z-index: 1;
      font-family: inherit;
    }
    .helper1 {
      top: 0;
      left: 0;
      transform: translate(1.4em, 2.6em) scale(1);
      transform-origin: 0 0;
      color: #217093;
      font-size: 1.25em;
      font-weight: 400;
      opacity: 0.65;
      pointer-events: none;
      transition: transform 0.2s ease-out, opacity 0.2s linear;
    }

    &.focusWithText .helper {
      /*input[type='email']:focus + .helper {*/
      transform: translate(1.4em, 2em) scale(0.65);
      opacity: 1;
    }
  }
}
.error {
  color: red;
}

.container {
  /* From https://css.glass */
  background: transparent;
  border-radius: 30px;
  border-top-left-radius: 150px;
  border-bottom-left-radius: 0px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 800px;
  max-width: 100%;
  min-height: 480px;
}

.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  /* From https://css.glass */
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  border-color: transparent;
}

.sign-in {
  right: 0;
  width: 40%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid transparent;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 60%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 150px;
  z-index: 1000;
  border-color: transparent;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  height: 100%;

  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #333;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  position: relative;
  width: 100%;
  height: 350px;
  transform-style: preserve-3d;
}

.box div {
  position: absolute;
  top: 80px;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: animate 24s linear infinite;
}

.box div span {
  position: absolute;
  top: 10PX;
  left: 230px;
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transform: rotateX(calc(var(--i) * 15deg));
}

.box div span:before {
  content: 'LOGISPLAY';
  position: absolute;
  width: 100%;
  color: #fffe;
  text-transform: uppercase;
  font-size: 5em;
  height: 50px;
  text-align: center;
  font-weight: 800;
  -webkit-text-stroke: 2px #000;
  text-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.box div span:nth-child(3n + 2)::before {
  color: #e3f2fddd;
}

.box div span:nth-child(3n + 3)::before {
  color: #fce4ecdd;
}

@keyframes animate {
  0% {
    transform: perspective(1000px) rotateX(0deg);
  }

  100% {
    transform: perspective(1000px) rotateX(360deg);
  }
}
</style>
