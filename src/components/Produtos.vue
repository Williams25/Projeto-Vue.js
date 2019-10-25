<template>
  <div>
    <section class="container_p produto">
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>app</h3>
          <p>
         O aplicativo móvel (Cartão Cidadão) é o melhor opção para entrar em contato diretamente com o cidadão e verificar informações que o ajudarão no seu dia-a-dia.
         Aplicativos disponiveis na <span> Play Store</span>
        </p>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>educação</h3>
        <p>
          O Sistema Educação interage com todos os <span>Sistemas Focus</span> , gerenciando todo o Sistema de Educação dos Municipíos. 
        </p>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/saude.png" alt />
        </div>
        <h3>farmácia</h3>
        <p>
          O Sistema Farmácia garante o gerenciar todas as Unidades e Centros de Custo municipais com eficiência e agilidade. 
        </p>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/saude.png" alt />
        </div>
        <h3>saúde</h3>
        <p>
          O Sistema Saúde auxilia o gerenciamento de toda à área de saúde das prefeituras sobre seus cidadãos. Possui integridade com todos os outros <span>sistemas FOCUS </span>(Farmácia, Vacina, Social, Educação, Mobile).
       </p>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>social</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, esse animi vitae cumque sint sit illum dolorum natus delectus, quo excepturi unde sequi tempore minus nesciunt molestiae incidunt doloremque nobis?</p>
      </div>
      <div class="item_produto">
        <div class="img_produto">
          <img src="../assets/logo.png" alt />
        </div>
        <h3>vacina</h3>
        <p>
          O Sistema Vacina foi desenvolvido para trabalhar com os Sistemas Saúde e Farmácia com o proprósito de melhorar a gestão da saúde municipal. 
          </p>
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

p{
  font-family: sans-serif;
  font-size: 1rem;
  text-align:center;
  padding: 10px;
  line-height: 20px;
}
span{
  font-weight: bolder;
  color:rgb(228, 137, 19);
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
  width: 300px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  margin: 3%;
  padding: 1%;
}
.item_produto img {
  width: 100%;
  height: 90%;
  padding: 1%;
}
.item_produto:hover {
  transition: 0.4s;
  box-shadow: inset 0 0 0 gold, 0 0 2px rgba(0, 0, 0, 0.9);
}
</style>