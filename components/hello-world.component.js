class HelloWorld extends WC {
  static get observedAttributes() {
    return ['name'];
  }

  get template() {
    return `<h1>hello ${this.getAttribute('name')}</h1>`;
  }
}

customElements.define('hello-world', HelloWorld);
