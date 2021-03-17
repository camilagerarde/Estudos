<template>
  <div>
    <v-alert
      border="left"
      elevation="4"
      :color="getColorItem"
      colored-border
      dense
    >
      <v-row>
        <v-col cols="10">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  v-model="todo.completed"
                  :input-value="active"
                  color="secondary"
                  :true-value="todo.completed"
                >
                </v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-subtitle
                  :class="[todo.completed ? 'completed-todo' : '']"
                >
                  {{ todo.description }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-col>
        <v-col cols="2" align="center" justify="center">
          <v-btn icon color="secondary" @click="removeTodo">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>
<style scoped>
.completed-todo {
  text-decoration: line-through;
}
</style>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import Todo from "@/models/todo";
import { Criticality } from "@/config/enum/criticality";

@Component({})
export default class TodoItem extends Vue {
  @Prop()
  public todo!: Todo;

  private get getColorItem(): string {
    const [cool, medium] = Object.keys(Criticality);
    return this.todo.criticality === cool
      ? "green"
      : this.todo.criticality === medium
      ? "warning"
      : "red";
  }
  private removeTodo(): void {
    this.$emit("removeTodo", this.todo);
  }
}
</script>
