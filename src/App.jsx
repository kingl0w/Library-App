import React, { useState, useEffect } from 'react';
import Navigation from './components/Navbar';
import PopUp from './components/Modal';
import Cards from './components/Cards';
import Login from './googleSignIn/signin';

const App = () => {
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleRemoveCard = (card) => {
    setCards((prevCards) => prevCards.filter((c) => c !== card));
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <Navigation loggedIn={loggedIn} />
      <div className='title'>
        <h1>Library-App</h1>
      </div>
      <div className='add-book'>
        <PopUp
          setCards={setCards}
          cards={cards}
        />
      </div>
      <div className='card-layout'>
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <Cards
              key={index}
              card={card}
              handleRemoveCard={handleRemoveCard}
            />
          ))
        ) : (
          <p>No cards found.</p>
        )}
      </div>
    </>
  );
};

export default App;
