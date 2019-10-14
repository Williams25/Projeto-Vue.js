<template>
  <div>
    <section class="container_p produto">
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>app</h3>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>educação</h3>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>farmácia</h3>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>saúde</h3>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>social</h3>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>vacina</h3>
      </div>
    </section>
  </div>
</template>
<style scoped>
h3 {
  font-family: "Courier New", Courier, monospace;
  color: #192a56;
  text-transform: uppercase;
}
.container_p {
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  flex-flow: row wrap;
  width: 100%;
}
.item_produto {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin: 3%;
  padding: 1%;
}
.item_produto img {
  width: 100%;
  height: 250px;
  padding: 1%;
}
.item_produto:hover {
  transition: 0.4s;
  box-shadow: inset 0 0 0 gold, 0 0 2px rgba(0, 0, 0, 0.9);
}
</style>