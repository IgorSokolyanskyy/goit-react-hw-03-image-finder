import React, { Component } from 'react';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import fetchImages from '../Api/images-Api';
import Searchbar from '../Searchbar';
import Notiflix from 'notiflix';
import Loader from '../Loader';
import './App.css';

export class App extends Component {
  state = {
    inputData: '',
    items: [],
    status: 'idle',
    totalHits: 0,
    page: 1,
    scroll: 0,
  };

  componentDidUpdate(_, prevState) {
    const { page, inputData, scroll } = this.state;

    if (prevState.page !== page || prevState.inputData !== inputData) {
      this.setState({ status: 'pending' });

      fetchImages(inputData, page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({ status: 'idle' });
            Notiflix.Notify.failure(
              'Sorry, there are no images matching your search query. Please try again.'
            );
          } else {
            this.setState(prevState => ({
              items: [...prevState.items, ...data.hits],
              totalHits: data.totalHits,
              status: 'resolved',
              scroll: document.documentElement.scrollHeight,
            }));
          }
        })
        .catch(error => {
          this.setState({ status: 'rejected' });
        });
    }

    if (prevState.scroll !== scroll && page > 1) {
      window.scrollTo({
        top: this.state.scroll - 240,
        behavior: 'smooth',
      });
    }
  }

  handleSubmit = inputData => {
    this.setState({ inputData, page: 1, items: [] });
  };

  getLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { totalHits, status, items } = this.state;

    if (status === 'idle') {
      return (
        <div className="App">
          <Searchbar onSubmit={this.handleSubmit} />
        </div>
      );
    }

    if (status === 'pending') {
      return (
        <div className="App">
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery items={items} />
          <Loader />
          {totalHits > 12 && <Button onClick={this.getLoadMore} />}
        </div>
      );
    }

    if (status === 'rejected') {
      return (
        <div className="App">
          <Searchbar onSubmit={this.handleSubmit} />
          <p>Something wrong, try later</p>
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <div className="App">
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery items={items} />
          {totalHits > 12 && totalHits > items.length && (
            <Button onClick={this.getLoadMore} />
          )}
        </div>
      );
    }
  }
}
