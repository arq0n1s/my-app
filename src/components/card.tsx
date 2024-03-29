import React from 'react'
import { Card } from 'antd'


const CardComponent = ({currentCard}:any) => {

  function chunkArray(number:any, chunkSize:any) {
    const array = Array.from(String(number), Number);
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  return currentCard ? (
    <Card title="Card title" bordered={false} 
    style={{margin:'30px 30px 10px 30px', width: 300, backgroundColor: 'gray', color: 'white', border: '2px solid black' }}>
    <p>Card name owner: {currentCard.ownerName}</p>
    <p>Card number: {chunkArray(currentCard.number, 4).map(item => {
      return (item.join('').toString() + ' ');
    })}</p>
    <p>Card CVV: {currentCard.cvv}</p>
    <p>Valability: {currentCard.valabilityStart}/{currentCard.valabilityEnd}</p>
    </Card>
    
  ) : null
}

export default CardComponent