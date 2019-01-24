import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MusicBlock from './components/MusicBlock';
import MoviesBlock from './components/MoviesBlock';
import CHGKBlock from './components/CHGKBlock';
// import MusicTopAlbums from './components/MusicTopAlbums';


class App extends Component {

  render() {

    let links = [{ href: "#music", title: "Музыка" },
    // { href: "#books", title: "Книги" },
    { href: "#movies", title: "Фильмы" },
    // { href: "#travel", title: "Путешествия" },
    { href: "#chgk", title: "ЧГК" },
    ]

    return (
      <>
        <Hero title="TOP2018" bold="bold" />
        <Navigation links={links} />
        <MusicBlock/>
        <MoviesBlock />
        <CHGKBlock />
        {/* <Hero title="Книги" size="medium" color="warning" bold="bold" anchor="books" /> */}
        {/* <Hero title="Фильмы" size="medium" color="dark" bold="bold" anchor="movies" /> */}
        {/* <Hero title="Путешествия" size="medium" color="primary" bold="bold" anchor="travel" /> */}
        {/* <Hero title="ЧГК" size="medium" color="info" bold="bold" anchor="chgk" /> */}
      </>
    );
  }
}

export default App;
