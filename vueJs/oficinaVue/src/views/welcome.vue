<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" sm="8" align="center" justify="center">
        <v-form @submit.prevent="">
          <h1>TODO LIST</h1>
          <v-col cols="12">
            <v-text-field
              outlined
              v-model="name"
              :rules="[v => !!v || 'Name is required']"
              counter="10"
              label="Your name"
              required
            ></v-text-field>
          </v-col>
          <v-btn
            outlined
            color="primary"
            type="submit"
            :disabled="!name"
            @click="goToTodos"
          >
            Go
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Welcome extends Vue {
  private name = "";
  private goToTodos(): void {
    this.$router.push({ path: "/todos", query: { name: this.name } });
  }
}
</script>
