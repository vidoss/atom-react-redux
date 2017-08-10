import { CompositeDisposable } from "atom";
import { handleWorkspaceOpener, initStore } from "../src/atom/AtomUriRegistry";
import { uri as LeftPaneUri } from "../src/containers/AtomLeftPanel";
import Actions from "../src/actions";

// Use of commonjs module.exports syntax is intentional.
// Atom expect the main module to be exposed this way.
module.exports = {
  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        "atom-react-redux:toggle": () => this.toggle()
      })
    );

    // Handler for URI openers
    this.subscriptions.add(atom.workspace.addOpener(handleWorkspaceOpener));

    // Init redux store
    this.store = initStore(state);
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    // Make sure your redux store only has plain JS object.
    // If you use Immutable.js or objects with functions,
    // serialize here and deserialize in activate()
    return this.store ? this.store.getState() : {};
  },

  toggle() {
    this.store.dispatch(Actions.atom.callApi("workspace.toggle", LeftPaneUri));
  }
};
