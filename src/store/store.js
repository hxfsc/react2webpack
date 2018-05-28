import { observable, action } from "mobx";

class AppStore {
  @observable name = "baidu";
  @observable num = 1;

  @action
  change() {
    this.name = "google"
  }

  @action
  changeNum(num) {
    console.log(num)
    this.num = num;
  }

}

const appStore = new AppStore();

export default appStore;
// const appStore = observable({
//   name: "baidu",
//   change: action(() => {
//     this.name = "google"
//   }).bind(this)
// })
