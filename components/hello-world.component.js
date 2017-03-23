class HelloWorld extends WC {
  get template() {
    return '<h1>hello world</h1>';
  }
}

customElements.define('hello-world', HelloWorld);
