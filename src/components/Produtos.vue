<template>
  <section class="container_p produto">
    <div class="item_produto" :key="img.urls" v-for="img in images">
      <div class="img_produto">
        <img :src="img.urls" alt />
      </div>
      <h3>{{img.titulo}}</h3>
      <p>{{img.texto}}</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          urls: require("../assets/logo.png"),
          titulo: "app",
          texto:
            " O aplicativo móvel (Cartão Cidadão) é o " +
            "melhor opção para entrar em contato diretamente com o cidadão e verificar informações que o ajudarão no seu dia-a-dia." +
            " Aplicativos disponiveis na  Play Store"
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Educação",
          texto:
            " O Sistema Educação interage com todos os" +
            " Sistemas Focus, gerenciando todo o Sistema de Educação dos Municipíos."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Farmácia",
          texto:
            "O Sistema Farmácia garante o gerenciar todas as Unidades e Centros de Custo municipais com eficiência e agilidade."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Saúde",
          texto:
            " O Sistema Saúde auxilia o gerenciamento de toda à área de saúde das prefeituras sobre seus cidadãos. Possui integridade com todos os outros " +
            "sistemas FOCUS(Farmácia, Vacina, Social, Educação, Mobile)."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Social",
          texto:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, esse animi vitae cumque sint sit."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Vacina",
          texto:
            " O Sistema Vacina foi desenvolvido para trabalhar com os Sistemas Saúde e Farmácia com o proprósito de melhorar a gestão da saúde municipal."
        }
      ]
    };
  }
};
</script>
<style scoped>
h3 {
  font-family: "Courier New", Courier, monospace;
  color: #192a56;
  text-transform: uppercase;
}

p {
  font-family: sans-serif;
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  line-height: 20px;
}
span {
  font-weight: bolder;
  color: rgb(228, 137, 19);
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