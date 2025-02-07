<template>
  <nav class="navbar">
    <div class="logo d-flex">
      <div>
        <img src="@/assets/images/logis2.png" alt="" />
      </div>
      <div>
        <pre>
          Logistic Integrated
          Smart Display
        </pre>
      </div>
    </div>

    <img
      style="filter: invert(100%); height: 50px"
      src="@/assets/icons/circle-1.png"
      alt="img"
      class="user-pic"
      @click="toggleMenu"
    />
    <div class="sub-menu-wrap" id="subMenu">
      <div class="sub-menu">
        <div class="uer-info">
          <img
            style="height: 50px"
            src="@/assets/icons/circle-1.png"
            alt="img"
          />
          <h1>{{ userName }}</h1>

          <hr />

          <h1>Info User</h1>
          <h1 @click="logout">logout</h1>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { CIcon } from '@coreui/icons-vue'
import img from '@/assets/icons/circle-1.png'
import * as icon from '@coreui/icons'
export default {
  name: 'NavBar',
  components: {
    CIcon,
  },
  props: {
    userName: String,
    logout: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      cilUser: icon.cilUser,
    }
  },

  methods: {
    toggleMenu() {
      const subMenu = document.getElementById('subMenu')
      subMenu.classList.toggle('open-menu')
    },
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);

  padding: 5px 30px;
  font-weight: 400;
  font-style: bold;
}

.logo div pre {
  color: #ecf0f1;
  font-size: 16px;
  font-weight: 900;
  text-align: left;
  transform: translateX(-90px);
  height: 50px;
  overflow: hidden;
}
.logo img {
  height: 50px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 10px;
  overflow: hidden;
  text-align: center;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: #ecf0f1;
  font-size: 18px;
  transition: color 0.3s;
}

.nav-links a:hover,
.logo:hover {
  color: #3498db;
}
nav ul {
  width: 100%;
  text-align: right;
}

nav ul li {
  display: inline-block;
  list-style: none;
  margin: 10px 20px;
  color: white;
}

.user-pic {
  cursor: pointer;
  filter: invert(100%);
}
.sub-menu-wrap {
  position: absolute;
  top: 85%;
  right: 0%;
  width: 320px;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.sub-menu-wrap.open-menu {
  max-height: 400px;
}
.sub-menu {
  border-radius: 20px;
  background-color: #fff;
  padding: 15px;
  margin: 0px;
}

.uer-info h1:hover {
  color: white;
}

.uer-info img {
  height: 10px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>
