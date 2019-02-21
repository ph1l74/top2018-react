import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import NavigationLeft from './components/NavigationLeft';
import MusicBlock from './components/MusicBlock';
import MoviesBlock from './components/MoviesBlock';
import CHGKBlock from './components/CHGKBlock';
import TravelBlock from './components/TravelBlock';
import BooksBlock from './components/BooksBlock';

class App extends Component {

  render() {

    let links = [
    { href: "#music", title: "Музыка" , icon: <i className="fas fa-music"></i>},
    { href: "#movies", title: "Фильмы", icon: <i className="fas fa-film"></i>},
    { href: "#travel", title: "Путешествия", icon: <i className="fas fa-map-marked-alt"></i>},
    { href: "#chgk", title: "ЧГК", icon: <i className="fas fa-pen"></i>},
    { href: "#books", title: "Книги", icon: <i className="fas fa-book"></i>},
    ]

    return (
      <div>
        <Hero id="header" title="TOP2018" />
        <Navigation links={links} />
        <NavigationLeft links={links} />
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
