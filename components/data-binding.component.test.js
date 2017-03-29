const assert = chai.assert;
describe('<data-binding></data-binding>', () => {
  describe('Initial State', () => {
    it('text should be empty', () => {
      let component = document.createElement('data-binding');
      assert.equal(component.state.text, '', 'state.text is not an empty string');
    });
  });
  describe('render', () => {
    let component = document.createElement('data-binding');
    beforeEach(() => {
      document.body.appendChild(component);
    });
    it('Should be rendered the right way', () => {
      const actual = component.innerHTML;
      const expected = `
      <h1>Data binding</h1>
      <input>
      <p></p>
    `;
      assert.equal(actual, expected);
    });

    it('Should change when state changes', () => {
      component.setState({
        text: 'hello'
      });
      const actual = component.innerHTML;
      const expected = `
      <h1>Data binding</h1>
      <input>
      <p>hello</p>
    `;
      assert.equal(actual, expected);
    });

    afterEach(() => {
      document.body.removeChild(component);
    })
  });
});
