import React from "react";
import { register } from "../atom/AtomUriRegistry";

class AtomCenterPanel extends React.Component {
  render() {
    return (
      <div className="panel padded">
        <div className="text-info">This is a sample center panel</div>
      </div>
    );
  }
}

export const uri = "atom-react-redux://center-panel";
export const AtomCenterPanelItem = register(AtomCenterPanel, {
  uri,
  title: "AtomCenterPanel",
  iconName: "",
  defaultLocation: "center"
});
