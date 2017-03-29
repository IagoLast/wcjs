class Main extends WC {
  get isShadow() {
    return true;
  }

  get initialState() {
    return store.getState().main;
  }

  get style() {
    return `
      header {
        height: 55px;
        background: #3f51b5;
        color: white;
        display: flex;
        align-items: center;
        padding: 0 1em;
        text-transform: uppercase;
      }

      nav {
        height: 55px;
        background: #f9f9f9;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 15px;
      }

      section {
        padding: 15px;
      }

      nav button {
        background: none;
        border: none;
        font-size: 1em;
        cursor: pointer;
      }

      p {
        text-align: justify;
        color: #333;
      }
    `;
  }

  get template() {
    return `
      ${this.insertStyle()}
      <header> Web Components </header>
      <nav>
          <button onclick="(function(){document.querySelector('wc-drawer').open();})()">Show Drawer</button>
      </nav>
      <section clock style="display:none">
        <wc-clock></wc-clock>
      </section>
      <section binding style="display:none">
        <data-binding></data-binding>
      </section>
      <section filtering style="display:none">
        <list-filtering></list-filtering>
      </section>
    `;
  }

  constructor() {
    super();
    store.subscribe(this.mapState.bind(this));
  }

  mapState() {
    this.setState(store.getState().main);
  }

  render() {
    super.render();
    this.content.querySelector(`section[${this.state.title}]`).style.display = 'block';
  }
}

customElements.define('wc-main', Main);
