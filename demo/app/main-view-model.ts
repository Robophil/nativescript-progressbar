import { Observable } from "data/observable";

export class HelloWorldModel extends Observable {
  public counter = 42;

  constructor() {
    super()
    this.counter = 42;
    this.set("message", this.counter + " taps left");
    this.set("progress", 10);
  }

  tapAction = function () {
    this.counter--;
    if (this.counter <= 0) {
      this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    }
    else {
      this.set("progress", this.progress+5);
      this.set("message", this.counter + " taps left");
    }
  };
}

export const mainViewModel = new HelloWorldModel()