import React from "react";
import { register } from "../atom/AtomUriRegistry";
import { connect } from "react-redux";
import Actions from "../actions";
import { uri as rightPanelUri } from "./AtomRightPanel";
import { uri as bottomPanelUri } from "./AtomBottomPanel";
import { uri as centerPanelUri } from "./AtomCenterPanel";
import { uri as modalPanelUri } from "./AtomModalPanel";

class _AtomLeftPanel extends React.Component {
  render() {
    return (
      <div className="panel padded">
        <div className="text-info">This is a sample left panel</div>
        <div>
          <label className="input-label padded">
            <input
              className="input-toggle"
              type="checkbox"
              onChange={() => this.props.toggleView(centerPanelUri)}
            />Toggle Center Panel
          </label>
          <label className="input-label padded">
            <input
              className="input-toggle"
              type="checkbox"
              onChange={() => this.props.toggleView(bottomPanelUri)}
            />Toggle Bottom Panel
          </label>
          <label className="input-label padded">
            <input
              className="input-toggle"
              type="checkbox"
              onChange={() => this.props.toggleView(rightPanelUri)}
            />Toggle Right Panel
          </label>
          <label className="input-label padded">
            <button
              className="btn"
              onClick={() => this.props.showModal(modalPanelUri)}
            >
              Show Modal Panel
            </button>
          </label>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    views: state.views
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleView: uri => dispatch(Actions.atom.callApi("workspace.toggle", uri)),
    showModal: uri => dispatch(Actions.atom.showModal(uri))
  };
}

const AtomLeftPanel = connect(mapStateToProps, mapDispatchToProps)(
  _AtomLeftPanel
);

export const uri = "atom-react-redux://left-panel";
export const AtomLeftPanelItem = register(AtomLeftPanel, {
  uri,
  title: "AtomLeftPanel",
  iconName: "",
  defaultLocation: "left"
});
