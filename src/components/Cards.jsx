import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = ({ card, handleRemoveCard }) => {
  const { title, author, pages, read } = card;
  const [isRead, setIsRead] = useState(read);

  const handleToggleRead = () => {
    setIsRead(!isRead);
  };

  const handleRemove = () => {
    handleRemoveCard(card);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <div className='card-content'>
        <h5>"{title}"</h5>
        <h5>{author}</h5>
        <h5>{pages} pages</h5>
        <Button
          className='read-btn'
          variant={isRead ? 'success' : 'danger'}
          onClick={handleToggleRead}>
          {isRead ? 'Read' : 'Not Read'}
        </Button>
      </div>
      <Button
        className='remove-btn'
        variant='light'
        onClick={handleRemove}>
        Remove
      </Button>
    </Card>
  );
};

export default Cards;
