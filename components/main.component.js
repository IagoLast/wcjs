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
      <section home style="display:none">
        <h1> Home </h1>

        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>

      </section>
      <section about style="display:none">
        <h1> About </h1>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum about.  </p>
      </section>
      <section blog style="display:none">
        <h1> Blog </h1>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum blog.  </p>
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
