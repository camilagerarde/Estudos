import {
  VuexModule,
  Mutation,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store";
import Todo from "@/models/todo";

@Module({
  namespaced: true,
  name: "todo",
  store,
  dynamic: true
})
export class TodoModule extends VuexModule {
  private todos: Todo[] = [];

  public get getTodos() {
    return this.todos;
  }

  @Mutation
  public setTodos(todos: Todo[]) {
    this.todos = todos;
  }
}

export default getModule(TodoModule);
