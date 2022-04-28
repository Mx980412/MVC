import EventBus from "./EventBus";

class Model extends EventBus {
  constructor(options) {
    super(); //调用EventBus#constructor()
    const keys = ["data", "update", "create", "delete", "get"];
    keys.forEach((key) => {
      if (key in options) {
        this[key] = options[key];
      }
    });
  }
  //增
  create() {
    console && console.error && console.error("你还没有实现 create");
  }
  //删
  delete() {
    console && console.error && console.error("你还没有实现 delete");
  }
  //改
  update() {
    console && console.error && console.error("你还没有实现 update");
  }
  //查
  get() {
    console && console.error && console.error("你还没有实现 get");
  }
}

export default Model;
