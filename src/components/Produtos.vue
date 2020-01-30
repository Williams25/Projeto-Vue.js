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
          titulo: "Lorem Ipsum 1",
          texto:
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Lorem Ipsum 2",
          texto:
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Lorem Ipsum 3",
          texto:
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Lorem Ipsum 4",
          texto:
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Lorem Ipsum 5",
          texto:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, esse animi vitae cumque sint sit."
        },
        {
          urls: require("../assets/logo.png"),
          titulo: "Lorem Ipsum 6",
          texto:
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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