import React from "react";
import { register } from "../atom/AtomUriRegistry";

class AtomBottomPanel extends React.Component {
  render() {
    return (
      <div className="panel padded">
        <div className="text-info">This is a sample bottom panel</div>
      </div>
    );
  }
}

export const uri = "atom-react-redux://bottom-panel";
export const AtomBottomPanelItem = register(AtomBottomPanel, {
  uri,
  title: "AtomBottomPanel",
  iconName: "",
  defaultLocation: "bottom"
});
