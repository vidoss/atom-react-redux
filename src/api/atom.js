import { CompositeDisposable, Disposable } from "atom";

function callApi(api, ...args) {
  const path = api.split(".");
  const fn = path.pop();
  const ns = path.reduce((parent, ns) => (parent ? parent[ns] : null), atom);
  if (ns) {
    return ns[fn](...args);
  }
  return { error: true };
}

const hideMap = {};
function showModal(uri) {
  return atom.workspace.createItemForURI(uri).then(item => {
    const panel = atom.workspace.addModalPanel({ item });
    const disposables = new CompositeDisposable();
    const handleModalMousedown = ({ target }) =>
      target.classList.contains("overlay") && disposables.dispose();

    document.addEventListener("mousedown", handleModalMousedown);
    disposables.add(
      atom.commands.add("atom-workspace", "core:cancel", () =>
        disposables.dispose()
      )
    );
    disposables.add(
      new Disposable(() => {
        document.removeEventListener("mousedown", handleModalMousedown);
        panel.destroy();
      })
    );

    if (hideMap[uri]) {
      hideMap[uri]();
    }
    hideMap[uri] = () => disposables.dispose();
    return uri;
  });
}

function hideModal(uri) {
  if (hideMap[uri]) {
    hideMap[uri]();
  }
  delete hideMap[uri];
  return uri;
}

export default {
  callApi,
  showModal,
  hideModal
};
