import React from 'react';
import Cards, { Card } from 'react-swipe-card'
import './Cards.css';


const data = ['Jake', 'Eric', 'Alina', "Jeffy"]
export const Wrapper = () => {
  return (
      <Cards onEnd={console.log('end')} alertLeft={<div>No</div>} alertRight={<div>Yes</div>} className='master-root'>
        {data.map((item, i) =>
          <Card key={i}
            onSwipeLeft={()=>{console.log()}}
            onSwipeRight={()=>{console.log('swipe right', item)}}
            >
            <h2>{item}</h2>
          </Card>
        )}
      </Cards>
  )
}
