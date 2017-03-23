class WC extends HTMLElement {

  constructor() {
    super();
    console.info('constructor', this);
  }

  get template() {
    return '';
  }

  connectedCallback() {
    console.info('connectedCallback', this);
    this.render();
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

  render() {
    this.innerHTML = this.template;
  }
}

