class HelloWorld extends WC {
  get isShadow() {
    return true;
  }

  get style() {
    return `
        h1 {
          color: #222;
          font-weight: 100;
        }
    `;
  }

  get template() {
    return `${super.insertStyle()} <h1>Hello Web Components!</h1>`;
  }
}

customElements.define('hello-world', HelloWorld);
