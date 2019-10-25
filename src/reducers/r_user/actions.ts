import { USER_CHANGE_NAME } from "./actionTypes"
import { USER_CHANGE_ROLE } from "./actionTypes"

const changeName = () => {
  return {
    type: USER_CHANGE_NAME
  }
}


const changeRole = (reload:string) => {
  return {
    type: USER_CHANGE_ROLE,
    reload
  }
}

export { changeName, changeRole }
