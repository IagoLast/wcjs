class WC extends HTMLElement {

  get template() {
    return '';
  }

  get isShadow() {
    return false;
  }

  set content(value) {
    let content = this.shadow || this;
    content.innerHTML = value;
  }

  get content() {
    let content = this.shadow || this;
    return content.innerHTML;
  }

  constructor() {
    super();
    console.info('constructor', this);
    if (this.isShadow) {
      this.shadow = this.attachShadow({
        mode: 'open'
      });
    }
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
    this.content = this.template;
  }
}

