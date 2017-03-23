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

  get initialState() {
    return {};
  }

  constructor() {
    super();
    console.info('constructor', this);
    if (this.isShadow) {
      this.shadow = this.attachShadow({
        mode: 'open'
      });
    }
    this.state = Object.freeze(this.initialState);
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
    this.render();
  }

  adoptedCallback() {
    console.info('adoptedCallback', this);
  }

  setState(state) {
    this.state = state;
    this.render();
  }

  render() {
    this.content = this.template;
  }
}

