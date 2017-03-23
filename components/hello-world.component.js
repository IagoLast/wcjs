class HelloWorld extends WC {
  constructor() {
    super();
  }

  get initialState() {
    return {
      name: 'world'
    }
  }

  get template() {
    return `<h1>hello ${this.state.name}</h1>`;
  }
}

customElements.define('hello-world', HelloWorld);
