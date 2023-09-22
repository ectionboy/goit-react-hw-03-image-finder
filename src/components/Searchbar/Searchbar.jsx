import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    value: '',
  };

  inputChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.reset();
  };
  reset = () =>
  this.setState({
    value: '',
  });
  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.formSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            name="value"
            onChange={this.inputChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
