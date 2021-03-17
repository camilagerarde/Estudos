import { Criticality } from "@/config/enum/criticality";

export default class Todo {
  public description!: string;
  public criticality!: Criticality;
  public completed = false;
}
