class DataBinding extends WC {
  get initialState() {
    return {
      text: '',
    }
  }

  get template() {
    return `
      <h1>Data binding</h1>
      <input></input>
      <p>${this.state.text}</p>
    `;
  }

  connectedCallback() {
    this.content = this.template; // Initial render
    this.content.querySelector('input').addEventListener('input', this.onInput.bind(this));
  }

  onInput(event) {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    this.content.querySelector('p').innerHTML = this.state.text;
  }
}

customElements.define('data-binding', DataBinding);
