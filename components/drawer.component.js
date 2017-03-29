class WcDrawer extends WC {
  static get observedAttributes() {
    return ['class'];
  }

  get isShadow() {
    return true;
  }

  get initialState() {
    return store.getState().drawer;
  }

  get template() {
    return `
      ${this.insertStyle()}
      <header> Menu </header>
      <nav>
        <a clock href="#"> Clock </a>
        <a binding href="#"> Data Binding </a>
        <a filtering href="#"> List Filtering </a>
        <a href="/test.html"> Testing Example </a>

        <br>
        <a href="#"> Close </a>
      </nav>
    `;
  }

  get style() {
    return `
    :host {
      display: block;
      background: #f2f2f2;
      position: fixed;
      width: 320px;
      top: 0;
      left: -360px;
      bottom: 0;
      transition: .3s left;
      box-shadow: #9E9E9E 1px 0px 5px 0px;
    }

    :host(.visible) {
      left: 0;
    }

    header {
      height: 55px;
      color: white;
      background: #3f51b5;
      display: flex;
      align-items: center;
      padding: 0 1em;
      text-transform: uppercase;
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    nav a {
      padding: 1em;
      text-decoration: none;
    }
    `
  }

  constructor() {
    super();
    store.subscribe(this.mapState.bind(this));
  }

  mapState() {
    this.setState(store.getState().drawer);
  }

  render() {
    if (this.state.visible && !this.classList.contains('visible')) {
      this.classList.add('visible');
    }
    if (!this.state.visible && this.classList.contains('visible')) {
      this.classList.remove('visible');
    }
  }

  connectedCallback() {
    this.content = this.template;
    this.render();
    this.content.querySelector('a:last-child').addEventListener('click', this.close.bind(this));
    this.content.querySelector('a[clock]').addEventListener('click', () => {
      store.dispatch({
        type: 'CHANGE_TAB',
        value: 'clock'
      })
    });
    this.content.querySelector('a[binding]').addEventListener('click', () => {
      store.dispatch({
        type: 'CHANGE_TAB',
        value: 'binding'
      });
    });
    this.content.querySelector('a[filtering]').addEventListener('click', () => {
      store.dispatch({
        type: 'CHANGE_TAB',
        value: 'filtering'
      })
    });
  }

  close() {
    store.dispatch({
      type: 'HIDE_DRAWER'
    });
  }

  open() {
    store.dispatch({
      type: 'SHOW_DRAWER'
    });
  }
}

customElements.define('wc-drawer', WcDrawer);

