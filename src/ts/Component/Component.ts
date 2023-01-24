import { type ComponentStructure } from "./types";

class Component implements ComponentStructure {
  element: Element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
    this.element.className = className;
  }
}

export default Component;
