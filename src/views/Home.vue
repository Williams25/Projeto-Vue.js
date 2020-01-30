<template>
  <div class="home">
    <app-topo />
    <section class="produt_h3" id="produto">
      <h2>Produtos</h2>
    </section>
    <hr />
    <app-produto />

    <section class="sobre_h3" id="sobre">
      <h2>Sobre</h2>
    </section>
    <hr />
    <app-sobre />

    <section class="carreira_h3" id="carreira">
      <h2>Carreira</h2>
    </section>
    <hr />
    <app-carreira />

    <section class="contato_h3" id="contato">
      <h2>Contato</h2>
    </section>
    <hr />
    <app-contato />
    
    <app-floatbutton />
    
    <app-footer />
  </div>
</template>
<style scoped>
h2 {
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  font-weight: 700;
  color: #192a56;
}
span {
  color: #192a56;
  font-weight: bolder;
}
.produt_h3,
.sobre_h3,
.contato_h3,
.carreira_h3 {
  display: flex;
  justify-content: center;
  padding: 2%;
}
.produt_h3 {
  margin-top: 4%;
}
</style>