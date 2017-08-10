import React from "react";
import ReactDOM from "react-dom";

/**
 * A custom HTMLElement to render react components.
 */
class _ReactHTMLElement extends HTMLElement {
  constructor() {
    super();
  }

  setReactElement(reactElement) {
    this._reactElement = reactElement;
  }

  attachedCallback() {
    if (!this._reactElement) {
      return;
    }
    ReactDOM.render(this._reactElement, this);
  }

  detachedCallback() {
    if (!this._reactElement) {
      return;
    }
    ReactDOM.unmountComponentAtNode(this);
  }
}

export const ReactHTMLElement = document.registerElement("react-html-element", {
  prototype: _ReactHTMLElement.prototype
});

export function wrapHtmlElement(reactElement) {
  const htmlElement = new ReactHTMLElement();
  htmlElement.setReactElement(reactElement);
  return htmlElement;
}
