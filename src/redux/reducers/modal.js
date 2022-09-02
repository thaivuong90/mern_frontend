import { INIT_STATE } from "../../constants";

export default function modalReducer(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case "SHOW_CREATE_POST_MODAL":
      return {
        isShow: true,
      };
    case "HIDE_CREATE_POST_MODAL":
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
