class WC extends HTMLElement {
  constructor() {
    super();
    console.info('constructor', this);
  }

  connectedCallback() {
    console.info('connectedCallback', this);
  }

  disconnectedCallback() {
    console.info('disconnectedCallback', this);
  }

  attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
    console.info('attributeChangedCallback', this);
  }

  adoptedCallback() {
    console.info('adoptedCallback', this);
  }
}

