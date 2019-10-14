<template>
  <header class="container_menu">
    <nav class="menu_itens">
      <div class="logo_menu">
        <router-link class="rota_img" to="/">
          <img src="../assets/logo.png" alt="Logo" />
        </router-link>
      </div>
      <ul class="lista_menu">
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <a href="#produto">Produto</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#carreira">Carreira</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <router-link to="/">Cliente</router-link>
        </li>
        <li>
          <router-link to="/">Central</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
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
}
.logo_menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
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
  width: 80%;
}
.lista_menu li {
  display: inline;
  list-style: none;
  font-size: 1.2rem;
  padding: 2%;
}
.lista_menu li a:hover {
  transition: 0.8s;
  color: gold;
}
@media (max-width: 860px) {
  .lista_menu {
    display: none;
  }
  .logo_menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    height: 100px;
  }
  .logo_menu .rota_img img {
    margin-top: 10%;
    width: 80%;
    height: 150px;
  }
}
</style>
