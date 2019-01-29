import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MusicBlock from './components/MusicBlock';
import MoviesBlock from './components/MoviesBlock';
import CHGKBlock from './components/CHGKBlock';
import TravelBlock from './components/TravelBlock';
import BooksBlock from './components/BooksBlock';

class App extends Component {

  render() {

    let links = [{ href: "#music", title: "Музыка" },
    { href: "#movies", title: "Фильмы" },
    { href: "#travel", title: "Путешествия" },
    { href: "#books", title: "Книги" },
    { href: "#chgk", title: "ЧГК" },
    ]

    return (
      <div>
        <Hero title="TOP2018" bold="bold" />
        <Navigation links={links} />
        <MusicBlock />
        <MoviesBlock />
        <TravelBlock />
        <CHGKBlock />
        <BooksBlock />
      </div>
    );
  }
}

export default App;
