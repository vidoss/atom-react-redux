import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise";
import reducers from "../reducers";
import { Provider } from "react-redux";
import { wrapHtmlElement } from "./ReactHTMLElement";

let store = null; // redux store

class AtomItem {
  constructor(Component, { uri, title, iconName, defaultLocation }) {
    this.uri = uri;
    this.title = title;
    this.iconName = iconName;
    this.defaultLocation = defaultLocation;
    this.Component = Component;
  }

  getTitle = () => {
    return this.title;
  };

  getIconName = () => {
    return this.iconName;
  };

  getDefaultLocation = () => {
    return this.defaultLocation;
  };

  getURI = () => {
    return this.uri;
  };

  getElement = () => {
    const { Component } = this;
    return wrapHtmlElement(
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
}

const uriRegistry = {};
export function register(Component, options) {
  const { uri } = options;
  if (uriRegistry[uri]) {
    throw new Error(
      "Component with the same uri already registered",
      uriRegistry[uri].getTitle()
    );
  }
  const item = new AtomItem(Component, options);
  uriRegistry[uri] = item;
  return item;
}

export function initStore(initialState) {
  if (store) {
    return store;
  }
  const reducer = combineReducers(reducers);

  const finalCreateStore = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware,
    logger
  )(createStore);
  store = finalCreateStore(reducer, initialState || {});
  return store;
}

export function handleWorkspaceOpener(uri) {
  return uriRegistry[uri];
}
