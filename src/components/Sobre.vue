<template>
  <section class="container_sobre">
    <div class="sobre_item">
      <div class="img_sobre">
        <img src="../assets/sobre.jpg" alt />
      </div>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  </section>
</template>
<style scoped>
section {
  /* background-color: #dfe4ea; */
  height: 100%;
  width: 50%;
}
.container_sobre {
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  flex-wrap: column wrap;
  width: 100%;
  /* background-color: #dcdde1;
  height: 50%; */
}

.sobre_item {
  display: flex;
  justify-content: center;
  flex-flow: row;
  flex-wrap: wrap;
  height: auto;
  /* padding-left: 50px; */
  margin-top: 4%;
}
p {
  padding: 10px;
  width: 40%;
  font-size: 1.2em;
  line-height: 1.5rem;
  text-align: justify;
}
span{
  color: #192a56;
  font-weight: bolder;
}
.img_sobre img {
  width: 100%;
  height: 350px;
  padding: 1%;
  border-radius: 23px;
}
@media (max-width: 1087px) {
  .sobre_item {
    width: 100%;
    height: auto;
  }
  .img_sobre {
    width: 100%;
    height: auto;
    padding: 1%;
    border-radius: 30px 30px 30px 30px;
  }
  .img_sobre img {
    width: 100%;
    height: 450px;
    background-size: cover;
  }
  .sobre_item p {
    padding: 10px;
    width: 100%;
  }
}
@media (max-width: 510px) {
  .img_sobre img {
    width: 100%;
    height: 250px;
  }
}
@media (max-width: 308px) {
  .img_sobre img {
    width: 100%;
    height: 150px;
  }
}
</style>