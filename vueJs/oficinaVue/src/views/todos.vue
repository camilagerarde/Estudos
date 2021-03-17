<template>
  <v-container id="todos">
    <section id="new-todo">
      <v-row>
        <v-col cols="12">
          <h4>Hi {{ name }}!</h4>
          <br />
          <v-form ref="form" v-model="formValid">
            <v-col cols="12">
              <v-text-field
                v-model="todo.description"
                label="todo desciption"
                outlined
                :rules="[v => !!v || 'Description is required']"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3">
              <v-select
                v-model="todo.criticality"
                :items="criticalities"
                label="Select a criticity"
                :rules="[v => !!v || 'Criticity is required']"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-btn
                color="primary"
                outlined
                :disabled="!formValid"
                @click="createTodo"
              >
                Create
              </v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div id="list-todos">
        <v-list subheader flat>
          <v-subheader>Todo List</v-subheader>
          <v-list-item-group multiple>
            <todo-item
              v-for="(todo, i) in todos"
              :key="i"
              :todo="todo"
              @removeTodo="removeTodo"
            />
          </v-list-item-group>
        </v-list>
      </div>
    </section>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Todo from "@/models/todo";
import { Criticality } from "@/config/enum/criticality";
import todoItem from "@/components/todos/todoItem.vue";
import axios from "axios";
import vxm from "@/store/modules.ts";

@Component({
  components: {
    todoItem
  }
})
export default class Todos extends Vue {
  private readonly urlBase = "http://localhost:3333/api";
  private formValid = true;
  private name = "";
  private todo = new Todo();
  private todos: Todo[] = [];
  private criticalities = Object.keys(Criticality);

  public async created() {
    this.name = this.$route.query.name as string;

    // const todos = (await axios.get(`${this.urlBase}/todos`)).data.data;
    // this.todos.push(...todos);
    // vxm.todos.setTodos(this.todos)

    axios.get(`${this.urlBase}/todos`).then(todos => {
      this.todos = todos.data.data;
      vxm.todos.setTodos(this.todos);
    });
  }
  private createTodo(): void {
    this.todos.push(this.todo);
    this.todo = new Todo();
    (this.$refs.form as any).reset();
  }
  private removeTodo(todoSelected: Todo): void {
    this.todos = this.todos.filter(todo => todo !== todoSelected);
  }
}
</script>
