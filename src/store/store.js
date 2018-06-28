import { observable, action } from "mobx";

class AppStore {
    @observable name = "baidu";
    @observable num = 1;

    @action
    changeNum(num) {
        this.num = num;
    }

    @action
    chageBaseName(name) {
        this.name = name;
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
