import { createActions } from "redux-actions";
import api from "../api";

export default createActions({
  CALL_API: api.atom.callApi,
  SHOW_MODAL: api.atom.showModal,
  HIDE_MODAL: api.atom.hideModal
});
