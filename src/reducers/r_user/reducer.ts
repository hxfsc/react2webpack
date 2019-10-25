import { USER_CHANGE_NAME, USER_CHANGE_ROLE } from "./actionTypes"

const initalState: object = { name: "hxfsc", role: 0 }

const reducer = (state = initalState, action) => {
  const { type, reload } = action
  switch (type) {
    case USER_CHANGE_NAME:
      return Object.assign({}, state, { name: "Hu.Shihuan" })
    case USER_CHANGE_ROLE:
      return Object.assign({}, state, { role: reload })
    default:
      return state
  }
}

export { reducer }
