<template>
  <header class="container_menu">
    <nav class="menu_itens" id="topo">
      <div class="logo_menu">
        <router-link class="rota_img" to="/">
          <img src="../assets/logo.png" alt="Logo" />
        </router-link>
      </div>
      <!-- BURGUER -->
      <span class="open-slide">
        <a style="cursor: pointer;" @click="openSlideMenu" v-show="burguer">
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
            <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
            <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
          </svg>
        </a>
      </span>

      <div id="side-menu" class="side-nav" v-show="openBurguer">
        <i class="btn-close" @click="closeSlideMenu">&times;</i>
        <ul>
          <li :key="menu.item" v-for="menu in menu">
            <a :href="menu.rota" @click="closeSlideMenu">{{menu.item}}</a>
          </li>
        </ul>
      </div>
      <!-- FIM BURGUER -->

      <ul class="lista_menu">
        <li :key="menu.item" v-for="menu in menu">
          <a :href="menu.rota">{{menu.item}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      openBurguer: false,
      burguer: true,
      menu: [
        {
          item: "Inicio",
          rota: "/"
        },
        {
          item: "Produto",
          rota: "#produto"
        },
        {
          item: "Sobre",
          rota: "#sobre"
        },
        {
          item: "Carreira",
          rota: "#carreira"
        },
        {
          item: "Contato",
          rota: "#contato"
        },
        {
          item: "Cliente",
          rota: "/"
        },
        {
          item: "Central",
          rota: "/about"
        }
      ]
    };
  },
  methods: {
    openSlideMenu() {
      this.openBurguer = true;
      this.burguer = false;
    },
    closeSlideMenu() {
      this.openBurguer = false;
      this.burguer = true;
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
.container_menu {
  background: url("../assets/fundo (2).jpg");
  background-size: cover;
  width: 100%;
  height: 350px;
}
.menu_itens {
  width: 100%;
  height: 150px;
  display: flex;
  flex-wrap: nowrap;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 0 gold, 0 0 1em rgba(0, 0, 0, 0.9);
  z-index: 9999;
}
.logo_menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
}
.rota_img {
  cursor: auto;
}
.logo_menu .rota_img img {
  width: 80%;
  padding: 8%;
  margin-left: 10%;
  cursor: pointer;
}
.lista_menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.lista_menu li {
  display: inline;
  list-style: none;
  font-size: 1.3rem;
  padding: 2%;
}
.lista_menu li a:hover {
  transition: 0.8s;
  color: gold;
}

/* BURGUER */
i {
  cursor: pointer;
  color: #fff;
}
#side-menu {
  display: none;
}
.open-slide {
  display: none;
}
.side-nav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  background-color: #111;
  opacity: 0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
}
.side-nav a {
  padding: 10px 10px 10px 70px;
  text-decoration: none;
  font-size: 1.6rem;
  color: #fff;
  display: block;
  transition: 0.3s;
}
.navbar-nav a {
  padding: 15px;
}
.side-nav a:hover {
  color: #fff;
}
.side-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}

@media (max-width: 860px) {
  .open-slide {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 30%;
    margin-right: 2rem;
  }
  #side-menu {
    display: block;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 1rem;
    width: 15rem;
    height: auto;
  }
  .side-nav a:hover {
    transition: 1s;
    color: gold;
  }
  .side-nav ul{
    padding-bottom: 10%;
  }
  .lista_menu {
    display: none;
  }
  /* BURGUER */
  .logo_menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    height: 100px;
  }
  .logo_menu .rota_img img {
    margin-top: 30%;
    width: 100%;
    height: 150px;
  }
}
</style>
