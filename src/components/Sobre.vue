<template>
  <section class="container_sobre">
    <div class="sobre_item">
      <div class="img_sobre">
        <img src="../assets/sobre.jpg" alt />
      </div>
      <p>
        A Focus Desenvolvimento é uma empresa focada em desenvolvimento de softwaes de gestão pública, que atua no mercado há 10 anos, oferecendo produtos e serviços de qualidade. Atualmente, seus sistemas são utilizados em diversos setores da área pública do Brasil. A Focus possui um grande diferencial das outras empresas de desenvolvimento: capacidade de atender às necessidades de seus clientes no prazo requerido.
        A equipe de desenvolvimento conta com profissionais altamente qualificados, o que garante soluções sólidas que não demandam de grandes manutenções, facilitando o dia-a-dia de trabalho na esfera pública. Além de uma equipe de suporte para auxilio de clientes e suas dúvidas em relação à utilização dos sistemas.
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
.img_sobre img {
  width: 95%;
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