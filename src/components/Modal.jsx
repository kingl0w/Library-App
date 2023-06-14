import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function PopUp({ cards, setCards }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [read, setRead] = useState(null);
  const [warning, setWarning] = useState('');

  const handleClose = () => {
    setShow(false);
    setTitle('');
    setAuthor('');
    setPages('');
    setRead(null);
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const newCard = {
      title: title,
      author: author,
      pages: pages,
      read: read,
    };
    setCards([...cards, newCard]);

    handleClose();
  };

  const handlePagesInputChange = (e) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    setPages(numericValue);

    if (value !== numericValue) {
      setWarning('Please enter page numbers only');
    } else {
      setWarning('');
    }
  };

  return (
    <>
      <Button
        variant='light'
        onClick={handleShow}
        style={{ fontSize: '25px' }}>
        + Add A Book!
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        className='modal'
        centered>
        <Modal.Header closeButton>
          <h2>Add A Book!</h2>
        </Modal.Header>
        <div className='modal-content'>
          <div>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Pages'
              value={pages}
              onChange={handlePagesInputChange}
            />
            {warning && <p className='warning'>{warning}</p>}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <h5 style={{ marginRight: '10px' }}>Have you read it?</h5>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type='radio'
                id='yes'
                name='read'
                checked={read === true}
                onChange={() => setRead(true)}
                style={{ width: '16px', height: '16px' }}
              />
              <label
                htmlFor='yes'
                style={{ marginLeft: '5px' }}>
                Yes
              </label>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '10px',
              }}>
              <input
                type='radio'
                id='no'
                name='read'
                checked={read === false}
                onChange={() => setRead(false)}
                style={{ width: '16px', height: '16px' }}
              />
              <label
                htmlFor='no'
                style={{ marginLeft: '5px' }}>
                No
              </label>
            </div>
          </div>
        </div>
        <Modal.Footer>
          <Button
            variant='light'
            onClick={handleSubmit}
            className='submit'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
