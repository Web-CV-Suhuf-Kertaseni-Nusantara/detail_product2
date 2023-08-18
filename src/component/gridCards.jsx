import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './gridCards.scss'

function GridExample() {
  const cardData = [
    {
      title: 'Kucing 1',
      text: 'Rp.20.000',
      imgSrc: 'https://placekitten.com/160/160', // Example image URL
    },
    {
      title: 'Kucing 2',
      text: 'Rp.20.000',
      imgSrc: 'https://placekitten.com/160/160', // Example image URL
    },
    {
      title: 'Kucing 3',
      text: 'Rp.20.000',
      imgSrc: 'https://placekitten.com/160/160', // Example image URL
    },
    {
      title: 'Kucing 4',
      text: 'Rp.20.000',
      imgSrc: 'https://placekitten.com/160/160', // Example image URL
    },
  ];

  return (
    <div className='grid'>
    <Row xs={1} md={4} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={card.imgSrc} />

          </Card>
          <h4 className='produk'>{card.title}</h4>
          <span className='desc'>{card.text}</span>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default GridExample;
