import React from 'react';
import Cards, { Card } from 'react-swipe-card'
import './Cards.css';

export const Wrapper = (props) => {
  console.log('props', props);
  return (
      <Cards onEnd={console.log('end')} alertLeft={<div>No</div>} alertRight={<div>Yes</div>} className='master-root'>
        {props.restaurantName.map((name, i) =>
          <Card key={i}
           onSwipeLeft={()=>props.nextCard(props, i)}
           onSwipeRight={()=>props.nextCard()}
           >
           <div>
            <h2>{name}</h2>
            <h2>{props.dishName.map(data => data.dish)}</h2>
            <h2>{i}</h2>

           </div>

          </Card>
        )}
      </Cards>
  )
}
