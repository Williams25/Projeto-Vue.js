<template>
  <section class="container">
    <div class="map_contato">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.51826594513!2d-48.50430708500047!3d-21.408864835793693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de6c8a35325ad0d!2sFocus!5e0!3m2!1spt-BR!2sbr!4v1571081199240!5m2!1spt-BR!2sbr"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
      ></iframe>
    </div>
    <v-row class="form" align="center" justify="center">
      <v-col cols sm md>
        
        <v-card class="elevation-12 shadow">
         <v-toolbar dark flat>
            <v-toolbar-title color="#000">Entre em contato para duvidas ou sujestões</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field id="email" label="Email" name="email" type="email" v-model="nome"></v-text-field>

              <v-col cols="12" md="6">
                <v-textarea
                  outlined
                  name="input-7-4"
                  label="Duvidas ou sujestões"
                  v-model="duvidas"
                ></v-textarea>
              </v-col>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-col cols="6" sm="1">
              <v-btn dark @click="enviaDados">Enviar</v-btn>

              <v-snackbar v-model="snackbar" :multi-line="multiLine">
                <p>{{ text }}</p>
              </v-snackbar>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div class="contato_t">
      <div class="item_contato">
        <h3>Telefones para contato</h3>
        <p>(16) 3253-5592</p>
        <p>(16) 99196-3192</p>
      </div>
      <hr>
      <div class="item_contato">
        <h3>Email para contato</h3>
        <p>suporte@focussp.com.br</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: "",
    drawer: null,
    nome: "",
    duvidas: ""
  }),
  methods: {
    enviaDados() {
      if (
        this.nome != "" &&
        this.nome != null &&
        this.duvidas != "" &&
        this.duvidas != null
      ) {
        this.snackbar = true;
        this.text = "Enviado com sucesso";

        this.nome = this.duvidas = "";
      } else {
        this.snackbar = true;
        this.text = "Preencha os campos corretamentes!";
      }
    }
  }
};
</script>
<style scoped>
hr{
  width: 0.7px;
  box-shadow: inset 0 0 0 gold, 0 0 2px rgba(0, 0, 0, 0.9);
}
.container {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
}
.map_contato,
iframe {
  margin-top: 3%;
  border-radius: 10px 10px 10px 10px;
  width: 100%;
}
.shadow {
  margin-top: 4%;
  transition: 0.4s;
  box-shadow: inset 0 0 0 gold, 0 0 2px rgba(0, 0, 0, 0.9);
}
.contato_t {
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  flex-flow: row wrap;
  width: 100%;
  margin-top: 3%;
}
.item_contato {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: auto;
  padding: 1%;
}
.item_contato p{
  padding: 10px;
  font-size: 1.2em;
  line-height: 1.5rem;
  text-align: justify;
}
</style>