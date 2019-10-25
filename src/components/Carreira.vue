<template>
  <div class="container">
    <v-row class="form" align="center" justify="center">
      <v-col cols sm md>
        <div class="texto_c">
          <p>
            Venha fazer parte da
            <span>Equipe Focus</span>.
            Envie seu currículo e retornaremos em breve!
          </p>
        </div>
        <v-card class="elevation-12 shadow">
          <div class="form_c">
          <v-toolbar dark flat>
            <v-toolbar-title color="#000">Trabalhe conosco</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="Nome completo" name="nome" type="text" v-model="nome"></v-text-field>

                <v-text-field id="email" label="Email" name="email" type="email" v-model="email"></v-text-field>

                <v-file-input label="Selecione seu curriculo"></v-file-input>

                <v-col cols="12">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="Descreva sobre suas abilidades"
                    v-model="abilidade"
                  ></v-textarea>
                </v-col>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-col cols="12">
                <v-btn dark @click="enviaDados">Enviar</v-btn>

                <v-snackbar v-model="snackbar" :multi-line="multiLine">
                  <p>{{ text }}</p>
                </v-snackbar>
              </v-col>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
    email: "",
    abilidade: ""
  }),
  methods: {
    enviaDados() {
      if (
        this.nome != "" &&
        this.nome != null &&
        this.email != "" &&
        this.email != null
      ) {
        this.snackbar = true;
        this.text = "Curriculo enviado com sucesso!";
        this.nome = this.email = this.abilidade = "";
      } else {
        this.snackbar = true;
        this.text = "Preencha os campos corretamentes!";
      }
    }
  }
};
</script>
<style scoped>
.container{
  width: 100%;
}
.texto_c {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.2em;
  line-height: 1.5rem;
  text-align: justify;
}
.form {
  padding: 60px;
}
.shadow {
  margin-top: 7%;
}
.form_c {
  width: 100%;
}
</style>