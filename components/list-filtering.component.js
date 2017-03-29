class ListFiltering extends WC {
  get initialState() {
    return {
      query: '',
    }

  }

  get template() {
    return `
      <h1>List filtering</h1>
      <input></input>
      <ul></ul>
    `;
  }

  get languages() {
    return ['c', 'c++', 'java', 'javascript', 'bash'];
  }

  connectedCallback() {
    this.content = this.template; // Initial render
    this.render();
    this.content.querySelector('input').addEventListener('input', this.onInput.bind(this));
  }

  onInput(event) {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    let filtered = this.languages.filter(item => item.includes(this.state.query.toLowerCase()));
    this.content.querySelector('ul').innerHTML = filtered.map(item => `<li>${item}</li>`).join('');
  }
}

customElements.define('list-filtering', ListFiltering);
