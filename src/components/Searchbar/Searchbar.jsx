import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { ImSearch } from 'react-icons/im';
import './Searchbar.css';

class Searchbar extends Component {
  static propType = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputData: '',
  };

  onChangeInput = e => {
    this.setState({ inputData: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { inputData } = this.state;

    if (inputData.trim() === '') {
      Notiflix.Notify.info('You cannot search by empty field, try again.');
    } else {
      this.props.onSubmit(inputData.trim());
      this.setState({ inputData: '' });
    }
  };

  render() {
    const { inputData } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <ImSearch size={25} />
          </button>

          <input
            className="SearchForm-input"
            name="inputData"
            value={inputData}
            onChange={this.onChangeInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
