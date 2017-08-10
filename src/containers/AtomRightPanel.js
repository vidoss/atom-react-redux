import React from "react";
import { register } from "../atom/AtomUriRegistry";

class AtomRightPanel extends React.Component {
  render() {
    return (
      <div className="panel padded">
        <div className="text-info">This is a sample right panel</div>
      </div>
    );
  }
}

export const uri = "atom-react-redux://right-panel";
export const AtomRightPanelItem = register(AtomRightPanel, {
  uri,
  title: "AtomRightPanel",
  iconName: "",
  defaultLocation: "right"
});
