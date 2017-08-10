import React from "react";
import { register } from "../atom/AtomUriRegistry";
import { connect } from "react-redux";
import Actions from "../actions";

export const uri = "atom-react-redux://modal-panel";

class _AtomModalPanel extends React.Component {
  render() {
    return (
      <div className="panel padded">
        <div className="text-info padded">
          This is a sample modal panel. pl Esc or click outside to cancel
        </div>
        <div className="padded">
          <button className="btn" onClick={() => this.props.hideModal()}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal: () => dispatch(Actions.atom.hideModal(uri))
  };
}

const AtomModalPanel = connect(null, mapDispatchToProps)(_AtomModalPanel);

export const AtomModalPanelItem = register(AtomModalPanel, {
  uri,
  title: "AtomModalPanel",
  iconName: "",
  defaultLocation: "modal"
});
