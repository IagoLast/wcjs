class WcClock extends WC {
  get isShadow() {
    return true;
  }

  get initialState() {
    return {
      time: new Date(),
    }
  }

  get template() {
    return `
      <h1> Clock example </h1>
      <p>${this._formatedTime}</p>
    `;
  }

  connectedCallback() {
    this.content = this.template;
    setInterval(this.increment.bind(this), 1000);
  }

  increment() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    this.content.querySelector('p').innerHTML = `${this._formatedTime}`;
  }

  get _formatedTime() {
    return this.state.time.toTimeString().split(' ')[0];
  }

}

customElements.define('wc-clock', WcClock);
