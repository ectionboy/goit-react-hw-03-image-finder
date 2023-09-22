import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import { searchPhoto } from './api/imageFinder'
export class App extends Component {
  state = {
    isloading: false,
    photos: [],
    photoName: '',
    page: '',
    btnLoadMore: false,
  }
componentDidUpdate(_, prevState) { 
  const { photoName, page } = this.state;
  if (photoName !== prevState.photoName || page !== prevState.page) {
    this.setState({ isloading: true });

    searchPhoto(photoName, page)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        if (data.totalHits === 0) {
          alert(
            'Вибачте, немає зображень, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз.'
          );
          return;
        }
        const totalPage = Math.ceil(data.totalHits / 12);

        if (totalPage > page) {
          this.setState({ btnLoadMore: true });
        } else {
          alert('Вибачте, але ви досягли кінця результатів пошуку.');
          this.setState({ btnLoadMore: false });
        }
        const arrPhotos = data.hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );

        this.setState(prevState => ({
          photos: [...prevState.photos, ...arrPhotos],
        }));
      })
      .catch(error => {
        console.log(error);
        return alert(
          'Щось пішло не так. Будь-ласка спробуйте пізніше.'
        );
      })
      .finally(() => {
        this.setState({ isloading: false });
      });
  }


} 
  onSubmit = value => {
    if (value === this.state.photoName) {
      alert('Будь ласка, введіть новий запит!');
      return;
    }
    this.setState({
      photoName: value,
      page: '1', 
      photos: [],
      btnLoadMore: false,
    });
  }

  render() {
    console.log(this.state)
    return (
      <>
      <Searchbar onSubmit={this.onSubmit} />
      <ImageGallery photos={this.state.photos} />
      </>
    )
  }
}

export default App